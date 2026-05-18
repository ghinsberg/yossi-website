"use client";

import { useState, useEffect } from "react";

const LINES = [
  { text: "Against all odds.", gold: false },
  { text: "Lost. Alone in the Amazon.", gold: false },
  { text: "He found himself.", gold: false },
  { text: "What you can be —", gold: false },
  { text: "you must be.", gold: true },
];

const HOLD = [720, 800, 960, 720, 1440];
const FADE = 320;
const GAP  = 120;

type Phase = "text" | "done";

export default function KineticIntro() {
  const [phase, setPhase]           = useState<Phase>("text");
  const [currentLine, setCurrentLine] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [fading, setFading]         = useState(false);

  const dismiss = () => {
    setFading(true);
    setTimeout(() => setPhase("done"), 700);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("kineticSeen")) { setPhase("done"); return; }
      sessionStorage.setItem("kineticSeen", "true");
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    let t = 0;

    LINES.forEach((_, i) => {
      timers.push(setTimeout(() => { setCurrentLine(i); setTextVisible(true); }, t));
      const hideAt = t + FADE + HOLD[i];
      timers.push(setTimeout(() => setTextVisible(false), hideAt));
      t = hideAt + FADE + GAP;
    });

    timers.push(setTimeout(() => dismiss(), t + 200));
    return () => timers.forEach(clearTimeout);
  }, []);

  if (phase === "done") return null;

  const line = LINES[currentLine];

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-700 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <p
        className={`text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-center px-8 max-w-4xl leading-tight transition-opacity duration-[320ms] select-none ${
          textVisible ? "opacity-100" : "opacity-0"
        } ${line.gold ? "text-[#C9A84C]" : "text-white"}`}
      >
        {line.text}
      </p>

      <button
        onClick={dismiss}
        className="absolute bottom-8 right-8 text-white/25 text-xs uppercase tracking-[0.2em] hover:text-white/60 transition-colors z-10"
      >
        skip
      </button>
    </div>
  );
}
