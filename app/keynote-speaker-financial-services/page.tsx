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
  title: "Keynote Speaker for Financial Services | Yossi Ghinsberg",
  description:
    "Yossi Ghinsberg keynotes for financial services conferences. MDRT Main Stage 2025. Survived 21 days alone in the Amazon. Trusted by major institutions across Asia Pacific and North America.",
  openGraph: {
    title: "Keynote Speaker for Financial Services | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg keynotes for financial services conferences. MDRT Main Stage 2025. Survived 21 days alone in the Amazon. Trusted by major institutions across Asia Pacific and North America.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg — Keynote Speaker for Financial Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keynote Speaker for Financial Services | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg keynotes for financial services conferences. MDRT Main Stage 2025. Survived 21 days alone in the Amazon. Trusted by major institutions across Asia Pacific and North America.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/keynote-speaker-financial-services`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Keynote Speaker for Financial Services",
  description:
    "Yossi Ghinsberg delivers keynotes for financial services conferences, including MDRT Main Stage 2025. Grounded in 21 days of survival alone in the Bolivian Amazon. Trusted by major financial institutions across Asia Pacific, North America, and Europe.",
  serviceType: "Keynote Speaking",
  provider: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Yossi Ghinsberg",
  },
  url: `${BASE_URL}/keynote-speaker-financial-services`,
  offers: {
    "@type": "Offer",
    url: `${BASE_URL}/book-yossi`,
    description: "Inquire about booking Yossi Ghinsberg",
  },
};

export default function KeynoteSpeakerFinancialServicesPage() {
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
            Financial Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Keynote Speaker for Financial Services
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            Financial services conferences demand credibility. Yossi Ghinsberg
            has keynoted for major financial institutions across Asia Pacific,
            North America, and Europe, including the MDRT Main Stage in 2025.
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
              Financial services audiences are not easy to move. They are sharp,
              skeptical, and they have heard a lot of speakers. What Yossi brings
              is not technique or theory. He brings a story that makes a room go
              quiet. In 1981, at 22 years old, he got lost in the Bolivian Amazon
              for 21 days. No food. No map. No certainty of rescue. He came out
              the other side and has spent decades turning what he learned into
              one of the most requested keynotes on the international circuit.
            </p>
            <p>
              For financial services conferences, the content maps directly onto
              the pressures the audience recognises: navigating uncertainty,
              making high-stakes decisions with incomplete information, managing
              the stress of markets that do not wait for you to be ready. Yossi
              does not use those words. He tells the story, and the audience
              draws the parallel themselves. That is why it sticks.
            </p>
            <p>
              He delivered the keynote on the MDRT Main Stage in 2025. He has
              keynoted for insurance companies, advisory firms, and banking
              institutions across multiple continents. His book sold over a
              million copies and was made into a Hollywood film. And he has been
              voted Most Unforgettable Speaker by event professionals. For a
              financial services conference that wants a keynote the audience
              talks about long after the event, this is it.
            </p>
          </div>
        </div>
      </section>

      {/* Keynotes */}
      <section className="bg-brand-surface py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Keynote programs for financial services
          </h2>
          <p className="text-brand-text-secondary text-lg max-w-3xl mb-12">
            Each program is tailored to your event theme and audience. These
            are the three most often requested by financial services organisers.
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
            Book Yossi for your financial services conference
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
