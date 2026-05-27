import Link from "next/link";
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

const principles = [
  {
    number: "01",
    title: "Survival is a choice, not a condition",
    body: "In the jungle, Yossi had moments when stopping would have been easier than continuing. The decision to keep going was a conscious act, made repeatedly, under genuine pressure. The same choice exists in every organisation facing genuine difficulty. Power to Survive begins here: with the understanding that survival is not something that happens to you. It is something you decide.",
  },
  {
    number: "02",
    title: "Fear is information, not a verdict",
    body: "Fear in the Amazon was real and useful. It kept him alert. The organisations that fail under pressure are not the ones that feel fear. They are the ones that mistake fear for a final answer. Power to Survive teaches teams to use fear as data while continuing to act on the evidence in front of them.",
  },
  {
    number: "03",
    title: "Conservation over exertion",
    body: "In the jungle, running burns energy you will need later. Yossi learned to move with intention and rest without guilt. In business, the equivalent is focus. Teams that try to do everything in a crisis accomplish nothing. Power to Survive gives leaders a framework for identifying the one action that matters most and committing to it completely.",
  },
];

export const metadata = {
  title: "Power to Survive — Yossi Ghinsberg",
  description:
    "Power to Survive is Yossi Ghinsberg's proprietary keynote framework — drawn from 21 days alone in the Amazon. The survival principles that apply directly to leadership and business.",
  keywords: [
    "power to survive keynote",
    "power to survive yossi ghinsberg",
    "survival keynote framework",
  ],
  openGraph: {
    title: "Power to Survive — Yossi Ghinsberg",
    description:
      "Power to Survive is Yossi Ghinsberg's proprietary keynote framework — drawn from 21 days alone in the Amazon. The survival principles that apply directly to leadership and business.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg — Power to Survive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Power to Survive — Yossi Ghinsberg",
    description:
      "Power to Survive is Yossi Ghinsberg's proprietary keynote framework — drawn from 21 days alone in the Amazon. The survival principles that apply directly to leadership and business.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/power-to-survive`,
  },
};

export default function PowerToSurvivePage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">
            Keynote Framework
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Power to Survive
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            Survival is not about physical strength. Yossi Ghinsberg spent 21
            days alone in the Bolivian Amazon with no food, no shelter, and no
            guarantee of rescue. What kept him alive was not fitness. It was the
            power to choose.
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

      {/* What it is */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-6 text-brand-text-secondary text-lg leading-relaxed">
            <p>
              Power to Survive is Yossi Ghinsberg&apos;s proprietary keynote
              concept, developed over four decades of speaking to leaders,
              teams, and organisations under pressure. It is not a framework
              invented in a conference room. It was extracted from 21 days
              of actual survival in the Bolivian Amazon and refined through
              thousands of hours on stage.
            </p>
            <p>
              The central insight is this: the people who survive impossible
              situations are not always the strongest, the most prepared, or
              the most experienced. They are the ones who exercise the power
              to choose how they respond. That power is not rare. It exists in
              every person in every room Yossi walks into. His job is to remind
              them it is there.
            </p>
            <p>
              For organisations, Power to Survive answers a practical question:
              when conditions are genuinely bad and you don&apos;t know how
              long they will last, what do you do? The framework gives teams
              three principles, each grounded in a specific event from the
              Amazon, each directly applicable to the pressure they are facing.
            </p>
          </div>
        </div>
      </section>

      {/* Three principles */}
      <section className="bg-brand-surface py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-12">
            The three core principles
          </h2>
          <div className="space-y-10 max-w-3xl">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="border-l-4 border-brand-gold pl-8"
              >
                <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-2">
                  Principle {principle.number}
                </p>
                <h3 className="text-xl font-heading font-bold text-brand-text mb-4">
                  {principle.title}
                </h3>
                <p className="text-brand-text-secondary text-base leading-relaxed">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For teams */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
              How it applies to teams and organisations
            </h2>
            <div className="space-y-6 text-brand-text-secondary text-lg leading-relaxed">
              <p>
                The Power to Survive keynote is built for teams that are being
                asked to perform under genuine pressure: market disruption,
                organisational change, strategic uncertainty. Not the kind of
                pressure that gets called adversity in a brochure. The real kind.
              </p>
              <p>
                Yossi delivers the framework as a keynote or as a half-day
                workshop for senior leadership teams. Both formats end with a
                specific output: a shared language for talking about pressure,
                and a practical approach for maintaining performance when the
                situation becomes uncomfortable.
              </p>
              <p>
                Full program details, including outcomes and customisation
                options, are on the keynotes page.
              </p>
            </div>
            <Link
              href="/keynotes"
              className="inline-flex items-center gap-2 text-brand-gold font-semibold text-base hover:underline mt-8 block"
            >
              View all keynote programs
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-surface border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">
            Book Yossi
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Book the Power to Survive keynote
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
