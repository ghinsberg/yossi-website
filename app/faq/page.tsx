import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "FAQ — Booking, Topics & Speaking Info",
  description:
    "Answers to the most common questions about booking Yossi Ghinsberg for a keynote, his speaking topics, audiences, and how to get in touch.",
};

const faqs = [
  {
    q: "What is Yossi Ghinsberg known for?",
    a: "Yossi Ghinsberg survived 21 days alone in the Amazon rainforest in 1981 — without food, fire, or companions. He wrote Jungle, a memoir that has sold over a million copies worldwide and was adapted into a Hollywood film starring Daniel Radcliffe. He is also the co-founder of Chalalan Ecolodge in Bolivia, built in partnership with the indigenous Uchupiamona people, and is one of the most sought-after keynote speakers in the world.",
  },
  {
    q: "What topics does Yossi Ghinsberg speak on?",
    a: "Yossi's keynotes draw directly from his Amazon survival experience and the philosophy he developed in the decades since. His core topics include: survival and resilience under extreme uncertainty, leadership in the face of the unknown, the Laws of the Jungle — his framework for human potential rooted in nature's own principles, navigating change and adversity, and purpose-driven leadership. His signature keynote is 'From Survival to Legacy.'",
  },
  {
    q: "What types of organisations book Yossi?",
    a: "Yossi speaks at major corporate conferences, financial services events, leadership summits, and industry associations worldwide. Past clients include Google, Apple, Microsoft, BMW, and the MDRT Main Stage (2025). He addresses audiences from a few hundred to 10,000 people.",
  },
  {
    q: "How long is Yossi's keynote?",
    a: "Keynotes typically run 45 to 75 minutes. Yossi also offers extended formats including half-day workshops and masterclasses. The right format depends on your event goals — his team can advise.",
  },
  {
    q: "Does Yossi speak internationally?",
    a: "Yes. Yossi speaks globally and is represented by speaker bureaus across multiple regions: Carter Global Speakers (North America), Encore Speakers (Europe and Australasia), and Smart Speakers (Latin America).",
  },
  {
    q: "How do I book Yossi Ghinsberg for a keynote or event?",
    a: "The fastest route is through one of his booking agents. For North America, contact Michelle Carter at Carter Global Speakers (Michelle@carterglobalspeakers.com, +1 703 819 2511). For Europe and Australasia, contact Michael Arnot at Encore Speakers (michael@encorespeakers.com, +61 422 002 685). For Latin America, contact Juanita Cortes Cleves at Smart Speakers. You can also submit an enquiry directly at yossighinsberg.com/book-yossi.",
  },
  {
    q: "What makes Yossi different from other keynote speakers?",
    a: "Yossi's story is real. There is no metaphor — he actually survived alone in the Amazon for 21 days, lost, without tools, and emerged with a philosophy that has held up across 30 years and thousands of stages. He does not speak about leadership in theory. He speaks about what it takes to keep moving when everything has failed. Audiences consistently describe his talk as the one they remember years later.",
  },
  {
    q: "Has Yossi's story been verified?",
    a: "Yes. Yossi's survival in the Amazon has been documented in his memoir Jungle, a Discovery Channel docudrama, and a 2017 Hollywood feature film. He has been covered by international media for decades.",
  },
  {
    q: "Does Yossi customise his keynote for specific audiences?",
    a: "Yes. While the core story is consistent, Yossi adapts the framing and lessons for the specific industry, challenge, or theme of each event. His team works with event organisers ahead of time to understand context and objectives.",
  },
  {
    q: "Where is Yossi Ghinsberg based?",
    a: "Yossi is based in Byron Bay, Australia, and travels internationally for engagements.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "FAQ", href: "/faq" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="bg-brand-bg min-h-screen pt-28 md:pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-6">

          {/* Header */}
          <div className="mb-14">
            <p className="text-brand-gold text-xs uppercase tracking-[0.2em] font-semibold mb-3">
              Common Questions
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-brand-text-secondary text-lg">
              Everything you need to know about booking Yossi, his speaking topics, and what to expect.
            </p>
          </div>

          {/* FAQ list */}
          <dl className="space-y-10">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-t border-white/10 pt-8">
                <dt className="font-heading font-semibold text-lg text-white mb-3">
                  {q}
                </dt>
                <dd className="text-brand-text-secondary leading-relaxed">
                  {a}
                </dd>
              </div>
            ))}
          </dl>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <p className="text-brand-text-secondary mb-6">
              Have a question not answered here? Reach out directly.
            </p>
            <a
              href="/book-yossi"
              className="inline-block bg-brand-gold text-black font-heading font-bold px-8 py-3 rounded-full hover:bg-brand-gold-light transition-colors"
            >
              Book a Call
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
