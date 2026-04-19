"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const images = [
  "/images/stage/carousel_bkk_for_website.jpg",
  "/images/stage/hero-2.jpg",
  "/images/stage/hero-3.jpg",
  "/images/stage/hero-4.jpg",
];

const stats = [
  { value: "10,000+", label: "Audience Size" },
  { value: "1M+", label: "Books Sold" },
  { value: "20", label: "Languages" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev((p) => (p === null ? 0 : current));
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden pb-20">

      {/* Carousel images — crossfade */}
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${src}')`,
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent z-10" />

      {/* Content — left aligned, Bear-style */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-16 pb-8">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="font-heading font-bold leading-none mb-2">
            <span className="block text-white text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
              Aim High
            </span>
            <span className="block text-brand-gold text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight">
              Never Ever Give Up
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-base md:text-lg mt-6 mb-10 max-w-lg leading-relaxed font-light tracking-wide">
            The speaker who changes the room.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Button variant="gold" href="/book-yossi">
              Book a Call
            </Button>
            <Button variant="outline" href="#reel">
              Watch the Reel
            </Button>
          </div>

          {/* Carousel dots — below buttons */}
          <div className="flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setPrev(current); setCurrent(i); }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-brand-gold w-6" : "bg-white/40 w-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* MDRT badge — appears only on slide 2 */}
        <div className={`absolute top-8 right-8 md:right-16 flex flex-col items-end gap-1.5 transition-opacity duration-1000 ${current === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <img
            src="/images/logos/mdrt.svg"
            alt="MDRT"
            className="h-8 md:h-10 w-auto invert brightness-200"
          />
          <p className="text-white/60 text-xs uppercase tracking-widest">
            Main Stage 2025
          </p>
        </div>

        {/* Stats — bottom right */}
        <div className="absolute right-8 md:right-16 bottom-8 flex gap-8 md:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-right">
              <p className="text-white text-2xl md:text-4xl font-heading font-black leading-none">
                {s.value}
              </p>
              <p className="text-white/50 text-xs uppercase tracking-widest mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <svg
          className="w-6 h-6 text-white/40 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
}
