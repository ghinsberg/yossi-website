import { testimonials } from "@/data/testimonials";
import ClientLogos from "@/components/sections/ClientLogos";
import Button from "@/components/ui/Button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Endorsements",
  description:
    "What Google, Apple, Microsoft, and top event producers say about Yossi Ghinsberg. Rated #2 inspirational speaker by The Sweeney Agency.",
  openGraph: {
    title: "Endorsements | Yossi Ghinsberg",
    description:
      "What Google, Apple, Microsoft, and top event producers say about Yossi Ghinsberg. Rated #2 inspirational speaker by The Sweeney Agency.",
    images: [
      {
        url: "https://yossighinsberg.com/images/headshots/yossi-headshot-1.jpg",
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Endorsements | Yossi Ghinsberg",
    description:
      "What Google, Apple, Microsoft, and top event producers say about Yossi Ghinsberg. Rated #2 inspirational speaker by The Sweeney Agency.",
    images: ["https://yossighinsberg.com/images/headshots/yossi-headshot-1.jpg"],
  },
};

const eventProducerNames = [
  "Francesco Prandoni",
  "Dee Knopp",
  "Elise Cimino",
  "Nina Sutton",
];

const corporateLeaderNames = [
  "Rachel McVinish",
  "Regina Bedoya, CLU, ChFC",
  "Mark Wang",
  "Stuart Hayes",
  "Pauline Nguyen",
];

export default function EndorsementsPage() {
  const featured = testimonials.find(
    (t) => t.author === "Derek Sweeney"
  );
  const rest = testimonials.filter((t) => t.author !== "Derek Sweeney");

  const eventProducers = rest.filter((t) =>
    eventProducerNames.includes(t.author)
  );
  const corporateLeaders = rest.filter((t) =>
    corporateLeaderNames.includes(t.author)
  );
  const readersAndAudiences = rest.filter((t) => t.tier === 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-bg py-24 md:py-32 text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-text">
          What They Say
        </h1>
        <p className="text-lg md:text-xl text-brand-text-secondary mt-4 max-w-2xl mx-auto">
          Audiences don&apos;t just listen to Yossi. They feel something shift.
        </p>
        <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-8" />
      </section>

      {/* Featured Testimonial */}
      {featured && (
        <section className="bg-brand-bg py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto bg-brand-surface rounded-2xl p-10 md:p-16 text-center relative">
            <span className="text-brand-gold text-6xl md:text-8xl leading-none font-serif absolute top-4 left-6 md:top-8 md:left-10 opacity-60">
              &ldquo;
            </span>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-brand-text tracking-wide leading-tight mt-6">
              {featured.quote}
            </blockquote>
            <div className="w-12 h-0.5 bg-brand-gold mx-auto mt-8 mb-6" />
            <p className="text-brand-gold font-semibold text-lg">
              {featured.author}
            </p>
            <p className="text-brand-text-secondary text-sm mt-1">
              {featured.title}, {featured.company}
            </p>
          </div>
        </section>
      )}

      {/* #2 Rated Speaker Callout */}
      <section className="bg-brand-bg py-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl py-8 px-6">
            <p className="text-brand-gold text-4xl md:text-5xl font-heading font-bold">#2</p>
            <p className="text-brand-text text-lg md:text-xl font-heading font-semibold mt-2">
              of 10 Highest Rated Inspirational Speakers for Business
            </p>
            <p className="text-brand-text-secondary text-sm mt-3">
              The Sweeney Agency (2017) — based on client feedback and reviews
            </p>
          </div>
        </div>
      </section>

      {/* Event Producers & Bureaus */}
      <section className="bg-brand-bg py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-text mb-10 text-center">
            Event Producers &amp; Bureaus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventProducers.map((t, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-8 md:p-10 relative"
              >
                <span className="text-brand-gold text-5xl leading-none font-serif absolute top-4 left-6 opacity-50">
                  &ldquo;
                </span>
                <blockquote className="text-brand-text-secondary text-lg md:text-xl italic leading-relaxed mt-6">
                  {t.quote}
                </blockquote>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-brand-text font-semibold">{t.author}</p>
                  <p className="text-brand-text-secondary text-sm">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Leaders */}
      <section className="bg-brand-bg py-8 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-text mb-10 text-center">
            Corporate Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateLeaders.map((t, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-6 relative"
              >
                <span className="text-brand-gold text-4xl leading-none font-serif absolute top-3 left-5 opacity-40">
                  &ldquo;
                </span>
                <blockquote className="text-brand-text-secondary text-base italic leading-relaxed mt-4">
                  {t.quote}
                </blockquote>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="text-brand-text font-semibold text-sm">
                    {t.author}
                  </p>
                  <p className="text-brand-text-secondary text-xs">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Readers & Audiences */}
      {readersAndAudiences.length > 0 && (
        <section className="bg-brand-bg py-8 md:py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-text mb-10 text-center">
              Readers &amp; Audiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {readersAndAudiences.map((t, i) => (
                <div
                  key={i}
                  className="bg-white/[0.02] border border-white/5 rounded-lg p-5 relative"
                >
                  <span className="text-brand-gold text-3xl leading-none font-serif absolute top-2 left-4 opacity-30">
                    &ldquo;
                  </span>
                  <blockquote className="text-brand-text-secondary text-sm italic leading-relaxed mt-3">
                    {t.quote}
                  </blockquote>
                  <div className="mt-3 pt-2 border-t border-white/5">
                    <p className="text-brand-text font-semibold text-xs">
                      {t.author}
                    </p>
                    <p className="text-brand-text-secondary text-xs">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client Logo Wall */}
      <section className="bg-brand-bg py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-text text-center mb-10">
          Trusted By
        </h2>
        <ClientLogos />
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-gold py-16 md:py-20 px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-black max-w-3xl mx-auto">
          Ready to bring transformation to your stage?
        </h2>
        <div className="mt-8">
          <Button
            variant="outline"
            size="lg"
            href="/book-yossi"
            className="border-black text-black hover:bg-black hover:text-brand-gold"
          >
            Check Availability
          </Button>
        </div>
      </section>
    </>
  );
}
