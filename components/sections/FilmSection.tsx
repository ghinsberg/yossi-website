"use client";

import { useState } from "react";

export default function FilmSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-brand-surface py-20 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Photo — becomes the player on click */}
          <div
            className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-[4/3]"
            onClick={() => setPlaying(true)}
          >
            {playing ? (
              <iframe
                src="https://www.youtube.com/embed/_kHiwHqKFls?autoplay=1"
                title="Jungle — The Ants"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <>
                <img
                  src="/images/yossi/daniel-and-yossi.jpg"
                  alt="Yossi Ghinsberg with Daniel Radcliffe on the set of Jungle, 2016"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Text */}
          <div>
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-5">
              2017 · Melbourne International Film Festival · Opening Night Gala
            </p>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-6 leading-snug">
              His survival story became a Hollywood film.
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-6">
              Directed by Greg McLean. Starring Daniel Radcliffe as Yossi Ghinsberg.
              The film opened the Melbourne International Film Festival and carries a
              foreword by Radcliffe in the movie tie-in edition of the memoir.
            </p>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              The book it was based on — <em className="not-italic text-white/70">Jungle</em> — has sold
              over one million copies in 20 languages.
            </p>
            <p className="text-white/25 text-xs uppercase tracking-widest">
              On set, 2016 — Yossi with Daniel Radcliffe
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
