import { notFound } from "next/navigation";
import { keynotes } from "@/data/keynotes";
import Button from "@/components/ui/Button";
import TestimonialCard from "@/components/ui/TestimonialCard";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";
const OG_IMAGE = `${BASE_URL}/images/headshots/yossi-headshot-1.jpg`;

// Per-keynote meta descriptions — keyword-optimised, 150–160 chars
const metaDescriptions: Record<string, string> = {
  "be-brave-in-a-new-world":
    "How to lead with clarity, courage, and creativity when the map runs out. Yossi Ghinsberg's flagship keynote — drawn from 21 days alone in the Bolivian Amazon.",
  "made-not-broken":
    "Resilience, purpose, and the difference between pain and suffering. Yossi Ghinsberg's keynote for teams facing burnout, extreme pressure, and the need to recover.",
  "real-vs-imaginary-survival":
    "A survivor's perspective on chronic stress. Yossi Ghinsberg teaches leaders how to distinguish real danger from imaginary pressure — and return to peak performance.",
};

export function generateStaticParams() {
  return keynotes.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const keynote = keynotes.find((k) => k.slug === slug);
  if (!keynote) return {};

  const description = metaDescriptions[slug] ?? keynote.subtitle;

  return {
    title: keynote.title,
    description,
    openGraph: {
      title: `${keynote.title} | Yossi Ghinsberg`,
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Yossi Ghinsberg — Keynote Speaker" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${keynote.title} | Yossi Ghinsberg`,
      description,
      images: [OG_IMAGE],
    },
    alternates: {
      canonical: `${BASE_URL}/keynotes/${slug}`,
    },
  };
}

export default async function KeynotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const keynote = keynotes.find((k) => k.slug === slug);

  if (!keynote) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: keynote.title,
    alternateName: keynote.subtitle,
    description: keynote.description.replace(/\n/g, " ").trim(),
    serviceType: "Keynote Speaking",
    provider: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Yossi Ghinsberg",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    url: `${BASE_URL}/keynotes/${slug}`,
    offers: {
      "@type": "Offer",
      url: `${BASE_URL}/book-yossi`,
      description: "Inquire about booking this keynote",
    },
    audience: {
      "@type": "Audience",
      audienceType: keynote.bestFor,
    },
  };

  return (
    <main>
      {/* JSON-LD */}
      <BreadcrumbSchema
        items={[
          { name: "Keynotes", href: "/keynotes" },
          { name: keynote.title, href: `/keynotes/${keynote.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          {keynote.flagship && (
            <span className="bg-brand-gold text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Flagship
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4">
            {keynote.title}
          </h1>
          <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl">
            {keynote.subtitle}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="max-w-3xl text-brand-text-secondary text-lg leading-relaxed">
            {keynote.description}
          </p>

          {/* Key Takeaways */}
          <h2 className="text-2xl md:text-3xl font-heading font-bold mt-16 mb-8">
            Your audience will leave with:
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {keynote.takeaways.map((takeaway) => (
              <div
                key={takeaway.title}
                className="bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <h3 className="text-xl font-heading font-semibold text-brand-text">
                  {takeaway.title}
                </h3>
                <p className="text-brand-text-secondary mt-2">
                  {takeaway.description}
                </p>
              </div>
            ))}
          </div>

          {/* Best For / Ideal Audience */}
          <div className="bg-brand-surface rounded-2xl p-8 md:p-12 mt-12">
            <p className="text-sm uppercase tracking-wider text-brand-gold mb-2">
              Ideal Audience
            </p>
            <p className="text-brand-text text-lg">{keynote.bestFor}</p>

            <p className="text-sm uppercase tracking-wider text-brand-gold mt-8 mb-2">
              Solves
            </p>
            <ul className="space-y-2">
              {keynote.solves.map((item) => (
                <li
                  key={item}
                  className="text-brand-text-secondary flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Format Options */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              Available Formats
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-heading font-semibold text-brand-text">
                  45-90 Minute Keynote
                </h3>
                <p className="text-brand-text-secondary mt-2">
                  Main-stage plenary for audiences of 50 to 10,000+.
                </p>
              </div>
              <a
                href="/keynotes#workshop"
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-brand-gold/50 transition-colors block"
              >
                <h3 className="text-lg font-heading font-semibold text-brand-text">
                  Full-Day Workshop
                </h3>
                <p className="text-brand-text-secondary mt-2">
                  When a keynote isn&apos;t enough, Yossi designs and leads a full day. Shape, length, and location decided with you.
                </p>
                <p className="text-brand-gold text-xs uppercase tracking-widest mt-3">
                  See the workshop →
                </p>
              </a>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-heading font-semibold text-brand-text">
                  Pre-Event Briefing
                </h3>
                <p className="text-brand-text-secondary mt-2">
                  Customised briefing for every engagement to tailor the keynote
                  to your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <TestimonialCard
            quote={keynote.testimonial.quote}
            author={keynote.testimonial.author}
            title={keynote.testimonial.title}
            company={keynote.testimonial.company}
            variant="featured"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gold py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-black">
            Book This Keynote
          </h2>
          <p className="text-black/70 mt-4 text-lg max-w-2xl mx-auto">
            Every engagement begins with a personal conversation to tailor the
            experience to your audience.
          </p>
          <div className="mt-8">
            <Button
              variant="gold"
              href="/book-yossi"
              size="lg"
              className="bg-black text-white hover:bg-black/80"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
