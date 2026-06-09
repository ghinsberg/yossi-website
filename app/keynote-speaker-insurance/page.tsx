import Link from "next/link";
import { keynotes } from "@/data/keynotes";
import Button from "@/components/ui/Button";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";
const OG_IMAGE = `${BASE_URL}/images/headshots/yossi-headshot-1.jpg`;

const credentials = [
  "20 days alone in the Amazon",
  "1M+ books sold",
  "Voted Most Unforgettable Speaker",
  "Google / Apple / Microsoft / BMW",
];

export const metadata = {
  title: "Keynote Speaker for Insurance Conferences | Yossi Ghinsberg",
  description:
    "Yossi Ghinsberg keynotes for insurance conferences. His Amazon survival story lands with particular force for professionals who spend their careers pricing real uncertainty.",
  openGraph: {
    title: "Keynote Speaker for Insurance Conferences | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg keynotes for insurance conferences. His Amazon survival story lands with particular force for professionals who spend their careers pricing real uncertainty.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg — Keynote Speaker for Insurance Conferences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keynote Speaker for Insurance Conferences | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg keynotes for insurance conferences. His Amazon survival story lands with particular force for professionals who spend their careers pricing real uncertainty.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/keynote-speaker-insurance`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Keynote Speaker for Insurance Conferences",
  description:
    "Yossi Ghinsberg delivers keynotes for insurance conferences. His Amazon survival story and its lessons about real risk, decision-making under uncertainty, and human resilience connect powerfully with insurance audiences.",
  serviceType: "Keynote Speaking",
  provider: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Yossi Ghinsberg",
  },
  url: `${BASE_URL}/keynote-speaker-insurance`,
  offers: {
    "@type": "Offer",
    url: `${BASE_URL}/book-yossi`,
    description: "Inquire about booking Yossi Ghinsberg",
  },
};

export default function KeynoteSpeakerInsurancePage() {
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
            Insurance Conferences
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Keynote Speaker for Insurance Conferences
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            Insurance audiences understand risk professionally. Yossi
            Ghinsberg's Amazon survival story lands with particular force for
            people who spend their careers pricing uncertainty. He has lived it.
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
              Insurance professionals think about risk differently from most
              audiences. They model it, price it, and manage it for a living.
              What they rarely get is a speaker who has actually faced mortal
              risk without a safety net, and who can speak to what that
              experience teaches about judgment, resilience, and the decisions
              people make when the outcome is genuinely uncertain.
            </p>
            <p>
              Yossi Ghinsberg spent 20 days alone in the Bolivian Amazon with
              no food and no rescue. He had no framework. He had no safety net.
              He had nothing except his own judgment and the refusal to stop
              moving. When he tells that story to an insurance audience, the
              connection is immediate. They understand risk in their bones.
              His experience gives them something they cannot build from
              actuarial tables: a firsthand account of what happens when the
              risk becomes real, and how a person navigates it.
            </p>
            <p>
              His keynotes for insurance conferences have included major
              industry events across Asia Pacific, North America, and Europe,
              including the MDRT Main Stage in 2025. He has been voted Most
              Unforgettable Speaker by event professionals. His book sold over
              a million copies and was made into a Hollywood film starring
              Daniel Radcliffe. He brings all of that credibility into the room
              and leaves audiences with content they use long after the event.
            </p>
          </div>
        </div>
      </section>

      {/* Keynotes */}
      <section className="bg-brand-surface py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Keynote programs for insurance conferences
          </h2>
          <p className="text-brand-text-secondary text-lg max-w-3xl mb-12">
            Each program is tailored to your event theme and audience. These
            are the three most often requested by insurance organisers.
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
            Book Yossi for your insurance conference
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
