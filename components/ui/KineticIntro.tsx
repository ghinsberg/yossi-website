"use client";

import { useState, useEffect } from "react";

const FRAMES = [
  "Sometimes one needs to get lost…",
  "to find oneself…",
];

const TYPE_SPEED      = 90;   // ms per character — slow, deliberate
const HOLD_AFTER_TYPE = 1600; // ms to hold once fully typed
const FADE_TEXT       = 500;  // ms to fade text out between frames
const INTER_GAP       = 400;  // ms silence between frames
const FINAL_FADE      = 2000; // ms for the final bleed into the site

export default function KineticIntro() {
  const [done, setDone]               = useState(false);
  const [frameIndex, setFrameIndex]   = useState(0);
  const [displayed, setDisplayed]     = useState("");
  const [textVisible, setTextVisible] = useState(true);
  const [overlayFading, setOverlayFading] = useState(false);

  const dismiss = () => {
    setOverlayFading(true);
    setTimeout(() => setDone(true), FINAL_FADE);
  };

  // Only show once per session
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("kineticSeen")) { setDone(true); return; }
    sessionStorage.setItem("kineticSeen", "true");
  }, []);

  // Typewriter per frame
  useEffect(() => {
    if (done) return;

    const text = FRAMES[frameIndex];
    let charIndex = 0;
    setDisplayed("");
    setTextVisible(true);

    const timers: ReturnType<typeof setTimeout>[] = [];

    const interval = setInterval(() => {
      charIndex++;
      setDisplayed(text.slice(0, charIndex));

      if (charIndex >= text.length) {
        clearInterval(interval);

        if (frameIndex < FRAMES.length - 1) {
          // Fade out this line, then trigger next frame
          const t1 = setTimeout(() => setTextVisible(false), HOLD_AFTER_TYPE);
          const t2 = setTimeout(
            () => setFrameIndex((i) => i + 1),
            HOLD_AFTER_TYPE + FADE_TEXT + INTER_GAP
          );
          timers.push(t1, t2);
        } else {
          // Last frame — bleed slowly into the site
          const t = setTimeout(() => dismiss(), HOLD_AFTER_TYPE);
          timers.push(t);
        }
      }
    }, TYPE_SPEED);

    return () => {
      clearInterval(interval);
      timers.forEach(clearTimeout);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameIndex, done]);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center ${
        overlayFading
          ? "opacity-0 pointer-events-none transition-opacity duration-[2000ms]"
          : "opacity-100"
      }`}
    >
      <p
        className={`text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-center px-8 max-w-4xl leading-tight select-none text-white transition-opacity duration-[500ms] ${
          textVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Non-breaking space holds layout while text is empty */}
        {displayed || " "}
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
