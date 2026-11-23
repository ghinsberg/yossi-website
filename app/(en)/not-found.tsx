import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-bg flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-brand-text mb-6">
          Lost in the jungle?
        </h1>

        <p className="text-lg text-brand-text-secondary mb-8">
          This page doesn&apos;t exist &mdash; but Yossi can help you find your
          way.
        </p>

        {/* Gold decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="h-px w-16 bg-brand-gold/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
          <span className="h-px w-16 bg-brand-gold/40" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="outline" href="/" size="lg">
            Back to Homepage
          </Button>
          <Button variant="gold" href="/book-yossi" size="lg">
            Book a Call
          </Button>
        </div>
      </div>
    </main>
  );
}
