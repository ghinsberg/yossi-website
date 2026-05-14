export default function DemoReel() {
  return (
    <section id="reel" className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-brand-gold mb-4">
            Watch
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-text mb-4">
            See it for yourself.
          </h2>
        </div>

        {/* Placeholder image */}
        <div className="relative w-full rounded-2xl overflow-hidden">
          <img
            src="/images/stage/reel-placeholder.jpg"
            alt="Yossi Ghinsberg on stage"
            className="w-full object-cover object-top"
            style={{ maxHeight: "540px" }}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <p className="text-white/60 text-xs uppercase tracking-[0.3em] font-medium">
              Reel coming soon
            </p>
          </div>
        </div>

        {/* Social proof strip below video */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 text-center">
          {[
            { stat: "1M+", label: "Books sold" },
            { stat: "Most Unforgettable", label: "Speaker, The Sweeney Agency" },
            { stat: "Jungle", label: "Film starring Daniel Radcliffe" },
            { stat: "55+", label: "Countries" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="text-brand-gold font-bold text-xl">{stat}</p>
              <p className="text-brand-text-secondary text-xs uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
