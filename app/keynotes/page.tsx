import Link from "next/link";
import { keynotes } from "@/data/keynotes";
import { testimonials } from "@/data/testimonials";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";

export const metadata = {
  title: "Keynote Programs",
  description:
    "Three transformation keynotes: Be Brave in a New World (AI/leadership), Surviving the Jungle (resilience), Laws of the Jungle (culture). $35K–$50K tier.",
  openGraph: {
    title: "Keynote Programs | Yossi Ghinsberg",
    description:
      "Three transformation keynotes: Be Brave in a New World (AI/leadership), Surviving the Jungle (resilience), Laws of the Jungle (culture). $35K–$50K tier.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keynote Programs | Yossi Ghinsberg",
    description:
      "Three transformation keynotes: Be Brave in a New World (AI/leadership), Surviving the Jungle (resilience), Laws of the Jungle (culture). $35K–$50K tier.",
  },
};

const formatOptions = [
  {
    name: "Keynote (60 min)",
    description:
      "The standard format for main-stage plenary audiences of 500 to 10,000.",
  },
  {
    name: "Keynote + Fireside Chat",
    description:
      "Keynote followed by a 20-30 minute moderated conversation.",
  },
  {
    name: "Half-Day Jungle Leadership Experience",
    description:
      "A deep-dive workshop built around the Laws of the Jungle framework.",
  },
  {
    name: "Full-Day Transformation Intensive",
    description:
      "The complete experience for senior leadership teams.",
  },
];

export default function KeynotesPage() {
  const keynoteTestimonials = testimonials.filter(
    (t) =>
      t.usage.includes("keynotes") &&
      (t.author === "Francesco Prandoni" || t.author === "Dee Knopp")
  );

  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center">
            One hour that changes the room.
          </h1>
          <p className="text-xl text-brand-text-secondary text-center max-w-3xl mx-auto mt-6">
            Three keynotes. Every one built on the most extraordinary biography
            in the speaking industry.
          </p>
          <p className="max-w-3xl mx-auto text-center mt-8 text-brand-text-secondary text-lg leading-relaxed">
            Yossi doesn&apos;t give speeches. He creates felt experiences. His
            keynotes are visceral &mdash; they bypass the analytical mind and
            land somewhere deeper. Audiences leave not just informed or inspired,
            but genuinely shifted. Something has moved. Every keynote is tailored
            to your audience, your theme, and the outcome you need.
          </p>
        </div>
      </section>

      {/* Keynote Sections */}
      {keynotes.map((keynote) => (
        <section
          key={keynote.slug}
          className="border-t border-white/10 py-16 md:py-20"
        >
          <div className="max-w-7xl mx-auto px-6">
            {keynote.flagship && (
              <span className="bg-brand-gold text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Flagship
              </span>
            )}
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4">
              {keynote.title}
            </h2>
            <p className="text-xl text-brand-text-secondary mt-2">
              {keynote.subtitle}
            </p>
            <p className="text-brand-text-secondary text-lg leading-relaxed mt-6 max-w-3xl">
              {keynote.description}
            </p>

            {/* Key Takeaways */}
            <h3 className="text-xl font-heading font-semibold mt-10 mb-6">
              Key Takeaways
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {keynote.takeaways.map((takeaway) => (
                <div key={takeaway.title}>
                  <p className="text-brand-text font-semibold">
                    {takeaway.title}
                  </p>
                  <p className="text-brand-text-secondary mt-1">
                    {takeaway.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Best For */}
            <div className="bg-white/5 rounded-xl p-6 mt-8">
              <p className="text-sm uppercase tracking-wider text-brand-gold mb-2">
                Best For:
              </p>
              <p className="text-brand-text-secondary">{keynote.bestFor}</p>
            </div>

            {/* Learn More Link */}
            <Link
              href={`/keynotes/${keynote.slug}`}
              className="text-brand-gold font-medium mt-6 inline-flex items-center gap-2 hover:text-brand-gold-light transition-colors"
            >
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </section>
      ))}

      {/* Format & Logistics */}
      <section className="bg-brand-surface py-16 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Format & Logistics" />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {formatOptions.map((format) => (
              <div
                key={format.name}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-heading font-semibold text-brand-text">
                  {format.name}
                </h3>
                <p className="text-brand-text-secondary mt-2">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-brand-text-secondary">
            <p className="text-lg">
              Duration: 45-90 min &nbsp;|&nbsp; Format: In-person, Virtual,
              Hybrid &nbsp;|&nbsp; Languages: English, Hebrew &nbsp;|&nbsp;
              Audience: 50 to 10,000+
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {keynoteTestimonials.map((t) => (
              <TestimonialCard
                key={t.author}
                quote={t.quote}
                author={t.author}
                title={t.title}
                company={t.company}
                variant="compact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-16 pb-20">
        <Button variant="gold" href="/book-yossi" size="lg">
          Check Availability
        </Button>
      </div>
    </main>
  );
}
