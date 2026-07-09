"use client";

import { useState, useRef, useEffect } from "react";
import { laws } from "@/data/laws";
import { siteConfig } from "@/data/siteConfig";

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

function ShareButton({ law, isEven }: { law: (typeof laws)[0]; isEven: boolean }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const url = `${siteConfig.siteUrl}/laws#law-${law.number}`;
  const shareText = `Law ${law.number}: ${law.title} — Yossi Ghinsberg's Laws of the Jungle`;

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  async function handleShare() {
    // Native share sheet only on phones/tablets — that's where WhatsApp,
    // Instagram, Telegram live. On desktop the OS sheet is useless
    // (AirDrop, Notes...), so we always show our own platform popover.
    const isMobile =
      typeof navigator !== "undefined" &&
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile && navigator.share) {
      try {
        await navigator.share({ title: `Law ${law.number}: ${law.title}`, text: shareText, url });
      } catch { /* cancelled */ }
    } else {
      setOpen(!open);
    }
  }

  function copyLink() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => { setCopied(false); setOpen(false); }, 1500);
  }

  const enc = encodeURIComponent;
  const platforms = [
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${enc(`${shareText} ${url}`)}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
    {
      label: "Telegram",
      href: `https://t.me/share/url?url=${enc(url)}&text=${enc(shareText)}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
        </svg>
      ),
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${enc(shareText)}&url=${enc(url)}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={handleShare}
        className="flex items-center gap-1.5 text-white/25 hover:text-white/60 transition-colors"
        aria-label="Share this law"
        title="Share"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
        </svg>
        <span className="text-[10px] uppercase tracking-widest">Share</span>
      </button>

      {open && (
        <div
          className={`absolute bottom-full mb-2 flex items-start gap-1 bg-[#1a1a14] border border-white/10 rounded-xl px-3 py-3 shadow-xl z-20 ${
            isEven ? "left-0" : "right-0"
          }`}
        >
          {platforms.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex flex-col items-center gap-1.5 w-16 py-1.5 rounded-lg text-white/45 hover:text-white hover:bg-white/5 transition-colors"
              aria-label={`Share on ${p.label}`}
            >
              {p.icon}
              <span className="text-[9px] uppercase tracking-wider whitespace-nowrap">{p.label}</span>
            </a>
          ))}
          <button
            onClick={copyLink}
            className="flex flex-col items-center gap-1.5 w-16 py-1.5 rounded-lg text-white/45 hover:text-white hover:bg-white/5 transition-colors"
            aria-label={copied ? "Copied!" : "Copy link"}
          >
            {copied ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-brand-gold">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
              </svg>
            )}
            <span className={`text-[9px] uppercase tracking-wider whitespace-nowrap ${copied ? "text-brand-gold" : ""}`}>
              {copied ? "Copied!" : "Copy link"}
            </span>
          </button>
        </div>
      )}
    </div>
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
      id={`law-${law.number}`}
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

          <ShareButton law={law} isEven={isEven} />
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
