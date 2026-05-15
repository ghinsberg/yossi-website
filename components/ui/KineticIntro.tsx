"use client";

import { useState, useEffect } from "react";

const LINES = [
  { text: "What can you be?", gold: false },
  { text: "In this one life.", gold: false },
  { text: "You already know.", gold: false },
  { text: "What you can be —", gold: false },
  { text: "you must be.", gold: true },
];

// How long each line is held visible (ms), after its fade-in
const HOLD = [900, 800, 1000, 900, 1800];
const FADE = 400; // ms — must match transition class duration below
const GAP  = 150; // pause between lines

export default function KineticIntro() {
  const [currentLine, setCurrentLine] = useState(0);
  const [textVisible, setTextVisible]   = useState(false);
  const [overlayFading, setOverlayFading] = useState(false);
  const [done, setDone] = useState(false);

  const dismiss = () => {
    setTextVisible(false);
    setOverlayFading(true);
    setTimeout(() => setDone(true), 700);
  };

  useEffect(() => {
    // Show once per browser session
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("kineticSeen")) {
        setDone(true);
        return;
      }
      sessionStorage.setItem("kineticSeen", "true");
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    let t = 0;

    LINES.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setCurrentLine(i);
          setTextVisible(true);
        }, t)
      );

      const hideAt = t + FADE + HOLD[i];
      timers.push(setTimeout(() => setTextVisible(false), hideAt));

      t = hideAt + FADE + GAP;
    });

    // Fade overlay out after last line clears
    timers.push(setTimeout(() => setOverlayFading(true), t));
    timers.push(setTimeout(() => setDone(true), t + 750));

    return () => timers.forEach(clearTimeout);
  }, []);

  if (done) return null;

  const line = LINES[currentLine];

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-700 ${
        overlayFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <p
        className={`text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-center px-8 max-w-4xl leading-tight transition-opacity duration-[400ms] select-none ${
          textVisible ? "opacity-100" : "opacity-0"
        } ${line.gold ? "text-[#C9A84C]" : "text-white"}`}
      >
        {line.text}
      </p>

      <button
        onClick={dismiss}
        className="absolute bottom-8 right-8 text-white/25 text-xs uppercase tracking-[0.2em] hover:text-white/60 transition-colors"
      >
        skip
      </button>
    </div>
  );
}
