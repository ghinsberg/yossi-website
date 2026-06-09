import { notFound } from "next/navigation";
import Link from "next/link";
import { speakerLocations } from "@/data/locations";
import { keynotes } from "@/data/keynotes";
import Button from "@/components/ui/Button";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";
const OG_IMAGE = `${BASE_URL}/images/headshots/yossi-headshot-1.jpg`;

const agentDetails = {
  carter: {
    name: "Michelle Carter",
    company: "Carter Global Speakers",
    phone: "+1 703 819 2511",
    email: "Michelle@carterglobalspeakers.com",
  },
  encore: {
    name: "Michael Arnot",
    company: "Encore Speakers",
    phone: "+61 (0)422 002 685",
    email: "michael@encorespeakers.com",
  },
  smart: {
    name: "Juanita Cortes Cleves",
    company: "Smart Speakers",
    phone: "+57 313 8985266",
    email: "juanita.cortes@smartspeakers.co",
  },
};

const credentials = [
  "Survived 20 days alone in the Amazon",
  "Book sold 1M+ copies worldwide",
  "Voted Most Unforgettable Speaker",
  "Trusted by Google, Apple, Microsoft, BMW",
];

export function generateStaticParams() {
  return speakerLocations.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = speakerLocations.find((loc) => loc.slug === city);
  if (!location) return {};

  const title = `Keynote Speaker ${location.city} | Yossi Ghinsberg`;
  const description = `Yossi Ghinsberg, keynote speaker in ${location.city}. Survived 20 days alone in the Amazon. Voted Most Unforgettable Speaker. Trusted by Google, Apple, Microsoft, and BMW.`.slice(
    0,
    155
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Yossi Ghinsberg — Keynote Speaker",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
    alternates: {
      canonical: `${BASE_URL}/keynote-speaker/${city}`,
    },
  };
}

export default async function CityKeynotePage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = speakerLocations.find((loc) => loc.slug === city);

  if (!location) {
    notFound();
  }

  const agent = agentDetails[location.agent];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Keynote Speaker ${location.city}`,
    description: `Yossi Ghinsberg, keynote speaker available in ${location.city}, ${location.country}. Survivor of 20 days alone in the Amazon. Voted Most Unforgettable Speaker.`,
    serviceType: "Keynote Speaking",
    provider: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Yossi Ghinsberg",
    },
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: {
        "@type": "Country",
        name: location.country,
      },
    },
    url: `${BASE_URL}/keynote-speaker/${location.slug}`,
    offers: {
      "@type": "Offer",
      url: `${BASE_URL}/book-yossi`,
      description: "Inquire about booking Yossi Ghinsberg",
    },
  };

  return (
    <main>
      {/* JSON-LD */}
      <BreadcrumbSchema
        items={[
          { name: "Keynote Speaker", href: "/keynote-speaker" },
          {
            name: `Keynote Speaker ${location.city}`,
            href: `/keynote-speaker/${location.slug}`,
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">
            {location.region}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Keynote Speaker {location.city}
          </h1>
          <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl leading-relaxed">
            {location.intro}
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

      {/* What organisations book Yossi for */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            What organisations in {location.city} book Yossi for
          </h2>
          <p className="text-brand-text-secondary text-lg max-w-3xl mb-12">
            Every keynote is tailored to your audience, your theme, and the
            outcome you need. These are the three programs most often requested.
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

      {/* About Yossi — condensed */}
      <section className="bg-brand-surface py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">
              The story behind every keynote
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
              A keynote built from 20 days alone in the Amazon.
            </h2>
            <div className="space-y-4 text-brand-text-secondary text-lg leading-relaxed">
              <p>
                In 1981, Yossi Ghinsberg was 22 years old. He got lost in the
                Bolivian Amazon with no food, no map, and no rescue coming. He
                survived 20 days alone before being found.
              </p>
              <p>
                His book about that experience has sold over a million copies.
                It was made into a Hollywood film starring Daniel Radcliffe.
                He has spent the decades since turning what he learned into
                one of the most in-demand keynotes in the world.
              </p>
              <p>
                Voted Most Unforgettable Speaker by event professionals.
                Trusted by Google, Apple, Microsoft, BMW, and hundreds of
                other organisations across every sector and continent.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/story"
                className="text-brand-gold font-medium inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                Read the full story
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">
                Book Yossi in {location.city}
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Ready to book a keynote?
              </h2>
              <p className="text-brand-text-secondary text-lg leading-relaxed mb-8">
                Every engagement begins with a personal conversation. Use the
                booking form or contact the speaker bureau directly for{" "}
                {location.region}.
              </p>
              <Button variant="gold" href="/book-yossi" size="lg">
                Book a Call
              </Button>
            </div>

            <div className="bg-brand-surface rounded-2xl p-8 border border-white/10">
              <p className="text-sm uppercase tracking-wider text-brand-gold mb-1">
                Speaker Bureau — {location.region}
              </p>
              <p className="text-xl font-heading font-semibold text-brand-text mb-1">
                {agent.name}
              </p>
              <p className="text-brand-text-secondary text-sm mb-6">
                {agent.company}
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${agent.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-brand-text-secondary hover:text-brand-gold transition-colors"
                >
                  <span className="text-brand-gold text-xs uppercase tracking-wider w-12">
                    Phone
                  </span>
                  {agent.phone}
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center gap-3 text-brand-text-secondary hover:text-brand-gold transition-colors"
                >
                  <span className="text-brand-gold text-xs uppercase tracking-wider w-12">
                    Email
                  </span>
                  {agent.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
