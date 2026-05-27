import Link from "next/link";
import { keynotes } from "@/data/keynotes";
import Button from "@/components/ui/Button";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";
const OG_IMAGE = `${BASE_URL}/images/headshots/yossi-headshot-1.jpg`;

const credentials = [
  "21 days alone in the Amazon",
  "1M+ books sold",
  "Voted Most Unforgettable Speaker",
  "Google / Apple / Microsoft / BMW",
];

export const metadata = {
  title: "Resilience Keynote Speaker | Yossi Ghinsberg",
  description:
    "Yossi Ghinsberg is a resilience keynote speaker who lived it. 21 days alone in the Amazon, no food, no rescue. Trusted by Google, Apple, Microsoft, and BMW.",
  openGraph: {
    title: "Resilience Keynote Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is a resilience keynote speaker who lived it. 21 days alone in the Amazon, no food, no rescue. Trusted by Google, Apple, Microsoft, and BMW.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg — Resilience Keynote Speaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resilience Keynote Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is a resilience keynote speaker who lived it. 21 days alone in the Amazon, no food, no rescue. Trusted by Google, Apple, Microsoft, and BMW.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/resilience-keynote-speaker`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Resilience Keynote Speaker",
  description:
    "Yossi Ghinsberg delivers resilience keynotes grounded in 21 days of real survival alone in the Bolivian Amazon. Not a framework. A lived experience that reframes how audiences see their own challenges.",
  serviceType: "Keynote Speaking",
  provider: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Yossi Ghinsberg",
  },
  url: `${BASE_URL}/resilience-keynote-speaker`,
  offers: {
    "@type": "Offer",
    url: `${BASE_URL}/book-yossi`,
    description: "Inquire about booking Yossi Ghinsberg",
  },
};

export default function ResilienceKeynoteSpeakerPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">
            Keynote Speaker
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Resilience Keynote Speaker
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            Most resilience keynotes are frameworks. Yossi Ghinsberg's is lived
            experience. He spent 21 days alone in the Bolivian Amazon with no
            food, no map, and no rescue coming. That is where the content comes
            from.
          </p>
        </div>
      </section>

      {/* Credential Bar */}
      <section className="bg-brand-surface border-y border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {credentials.map((cred) => (
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

      {/* Body copy */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-6 text-brand-text-secondary text-lg leading-relaxed">
            <p>
              There is a difference between resilience as a concept and
              resilience as something you practice at two in the morning when
              you are not sure you will make it. Yossi knows the second kind.
              In 1981, he got lost in the Bolivian Amazon. No food. No contact
              with the outside world. No guarantee he would be found. He
              survived 21 days alone before a search party reached him.
            </p>
            <p>
              That experience is not the speech. It is the proof behind the
              speech. Audiences hear resilience differently when it comes from
              someone who had no other option. Not as inspiration. As evidence
              that the thing they are facing is survivable, and that they have
              more in them than they think.
            </p>
            <p>
              Yossi's resilience keynotes move people from the idea of
              resilience to the practice of it. He gives audiences a specific
              framework for distinguishing real pressure from imaginary pressure,
              and practical tools for returning to steady performance when the
              system fires anyway. People leave with something they can use
              the next day.
            </p>
          </div>
        </div>
      </section>

      {/* Keynotes */}
      <section className="bg-brand-surface py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Keynote programs
          </h2>
          <p className="text-brand-text-secondary text-lg max-w-3xl mb-12">
            Every program can be tailored to your theme and audience. These are
            the three most often requested.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {keynotes.map((keynote) => (
              <Link
                key={keynote.slug}
                href={`/keynotes/${keynote.slug}`}
                className="group bg-white/5 border border-white/10 rounded-xl p-8 hover:border-brand-gold/50 transition-colors block"
              >
                {keynote.flagship && (
                  <span className="bg-brand-gold text-black text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-4 inline-block">
                    Flagship
                  </span>
                )}
                <h3 className="text-lg font-heading font-semibold text-brand-text group-hover:text-brand-gold transition-colors mt-2">
                  {keynote.title}
                </h3>
                <p className="text-brand-text-secondary text-sm mt-2 leading-relaxed">
                  {keynote.subtitle}
                </p>
                <p className="text-brand-gold text-xs uppercase tracking-widest mt-4">
                  Learn more
                  <span aria-hidden="true"> →</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">
            Book Yossi
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Book a resilience keynote
          </h2>
          <p className="text-brand-text-secondary text-lg leading-relaxed mb-8 max-w-2xl">
            Every engagement begins with a conversation. Tell us about your
            event and we will come back to you within one business day.
          </p>
          <Button variant="gold" href="/book-yossi" size="lg">
            Book a Call
          </Button>
        </div>
      </section>
    </main>
  );
}
