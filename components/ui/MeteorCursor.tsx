"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  time: number;
}

export default function MeteorCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const raf = useRef<number>(0);
  const head = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const now = Date.now();
      head.current = { x: e.clientX, y: e.clientY };
      points.current.push({ x: e.clientX, y: e.clientY, time: now });
      // Keep only last 600ms of trail
      points.current = points.current.filter((p) => now - p.time < 600);
    };
    window.addEventListener("mousemove", onMove);

    // Hide default cursor sitewide
    document.documentElement.style.cursor = "none";

    const GOLD = "207, 165, 59";
    const TRAIL_MS = 600;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();
      const pts = points.current;

      // Draw trail segments
      for (let i = 1; i < pts.length; i++) {
        const age = now - pts[i].time;
        const t = 1 - age / TRAIL_MS; // 1 = newest, 0 = oldest
        if (t <= 0) continue;

        ctx.beginPath();
        ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
        ctx.lineTo(pts[i].x, pts[i].y);
        ctx.strokeStyle = `rgba(${GOLD}, ${t * 0.75})`;
        ctx.lineWidth = t * 3.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      // Draw meteor head
      if (head.current) {
        const { x, y } = head.current;

        // Outer glow
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 14);
        glow.addColorStop(0, `rgba(255, 245, 180, 0.9)`);
        glow.addColorStop(0.4, `rgba(${GOLD}, 0.4)`);
        glow.addColorStop(1, `rgba(${GOLD}, 0)`);
        ctx.beginPath();
        ctx.arc(x, y, 14, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 230, 1)";
        ctx.fill();
      }

      raf.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
    />
  );
}
