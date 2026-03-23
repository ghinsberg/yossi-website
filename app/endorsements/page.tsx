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
    images: [
      "https://yossighinsberg.com/images/headshots/yossi-headshot-1.jpg",
    ],
  },
};

/* ── helpers ── */
function TestimonialCard({
  quote,
  author,
  title,
  company,
  variant = "standard",
}: {
  quote: string;
  author: string;
  title: string;
  company: string;
  variant?: "standard" | "large" | "featured";
}) {
  const isLarge = variant === "large";
  const isFeatured = variant === "featured";

  return (
    <div
      className={`relative rounded-xl border border-white/10 ${
        isFeatured
          ? "bg-brand-surface p-10 md:p-14 md:col-span-full"
          : isLarge
            ? "bg-white/[0.03] p-8 md:p-10"
            : "bg-white/[0.03] p-6"
      }`}
    >
      <span
        className={`text-brand-gold leading-none font-serif absolute opacity-50 ${
          isFeatured
            ? "text-7xl top-4 left-6 md:top-6 md:left-10"
            : isLarge
              ? "text-5xl top-4 left-6"
              : "text-4xl top-3 left-5 opacity-40"
        }`}
      >
        &ldquo;
      </span>
      <blockquote
        className={`italic leading-relaxed ${
          isFeatured
            ? "text-brand-text text-xl md:text-2xl mt-8"
            : isLarge
              ? "text-brand-text-secondary text-lg md:text-xl mt-6"
              : "text-brand-text-secondary text-base mt-4"
        }`}
      >
        {quote}
      </blockquote>
      <div
        className={`border-t border-white/10 ${
          isFeatured ? "mt-8 pt-6" : isLarge ? "mt-6 pt-4" : "mt-4 pt-3"
        }`}
      >
        <p
          className={`text-brand-text font-semibold ${
            isFeatured ? "text-base" : isLarge ? "text-sm" : "text-sm"
          }`}
        >
          {author}
        </p>
        <p
          className={`text-brand-text-secondary ${
            isFeatured ? "text-sm mt-1" : "text-xs"
          }`}
        >
          {title}, {company}
        </p>
      </div>
    </div>
  );
}

function CategoryHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-2xl font-heading font-bold text-brand-text">
        {children}
      </h2>
      <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4" />
    </div>
  );
}

/* ── data slices ── */
const featured = testimonials.find((t) => t.author === "Derek Sweeney");
const ceos = testimonials.filter((t) => t.category === "ceo");
const corporateFeatured = testimonials.filter(
  (t) =>
    t.category === "corporate" &&
    (t.author === "Rachel McVinish" ||
      t.author === "Regina Bedoya, CLU, ChFC")
);
const corporateStandard = testimonials.filter(
  (t) =>
    t.category === "corporate" &&
    t.author !== "Rachel McVinish" &&
    t.author !== "Regina Bedoya, CLU, ChFC"
);
const bureaus = testimonials.filter(
  (t) => t.category === "bureau" && t.author !== "Derek Sweeney"
);
const events = testimonials.filter((t) => t.category === "event");
const industryAndOther = testimonials.filter(
  (t) => t.category === "industry" || t.category === "other"
);
const prominentIndustry = industryAndOther.filter(
  (t) => t.author === "Gilbert Enoka" || t.author === "Lisa Jensen"
);
const restIndustry = industryAndOther.filter(
  (t) => t.author !== "Gilbert Enoka" && t.author !== "Lisa Jensen"
);

export default function EndorsementsPage() {
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

      {/* Featured Testimonial — Derek Sweeney */}
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
            <p className="text-brand-gold text-4xl md:text-5xl font-heading font-bold">
              #2
            </p>
            <p className="text-brand-text text-lg md:text-xl font-heading font-semibold mt-2">
              of 10 Highest Rated Inspirational Speakers for Business
            </p>
            <p className="text-brand-text-secondary text-sm mt-3">
              The Sweeney Agency (2017) — based on client feedback and reviews
            </p>
          </div>
        </div>
      </section>

      {/* CEOs & C-Suite */}
      <section className="bg-white/[0.02] py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <CategoryHeading>CEOs &amp; C-Suite</CategoryHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ceos.map((t) => (
              <TestimonialCard
                key={t.author}
                quote={t.quote}
                author={t.author}
                title={t.title}
                company={t.company}
                variant="large"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Leaders */}
      <section className="bg-brand-bg py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <CategoryHeading>Corporate Leaders</CategoryHeading>

          {/* Featured corporate — Rachel McVinish & Regina Bedoya */}
          <div className="grid grid-cols-1 gap-8 mb-8">
            {corporateFeatured.map((t) => (
              <TestimonialCard
                key={t.author}
                quote={t.quote}
                author={t.author}
                title={t.title}
                company={t.company}
                variant="featured"
              />
            ))}
          </div>

          {/* Standard corporate */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateStandard.map((t) => (
              <TestimonialCard
                key={t.author}
                quote={t.quote}
                author={t.author}
                title={t.title}
                company={t.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Bureaus */}
      <section className="bg-white/[0.02] py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <CategoryHeading>Speaker Bureaus</CategoryHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bureaus.map((t) => (
              <TestimonialCard
                key={t.author}
                quote={t.quote}
                author={t.author}
                title={t.title}
                company={t.company}
                variant="large"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Event Organizers */}
      <section className="bg-brand-bg py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <CategoryHeading>Event Organizers</CategoryHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((t) => (
              <TestimonialCard
                key={t.author}
                quote={t.quote}
                author={t.author}
                title={t.title}
                company={t.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Leaders & Notable */}
      <section className="bg-white/[0.02] py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <CategoryHeading>Industry Leaders &amp; Notable</CategoryHeading>

          {/* Prominent — Gilbert Enoka & Lisa Jensen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {prominentIndustry.map((t) => (
              <TestimonialCard
                key={t.author}
                quote={t.quote}
                author={t.author}
                title={t.title}
                company={t.company}
                variant="large"
              />
            ))}
          </div>

          {/* Rest */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restIndustry.map((t) => (
              <TestimonialCard
                key={t.author}
                quote={t.quote}
                author={t.author}
                title={t.title}
                company={t.company}
              />
            ))}
          </div>
        </div>
      </section>

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
