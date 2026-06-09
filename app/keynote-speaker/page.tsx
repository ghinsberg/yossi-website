import Link from "next/link";
import { speakerLocations } from "@/data/locations";
import Button from "@/components/ui/Button";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";

export const metadata = {
  title: "Keynote Speaker — International | Yossi Ghinsberg",
  description:
    "Yossi Ghinsberg is available to speak internationally. Survived 20 days alone in the Amazon. Voted Most Unforgettable Speaker. Trusted by Google, Apple, Microsoft, and BMW.",
  openGraph: {
    title: "Keynote Speaker — International | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is available to speak internationally. Survived 20 days alone in the Amazon. Voted Most Unforgettable Speaker. Trusted by Google, Apple, Microsoft, and BMW.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keynote Speaker — International | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is available to speak internationally. Survived 20 days alone in the Amazon. Voted Most Unforgettable Speaker. Trusted by Google, Apple, Microsoft, and BMW.",
  },
  alternates: {
    canonical: `${BASE_URL}/keynote-speaker`,
  },
};

// Group locations by region
const regions = speakerLocations.reduce<
  Record<string, typeof speakerLocations>
>((acc, loc) => {
  if (!acc[loc.region]) acc[loc.region] = [];
  acc[loc.region].push(loc);
  return acc;
}, {});

const regionOrder = [
  "North America",
  "Europe",
  "Asia Pacific",
  "Middle East",
  "Africa",
];

export default function KeynoteSpeakerHubPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Keynote Speaker, International
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            Yossi Ghinsberg speaks to audiences across every continent. If your
            conference is on the list below, a speaker bureau contact is already
            in place for your region.
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-brand-surface border-y border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Survived 20 days alone in the Amazon",
              "Book sold 1M+ copies worldwide",
              "Voted Most Unforgettable Speaker",
              "Trusted by Google, Apple, Microsoft, BMW",
            ].map((cred) => (
              <div key={cred} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0 mt-2" />
                <p className="text-brand-text-secondary text-sm leading-snug">
                  {cred}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Grid by Region */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {regionOrder
            .filter((region) => regions[region])
            .map((region) => (
              <div key={region}>
                <h2 className="text-sm uppercase tracking-[0.25em] text-brand-gold mb-6">
                  {region}
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {regions[region].map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/keynote-speaker/${loc.slug}`}
                      className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-brand-gold/50 transition-colors block"
                    >
                      <p className="text-brand-text font-heading font-semibold text-lg group-hover:text-brand-gold transition-colors">
                        {loc.city}
                      </p>
                      <p className="text-brand-text-secondary text-sm mt-1">
                        {loc.country}
                      </p>
                      <p className="text-brand-gold text-xs uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        View page
                        <span aria-hidden="true"> →</span>
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Explore by topic */}
      <section className="bg-brand-surface border-t border-white/10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-sm uppercase tracking-[0.25em] text-brand-gold mb-6">
            Explore by topic
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Resilience Keynote Speaker", href: "/resilience-keynote-speaker" },
              { label: "Leadership Keynote Speaker", href: "/leadership-keynote-speaker" },
              { label: "Survival Keynote Speaker", href: "/survival-keynote-speaker" },
              { label: "Stress Management Speaker", href: "/stress-management-speaker" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-brand-gold/50 transition-colors block"
              >
                <p className="text-brand-text font-heading font-semibold text-lg group-hover:text-brand-gold transition-colors">
                  {label}
                </p>
                <p className="text-brand-gold text-xs uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  View page
                  <span aria-hidden="true"> →</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not on the list */}
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Your city isn't on the list?
          </h2>
          <p className="text-brand-text-secondary text-lg max-w-2xl mx-auto mb-8">
            Yossi speaks everywhere. If your event isn't in a listed city, use
            the booking form and we'll connect you with the right contact for
            your region.
          </p>
          <Button variant="gold" href="/book-yossi" size="lg">
            Enquire About Your Event
          </Button>
        </div>
      </section>
    </main>
  );
}
