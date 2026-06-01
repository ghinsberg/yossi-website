import type { Metadata } from "next";
import Button from "@/components/ui/Button";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about booking Yossi Ghinsberg — speaker fees, formats, availability, and what to expect.",
  alternates: { canonical: `${BASE_URL}/faq` },
};

const faqs = [
  {
    category: "Booking",
    items: [
      {
        q: "How do I book Yossi Ghinsberg?",
        a: "Submit an enquiry at yossighinsberg.com/book-yossi or contact a regional representative directly. North America: Michelle Carter at Carter Global Speakers (Michelle@carterglobalspeakers.com). Europe and Australasia: Michael Arnot at Encore Speakers (michael@encorespeakers.com). Latin America: Smart Speakers. All enquiries receive a response within 24 hours.",
      },
      {
        q: "What is Yossi Ghinsberg's speaker fee?",
        a: "Speaker fees vary by format, location, and event type. Contact your regional representative for a tailored proposal. All enquiries through this site are reviewed personally and a proposal is returned within 48 hours.",
      },
      {
        q: "How far in advance should I book?",
        a: "Yossi's calendar is in high demand, particularly for Q1 and Q4 conference seasons. Six to twelve months is ideal for flagship events. That said, contact us regardless — availability sometimes opens at shorter notice.",
      },
      {
        q: "Does Yossi speak virtually?",
        a: "Yes. Yossi delivers keynotes in-person, virtually, and in hybrid formats. All three formats are tailored to the audience and outcome, not simply recorded presentations.",
      },
    ],
  },
  {
    category: "The Keynotes",
    items: [
      {
        q: "What keynotes does Yossi offer?",
        a: "Three programs: 'From Survival to Legacy' — the flagship; 'The Laws of the Jungle' — nine principles distilled from the Amazon and four decades of applying them; and 'Real Survival vs Imaginary Survival' — the stress and resilience keynote, which includes two unique somatic techniques taught nowhere else.",
      },
      {
        q: "How long is a keynote?",
        a: "The standard keynote is 60 minutes. Yossi also delivers a Keynote + Fireside Chat format (60 + 20–30 minutes) and a full-day workshop for organisations that want a deeper experience.",
      },
      {
        q: "Can the keynote be customised?",
        a: "Yes. Every engagement begins with a pre-event brief. The keynote is shaped around your audience, your theme, and the outcome you need. No two performances are identical.",
      },
      {
        q: "What audience sizes does Yossi speak to?",
        a: "From 50 to 10,000+. Yossi has delivered to intimate executive gatherings and to main-stage audiences of thousands — including the MDRT Main Stage 2025.",
      },
    ],
  },
  {
    category: "The Man",
    items: [
      {
        q: "Who is Yossi Ghinsberg?",
        a: "In 1981, at age 22, Yossi Ghinsberg survived 21 days alone in the Bolivian Amazon — no food, no fire, no rescue. His memoir Jungle has sold over one million copies in 20 languages and was adapted into a 2017 Hollywood film starring Daniel Radcliffe. He has since spoken to hundreds of thousands of people across six continents, been voted Most Unforgettable Speaker, and built conservation and community projects in the Amazon.",
      },
      {
        q: "What companies has Yossi spoken for?",
        a: "Google, Apple, Microsoft, BMW, American Express, Coca-Cola, Citibank, General Motors, and the Million Dollar Round Table (MDRT), among many others across more than 30 countries.",
      },
      {
        q: "Is there a film about Yossi's story?",
        a: "Yes. Jungle (2017), directed by Greg McLean and starring Daniel Radcliffe as Yossi Ghinsberg. It is available on major streaming platforms.",
      },
    ],
  },
  {
    category: "The Two Techniques",
    items: [
      {
        q: "What are the two signature techniques?",
        a: "Full Sensory Activation and the Snake Breath — two somatic practices that reset the sympathetic nervous system directly through the body, bypassing the mind. They are taught in the 'Real Survival vs Imaginary Survival' keynote and the full-day workshop. Yossi teaches them nowhere else.",
      },
      {
        q: "Can these techniques be learned in a single session?",
        a: "Yes. Both are learnable in a single session — and immediately applicable. Audiences of 500 have learned and practised both in a single keynote.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-bg py-20 md:py-28 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/60 mb-4">
          Questions
        </p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-text max-w-2xl mx-auto">
          Everything you need to know.
        </h1>
        <p className="text-brand-text-secondary text-lg mt-4 max-w-xl mx-auto">
          If the answer isn&apos;t here, it&apos;s one message away.
        </p>
      </section>

      {/* FAQ sections */}
      <section className="bg-brand-bg pb-20">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {faqs.map((section) => (
            <div key={section.category}>
              <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold mb-8 pb-4 border-b border-white/10">
                {section.category}
              </p>
              <div className="space-y-8">
                {section.items.map((item) => (
                  <div key={item.q}>
                    <h2 className="text-brand-text font-heading font-semibold text-lg mb-2">
                      {item.q}
                    </h2>
                    <p className="text-brand-text-secondary leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-surface border-t border-white/10 py-16 px-6 text-center">
        <p className="text-brand-text font-heading font-bold text-2xl md:text-3xl mb-4">
          Still have a question?
        </p>
        <p className="text-brand-text-secondary mb-8">
          Every enquiry is reviewed personally. You&apos;ll hear back within 24 hours.
        </p>
        <Button variant="gold" href="/book-yossi" size="lg">
          Get in Touch
        </Button>
      </section>
    </>
  );
}
