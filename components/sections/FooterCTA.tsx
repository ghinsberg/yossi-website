export default function FooterCTA() {
  return (
    <section className="bg-brand-gold py-16 md:py-20">
      <div className="text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-black">
          Ready to bring transformation to your stage?
        </h2>
        <div className="mt-8">
          <a
            href="/book-yossi"
            className="inline-flex items-center justify-center bg-black text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-brand-bg transition-all"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
