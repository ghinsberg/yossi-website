import Link from "next/link";
import { keynotes } from "@/data/keynotes";
import Button from "@/components/ui/Button";
import BookingFacts from "@/components/sections/BookingFacts";

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
  title: "Adventure Keynote Speaker",
  description:
    "Yossi Ghinsberg is an adventure keynote speaker whose adventure went wrong, and that is the point. 20 days alone in the Amazon. Trusted by Google, Apple, Microsoft, and BMW.",
  openGraph: {
    title: "Adventure Keynote Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is an adventure keynote speaker whose adventure went wrong, and that is the point. 20 days alone in the Amazon. Trusted by Google, Apple, Microsoft, and BMW.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg — Adventure Keynote Speaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adventure Keynote Speaker | Yossi Ghinsberg",
    description:
      "Yossi Ghinsberg is an adventure keynote speaker whose adventure went wrong, and that is the point. 20 days alone in the Amazon. Trusted by Google, Apple, Microsoft, and BMW.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/adventure-keynote-speaker`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Adventure Keynote Speaker",
  description:
    "Yossi Ghinsberg's adventure in the Bolivian Amazon went wrong and became one of the most famous survival stories ever told. As an adventure keynote speaker, he shows audiences what adventure really teaches: not thrill, but the capacity to keep going when the plan is gone.",
  serviceType: "Keynote Speaking",
  provider: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Yossi Ghinsberg",
  },
  url: `${BASE_URL}/adventure-keynote-speaker`,
  offers: {
    "@type": "Offer",
    url: `${BASE_URL}/book-yossi`,
    description: "Inquire about booking Yossi Ghinsberg",
  },
};

export default function AdventureKeynoteSpeakerPage() {
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
            Adventure Keynote Speaker
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            Most adventure speakers tell you about the summit. Yossi Ghinsberg
            tells you about the moment the adventure stopped being one. 20 days
            alone in the Bolivian Amazon, and a life built from what the jungle
            taught him.
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
              In 1981, four travelers walked into the Bolivian Amazon looking
              for adventure. Only two came out. Yossi was 22 when the group
              split and a raft accident left him alone in uncharted rainforest,
              no food, no knife, no way to call for help. For 20 days the
              adventure he had dreamed of became something else: a test with no
              audience and no second place.
            </p>
            <p>
              That is what makes his keynote different from an expedition
              story. Expeditions are planned. Adventure, real adventure, is
              what happens when the plan dies and you are still there. Yossi
              came out of the jungle with a story that became a book read by
              millions and the film Jungle, starring Daniel Radcliffe. He also
              came out with something more useful: a working knowledge of what
              people are capable of when everything is stripped away.
            </p>
            <p>
              He went back, years later. Not to conquer the jungle but to work
              with it, co-founding Chalalan, an eco-lodge owned and run by the
              Indigenous community of the village that saved his life. The
              adventure that nearly killed him became a livelihood for the
              people who ended it. Audiences hear both halves: the surviving,
              and the building that came after.
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

      <BookingFacts />

      {/* CTA */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">
            Book Yossi
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Book an adventure keynote
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
