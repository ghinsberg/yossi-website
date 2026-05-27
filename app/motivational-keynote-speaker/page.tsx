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
  title: "Motivational Keynote Speaker | Yossi Ghinsberg",
  description:
    "Yossi Ghinsberg is a motivational keynote speaker who produces lasting perspective shifts. 21 days alone in the Amazon. Trusted by Google, Apple, Microsoft, and BMW.",
  openGraph: {
    title: "Motivational Keynote Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is a motivational keynote speaker who produces lasting perspective shifts. 21 days alone in the Amazon. Trusted by Google, Apple, Microsoft, and BMW.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg — Motivational Keynote Speaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Motivational Keynote Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is a motivational keynote speaker who produces lasting perspective shifts. 21 days alone in the Amazon. Trusted by Google, Apple, Microsoft, and BMW.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/motivational-keynote-speaker`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Motivational Keynote Speaker",
  description:
    "Yossi Ghinsberg delivers motivational keynotes that produce perspective shifts, not short-lived feelings. Grounded in 21 days of real survival alone in the Bolivian Amazon.",
  serviceType: "Keynote Speaking",
  provider: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Yossi Ghinsberg",
  },
  url: `${BASE_URL}/motivational-keynote-speaker`,
  offers: {
    "@type": "Offer",
    url: `${BASE_URL}/book-yossi`,
    description: "Inquire about booking Yossi Ghinsberg",
  },
};

export default function MotivationalKeynoteSpeakerPage() {
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
            Motivational Keynote Speaker
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            Most motivational keynotes produce a feeling. Yossi Ghinsberg's
            produce a change in how people see their situation. Not inspiration
            that fades on the drive home. A shift in perspective that stays.
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
              The problem with most motivational keynotes is not the speaker.
              It is what a motivation that doesn't come from anything real can
              actually change. Yossi's motivation is not performed. It comes
              from a specific place: 21 days alone in the Bolivian Amazon, no
              food, no rescue, no certainty about whether he would make it out.
              He did. That is where the content comes from.
            </p>
            <p>
              When audiences hear his story, something different happens. They
              do not just feel moved. They see their own situation from a
              different angle. The problems that felt immovable look different
              next to what he faced. The pressure that felt unbearable gets put
              into a context that changes it. That reframe is not artificial.
              It is a natural consequence of hearing what actual survival looks
              and feels like.
            </p>
            <p>
              Yossi has been voted Most Unforgettable Speaker by event
              professionals. Audiences describe his talks not as uplifting but
              as clarifying. They leave not feeling pumped, but settled. Certain.
              More willing to move toward the thing that scared them before they
              walked in the room. That is the difference between motivation
              as a feeling and motivation as a shift in how you see what is
              possible.
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
            three most requested.
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
            Book a motivational keynote
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
