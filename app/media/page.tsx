import Button from "@/components/ui/Button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Books",
  description:
    "Bestselling author of Jungle (1M+ copies, 20 languages). Daniel Radcliffe film. Discovery Channel. TEDx. Press kit and speaker resources.",
  openGraph: {
    title: "Media & Books | Yossi Ghinsberg",
    description:
      "Bestselling author of Jungle (1M+ copies, 20 languages). Daniel Radcliffe film. Discovery Channel. TEDx. Press kit and speaker resources.",
    images: [
      {
        url: "https://yossighinsberg.com/images/headshots/yossi-headshot-1.jpg",
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & Books | Yossi Ghinsberg",
    description:
      "Bestselling author of Jungle (1M+ copies, 20 languages). Daniel Radcliffe film. Discovery Channel. TEDx. Press kit and speaker resources.",
    images: ["https://yossighinsberg.com/images/headshots/yossi-headshot-1.jpg"],
  },
};

const mediaLogos = [
  { name: "Discovery Channel", src: "/images/media/discovery-channel.svg" },
  { name: "Larry King", src: "/images/media/larry-king.svg" },
  { name: "TEDx", src: "/images/media/tedx.svg" },
  { name: "TechCrunch", src: "/images/media/techcrunch.svg" },
  { name: "Cunard", src: "/images/media/cunard.svg" },
  { name: "YPO", src: "/images/media/ypo.svg" },
];

export default function MediaPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-brand-bg py-24 md:py-32 text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-text">
          Media &amp; Books
        </h1>
        <p className="text-lg md:text-xl text-brand-text-secondary mt-4 max-w-2xl mx-auto leading-relaxed">
          From bestselling books to a Hollywood film, Discovery Channel features,
          and stages around the world &mdash; Yossi&apos;s story has reached
          millions across every medium.
        </p>
        <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-8" />
      </section>

      {/* 2. As Seen In */}
      <section className="bg-brand-bg pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-brand-text-secondary mb-10">
            As Seen In
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {mediaLogos.map((logo) => (
              <div key={logo.name} className="flex flex-col items-center gap-2">
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
                />
                <span className="text-xs text-brand-text-secondary/60">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Books Section */}
      <section className="bg-brand-light-bg py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 text-center mb-4">
            Books
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-xl mx-auto">
            Two books that distill a lifetime of survival, leadership, and the
            wisdom of nature.
          </p>

          {/* Jungle */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
            <div className="flex justify-center">
              <div className="w-56 md:w-64 aspect-[2/3] bg-gray-900 rounded-lg shadow-2xl flex flex-col items-center justify-center p-8 text-center">
                <span className="text-brand-gold text-xs uppercase tracking-[0.2em] mb-2">
                  International Bestseller
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
                  Jungle
                </h3>
                <p className="text-gray-400 text-sm mt-2">Yossi Ghinsberg</p>
                <div className="w-8 h-0.5 bg-brand-gold mt-4" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                Jungle
              </h3>
              <p className="text-brand-gold font-semibold text-sm uppercase tracking-wide mt-1 mb-4">
                International Bestseller
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The gripping true story of survival that captivated readers
                worldwide. Lost and alone in the Bolivian Amazon for 21 days,
                Yossi faced starvation, predators, and the limits of human
                endurance &mdash; and emerged with a story that changed millions
                of lives.
              </p>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">&#9679;</span>
                  1M+ copies sold worldwide
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">&#9679;</span>
                  Published in 20+ languages
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">&#9679;</span>
                  Available as Audible audiobook, narrated by Yossi
                </li>
              </ul>
              <Button variant="gold" href="#">
                Buy on Amazon &rarr;
              </Button>
            </div>
          </div>

          {/* Laws of the Jungle */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                Laws of the Jungle
              </h3>
              <p className="text-brand-teal font-semibold text-sm uppercase tracking-wide mt-1 mb-4">
                Leadership &amp; Nature
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                What can the jungle teach us about leading through disruption?
                Published by Brockman Inc., this book applies nature&apos;s
                principles to modern leadership &mdash; from resilience and
                adaptation to the ecosystems that sustain high-performing teams.
              </p>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal mt-1">&#9679;</span>
                  Published by Brockman Inc.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal mt-1">&#9679;</span>
                  ISBN: 978-1-7225-0053-9
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal mt-1">&#9679;</span>
                  Nature&apos;s principles applied to leadership
                </li>
              </ul>
              <Button variant="teal" href="#">
                Buy on Amazon &rarr;
              </Button>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <div className="w-56 md:w-64 aspect-[2/3] bg-brand-surface rounded-lg shadow-2xl flex flex-col items-center justify-center p-8 text-center">
                <span className="text-brand-teal text-xs uppercase tracking-[0.2em] mb-2">
                  Leadership
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight">
                  Laws of the Jungle
                </h3>
                <p className="text-gray-400 text-sm mt-2">Yossi Ghinsberg</p>
                <div className="w-8 h-0.5 bg-brand-teal mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Film Section */}
      <section className="bg-brand-bg py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text text-center mb-4">
            The Film
          </h2>
          <p className="text-center text-brand-text-secondary mb-16 max-w-xl mx-auto">
            Yossi&apos;s survival story brought to life on the big screen.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video embed */}
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-900">
              <iframe
                src="https://www.youtube.com/embed/jS_QLBLKPMU"
                title="Jungle (2017) Official Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-text">
                Jungle (2017)
              </h3>
              <p className="text-brand-gold text-sm uppercase tracking-wide font-semibold mt-1 mb-4">
                Starring Daniel Radcliffe
              </p>
              <p className="text-brand-text-secondary leading-relaxed mb-6">
                Directed by Greg McLean, this feature film brings Yossi&apos;s
                harrowing 21-day survival in the Bolivian Amazon to vivid
                cinematic life. Daniel Radcliffe delivers a raw, physical
                performance that captures the terror and triumph of one
                man&apos;s fight to stay alive against impossible odds.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-brand-surface text-brand-text-secondary">
                  Drama
                </span>
                <span className="px-3 py-1 rounded-full bg-brand-surface text-brand-text-secondary">
                  Adventure
                </span>
                <span className="px-3 py-1 rounded-full bg-brand-surface text-brand-text-secondary">
                  Based on a True Story
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TV Section */}
      <section className="bg-brand-surface py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text mb-4">
            Television
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-12" />

          <div className="bg-brand-bg/50 rounded-2xl p-8 md:p-12">
            <p className="text-brand-gold text-sm uppercase tracking-[0.2em] font-semibold mb-2">
              Discovery Channel / Animal Planet
            </p>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-text mb-2">
              &ldquo;I Shouldn&apos;t Be Alive&rdquo;
            </h3>
            <p className="text-brand-text-secondary text-sm mb-6">
              Season 1, Episode 6 &mdash; &ldquo;Escape from the
              Amazon&rdquo; (2005)
            </p>
            <p className="text-brand-text-secondary leading-relaxed max-w-2xl mx-auto">
              Yossi&apos;s survival story was dramatised for the hit Discovery
              Channel series that chronicles real-life tales of people who
              narrowly escaped death. The episode takes viewers deep into the
              Bolivian Amazon, recreating the 21 days that would change
              Yossi&apos;s life forever.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Press Kit */}
      <section className="bg-brand-bg py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-text mb-4">
            Press &amp; Media Inquiries
          </h2>
          <p className="text-brand-text-secondary leading-relaxed mb-8">
            Need materials for your event? High-resolution photos, bios, and
            speaker one-sheets are available on request.
          </p>
          <div className="relative inline-block group">
            <button
              disabled
              className="rounded-full px-6 py-3 text-sm border border-brand-gold/40 text-brand-gold/40 font-semibold cursor-not-allowed"
            >
              Download Press Kit
            </button>
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Coming Soon
            </span>
          </div>
          <p className="text-brand-text-secondary text-sm mt-8">
            For press inquiries, contact{" "}
            <a
              href="mailto:michael@encorespeakers.com"
              className="text-brand-gold hover:text-brand-gold-light transition-colors underline underline-offset-4"
            >
              michael@encorespeakers.com
            </a>
          </p>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="bg-brand-gold py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
            Bring Yossi to Your Next Event
          </h2>
          <p className="text-black/70 mb-8 max-w-xl mx-auto">
            The story that inspired a bestseller, a Hollywood film, and millions
            of people &mdash; delivered live to your audience.
          </p>
          <Button
            variant="outline"
            size="lg"
            href="/book-yossi"
            className="border-black text-black hover:bg-black hover:text-brand-gold"
          >
            Book Yossi &rarr;
          </Button>
        </div>
      </section>
    </>
  );
}
