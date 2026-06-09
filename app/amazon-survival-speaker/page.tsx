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
  title: "Amazon Survival Speaker | Yossi Ghinsberg",
  description:
    "Yossi Ghinsberg survived 20 days alone in the Bolivian Amazon in 1981. As an amazon survival speaker, he brings the real story of jungle survival to corporate audiences worldwide.",
  keywords: [
    "amazon survival speaker",
    "amazon jungle survival story speaker",
    "amazon keynote speaker",
    "bolivian amazon survival",
    "jungle survival speaker",
  ],
  openGraph: {
    title: "Amazon Survival Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg survived 20 days alone in the Bolivian Amazon in 1981. As an amazon survival speaker, he brings the real story of jungle survival to corporate audiences worldwide.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg — Amazon Survival Speaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Survival Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg survived 20 days alone in the Bolivian Amazon in 1981. As an amazon survival speaker, he brings the real story of jungle survival to corporate audiences worldwide.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/amazon-survival-speaker`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Amazon Survival Keynote Speaker",
  description:
    "Yossi Ghinsberg delivers keynotes grounded in 20 days of real survival alone in the Bolivian Amazon in 1981. Not a story about adventure in general. The Tuichi River. The waterfall. Twenty-one days before rescue.",
  serviceType: "Keynote Speaking",
  provider: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Yossi Ghinsberg",
  },
  url: `${BASE_URL}/amazon-survival-speaker`,
  offers: {
    "@type": "Offer",
    url: `${BASE_URL}/book-yossi`,
    description: "Inquire about booking Yossi Ghinsberg",
  },
};

export default function AmazonSurvivalSpeakerPage() {
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
            Amazon Survival Speaker
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            In 1981, Yossi Ghinsberg was separated from his companions in the
            Bolivian Amazon. No food. No shelter. No rescue coming. He survived
            20 days alone before a search party found him. That is the story he
            brings to corporate audiences worldwide.
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
              Most speakers who talk about the Amazon mean it metaphorically.
              Yossi means the Tuichi River, in the Bolivian Amazon, in 1981.
              He was 22, a philosophy student from Tel Aviv, when he walked into
              the jungle with three companions and a guide who may have been
              leading them nowhere. The group fractured. His raft hit a
              waterfall. When the river released him, he was alone.
            </p>
            <p>
              What followed was 20 days without food, without contact, and
              without any certainty he would be found. He built fires. He ate
              what he could. He hallucinated. He moved when moving was all he
              had. On day 21, Kevin Gale and a group of indigenous villagers
              who refused to stop searching found him alive.
            </p>
            <p>
              The specificity is the point. Not adventure in general. Not a
              near-miss. A specific river, a specific set of choices, a specific
              number of days. When Yossi speaks about pressure, audiences hear
              it differently because they know exactly what he is drawing from.
            </p>
            <p>
              He wrote the experience into a memoir. It sold over a million
              copies in 20 languages. In 2017, director Greg McLean turned it
              into a film starring Daniel Radcliffe, which premiered as the
              opening night gala at the Melbourne International Film Festival.
              In 2023, Wondery turned it into a four-episode narrative podcast
              series. Forty-two years later, the story was still worth retelling.
            </p>
            <p>
              For corporate audiences, the Amazon survival story is not a
              backdrop. It is a working model. The decisions Yossi made in the
              jungle, under conditions of genuine uncertainty, map directly to
              the decisions leaders make every day. Not as metaphor. As
              evidence of what people are capable of when they stop waiting
              for conditions to improve.
            </p>
          </div>
        </div>
      </section>

      {/* The story in detail */}
      <section className="bg-brand-surface py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-10">
            What makes this story different
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
            {[
              {
                title: "The location is specific",
                body: "The Bolivian Amazon. The Tuichi River. Not a metaphor for hardship. An actual jungle, documented, filmed, and told in four languages over four decades.",
              },
              {
                title: "The book became a film",
                body: "Jungle was published in Hebrew in 1985, translated worldwide, and became a film starring Daniel Radcliffe in 2017. The movie tie-in edition carries a foreword by Radcliffe himself.",
              },
              {
                title: "The lessons are transferable",
                body: "Yossi spent decades turning what the Amazon taught him into frameworks for leadership, resilience, and decision-making under pressure. The story earns the lesson.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <h3 className="text-lg font-heading font-semibold text-brand-text mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keynotes */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Keynote programs
          </h2>
          <p className="text-brand-text-secondary text-lg max-w-3xl mb-12">
            Every program draws from the Amazon survival experience and can be
            tailored to your theme and audience.
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

      {/* Story link */}
      <section className="bg-brand-surface py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-text-secondary text-lg">
            Want the full story?{" "}
            <Link
              href="/story"
              className="text-brand-gold hover:underline font-semibold"
            >
              Read Yossi&apos;s biography
            </Link>{" "}
            — from the edge of the map in 1981 to the stage today.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">
            Book Yossi
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Book the Amazon survival keynote
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
