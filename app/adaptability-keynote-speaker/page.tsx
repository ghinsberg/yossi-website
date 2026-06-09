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
  title: "Adaptability Keynote Speaker | Yossi Ghinsberg",
  description:
    "Yossi Ghinsberg is a leading keynote speaker on adaptability and change. His message for 2025-2026: adaptability is not a trait, it's a skill — and the Amazon proves it.",
  keywords: [
    "adaptability keynote speaker",
    "adaptability change keynote speaker 2026",
    "change keynote speaker",
    "adaptability speaker",
  ],
  openGraph: {
    title: "Adaptability Keynote Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is a leading keynote speaker on adaptability and change. His message for 2025-2026: adaptability is not a trait, it's a skill — and the Amazon proves it.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg — Adaptability Keynote Speaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adaptability Keynote Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is a leading keynote speaker on adaptability and change. His message for 2025-2026: adaptability is not a trait, it's a skill — and the Amazon proves it.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/adaptability-keynote-speaker`,
  },
};

export default function AdaptabilityKeynoteSpeakerPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">
            Keynote Speaker
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Adaptability Keynote Speaker
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            Adaptability is not a personality trait. It is a skill. You develop
            it under pressure, or you don&apos;t. In 1981, Yossi Ghinsberg had
            20 days alone in the Bolivian Amazon to develop it. What he learned
            is what he brings to organisations navigating rapid change.
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

      {/* Why adaptability matters now */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-6 text-brand-text-secondary text-lg leading-relaxed">
            <p>
              Organisations in 2025 and 2026 are navigating a specific kind of
              pressure: the conditions keep changing and the old frameworks
              don&apos;t quite fit. The technology is different. The market is
              different. The people are different. What leaders need is not a
              new strategy. It is the capacity to hold steady while the map is
              being redrawn.
            </p>
            <p>
              That capacity is what Yossi calls adaptability. Not the
              soft-skills version — the life-or-death version. In the Amazon,
              adaptability meant adjusting the plan every single day, sometimes
              every hour, based on what the environment was actually doing. Not
              what he had hoped it would do. Not what it had done yesterday.
              What it was doing right now.
            </p>
            <p>
              That is the lesson that lands with audiences. Not because it is
              motivating. Because it is specific. When someone has literally
              changed plans to avoid being killed, their definition of
              adaptability carries weight that no framework can replicate.
            </p>
          </div>
        </div>
      </section>

      {/* What real adaptability looks like */}
      <section className="bg-brand-surface py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-10">
            What adaptability looks like under life-or-death conditions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
            {[
              {
                title: "The plan is always provisional",
                body: "In the Amazon, Yossi made plans he knew would change. He moved toward the river because it was the best available direction, not because it was guaranteed. Organisations that adapt well hold plans loosely — committing to the direction, not the specific route.",
              },
              {
                title: "The environment is the teacher",
                body: "He did not fight the jungle. He read it. He learned which plants were safe, which sounds meant danger, which paths led nowhere. Adaptable organisations read what the market is actually doing, not what they assumed it would do.",
              },
              {
                title: "Each day starts from scratch",
                body: "Yesterday's decision does not bind today's choice. This sounds obvious. It is extremely difficult in practice. Sunk costs, identity, politics. In the jungle, none of that survives contact with reality. In business, it can survive for years, and it kills organisations slowly.",
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

      {/* For organisations navigating disruption */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
              For organisations navigating disruption
            </h2>
            <div className="space-y-6 text-brand-text-secondary text-lg leading-relaxed">
              <p>
                Yossi speaks to organisations undergoing significant change:
                mergers, restructures, digital shifts, leadership transitions.
                The adaptability keynote is not about change management as a
                discipline. It is about the human experience of operating in
                conditions that feel genuinely uncertain.
              </p>
              <p>
                Audiences leave with a different relationship to uncertainty.
                Not comfortable with it — you are never comfortable with the
                jungle. But functional in it. That is what adaptability
                actually means: the capacity to perform when conditions are
                not ideal, while remaining honest about what the conditions are.
              </p>
              <p>
                The keynote is available as a standalone session or as part of
                a broader leadership program. All formats can be tailored to
                your specific context and audience.
              </p>
            </div>
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
            Every program draws from the same Amazon experience and can be
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

      {/* CTA */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">
            Book Yossi
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Book an adaptability keynote for 2025 or 2026
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
