"use client";

export default function FilmSection() {
  return (
    <section className="bg-brand-surface py-20 md:py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Video — poster is the on-set photo, plays inline */}
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/yossi/daniel-and-yossi.jpg"
              className="w-full h-full object-cover"
            >
              <source src="/videos/the-ants.mp4" type="video/mp4" />
            </video>
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
