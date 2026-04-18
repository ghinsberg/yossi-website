import { resultTestimonials } from "@/data/testimonials";

export default function ResultsTestimonials() {
  return (
    <section className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-brand-gold/70 mb-4">Proof</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
            Results, not just applause.
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            What leaders say after the room clears and Monday arrives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resultTestimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col hover:bg-white/8 transition-colors"
            >
              {/* Result label */}
              <div className="mb-5">
                <span className="inline-block bg-brand-gold/10 text-brand-gold text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-brand-gold/20">
                  {t.resultLabel}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-white/75 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution + Logo */}
              <div className="border-t border-white/10 pt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-semibold text-white text-sm">{t.author}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t.title}</p>
                  <p className="text-white/60 text-xs font-medium mt-0.5">{t.company}</p>
                </div>
                {t.logo ? (
                  <img
                    src={t.logo}
                    alt={t.company}
                    className="h-7 w-auto opacity-50 grayscale invert shrink-0"
                  />
                ) : (
                  <span className="text-white/20 text-xs font-medium shrink-0">{t.company}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
