"use client";

import { useState, useEffect, useRef } from "react";

const LINES = [
  { text: "Against all odds.", gold: false },
  { text: "Lost. Alone in the Amazon.", gold: false },
  { text: "He found himself.", gold: false },
  { text: "What you can be —", gold: false },
  { text: "you must be.", gold: true },
];

const HOLD = [900, 1000, 1200, 900, 1800];
const FADE = 400;
const GAP  = 150;

const VIDEO_SRCS = ["/videos/bkk_walkon.mp4"];

type Phase = "text" | "video" | "done";

export default function KineticIntro() {
  const [phase, setPhase]           = useState<Phase>("text");
  const [currentLine, setCurrentLine] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [fading, setFading]         = useState(false);
  const [clipIndex, setClipIndex]   = useState(0);
  const [muted, setMuted]           = useState(true);
  const [showSound, setShowSound]   = useState(false); // slides in after 2 s
  const videoRef                    = useRef<HTMLVideoElement>(null);

  const dismiss = () => {
    setFading(true);
    setTimeout(() => setPhase("done"), 700);
  };

  // ── Text phase ───────────────────────────────────────────────────────────────
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

    timers.push(setTimeout(() => setPhase("video"), t + 200));
    return () => timers.forEach(clearTimeout);
  }, []);

  // ── Video phase ───────────────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "video" || !videoRef.current) return;
    const vid = videoRef.current;
    vid.src = VIDEO_SRCS[clipIndex];
    vid.load();
    vid.play().catch(() => dismiss());

    // Slide the sound CTA in after 2 s
    const t = setTimeout(() => setShowSound(true), 2000);
    return () => clearTimeout(t);
  }, [phase, clipIndex]);

  function handleVideoEnded() {
    if (clipIndex < VIDEO_SRCS.length - 1) {
      setClipIndex((i) => i + 1);
    } else {
      dismiss();
    }
  }

  function enableSound() {
    setMuted(false);
    if (videoRef.current) videoRef.current.muted = false;
    setShowSound(false);
  }

  if (phase === "done") return null;

  const line = LINES[currentLine];

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-700 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* ── Text ── */}
      {phase === "text" && (
        <p
          className={`text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-center px-8 max-w-4xl leading-tight transition-opacity duration-[400ms] select-none ${
            textVisible ? "opacity-100" : "opacity-0"
          } ${line.gold ? "text-[#C9A84C]" : "text-white"}`}
        >
          {line.text}
        </p>
      )}

      {/* ── Video ── */}
      {phase === "video" && (
        <video
          ref={videoRef}
          muted={muted}
          playsInline
          onEnded={handleVideoEnded}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* ── Sound CTA — slides in from right, settles center-bottom ── */}
      {phase === "video" && muted && (
        <div className="absolute bottom-12 left-0 right-0 flex justify-center z-10 pointer-events-none">
          <div
            className="pointer-events-auto relative"
            style={{
              transform: showSound ? "translateX(0)" : "translateX(110vw)",
              transition: "transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
            <button
              onClick={enableSound}
              className="relative flex items-center gap-3 bg-black/50 backdrop-blur-sm border border-white/60 text-white pl-5 pr-7 py-4 rounded-full hover:bg-black/70 hover:border-white transition-all"
            >
              <span className="text-2xl leading-none">🔊</span>
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                Hear the crowd
              </span>
            </button>
          </div>
        </div>
      )}

      {/* ── Skip ── */}
      <button
        onClick={dismiss}
        className="absolute bottom-8 right-8 text-white/25 text-xs uppercase tracking-[0.2em] hover:text-white/60 transition-colors z-10"
      >
        skip
      </button>
    </div>
  );
}
