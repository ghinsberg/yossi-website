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
  title: "Stress Management Speaker | Yossi Ghinsberg",
  description:
    "Yossi Ghinsberg is a stress management speaker who knows real survival. Real vs imaginary stress, with tools your team can use the next day. Trusted by Google and BMW.",
  openGraph: {
    title: "Stress Management Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is a stress management speaker who knows real survival. Real vs imaginary stress, with tools your team can use the next day. Trusted by Google and BMW.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg — Stress Management Speaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stress Management Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is a stress management speaker who knows real survival. Real vs imaginary stress, with tools your team can use the next day. Trusted by Google and BMW.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/stress-management-speaker`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Stress Management Speaker",
  description:
    "Yossi Ghinsberg delivers stress management keynotes grounded in real survival experience. His Real vs Imaginary Survival program teaches audiences to distinguish genuine threat from chronic pressure, and gives them practical tools to switch off the stress response.",
  serviceType: "Keynote Speaking",
  provider: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Yossi Ghinsberg",
  },
  url: `${BASE_URL}/stress-management-speaker`,
  offers: {
    "@type": "Offer",
    url: `${BASE_URL}/book-yossi`,
    description: "Inquire about booking Yossi Ghinsberg",
  },
};

export default function StressManagementSpeakerPage() {
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
            Stress Management Speaker
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            Yossi Ghinsberg knows real survival. That perspective is what makes
            his stress management keynote different from every other one your
            audience has heard.
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
              Most stress is imaginary survival. No bear. No race. No actual
              mortal threat. Just the inbox, the deadline, the pressure that
              never quite turns off. The body cannot tell the difference. The
              survival system fires anyway. We call it stress. It is the
              malady of our time, the biggest modern killer, and the precursor
              to disease of body, mind, and spirit.
            </p>
            <p>
              Yossi knows real survival. In 1981, he spent 21 days alone in the
              Bolivian Amazon with no food and no rescue coming. He knows what
              the survival system feels like when the threat is real, and he
              knows the exact distinction between that and the chronic low-grade
              alarm most people live in. When he makes that distinction from a
              stage, it does something that no theory can do. It lands. Because
              the audience is hearing it from someone who has been on both sides
              of it.
            </p>
            <p>
              His stress management keynote, Real Survival vs Imaginary Survival,
              gives audiences the discernment to tell those two states apart,
              and practical tools to switch the stress response off. Not through
              the mind, which is too slow, but through the body. Sensorial
              practices that move people from sympathetic to parasympathetic in
              real time. People leave with something they can use that night.
              Leaders leave with something to offer their teams the next morning.
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
            Book a stress management keynote
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
