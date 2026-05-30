import Button from "@/components/ui/Button";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";
const OG_IMAGE = `${BASE_URL}/images/headshots/yossi-headshot-1.jpg`;

export const metadata = {
  title: "The Story of Yossi Ghinsberg",
  description:
    "From 21 days alone in the Bolivian Amazon to a bestselling jungle memoir and the Daniel Radcliffe film — the biography behind one of the world's most unforgettable speakers.",
  keywords: [
    "yossi ghinsberg jungle",
    "yossi ghinsberg book jungle",
    "jungle book yossi ghinsberg",
    "yossi ghinsberg daniel radcliffe",
    "yossi ghinsberg jungle film",
    "bolivian amazon survival",
    "yossi ghinsberg biography",
  ],
  openGraph: {
    title: "The Story of Yossi Ghinsberg | Yossi Ghinsberg",
    description:
      "From 21 days alone in the Bolivian Amazon to a bestselling jungle memoir and the Daniel Radcliffe film — the biography of Yossi Ghinsberg.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Yossi Ghinsberg" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "The Story of Yossi Ghinsberg | Yossi Ghinsberg",
    description:
      "From 21 days alone in the Bolivian Amazon to a bestselling jungle memoir and the Daniel Radcliffe film — the biography of Yossi Ghinsberg.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/story`,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Story of Yossi Ghinsberg — 21 Days Alone in the Amazon",
  description:
    "From 21 days alone in the Bolivian Amazon in 1981 to a bestselling memoir, a Hollywood film, and four decades of building. The biography of Yossi Ghinsberg.",
  url: `${BASE_URL}/story`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${BASE_URL}/story`,
  },
  author: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Yossi Ghinsberg",
  },
  publisher: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Yossi Ghinsberg",
  },
  about: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
  },
  image: OG_IMAGE,
  datePublished: "2024-01-01",
  dateModified: "2025-01-01",
  keywords: [
    "Yossi Ghinsberg",
    "Amazon survival",
    "Bolivian Amazon 1981",
    "jungle survival story",
    "keynote speaker biography",
    "Jungle book",
    "Chalalan Ecolodge",
    "survival story",
    "resilience",
    "leadership speaker",
  ],
};

export default function StoryPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Yossi's Story", href: "/story" }]} />
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ── HERO ── */}
      <section className="bg-brand-bg py-24 md:py-32 text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-text">
          Three weeks alone in the Amazon.
        </h1>
        <p className="text-2xl md:text-3xl text-brand-text-secondary mt-4 font-heading">
          No food. No shelter. No rescue coming.
        </p>
        <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-8" />
      </section>

      {/* ── 1981. THE EDGE OF THE MAP. ── */}
      <section className="bg-brand-bg py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-brand-gold mb-5">
            1981. Tel Aviv. The edge of the map.
          </h2>
          <p className="text-brand-text-secondary text-lg leading-relaxed">
            Yossi Ghinsberg was 22, fresh from the Israeli Navy, studying
            philosophy at Tel Aviv University. He found his way to Bolivia.
            A stranger claimed to know of hidden gold and uncharted land.
            Yossi walked into the Bolivian Amazon with four men and no way
            back.
          </p>
        </div>
      </section>

      {/* Bolivia canoe image */}
      <section className="py-6 bg-brand-bg">
        <img
          src="/images/adventure/bolivia-canoe.jpg"
          alt="Yossi Ghinsberg in the Bolivian Amazon"
          className="w-full rounded-none md:max-w-5xl md:mx-auto md:rounded-2xl"
        />
      </section>

      {/* ── THE GROUP COLLAPSED. ── */}
      <section className="bg-brand-bg py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-brand-gold mb-5">
            The group collapsed. The raft hit a waterfall. He was alone.
          </h2>
          <p className="text-brand-text-secondary text-lg leading-relaxed">
            Fear. Disagreements. A guide who may have been leading them
            nowhere. One by one, they separated. Then Yossi&apos;s raft hit
            a waterfall. When the river released him, there was no one within
            days of walking in any direction.
          </p>
        </div>
      </section>

      {/* ── DAY 6. A JAGUAR. ── */}
      <section className="bg-brand-bg py-14 md:py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-brand-gold mb-5">
            Day 6. A jaguar watched him sleep.
          </h2>
          <p className="text-brand-text-secondary text-lg leading-relaxed">
            No food. No shelter he didn&apos;t build. Floods, fever, insects
            burrowing into his flesh. He woke to find a jaguar watching him.
            He grabbed mosquito repellent and a lighter, made a flamethrower,
            and drove it back.
          </p>
          <p className="text-brand-text-secondary text-lg leading-relaxed mt-5">
            He kept moving. Stopping meant death. He ate what he could find,
            not much. No gun, no knife, no fire, the horror came at night,
            and hallucinations were the only respite. He didn&apos;t give up;
            against all odds, he made it to the riverbank.
          </p>
          <p className="text-brand-gold font-semibold text-lg mt-8">
            Twenty days alone amidst the worst rainy season in decades. Kevin
            Gale, who refused to stop searching, and the indigenous Uchupiamona
            hunters that accompanied him, found him alive.
          </p>
        </div>
      </section>

      {/* Rescue photo */}
      <section className="bg-brand-bg py-6">
        <div className="max-w-md mx-auto px-6">
          <img
            src="/images/adventure/rescue-1981.jpg"
            alt="Yossi Ghinsberg after rescue in Bolivia, 1981"
            className="w-full rounded-xl"
          />
          <p className="text-sm text-brand-text-secondary text-center mt-3 italic">
            After rescue, Bolivia, 1981
          </p>
        </div>
      </section>

      {/* ── THE BOOK. THE FILM. ── */}
      <section className="bg-brand-light-bg py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-brand-bg mb-5">
            He wrote a book. Millions of people worldwide read it.
          </h2>
          <p className="text-brand-bg/80 text-lg leading-relaxed">
            The original Hebrew edition appeared in 1985:{" "}
            <em className="not-italic font-semibold">Back from Tuichi</em>.
            The English title became{" "}
            <em className="not-italic font-semibold">Jungle</em>. A second book
            followed:{" "}
            <em className="not-italic font-semibold">Laws of the Jungle</em>,
            applying what the Amazon taught him to leadership.
          </p>
          <p className="text-brand-bg/80 text-lg leading-relaxed mt-5">
            In 2017, director Greg McLean made it into a film starring Daniel
            Radcliffe. It premiered as the opening night gala at the Melbourne
            International Film Festival. The movie tie-in edition carries a
            foreword by Radcliffe himself.
          </p>
        </div>

        {/* Book stat strip */}
        <div className="max-w-3xl mx-auto px-6 mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "1M+", label: "Copies sold" },
              { number: "20", label: "Languages" },
              { number: "2017", label: "Hollywood film" },
              { number: "MIFF", label: "Opening night gala" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-brand-bg/10 rounded-xl p-5 text-center"
              >
                <p className="text-2xl font-heading font-bold text-brand-bg">
                  {stat.number}
                </p>
                <p className="text-brand-bg/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE JUNGLE HE GAVE BACK ── */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-brand-gold mb-5">
            The jungle he gave back.
          </h2>
          <p className="text-brand-text-secondary text-lg leading-relaxed">
            He returned to the Amazon. Not to relive. To do something with it.
          </p>
          <p className="text-brand-text-secondary text-lg leading-relaxed mt-5">
            He was instrumental in founding the Chalalan Ecolodge in
            Bolivia&apos;s Madidi National Park and helped establish the park
            itself. The lodge is owned and run entirely by the Uchupiamona
            people of San Jos&eacute; de Uchupiamonas.
          </p>
        </div>

        {/* Achievement grid */}
        <div className="max-w-3xl mx-auto px-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                label: "National Geographic Traveler, 2002",
                value:
                  "Named one of the 20 most important tourist destinations in the world.",
              },
              {
                label: "Equator Prize, UNDP, 2008",
                value:
                  "The world's leading recognition for indigenous-led conservation.",
              },
              {
                label: "Community impact",
                value:
                  "~40 local jobs. Health services and schools for 750 people.",
              },
              {
                label: "Notable guests",
                value:
                  "Brad Pitt, Harrison Ford, Leonardo DiCaprio, and the King of Sweden. They came because the community built something worth coming to.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-xl p-5"
              >
                <p className="text-brand-gold text-xs uppercase tracking-wider font-semibold mb-2">
                  {item.label}
                </p>
                <p className="text-brand-text-secondary text-sm leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ambassador callout */}
        <div className="max-w-3xl mx-auto px-6 mt-6">
          <div className="border-l-4 border-brand-gold pl-6 py-2">
            <p className="text-brand-text font-semibold text-lg leading-snug">
              Ambassador of the Uchupiamona Nation to the World.
            </p>
            <p className="text-brand-text-secondary text-sm mt-2">
              Appointed by Magna Asamblea. Signed by the community president,
              the territorial corregidor, and the sub-alcalde. Not an honorary
              title. A charge.
            </p>
          </div>
        </div>

        {/* CITA */}
        <div className="max-w-3xl mx-auto px-6 mt-10">
          <p className="text-brand-text-secondary text-lg leading-relaxed">
            He also served as Vice President of CITA &mdash; the Center for
            Research and Treatment of Addiction &mdash; helping establish
            twelve clinics in twelve cities around the world. Work that rarely
            appears in the speaker biography. It is part of the story
            regardless.
          </p>
        </div>
      </section>

      {/* ── FORTY YEARS. THE STORY STILL TRAVELS. ── */}
      <section className="bg-brand-surface py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-brand-text mb-5">
            Forty years. The story still travels.
          </h2>
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {/* Discovery Channel — links to full episode on YouTube */}
            <a
              href="https://www.youtube.com/watch?v=myPx-zAA_1Q"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-bg/50 rounded-xl p-6 border border-white/10 hover:border-brand-gold/40 hover:bg-brand-bg/80 transition-all group block"
            >
              <p className="text-brand-gold text-xs uppercase tracking-wider font-semibold mb-3">
                Discovery Channel, 2005
              </p>
              <p className="text-brand-text font-semibold mb-2">
                I Shouldn&apos;t Be Alive
              </p>
              <p className="text-brand-text-secondary text-sm leading-relaxed mb-4">
                Season 1, Episode 3. The 21 days dramatised for television.
                Twenty-four years after the rescue.
              </p>
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-wider group-hover:underline">
                Watch full episode →
              </span>
            </a>

            {/* Wondery — links to Season 32 on Wondery */}
            <a
              href="https://wondery.com/shows/against-the-odds/season/32/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-bg/50 rounded-xl p-6 border border-white/10 hover:border-brand-gold/40 hover:bg-brand-bg/80 transition-all group block"
            >
              <p className="text-brand-gold text-xs uppercase tracking-wider font-semibold mb-3">
                Wondery / Amazon Podcasts, 2023
              </p>
              <p className="text-brand-text font-semibold mb-2">
                Against The Odds — Season 32
              </p>
              <p className="text-brand-text-secondary text-sm leading-relaxed mb-4">
                &ldquo;Lost in the Rainforest&rdquo; — a four-episode narrative
                series. Forty-two years after the rescue.
              </p>
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-wider group-hover:underline">
                Listen on Wondery →
              </span>
            </a>
          </div>
          <p className="text-brand-text-secondary text-lg mt-10 italic">
            Stories that are true don&apos;t expire.
          </p>
        </div>
      </section>

      {/* ── MR SLEEP AND THE FLYING GREEN TOAD ── */}
      <section className="bg-brand-bg py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-brand-gold mb-5">
            Mr Sleep and the Flying Green Toad.
          </h2>
          <p className="text-brand-text-secondary text-lg leading-relaxed">
            In 2008, Yossi released an album of world music and global fusion
            with musicians Avishai Barnatan and Amir Paiss. Thirteen tracks.
            Every lyric written by him.
          </p>
          <p className="text-brand-text-secondary text-lg leading-relaxed mt-4">
            &ldquo;A musical journey that will enchant children and adults alike.&rdquo;
            A completely different side of the same man. Available on Spotify
            and Apple Music.
          </p>
          <div className="flex flex-wrap gap-4 mt-7">
            <a
              href="https://open.spotify.com/track/5itX3vGLG1W2Ym8kEbisEB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold border border-brand-gold/40 px-5 py-2.5 rounded-full hover:bg-brand-gold/10 transition-colors"
            >
              Listen on Spotify
            </a>
            <a
              href="https://music.apple.com/au/album/mr-sleep-and-the-flying-green-toad/275222572"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-text-secondary border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/5 transition-colors"
            >
              Apple Music
            </a>
          </div>
        </div>
      </section>

      {/* ── THE SILICON VALLEY CHAPTER ── */}
      <section className="bg-brand-bg py-14 md:py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-brand-gold mb-5">
            He doesn&apos;t only speak about courage. He attempts it.
          </h2>
          <p className="text-brand-text-secondary text-lg leading-relaxed">
            Between 2013 and 2017, he found himself in Silicon Valley,
            building companies around AI and digital identity before either
            concept had a mainstream name. Two ventures: Blinq and Headbox.
          </p>
          <p className="text-brand-text-secondary text-lg leading-relaxed mt-5">
            Not a conventional tech founder. A curious man who showed up,
            surrounded by people far more experienced, applying what the jungle
            taught him: the ones who survive are not always the most qualified.
            Sometimes they are just the ones who showed up.
          </p>
          <p className="text-brand-text text-lg mt-5 font-medium">
            The ventures did not change the world. He has the bruises to prove
            he tried. That is why, when he speaks about being brave in a new
            world, it lands.
          </p>
        </div>
      </section>

      {/* Stage photo */}
      <section className="py-6 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-6">
          <img
            src="/images/stage/on-stage.jpg"
            alt="Yossi Ghinsberg keynoting at ASPIRE conference, ICE Krakow, 2017"
            className="w-full rounded-xl"
          />
          <p className="text-sm text-brand-text-secondary text-center mt-3 italic">
            ASPIRE conference, ICE Krakow, 2017. 2,000 attendees
          </p>
        </div>
      </section>

      {/* ── ON STAGE ── */}
      <section className="bg-brand-light-bg py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-brand-bg mb-5">
            On stage. Still the room.
          </h2>
          <p className="text-brand-bg/80 text-lg leading-relaxed">
            He speaks to audiences of 10,000. He speaks to boardrooms of
            twelve. One story. Whoever is in the room.
          </p>
        </div>

        {/* Stage stat grid */}
        <div className="max-w-3xl mx-auto px-6 mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "6.6 / 7.0", label: "CoreNet Global rating" },
              { number: "6,000", label: "MDRT 2025, Miami Beach" },
              { number: "#1", label: "Most Unforgettable Speaker" },
              { number: "Clinton · Branson · Taleb", label: "Same programmes" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-brand-bg/10 rounded-xl p-5 text-center"
              >
                <p className="text-lg font-heading font-bold text-brand-bg leading-tight">
                  {stat.number}
                </p>
                <p className="text-brand-bg/60 text-xs mt-2 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="bg-brand-surface border-y border-white/10 py-14 px-6 text-center">
        <p className="text-brand-text-secondary text-lg max-w-xl mx-auto mb-6">
          The story you just read is what he brings to your stage.
          Every keynote is built on what actually happened.
        </p>
        <Button variant="gold" href="/book-yossi" size="lg">
          Check Availability
        </Button>
      </section>

      {/* ── LINO CAMBI ── */}
      <section className="bg-brand-bg py-16 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-brand-gold text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            The next chapter
          </p>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-brand-text mb-8 leading-tight">
            He doesn&apos;t stop at the edge.<br className="hidden md:block" /> He builds there.
          </h2>
          <p className="text-brand-text-secondary text-lg leading-relaxed">
            In May 2024, Yossi and Paul Templer signed the deed on a piece of
            land in South Crete. Ten thousand square metres overlooking the
            Libyan Sea.
          </p>
          <p className="text-brand-text-secondary text-lg leading-relaxed mt-5">
            Paul Templer is a Zimbabwean-born adventurer who, in 1996, while
            leading an expedition on the Zambezi River, fought a hippopotamus
            for eight minutes and won. Today, he is a respected{" "}
            <a
              href="https://www.amazon.com/Marked-Life-Finding-Grace-Expect-ebook/dp/B0BG63WWGQ/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1669091818&sr=8-1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold underline underline-offset-2 decoration-brand-gold/50 hover:decoration-brand-gold transition-colors"
            >
              author
            </a>
            , entrepreneur, and philanthropist. The two men who should not be
            alive have connected and decided to build a dream together.
          </p>
          <p className="text-brand-text-secondary text-lg leading-relaxed mt-5">
            They are calling it Lino Cambi &mdash; a boutique resort and
            longevity spa. Six to eight suites. Blue Zone cuisine. Overlooking
            the Libyan Sea. Opening June 2026. Not a retirement. A place where
            people who are done with noise can come to remember what matters.
          </p>
          <blockquote className="mt-10 border-l-4 border-brand-gold pl-6 py-1">
            <p className="text-xl md:text-2xl text-brand-text-secondary italic leading-relaxed">
              &ldquo;Nothing shouts. Everything softly whispers.&rdquo;
            </p>
          </blockquote>
          <div className="mt-8">
            <a
              href="https://linocambi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold border border-brand-gold/40 px-5 py-2.5 rounded-full hover:bg-brand-gold/10 transition-colors"
            >
              Visit linocambi.com
            </a>
          </div>
        </div>
      </section>

      {/* ── CREDENTIAL STACK ── */}
      <section className="bg-brand-bg py-14 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ),
                label: "Voted Most Unforgettable Speaker",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zM12 16c-1.1 0-2-.45-2-1h-1v-2h1c0-.55.9-1 2-1s2 .45 2 1h1v2h-1c0 .55-.9 1-2 1zm-8-2V8h4v1H5v4h3v1H4zm16 0h-4v-1h3V9h-3V8h4v6z" />
                  </svg>
                ),
                label: "1M+ Books Sold in 20 Languages",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V4h-4z" />
                  </svg>
                ),
                label: "Hollywood Film, Starring Daniel Radcliffe",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                ),
                label: "MDRT Main Stage 2025, 6,000 Attendees",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                  </svg>
                ),
                label: "Equator Prize — UNDP, 2008",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <p className="text-brand-text text-sm font-medium leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT AUDIENCES LEAVE WITH ── */}
      <section className="bg-brand-light-bg py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-bg mb-12 text-center">
            What audiences leave with
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "A new frame for fear",
                body: "Not a technique. A lived example. Fear is information, not a verdict. They leave with a different relationship to uncertainty.",
              },
              {
                title: "Permission to aim higher",
                body: "When a room of 5,000 hears what one person survived on instinct alone, the bar for what is possible shifts permanently.",
              },
              {
                title: "One decision they won't put off",
                body: "Every talk ends the same way: what are you waiting for? Not a slogan. A direct question. Audiences act on something within 48 hours.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-brand-gold/30 pt-6">
                <h3 className="font-heading font-bold text-brand-bg text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-bg/70 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="bg-brand-bg py-14 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-brand-text-secondary text-xs uppercase tracking-widest mb-10">
            Trusted by organisations that believe people are their greatest frontier.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-50">
            {["google", "apple", "microsoft", "bmw", "ypo", "mdrt"].map((logo) => (
              <img
                key={logo}
                src={`/images/logos/${logo}.svg`}
                alt={logo}
                className="h-6 w-auto grayscale invert brightness-200"
              />
            ))}
          </div>
          <p className="text-center text-brand-text-secondary/50 text-xs mt-10">
            Google · Apple · Microsoft · BMW · YPO · MDRT · Coca-Cola · IBM · American Express · Cunard
          </p>
        </div>
      </section>

      {/* ── BOOKS & FILM ── */}
      <section className="bg-brand-bg py-20 md:py-28 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold text-center mb-3">
            The story beyond the stage
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text text-center mb-14">
            The book. The sequel. The film.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

            <div className="flex flex-col items-center text-center">
              <div className="w-44 shadow-2xl shadow-black/60 mb-6 rounded overflow-hidden">
                <img
                  src="/images/books/jungle-book.jpg"
                  alt="Jungle by Yossi Ghinsberg"
                  className="w-full"
                />
              </div>
              <p className="text-brand-gold text-[10px] uppercase tracking-widest mb-1">Book</p>
              <h3 className="font-heading font-bold text-brand-text text-lg mb-2">Jungle</h3>
              <p className="text-brand-text-secondary text-sm leading-relaxed mb-5">
                The survival memoir. Over one million copies. 20 languages.
              </p>
              <a
                href="https://www.amazon.com/Jungle-Harrowing-Adventure-Danger-Survival/dp/1849538824"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-semibold text-brand-gold border border-brand-gold/40 px-5 py-2.5 hover:bg-brand-gold/10 transition-colors"
              >
                Buy on Amazon
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-44 shadow-2xl shadow-black/60 mb-6 rounded overflow-hidden">
                <img
                  src="/images/books/laws-of-the-jungle-book.jpg"
                  alt="Laws of the Jungle by Yossi Ghinsberg"
                  className="w-full"
                />
              </div>
              <p className="text-brand-gold text-[10px] uppercase tracking-widest mb-1">Book</p>
              <h3 className="font-heading font-bold text-brand-text text-lg mb-2">Laws of the Jungle</h3>
              <p className="text-brand-text-secondary text-sm leading-relaxed mb-5">
                Nine revelations from the Amazon. Jaguars don&apos;t need
                self-help books. Neither should you.
              </p>
              <a
                href="https://www.amazon.com/Laws-Jungle-Jaguars-Self-help-Books/dp/0977171914"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-semibold text-brand-gold border border-brand-gold/40 px-5 py-2.5 hover:bg-brand-gold/10 transition-colors"
              >
                Buy on Amazon
              </a>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-44 shadow-2xl shadow-black/60 mb-6 rounded overflow-hidden">
                <img
                  src="/images/books/jungle-book-usa.jpg"
                  alt="Jungle — the film starring Daniel Radcliffe"
                  className="w-full"
                />
              </div>
              <p className="text-brand-gold text-[10px] uppercase tracking-widest mb-1">Film</p>
              <h3 className="font-heading font-bold text-brand-text text-lg mb-2">Jungle</h3>
              <p className="text-brand-text-secondary text-sm leading-relaxed mb-5">
                Starring Daniel Radcliffe. Directed by Greg McLean. A
                harrowing true story of adventure, danger and survival.
              </p>
              <a
                href="https://www.amazon.com/Jungle-Daniel-Radcliffe/dp/B076HD7XQY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-semibold text-brand-gold border border-brand-gold/40 px-5 py-2.5 hover:bg-brand-gold/10 transition-colors"
              >
                Watch on Amazon
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-bg py-16 text-center px-6 border-t border-white/5">
        <p className="text-brand-text-secondary text-base mb-6 max-w-md mx-auto">
          If you are looking for a speaker your audience will still talk about
          a year from now, this is the conversation to start.
        </p>
        <Button variant="gold" href="/book-yossi" size="lg">
          Book Yossi to Speak
        </Button>
      </section>
    </>
  );
}
