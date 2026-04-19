import Button from "@/components/ui/Button";

export const metadata = {
  title: "The Story of Yossi Ghinsberg",
  description:
    "From 21 days alone in the Amazon to Silicon Valley AI pioneer. The biography behind the world's most unforgettable keynote speaker.",
  openGraph: {
    title: "The Story of Yossi Ghinsberg | Yossi Ghinsberg",
    description:
      "From 21 days alone in the Amazon to Silicon Valley AI pioneer. The biography behind the world's most unforgettable keynote speaker.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Story of Yossi Ghinsberg | Yossi Ghinsberg",
    description:
      "From 21 days alone in the Amazon to Silicon Valley AI pioneer. The biography behind the world's most unforgettable keynote speaker.",
  },
};

export default function StoryPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-brand-bg py-24 md:py-32 text-center px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-text">
          Three weeks alone in the Amazon.
        </h1>
        <p className="text-2xl md:text-3xl text-brand-text-secondary mt-4 font-heading">
          No food. No shelter. No rescue coming.
        </p>
        <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-8" />
      </section>

      {/* 2. The Beginning */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-brand-text-secondary text-lg md:text-xl leading-relaxed">
          <p>
            It was 1981. Yossi Ghinsberg was 22 years old, fresh from the
            Israeli Navy, studying philosophy in Tel Aviv, restless in the way
            only the young and alive can be. He wanted to see the world. Not the
            parts on the tourist map. The parts beyond the edge of it.
          </p>
          <p className="mt-8">
            He found his way to Bolivia. And then, following a man who claimed to
            know of hidden gold and uncharted land, he walked into the Bolivian
            Amazon. No roads. No trails. No signal. Just four young men and the
            jungle.
          </p>
        </div>
      </section>

      {/* 3. Bolivia canoe image */}
      <section className="py-8 bg-brand-bg">
        <img
          src="/images/adventure/bolivia-canoe.jpg"
          alt="Yossi Ghinsberg in the Bolivian Amazon"
          className="w-full rounded-none md:max-w-5xl md:mx-auto md:rounded-2xl"
        />
      </section>

      {/* 4. The Fracture */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-brand-text-secondary text-lg md:text-xl leading-relaxed">
          <p>
            The group fell apart in the way that groups do. Slowly, then
            catastrophically. Disagreements. Fear. A guide who may have been
            leading them nowhere. One by one, they went their separate ways, deep
            in territory no map had charted.
          </p>
          <p className="mt-8">
            Yossi&apos;s raft hit a waterfall. He was thrown into the river. When
            the water released him, he was alone. No companion. No one within
            days of walking in any direction. The jungle closed around him.
          </p>
        </div>
      </section>

      {/* 5. Twenty-One Days */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-brand-text-secondary text-lg md:text-xl leading-relaxed">
          <p>
            He had no food. No shelter he didn&apos;t build himself. Around him:
            floods, fever, insects burrowing into his flesh, animals that circled
            in the night. On the sixth day, he woke to find a jaguar watching
            him. He grabbed a can of mosquito repellent and a lighter, created a
            flamethrower, and drove it back.
          </p>
          <p className="mt-8">
            He kept moving. Not because he had a plan. Because stopping meant
            death. He ate what he could find. He built fires against the dark. He
            hallucinated. He prayed. He bargained with whatever was listening. He
            made it to the river.
          </p>
          <p className="mt-8">
            Three weeks after he was declared missing, a search party found him:
            his friend Kevin, and indigenous villagers who had refused to stop
            looking. He spent three months in hospital recovering.
          </p>
        </div>
      </section>

      {/* 6. Rescue photo */}
      <section className="bg-brand-bg py-8">
        <div className="max-w-md mx-auto px-6">
          <img
            src="/images/adventure/rescue-1981.jpg"
            alt="Yossi Ghinsberg after rescue in Bolivia, 1981"
            className="w-full rounded-xl"
          />
          <p className="text-sm text-brand-text-secondary text-center mt-3 italic">
            Yossi after rescue, Bolivia, 1981
          </p>
        </div>
      </section>

      {/* 7. The Transformation — Light background */}
      <section className="bg-brand-light-bg py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-2xl md:text-3xl font-heading font-bold text-brand-bg mb-6">
            The jungle did not break Yossi Ghinsberg. It made him.
          </p>
          <div className="text-brand-bg/80 text-lg md:text-xl leading-relaxed">
            <p>
              What he brought back was not a survival technique or a motivational
              framework. It was a lived understanding of what human beings are
              actually capable of when everything is stripped away. When there is
              no performance, no comfort, no audience. When it is just you and
              the next decision.
            </p>
            <p className="mt-8">
              That understanding became <em className="not-italic font-semibold text-brand-bg">Jungle</em>, a book that has sold over a million copies in more than 20 languages. It became a Hollywood film starring Daniel Radcliffe. Years later, he distilled everything he had learned about leadership and nature into a second book, <em className="not-italic font-semibold text-brand-bg">Laws of the Jungle</em>. Then came two decades of keynotes on the world&apos;s biggest stages.
            </p>
            <p className="mt-8">His TEDxMelbourne talk brought the Amazon story to a new generation.</p>
          </div>
        </div>
      </section>

      {/* 8. The Silicon Valley Chapter */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-gold mb-8">
            The Silicon Valley Chapter
          </h2>
          <div className="text-brand-text-secondary text-lg md:text-xl leading-relaxed">
            <p>
              The Amazon was not the only frontier Yossi explored before anyone
              else got there.
            </p>
            <p className="mt-8">
              Between 2013 and 2017, he was in Silicon Valley, building AI
              companies when artificial intelligence was still an academic
              conversation. His ventures, Blinq and Headbox, were built around
              the concept of Digital Entities: intelligent representations of
              individuals that could assess genuine affinity through a
              three-question framework of identity, reputation, and conduct.
              Blinq was acquired and covered by TechCrunch. Headbox pioneered a
              person-centric, platform-agnostic model of digital identity.
            </p>
            <p className="mt-8">
              He was a decade early. He has always been a decade early.
            </p>
          </div>
        </div>
      </section>

      {/* 8b. Stage photo */}
      <section className="py-8 bg-brand-bg">
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

      {/* 9. The Life After */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-brand-text-secondary text-lg md:text-xl leading-relaxed">
          <p>
            He went back to the Amazon. Not to relive the ordeal, but to give
            something back. He was instrumental in creating the Chalalan
            Ecolodge, a model for indigenous-led eco-tourism run by the
            Uchupiamona people. In 2025, the Uchupiamona Nation officially
            appointed him their Ambassador to the World, a recognition of
            decades of partnership. He helped establish Madidi National Park. He
            worked for seven years in addiction rehabilitation across multiple
            countries. He built businesses. He crossed continents. He kept living
            at the edge.
          </p>
        </div>
      </section>

      {/* 10. Closing */}
      <section className="bg-brand-surface py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-brand-text-secondary text-lg md:text-xl leading-relaxed">
            In 2025, he delivered the keynote at MDRT&apos;s Global Conference
            to 6,000 financial professionals. He has been voted Most
            Unforgettable Speaker. His books have sold over one million copies
            in 20 languages. He speaks to audiences of 10,000 and leaves them
            permanently changed.
          </p>
          <p className="text-brand-text-secondary text-lg md:text-xl leading-relaxed mt-8">
            Some call him the real most interesting man in the world.
          </p>
          <p className="text-brand-text-secondary text-lg md:text-xl leading-relaxed mt-8 italic">
            He just calls it living.
          </p>
          <p className="text-2xl md:text-3xl font-heading font-bold text-brand-gold mt-8">
            Be Brave.
          </p>
        </div>
      </section>

      {/* Credential Stack */}
      <section className="bg-brand-bg py-16 md:py-24">
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
                label: "1M+ Books Sold in 20+ Languages",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V4h-4z" />
                  </svg>
                ),
                label: "Hollywood Film — Daniel Radcliffe",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                ),
                label: "MDRT Main Stage 2025 — 6,000 Attendees",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                ),
                label: "TEDxMelbourne — The Amazon Survival Story",
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

      {/* What audiences leave with */}
      <section className="bg-brand-light-bg py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-bg mb-12 text-center">
            What audiences leave with
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "A new frame for fear",
                body: "Yossi doesn't teach people to eliminate fear. He shows them — through lived example — that fear is information, not a verdict. Audiences leave with a different relationship to uncertainty.",
              },
              {
                title: "Permission to aim higher",
                body: "The Amazon story works because it is real, not theoretical. When a room of 5,000 people hears what one human being survived on instinct alone, the bar for what is possible shifts permanently.",
              },
              {
                title: "One decision they won't put off",
                body: "Every talk ends with the same challenge: what are you waiting for? Not as a slogan. As a direct question. Audiences consistently report that they acted on something within 48 hours of the talk.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-brand-gold/30 pt-6">
                <h3 className="font-heading font-bold text-brand-bg text-lg mb-3">{item.title}</h3>
                <p className="text-brand-bg/70 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="bg-brand-bg py-14 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-brand-text-secondary text-xs uppercase tracking-widest mb-10">
            Trusted by organisations that take their people seriously
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

      {/* 11. CTA */}
      <section className="bg-brand-bg py-16 text-center px-6">
        <p className="text-brand-text-secondary text-base mb-6 max-w-md mx-auto">
          If you are looking for a speaker your audience will still talk about a year from now, this is the conversation to start.
        </p>
        <Button variant="gold" href="/book-yossi" size="lg">
          Book Yossi to Speak
        </Button>
      </section>
    </>
  );
}
