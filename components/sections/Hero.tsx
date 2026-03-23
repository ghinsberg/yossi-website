import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/stage/carousel-3.jpg')" }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-bg" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-brand-text leading-tight mb-6">
          Survival Wisdom<br />for the AI Age
        </h1>
        <p className="text-lg md:text-xl text-brand-text-secondary/80 leading-relaxed mb-10 max-w-xl mx-auto">
          He doesn&apos;t deliver keynotes — he transforms rooms.
        </p>

        <div className="flex flex-row items-center justify-center gap-4">
          <Button variant="outline" href="#reel">
            Watch the Reel
          </Button>
          <Button variant="gold" href="/book-yossi">
            Check Availability
          </Button>
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
