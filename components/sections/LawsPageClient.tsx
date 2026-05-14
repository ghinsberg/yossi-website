"use client";

import { useState, useRef } from "react";
import { laws } from "@/data/laws";

function PlayIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

function LawCard({ law, index }: { law: (typeof laws)[0]; index: number }) {
  const [playing, setPlaying] = useState(false);
  const [activePassage] = useState(
    () => Math.floor(Math.random() * law.passages.length)
  );
  const audioRef = useRef<HTMLAudioElement>(null);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  }

  const isEven = index % 2 === 0;

  return (
    <article
      className={`relative border-b border-white/8 py-16 md:py-20 ${
        isEven ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
      }`}
    >
      {/* Law number — large ghost text */}
      <span
        className={`absolute top-8 font-heading font-black text-[10rem] leading-none select-none pointer-events-none text-white/[0.03] ${
          isEven ? "left-0" : "right-0"
        }`}
        aria-hidden
      >
        {String(law.number).padStart(2, "0")}
      </span>

      <div className="relative z-10">
        {/* Label */}
        <p
          className={`text-brand-gold text-[10px] uppercase tracking-[0.35em] font-semibold mb-3 ${
            isEven ? "" : "md:justify-end flex"
          }`}
        >
          Law {law.number}
        </p>

        {/* Title */}
        <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4 leading-snug">
          {law.title}
        </h2>

        {/* Passage */}
        <blockquote
          className={`text-white/55 text-base md:text-lg leading-relaxed max-w-lg mb-8 italic ${
            isEven ? "" : "md:ml-auto"
          }`}
        >
          &ldquo;{law.passages[activePassage].text}&rdquo;
        </blockquote>

        {/* Video embed (when available) */}
        {law.videoId && (
          <div className="mb-8 w-full max-w-lg rounded-xl overflow-hidden aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${law.videoId}?rel=0&modestbranding=1`}
              title={law.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}

        {/* Audio player */}
        <div
          className={`flex items-center gap-4 ${
            isEven ? "" : "md:justify-end"
          }`}
        >
          <button
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-brand-gold/50 text-brand-gold hover:bg-brand-gold/10 transition-colors flex-shrink-0"
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>

          <div>
            <p className="text-white/80 text-xs uppercase tracking-widest font-semibold">
              {law.musicTitle}
            </p>
            <p className="text-white/30 text-[10px] uppercase tracking-wider">
              Original score
            </p>
          </div>

          <audio
            ref={audioRef}
            src={law.audioSrc}
            onEnded={() => setPlaying(false)}
            preload="none"
          />
        </div>
      </div>
    </article>
  );
}

export default function LawsPageClient() {
  return (
    <main className="bg-brand-bg min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, #CFA53B 0%, transparent 60%), radial-gradient(circle at 70% 20%, #8B6914 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-6">
            Yossi Ghinsberg
          </p>
          <h1 className="font-heading font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-none mb-8">
            The Laws of the Jungle
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Not metaphors. Not philosophy borrowed from books. Nine principles
            written in the code of life itself, extracted from years living
            inside the Amazon, and set to music that carries what words alone
            cannot.
          </p>
          <p className="text-white/30 text-xs uppercase tracking-[0.3em] mt-8">
            Each law includes an original score. Press play.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      </div>

      {/* Laws list */}
      <section className="max-w-5xl mx-auto px-6">
        {laws.map((law, index) => (
          <LawCard key={law.number} law={law} index={index} />
        ))}
      </section>

      {/* Footer CTA */}
      <section className="py-20 md:py-28 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">
            Hear them live
          </p>
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-6 leading-snug">
            The laws land differently<br />when Yossi speaks them.
          </h2>
          <p className="text-white/45 text-sm mb-10 leading-relaxed">
            Every keynote draws from these nine principles. The room goes quiet.
            Then it goes very loud.
          </p>
          <a
            href="/book-yossi"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-bg text-sm font-semibold uppercase tracking-widest px-8 py-4 hover:bg-brand-gold/90 transition-colors"
          >
            Book Yossi
          </a>
        </div>
      </section>
    </main>
  );
}
