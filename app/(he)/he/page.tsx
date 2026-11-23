import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Placeholder from "@/components/he/Placeholder";
import { heHome } from "@/data/he/home";
import { heSite } from "@/data/he/site";
import { hebrewAlternates } from "@/lib/he/canonical";
import { homeAlternates } from "@/lib/seo";
import { readSiteEnv } from "@/lib/site";

// Agent-tagged URLs (?a=gilat) declare the untagged address as canonical.
const languages = homeAlternates(readSiteEnv());
export const metadata: Metadata = {
  // Page-level alternates replace the layout's, so the canonical is restated with the languages.
  alternates: languages ? { ...hebrewAlternates("/"), languages } : hebrewAlternates("/"),
};

export default function HeHome() {
  const h = heHome;
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-surface/40 to-brand-bg">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 md:pt-16 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight text-brand-text">
              {h.hero.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-brand-text-secondary max-w-xl">{h.hero.sub}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" href={heSite.bookingHref}>
                {h.hero.primaryCta}
              </Button>
              <Button variant="outline" size="lg" href={h.hero.secondaryHref}>
                {h.hero.secondaryCta}
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
            <Image
              src="/images/stage/on-stage.jpg"
              alt={h.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[75%_50%] opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <Placeholder className="bg-brand-bg/80">{h.hero.footagePlaceholder}</Placeholder>
            </div>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-y border-brand-gold/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-brand-text mb-6">{h.proof.title}</h2>
          <Placeholder>{h.proof.placeholder}</Placeholder>
        </div>
      </section>

      {/* What came after */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text">{h.after.title}</h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-brand-text-secondary">{h.after.body}</p>
          <div className="mt-8">
            <Button variant="outline" href={h.after.href}>
              {h.after.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Keynotes teaser */}
      <section className="bg-brand-surface/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text">{h.keynotes.title}</h2>
            <p className="mt-6 text-lg text-brand-text-secondary">{h.keynotes.body}</p>
            <Placeholder className="mt-6">{h.keynotes.placeholder}</Placeholder>
            <div className="mt-8">
              <Button variant="outline" href={h.keynotes.href}>
                {h.keynotes.cta}
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src="/images/stage/hero-1.jpg"
              alt={h.keynotes.imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Booking call */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text">{h.booking.title}</h2>
          <p className="mt-4 text-lg text-brand-text-secondary">{h.booking.body}</p>
          <div className="mt-8">
            <Button variant="gold" size="lg" href={heSite.bookingHref}>
              {h.booking.cta}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
