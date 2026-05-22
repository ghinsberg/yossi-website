"use client";
import { useEffect, useState } from "react";

const PARTS = [
  "The universe will not conspire to assist you. The universe will resist you.",
  "The size of your dream will raise the size of the resistance to it.",
  "The resistance is not personal — it’s the law!",
  "All you have to do is stay the course.",
];

const DISPLAY_MS = 4000;   // how long each card is fully visible
const FADE_MS   = 500;     // fade out / fade in duration

export default function CredentialBar() {
  const [index, setIndex]     = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      // Fade out
      setVisible(false);
      setTimeout(() => {
        setIndex(i => (i + 1) % PARTS.length);
        // Fade in
        setVisible(true);
      }, FADE_MS);
    }, DISPLAY_MS + FADE_MS);

    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-brand-gold py-3">
      <p
        className="text-black text-sm font-bold italic tracking-wide text-center"
        style={{
          opacity:    visible ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease-in-out`,
        }}
      >
        {PARTS[index]}
      </p>
    </div>
  );
}
