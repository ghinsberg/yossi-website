"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const images = [
  "/images/stage/carousel_bkk_for_website.jpg",
  "/images/stage/hero-2.jpg",
  "/images/stage/hero-3.jpg",
  "/images/stage/hero-4.jpg",
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/70 via-transparent to-transparent z-10" />

      {/* Content — pinned left, Bear-style */}
      <div className="relative z-20 w-full pb-8">
        <div className="max-w-sm md:max-w-md px-8 md:px-14">
          {/* Headline */}
          <h1 className="font-heading font-bold leading-none mb-5">
            <span className="block text-white text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
              What You Can Be
            </span>
            <span className="block text-brand-gold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
              You Must Be
            </span>
          </h1>

          {/* Bureau credential — most visible differentiator */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px bg-brand-gold/50 w-6 shrink-0" />
            <p className="text-brand-gold/80 text-xs uppercase tracking-[0.18em] font-semibold leading-snug">
              Voted Most Unforgettable Speaker — The Sweeney Agency
            </p>
          </div>

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
        <div className={`absolute top-12 right-8 md:right-16 flex flex-col items-center gap-2 transition-opacity duration-1000 ${current === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <img
            src="/images/logos/mdrt.png"
            alt="MDRT"
            className="h-20 md:h-24 w-auto"
          />
          <p className="text-black text-[10px] uppercase tracking-[0.2em] font-semibold">
            Main Stage 2025
          </p>
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
