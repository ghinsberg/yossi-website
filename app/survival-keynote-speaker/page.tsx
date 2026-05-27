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
  title: "Survival Keynote Speaker | Yossi Ghinsberg",
  description:
    "Yossi Ghinsberg is a survival keynote speaker who got lost, not just adventurous. 21 days alone in the Amazon. Trusted by Google, Apple, Microsoft, and BMW.",
  openGraph: {
    title: "Survival Keynote Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is a survival keynote speaker who got lost, not just adventurous. 21 days alone in the Amazon. Trusted by Google, Apple, Microsoft, and BMW.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg — Survival Keynote Speaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Survival Keynote Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is a survival keynote speaker who got lost, not just adventurous. 21 days alone in the Amazon. Trusted by Google, Apple, Microsoft, and BMW.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/survival-keynote-speaker`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Survival Keynote Speaker",
  description:
    "Yossi Ghinsberg survived 21 days alone in the Bolivian Amazon with no food and no rescue. As a survival keynote speaker, he brings the raw reality of that experience and translates it into content that changes how audiences face their own challenges.",
  serviceType: "Keynote Speaking",
  provider: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Yossi Ghinsberg",
  },
  url: `${BASE_URL}/survival-keynote-speaker`,
  offers: {
    "@type": "Offer",
    url: `${BASE_URL}/book-yossi`,
    description: "Inquire about booking Yossi Ghinsberg",
  },
};

export default function SurvivalKeynoteSpeakerPage() {
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
            Survival Keynote Speaker
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            Most survival speakers did an expedition. Yossi Ghinsberg got lost.
            21 days alone in the Bolivian Amazon with no food and no rescue
            coming. That distinction is what makes audiences lean forward.
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
              An expedition has a plan. Yossi's story had none. In 1981, he was
              22 years old, trekking in the Bolivian Amazon when the group
              split up and the river took him somewhere with no path back. No
              food. No map. No one who knew exactly where he was. For 21 days
              he kept moving, kept choosing, kept finding reasons to take the
              next step. Eventually, a search party found him.
            </p>
            <p>
              The difference between a planned expedition and an unplanned
              survival is the same difference audiences feel when they hear
              him speak. There was no exit strategy. No support crew. No way to
              tap out. What Yossi learned in those three weeks, he learned
              because the alternative was not learning it. That is what lands
              in the room. Not inspiration. Proof.
            </p>
            <p>
              His survival keynote does not ask audiences to imagine what they
              would do in his situation. It asks them to recognise the survival
              instinct already running inside them, often misdirected, usually
              misunderstood, and to put it to work on what they actually face.
              The book sold over a million copies. It became a Hollywood film.
              And the keynote has been delivered on stages across six continents.
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
            Each program is tailored to your event and audience. These are the
            three most often requested.
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
            Book a survival keynote
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
