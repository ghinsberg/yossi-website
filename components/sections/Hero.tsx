import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[1.7]"
        style={{ backgroundImage: "url('/images/stage/carousel-3.jpg')" }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-brand-bg" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 -mt-32">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-brand-text leading-tight mb-6">
          An Epic Storyteller<br />Audiences Never Forget
        </h1>
        <p className="text-lg md:text-xl text-white leading-relaxed mb-10 max-w-xl mx-auto">
          Your team walks out different. That&apos;s not a promise. That&apos;s his track record.
        </p>

      </div>

      {/* Buttons — flanking Yossi below his arms */}
      <div className="absolute bottom-[22%] left-0 right-0 flex justify-between px-12 md:px-24 lg:px-40">
        <Button variant="outline" href="#reel">
          Watch the Reel
        </Button>
        <Button variant="gold" href="/book-yossi">
          Book a Call
        </Button>
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
