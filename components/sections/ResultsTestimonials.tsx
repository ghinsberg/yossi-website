import { resultTestimonials } from "@/data/testimonials";

export default function ResultsTestimonials() {
  return (
    <section className="bg-brand-light-bg py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-brand-gold/70 mb-4">Proof</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-bg leading-tight">
            Results, not just applause.
          </h2>
          <p className="mt-4 text-brand-bg/60 text-lg max-w-xl mx-auto">
            What leaders say after the room clears and Monday arrives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resultTestimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-8 flex flex-col shadow-sm ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Result label */}
              <div className="mb-4">
                <span className="inline-block bg-brand-bg text-brand-gold text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {t.resultLabel}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-brand-bg/80 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-brand-bg/10 pt-4">
                <p className="font-semibold text-brand-bg text-sm">{t.author}</p>
                <p className="text-brand-bg/50 text-xs mt-0.5">{t.title}</p>
                <p className="text-brand-bg/70 text-xs font-medium">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
