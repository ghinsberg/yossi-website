import Button from "@/components/ui/Button";

const comparisons = [
  {
    generic: "A polished talk about resilience theory",
    yossi: "21 days alone in the Amazon — no food, no map, no rescue",
  },
  {
    generic: "Frameworks borrowed from business books",
    yossi: "Laws forged in the jungle, tested in Silicon Valley boardrooms",
  },
  {
    generic: "Audiences applaud, then forget by Monday",
    yossi: "Audiences still talking at the cocktail hour. Changed by Tuesday.",
  },
  {
    generic: "Inspiration that fades in the cab home",
    yossi: "A shift in how people think about pressure, purpose, and possibility",
  },
  {
    generic: "A speaker who read about survival",
    yossi: "The man who lived it — and has the Hollywood film to prove it",
  },
];

export default function TheDifference() {
  return (
    <section className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-brand-gold/70 mb-4">Why Yossi</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-text leading-tight">
            Not another keynote speaker.
          </h2>
          <p className="mt-4 text-brand-text-secondary text-lg max-w-xl mx-auto">
            Your audience has sat through enough slides and frameworks. Here is what makes Yossi different.
          </p>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl overflow-hidden border border-white/10">
          {/* Header */}
          <div className="grid grid-cols-2 bg-white/5">
            <div className="px-6 py-4 text-xs uppercase tracking-widest text-brand-text-secondary/50 border-r border-white/10">
              Other speakers
            </div>
            <div className="px-6 py-4 text-xs uppercase tracking-widest text-brand-gold/80">
              Yossi Ghinsberg
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 border-t border-white/10 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
            >
              <div className="px-6 py-5 text-sm text-brand-text-secondary/60 border-r border-white/10 leading-relaxed flex items-start gap-3">
                <span className="text-red-400/50 mt-0.5 flex-shrink-0">✕</span>
                {row.generic}
              </div>
              <div className="px-6 py-5 text-sm text-brand-text leading-relaxed flex items-start gap-3">
                <span className="text-brand-gold mt-0.5 flex-shrink-0">→</span>
                {row.yossi}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="gold" href="/book-yossi">
            Book a Call
          </Button>
          <p className="mt-4 text-brand-text-secondary/40 text-sm">
            Represented globally by Carter Global Speakers and Encore Speakers
          </p>
        </div>
      </div>
    </section>
  );
}
