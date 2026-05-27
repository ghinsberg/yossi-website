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
  title: "MDRT Keynote Speaker | Yossi Ghinsberg",
  description:
    "Yossi Ghinsberg delivered the keynote on the MDRT Main Stage in 2025. Survived 21 days alone in the Amazon. Voted Most Unforgettable Speaker. Available for MDRT events worldwide.",
  openGraph: {
    title: "MDRT Keynote Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg delivered the keynote on the MDRT Main Stage in 2025. Survived 21 days alone in the Amazon. Voted Most Unforgettable Speaker. Available for MDRT events worldwide.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg — MDRT Keynote Speaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MDRT Keynote Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg delivered the keynote on the MDRT Main Stage in 2025. Survived 21 days alone in the Amazon. Voted Most Unforgettable Speaker. Available for MDRT events worldwide.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/keynote-speaker-mdrt`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MDRT Keynote Speaker",
  description:
    "Yossi Ghinsberg delivered the keynote on the MDRT Main Stage in 2025. He is available for MDRT events globally. Grounded in 21 days of survival alone in the Bolivian Amazon and trusted by major financial institutions worldwide.",
  serviceType: "Keynote Speaking",
  provider: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Yossi Ghinsberg",
  },
  url: `${BASE_URL}/keynote-speaker-mdrt`,
  offers: {
    "@type": "Offer",
    url: `${BASE_URL}/book-yossi`,
    description: "Inquire about booking Yossi Ghinsberg for MDRT events",
  },
};

export default function KeynoteSpeakerMDRTPage() {
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
            MDRT
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            MDRT Keynote Speaker
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            Yossi Ghinsberg delivered the keynote on the MDRT Main Stage in
            2025. This page is for MDRT event planners and advisors searching
            for speakers who have stood on that stage.
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
              The MDRT Main Stage is one of the most demanding platforms in the
              financial services world. The audience is experienced, successful,
              and they have heard a lot of speakers. Yossi Ghinsberg addressed
              that audience in 2025 and left them with something that does not
              happen often on that stage: a room that went completely silent,
              then completely alive.
            </p>
            <p>
              His story is not a financial services story. That is exactly why
              it works for MDRT audiences. He survived 21 days alone in the
              Bolivian Amazon with no food and no rescue coming. He built a
              career, wrote a book that sold over a million copies, and spent
              decades turning what he learned into content that financial
              professionals recognise immediately: the weight of real decisions,
              the cost of inaction, the discipline required when nothing is
              certain. MDRT members live that every day. His Amazon experience
              gives it a context they remember.
            </p>
            <p>
              He is available for MDRT events globally, including chapter events,
              regional conferences, and international gatherings. Every
              engagement is tailored to the specific theme and audience. He has
              been voted Most Unforgettable Speaker by event professionals across
              multiple industries and continents.
            </p>
          </div>
        </div>
      </section>

      {/* Keynotes */}
      <section className="bg-brand-surface py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Keynote programs for MDRT events
          </h2>
          <p className="text-brand-text-secondary text-lg max-w-3xl mb-12">
            Each program is tailored to your event theme and audience. These
            are the three most requested.
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
            Book Yossi for your MDRT event
          </h2>
          <p className="text-brand-text-secondary text-lg leading-relaxed mb-8 max-w-2xl">
            Every engagement begins with a conversation. Tell us about your
            event and we will respond within one business day.
          </p>
          <Button variant="gold" href="/book-yossi" size="lg">
            Book a Call
          </Button>
        </div>
      </section>
    </main>
  );
}
