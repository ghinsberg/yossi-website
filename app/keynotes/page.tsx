import Link from "next/link";
import { keynotes } from "@/data/keynotes";
import { testimonials } from "@/data/testimonials";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";

export const metadata = {
  title: "Keynote Programs",
  description:
    "Three keynotes from Yossi Ghinsberg, survivor of 21 days alone in the Amazon. Voted Most Unforgettable Speaker. Trusted by Google, Apple, Microsoft, BMW, and more.",
  openGraph: {
    title: "Keynote Programs | Yossi Ghinsberg",
    description:
      "Three keynotes from Yossi Ghinsberg, survivor of 21 days alone in the Amazon. Voted Most Unforgettable Speaker. Trusted by Google, Apple, Microsoft, BMW, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keynote Programs | Yossi Ghinsberg",
    description:
      "Three keynotes from Yossi Ghinsberg, survivor of 21 days alone in the Amazon. Voted Most Unforgettable Speaker. Trusted by Google, Apple, Microsoft, BMW, and more.",
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
];

export default function KeynotesPage() {
  const keynoteTestimonials = testimonials.filter(
    (t) =>
      t.author === "Francesco Prandoni" || t.author === "Dee Knopp"
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
            Three keynotes. Every one built on one of the most extraordinary true adventure stories, in recent times.
          </p>
          <p className="max-w-3xl mx-auto text-center mt-8 text-brand-text-secondary text-lg leading-relaxed">
            Yossi doesn&apos;t give speeches. He creates felt experiences. His
            keynotes are visceral. They bypass the analytical mind and
            land somewhere deeper. Audiences leave not just informed or inspired,
            but genuinely shifted. Something has moved. Every keynote is tailored
            to your audience, your theme, and the outcome you need.
          </p>
          <p className="text-center text-brand-gold/60 text-xs uppercase tracking-widest mt-8">
            For organisations that dare to move their people beyond performance into purpose.
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

      {/* The Full-Day Workshop */}
      <section id="workshop" className="border-t border-white/10 py-20 md:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">
            When a keynote isn&apos;t enough
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 max-w-3xl">
            The full-day workshop.
          </h2>
          <div className="text-brand-text-secondary text-lg leading-relaxed space-y-4 max-w-3xl">
            <p>
              A keynote moves a room for an hour. A full day moves people through something they don&apos;t forget.
            </p>
            <p>
              For organisations that want more than a talk, Yossi designs and leads a workshop built around the outcome you are after. On premises or off-site. The length, the location, and the shape are decided with you, after a deep brief.
            </p>
          </div>

          {/* How it works */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-brand-gold font-heading font-bold text-2xl mb-3">1</p>
              <h3 className="text-brand-text font-semibold mb-2">A deep brief</h3>
              <p className="text-brand-text-secondary">
                We talk about what you are trying to shift, what is in the way, and what your people actually need.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-brand-gold font-heading font-bold text-2xl mb-3">2</p>
              <h3 className="text-brand-text font-semibold mb-2">You and Yossi shape the day</h3>
              <p className="text-brand-text-secondary">
                Length, location, on-site or off, the questions the day must answer. Decided together.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-brand-gold font-heading font-bold text-2xl mb-3">3</p>
              <h3 className="text-brand-text font-semibold mb-2">Yossi curates the team</h3>
              <p className="text-brand-text-secondary">
                Top facilitators for the modules that fit. Yossi runs the entire program and personally delivers the two signature techniques — full sensory activation and the snake breath — that he teaches nowhere else.
              </p>
            </div>
          </div>

          {/* Principle pull quote */}
          <div className="mt-14 border-l-2 border-brand-gold pl-6 max-w-3xl">
            <p className="text-xl md:text-2xl font-heading text-brand-text leading-snug">
              Only when things shake, a shift is possible. The day is built to shake the system, with care.
            </p>
            <p className="text-brand-text-secondary text-sm mt-3 uppercase tracking-widest">
              — Yossi
            </p>
          </div>

          {/* Body of work */}
          <div className="mt-14 max-w-3xl">
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-3">
              The body of work behind it
            </p>
            <p className="text-brand-text-secondary text-lg leading-relaxed">
              Two decades of leading groups through long-form journeys. Hundreds of people, across cohorts, retreats, and intensives. The shapes have changed; the principle has not. Yossi does every practice he gives. He is part of the group, not separate from it.
            </p>
          </div>

          {/* Best fits */}
          <div className="mt-12 bg-brand-surface rounded-xl p-6 max-w-3xl border border-white/10">
            <p className="text-sm uppercase tracking-wider text-brand-gold mb-3">Best for:</p>
            <ul className="text-brand-text-secondary space-y-2">
              <li>Leadership offsites that need to count.</li>
              <li>Sales kickoffs that need a real shift, not a pep talk.</li>
              <li>Culture work for teams going through change.</li>
              <li>Executive teams at an inflection point.</li>
              <li>Executive teams ready to ask what comes next.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Button variant="gold" href="/book-yossi" size="lg">
              Start with the brief
            </Button>
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
          Book a Call
        </Button>
      </div>
    </main>
  );
}
