import Link from "next/link";
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

const skills = [
  {
    skill: "Decision-making with no information",
    amazon:
      "On day two, Yossi had to decide whether to try the raft on a river he could not see beyond the next bend. No map. No local knowledge. No certainty. He went. The equivalent decision happens in every boardroom: you act on incomplete information or you wait until the moment has passed.",
    business:
      "How to make high-stakes decisions when the data is incomplete and waiting is not an option.",
  },
  {
    skill: "Managing fear without suppressing it",
    amazon:
      "Yossi was afraid. He did not pretend otherwise. He felt the fear and kept moving. The skill was not courage as an absence of fear. It was using fear as a signal without letting it become a conclusion.",
    business:
      "How to maintain clear judgment when the nervous system is sending genuine alarm signals.",
  },
  {
    skill: "Conserving energy for what matters",
    amazon:
      "In the jungle, every calorie counts. He stopped moving when movement served no purpose. He slept when sleep was possible. Effort without direction is waste. In business, this is the discipline of saying no — not from comfort, but from strategy.",
    business:
      "How to focus a team's energy on the actions that will actually change the outcome.",
  },
  {
    skill: "Finding direction without a map",
    amazon:
      "The river was his reference point. Not a precise direction — a general one. He moved toward civilisation by following the water downstream. In business, strategy under uncertainty works the same way: you don't need a perfect plan. You need one orienting principle clear enough to navigate by.",
    business:
      "How to maintain momentum and direction when the plan has become unreliable.",
  },
  {
    skill: "Knowing when to stop and think",
    amazon:
      "On day 14, moving was making things worse. Yossi stopped. Sat down. Made a new plan. It saved his life. Teams that cannot stop during a crisis cannot see clearly enough to get out of one. The skill of pausing under pressure is not passivity. It is the most active thing you can do.",
    business:
      "How to build deliberate pauses into crisis response so that action is informed rather than reactive.",
  },
];

export const metadata = {
  title: "Survival Skills for Business — Keynote by Yossi Ghinsberg",
  description:
    "Yossi Ghinsberg translates 20 days of Amazon survival into practical leadership skills for business. A keynote that reframes how teams think about pressure, uncertainty, and decision-making.",
  keywords: [
    "survival skills for business keynote",
    "survival skills leadership",
    "business survival skills speaker",
    "amazon survival business lessons",
  ],
  openGraph: {
    title: "Survival Skills for Business — Keynote by Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg translates 20 days of Amazon survival into practical leadership skills for business. A keynote that reframes how teams think about pressure, uncertainty, and decision-making.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg — Survival Skills for Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Survival Skills for Business — Keynote by Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg translates 20 days of Amazon survival into practical leadership skills for business. A keynote that reframes how teams think about pressure, uncertainty, and decision-making.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/survival-skills-for-business`,
  },
};

export default function SurvivalSkillsForBusinessPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">
            Keynote Speaker
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Survival Skills for Business
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            Yossi Ghinsberg spent 20 days alone in the Bolivian Amazon in 1981.
            No food. No map. No rescue coming. What kept him alive are the same
            skills that keep organisations performing under pressure. This
            keynote makes that translation explicit.
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

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-6 text-brand-text-secondary text-lg leading-relaxed">
            <p>
              Every survival story contains a set of decisions. Yossi made
              hundreds of them over 20 days. Some were right. A few were nearly
              fatal. The ones that kept him alive were not random. They follow
              patterns. Patterns that appear in every organisation navigating
              genuine pressure.
            </p>
            <p>
              This keynote does not use the jungle as a metaphor. It uses the
              jungle as a worked example. Five skills. Five specific moments
              from the Amazon. Five direct applications to business leadership.
              Audiences leave with something they can name and use the next day.
            </p>
          </div>
        </div>
      </section>

      {/* Five skills */}
      <section className="bg-brand-surface py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Five survival skills. Five business applications.
          </h2>
          <p className="text-brand-text-secondary text-lg max-w-3xl mb-12">
            Each skill comes with a concrete Amazon example and a direct
            translation to organisational leadership.
          </p>
          <div className="space-y-8 max-w-4xl">
            {skills.map((item, i) => (
              <div
                key={item.skill}
                className="bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="w-8 h-8 rounded-full bg-brand-gold text-black text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-brand-text leading-snug">
                    {item.skill}
                  </h3>
                </div>
                <p className="text-brand-text-secondary text-base leading-relaxed mb-4 pl-12">
                  {item.amazon}
                </p>
                <div className="pl-12">
                  <p className="text-brand-gold text-xs uppercase tracking-wider font-semibold mb-1">
                    Business application
                  </p>
                  <p className="text-brand-text text-sm leading-relaxed">
                    {item.business}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keynotes link */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Full keynote programs
            </h2>
            <p className="text-brand-text-secondary text-lg leading-relaxed mb-6">
              The survival skills framework is available as a standalone keynote
              or integrated into Yossi&apos;s broader programs on resilience,
              leadership, and adaptability. All programs can be tailored to your
              event theme and audience.
            </p>
            <Link
              href="/keynotes"
              className="inline-flex items-center gap-2 text-brand-gold font-semibold text-base hover:underline"
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
            Book the survival skills keynote
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
