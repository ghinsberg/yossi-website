import Button from "@/components/ui/Button";

export const metadata = {
  title: "The Story",
  description:
    "In 1981, Yossi Ghinsberg survived 21 days alone in the Bolivian Amazon. Then he built AI companies in Silicon Valley. The story behind the speaker voted Most Unforgettable.",
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
            The group fell apart in the way that groups do — slowly, then
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
            Three weeks after he was declared missing, a search party found him —
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
              That understanding became a book. Then a global bestseller in 20
              languages. Then a Hollywood film with Daniel Radcliffe. Then two
              decades of keynotes on the world&apos;s biggest stages.
            </p>
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
              Between 2013 and 2017, he was in Silicon Valley — building AI
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

      {/* 9. The Life After */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-brand-text-secondary text-lg md:text-xl leading-relaxed">
          <p>
            He went back to the Amazon. Not to relive the ordeal, but to give
            something back. He was instrumental in creating the Chalalan
            Ecolodge — a model for indigenous-led eco-tourism run by the
            Uchupiamona people. He helped establish Madidi National Park. He
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
            He has shared stages with Richard Branson, Bill Clinton, Queen Noor,
            Steve Ballmer, Nassim Taleb, Deepak Chopra, and Steve Irwin. He has
            been voted Most Unforgettable Speaker. His books have sold millions
            of copies in 20 languages. He speaks to audiences of 10,000 and
            leaves them permanently changed.
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

      {/* 11. CTA */}
      <section className="bg-brand-bg py-16 text-center">
        <Button variant="gold" href="/book-yossi" size="lg">
          Book Yossi to Speak
        </Button>
      </section>
    </>
  );
}
