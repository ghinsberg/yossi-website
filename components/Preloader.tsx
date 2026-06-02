"use client";

import { useEffect, useState, useRef } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);
  const windowLoaded = useRef(false);
  const barDone = useRef(false);

  const maybeExit = () => {
    if (windowLoaded.current && barDone.current) {
      setTimeout(() => {
        setExiting(true);
        setTimeout(() => setDone(true), 800);
      }, 200);
    }
  };

  useEffect(() => {
    // Animate progress counter from 0 → 100 over ~1.8s
    let current = 0;
    const target = 100;
    const duration = 1800;
    const stepTime = 16; // ~60fps
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      current = Math.min(current + increment + Math.random() * 0.5, target);
      setProgress(Math.floor(current));
      if (current >= target) {
        clearInterval(timer);
        barDone.current = true;
        maybeExit();
      }
    }, stepTime);

    // Window load listener
    const onLoad = () => {
      windowLoaded.current = true;
      maybeExit();
    };

    if (document.readyState === "complete") {
      windowLoaded.current = true;
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    // Hard fallback — never block user more than 5s
    const fallback = setTimeout(() => {
      setProgress(100);
      setExiting(true);
      setTimeout(() => setDone(true), 800);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(fallback);
      window.removeEventListener("load", onLoad);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
        opacity: exiting ? 0 : 1,
        transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: exiting ? "none" : "all",
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
