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

export const metadata = {
  title: "Keynote Speaker on Overcoming Adversity | Yossi Ghinsberg",
  description:
    "Yossi Ghinsberg is one of the world's leading keynote speakers on overcoming adversity — drawing from 20 days alone in the Amazon. Trusted by Google, Apple, Microsoft, BMW.",
  keywords: [
    "keynote speaker overcoming adversity",
    "overcoming adversity speaker",
    "adversity keynote",
    "resilience adversity speaker",
  ],
  openGraph: {
    title: "Keynote Speaker on Overcoming Adversity | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is one of the world's leading keynote speakers on overcoming adversity — drawing from 20 days alone in the Amazon. Trusted by Google, Apple, Microsoft, BMW.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg — Keynote Speaker on Overcoming Adversity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keynote Speaker on Overcoming Adversity | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is one of the world's leading keynote speakers on overcoming adversity — drawing from 20 days alone in the Amazon. Trusted by Google, Apple, Microsoft, BMW.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/keynote-speaker-overcoming-adversity`,
  },
};

const adversityMoments = [
  {
    title: "Day 3: The guide disappears",
    business: "The person you trusted to lead you stops being trustworthy.",
    amazon:
      "Their guide showed signs early that something was wrong. The group argued. The decision to keep going was made anyway. In business, this is the sunk cost disguised as loyalty.",
  },
  {
    title: "Day 6: A jaguar watches him sleep",
    business: "A threat you can't outrun with effort alone.",
    amazon:
      "Yossi had no weapon. He had mosquito repellent and a lighter. He made a flamethrower. The lesson: you don't need the right tool. You need the willingness to use what is there.",
  },
  {
    title: "Day 14: He stops and thinks",
    business: "The moment when the only productive action is to stop acting.",
    amazon:
      "He was exhausted, feverish, and moving in circles. He stopped. He sat down. He made a plan. Teams that can't stop during a crisis can't see clearly enough to get out of one.",
  },
];

export default function KeynoteSpeakerOvercomingAdversityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">
            Keynote Speaker
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Keynote Speaker on Overcoming Adversity
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            There is a difference between a speaker who studied adversity and
            one who survived it. Yossi Ghinsberg spent 20 days alone in the
            Bolivian Amazon with no food, no shelter, and no guarantee of
            rescue. He is not speaking from theory.
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
              Overcoming adversity is a phrase that means almost nothing until
              it refers to something specific. Yossi&apos;s specific is 1981,
              the Bolivian Amazon, and 20 days without food, without rescue,
              and without certainty. Not a hardship story. A working model for
              what the human mind does when the situation becomes genuinely
              critical.
            </p>
            <p>
              The difference between a speaker who studied resilience and one
              who lived it is not rhetorical. It shows up in what the audience
              does after. When the evidence comes from lived experience,
              people don&apos;t just feel inspired. They recalibrate. They
              re-examine the pressure they are under and find that they have
              more capacity than they thought.
            </p>
            <p>
              Yossi speaks to audiences of 10,000 at MDRT, to senior leadership
              teams at Google, to corporate groups at Microsoft and BMW. The
              question he is always answering is the same one: how do you keep
              going when conditions are genuinely bad and you don&apos;t know
              how long they will last? He answers it with something that
              actually happened.
            </p>
          </div>
        </div>
      </section>

      {/* Three moments */}
      <section className="bg-brand-surface py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Three moments from the Amazon that map to business adversity
          </h2>
          <p className="text-brand-text-secondary text-lg max-w-3xl mb-12">
            Every keynote draws on specific events. Here are three that
            audiences consistently say stayed with them.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {adversityMoments.map((moment) => (
              <div
                key={moment.title}
                className="bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <p className="text-brand-gold text-xs uppercase tracking-wider font-semibold mb-3">
                  {moment.title}
                </p>
                <p className="text-brand-text font-semibold text-base mb-3 leading-snug">
                  {moment.business}
                </p>
                <p className="text-brand-text-secondary text-sm leading-relaxed">
                  {moment.amazon}
                </p>
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
              Keynote programs
            </h2>
            <p className="text-brand-text-secondary text-lg leading-relaxed mb-6">
              Yossi has three keynote programs, each drawing from the same
              Amazon experience and tailored to your audience and event theme.
              View full program details, including learning outcomes and
              typical duration, on the keynotes page.
            </p>
            <Link
              href="/keynotes"
              className="inline-flex items-center gap-2 text-brand-gold font-semibold text-base hover:underline"
            >
              View all keynotes
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
            Book an overcoming adversity keynote
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
