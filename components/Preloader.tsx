"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false); // starts transparent — LCP fires first
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Fade IN after 300ms — allows LCP element to be measured before the overlay appears
    const fadeIn = setTimeout(() => setVisible(true), 300);

    // Animate progress 0 → 100 over ~1.6s
    let current = 0;
    const stepTime = 16;
    const increment = 100 / (1600 / stepTime);

    const timer = setInterval(() => {
      current = Math.min(current + increment + Math.random() * 0.4, 100);
      setProgress(Math.floor(current));
      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => setDone(true), 750);
        }, 150);
      }
    }, stepTime);

    return () => {
      clearTimeout(fadeIn);
      clearInterval(timer);
    };
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#0A0A0A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: exiting ? 0 : visible ? 1 : 0,
        transition: exiting ? "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)" : "opacity 0.3s ease",
        pointerEvents: (exiting || !visible) ? "none" : "all",
      }}
    >
      {/* Corner brackets — Bear Grylls-style frame */}
      <div style={{ position: "absolute", inset: "20px", pointerEvents: "none" }}>
        {(["tl", "tr", "bl", "br"] as const).map((corner) => (
          <span
            key={corner}
            style={{
              position: "absolute",
              width: 20,
              height: 20,
              borderColor: "rgba(184,134,11,0.4)",
              borderStyle: "solid",
              ...(corner === "tl" && { top: 0, left: 0, borderWidth: "1px 0 0 1px" }),
              ...(corner === "tr" && { top: 0, right: 0, borderWidth: "1px 1px 0 0" }),
              ...(corner === "bl" && { bottom: 0, left: 0, borderWidth: "0 0 1px 1px" }),
              ...(corner === "br" && { bottom: 0, right: 0, borderWidth: "0 1px 1px 0" }),
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 700,
            letterSpacing: "0.2em",
            fontSize: "clamp(1rem, 3.5vw, 1.5rem)",
            color: "#B8860B",
            margin: 0,
          }}
        >
          YOSSI{" "}
          <span style={{ color: "rgba(184,134,11,0.35)", fontWeight: 300 }}>|</span>{" "}
          GHINSBERG
        </p>
      </div>

      {/* Progress bar + counter */}
      <div style={{ width: "min(220px, 55vw)", textAlign: "center" }}>
        {/* Track */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(184,134,11,0.15)",
            position: "relative",
            overflow: "hidden",
            marginBottom: "0.75rem",
          }}
        >
          {/* Fill */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: `${progress}%`,
              backgroundColor: "#B8860B",
              transition: "width 0.05s linear",
              boxShadow: "0 0 6px rgba(184,134,11,0.6)",
            }}
          />
        </div>

        {/* Counter */}
        <p
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            color: "rgba(184,134,11,0.5)",
            margin: 0,
          }}
        >
          {progress}%
        </p>
      </div>
    </div>
  );
}
