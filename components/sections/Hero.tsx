import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/stage/on-stage.jpg')" }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-bg" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <p className="text-brand-gold text-lg md:text-xl tracking-[0.3em] uppercase font-heading font-extrabold mb-6">
          GHINSBERG
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-text leading-tight mb-6">
          Survival Wisdom for the AI Age
        </h1>
        <p className="text-lg md:text-xl text-brand-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto whitespace-pre-line">
          {`Jungle survivor. AI visionary. Bestselling author. Hollywood film.\nHe doesn't deliver keynotes — he transforms rooms.`}
        </p>

        <div className="flex flex-row items-center justify-center gap-4">
          <Button variant="outline" href="#reel">
            Watch the Reel
          </Button>
          <Button variant="gold" href="/book-yossi">
            Check Availability
          </Button>
        </div>

        {/* Proof badges */}
        <div className="mt-12 hidden md:flex items-center justify-center gap-8">
          <span className="text-brand-text-secondary text-sm font-medium">
            Hollywood Feature Film — Daniel Radcliffe
          </span>
          <span className="border-l border-white/20 pl-8 text-brand-text-secondary text-sm font-medium">
            Millions of copies sold — 20 languages
          </span>
          <span className="border-l border-white/20 pl-8 text-brand-text-secondary text-sm font-medium">
            Shared stages: Branson &middot; Clinton &middot; Taleb
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg
          className="w-6 h-6 text-brand-text-secondary animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
