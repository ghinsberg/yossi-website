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
  title: "Keynote Speaker for Technology Conferences | Yossi Ghinsberg",
  description:
    "Yossi Ghinsberg keynotes for technology conferences. Keynoted for Google, Apple, and Microsoft. Survived 21 days alone in the Amazon. A story no product launch panel can match.",
  openGraph: {
    title: "Keynote Speaker for Technology Conferences | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg keynotes for technology conferences. Keynoted for Google, Apple, and Microsoft. Survived 21 days alone in the Amazon. A story no product launch panel can match.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg — Keynote Speaker for Technology Conferences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keynote Speaker for Technology Conferences | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg keynotes for technology conferences. Keynoted for Google, Apple, and Microsoft. Survived 21 days alone in the Amazon. A story no product launch panel can match.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/keynote-speaker-technology`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Keynote Speaker for Technology Conferences",
  description:
    "Yossi Ghinsberg delivers keynotes for technology conferences. He has keynoted for Google, Apple, and Microsoft. Grounded in 21 days of survival alone in the Bolivian Amazon, his talks bring human context to the technological moment.",
  serviceType: "Keynote Speaking",
  provider: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Yossi Ghinsberg",
  },
  url: `${BASE_URL}/keynote-speaker-technology`,
  offers: {
    "@type": "Offer",
    url: `${BASE_URL}/book-yossi`,
    description: "Inquire about booking Yossi Ghinsberg",
  },
};

export default function KeynoteSpeakerTechnologyPage() {
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
            Technology Conferences
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Keynote Speaker for Technology Conferences
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            Tech conferences have high speaker standards. Yossi Ghinsberg has
            keynoted for Google, Apple, and Microsoft. He brings a story that
            no product launch or innovation panel can match.
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
              Technology audiences are smart, information-dense, and skeptical
              of anything that feels thin. They have also spent years building
              products and systems to reduce uncertainty. Yossi Ghinsberg's
              story does something unusual for that audience: it shows them what
              happens when all the systems are gone and the only thing left is
              the human. That tends to land.
            </p>
            <p>
              He has keynoted for Google, Apple, and Microsoft. He is not a
              technology speaker in the conventional sense. He is a human
              speaker for the technological moment: someone who can give a room
              of engineers, product leaders, and founders a perspective on
              decision-making, resilience, and navigation that no technical
              framework produces. The AI era has not made human instinct
              obsolete. If anything, it has made the question of what humans
              do better more urgent. Yossi's Amazon story is the clearest
              possible answer.
            </p>
            <p>
              His talk maps directly onto what technology organisations face
              now: disruption, the collapse of certainty as a management tool,
              the need to move without the full picture. In 1981, he faced all
              of that at 22 years old, alone, with no connection to the outside
              world. He came out the other side with a set of principles that
              hold up across 40 years and across every industry he has since
              worked in.
            </p>
          </div>
        </div>
      </section>

      {/* Keynotes */}
      <section className="bg-brand-surface py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Keynote programs for technology conferences
          </h2>
          <p className="text-brand-text-secondary text-lg max-w-3xl mb-12">
            Each program is tailored to your event theme and audience. These
            are the three most often requested by technology organisers.
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
            Book Yossi for your technology conference
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
