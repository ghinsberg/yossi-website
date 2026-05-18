import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Yossi Ghinsberg | Beyond the Keynote",
  description:
    "Transformational workshops, the Uchupiamona Nation, Chalalan, Lino Cambi, and a living relationship with the Amazon. The full picture of who Yossi is.",
};

export default function YossiPage() {
  return (
    <main className="bg-brand-bg">

      {/* Hero — full-bleed portrait */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src="/images/stage/reel-placeholder.jpg"
          alt="Yossi Ghinsberg in the Andes"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 25%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg/60 via-brand-bg/10 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 md:pb-28">
          <p className="text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-4">Who Yossi is</p>
          <h1 className="font-heading font-bold text-white text-4xl md:text-6xl leading-none mb-6 max-w-2xl">
            Beyond the keynote.
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            The story did not end in 1981. Yossi&apos;s relationship with the Amazon is a living one. He gives back. He builds. He leads. Here is the fuller picture.
          </p>
        </div>
      </section>

      {/* 1. The Workshop — one facet, body of work */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">

          {/* Header */}
          <div className="mb-14">
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">One of the rooms</p>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-6 leading-snug max-w-2xl">
              Two decades leading groups through deep work.
            </h2>
            <div className="text-white/55 text-base leading-relaxed space-y-4 max-w-2xl">
              <p>
                Hundreds of people, across long-form cohorts, retreats, and intensives. The shapes have changed over the years. The principle has not. Only when things shake, a shift is possible.
              </p>
              <p>
                Today, that body of work lives inside the full-day workshop Yossi designs for organisations. Same craft, scaled to a corporate room, curated to the outcome the client is after. He runs the entire program and executes a few modules, such as breathwork and power meditation, himself. Top facilitators cover the rest.
              </p>
              <p>
                Yossi does every practice he gives. He is part of the group, not separate from it.
              </p>
            </div>
          </div>

          {/* Workshop images */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/yossi/workshops/workshop-didgeridoos.jpg"
                alt="Didgeridoos at a workshop, gathered group beyond"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/yossi/workshops/workshop-fire-circle-night.jpg"
                alt="Workshop fire circle at night"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/keynotes#workshop"
              className="inline-flex items-center gap-2 border border-brand-gold/50 text-brand-gold text-xs uppercase tracking-widest font-semibold px-6 py-3 hover:bg-brand-gold/10 transition-colors"
            >
              The full-day workshop
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Buy One Give One */}
      <section className="py-20 md:py-28 bg-brand-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">

          {/* Eyebrow + heading */}
          <div className="max-w-3xl mb-12">
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">Buy One, Give One Free</p>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl leading-snug">
              A lit candle loses nothing when it lights another.
            </h2>
          </div>

          {/* Full-width image */}
          <div className="rounded-xl overflow-hidden mb-14">
            <img
              src="/images/yossi/buy-one-give-one.jpg"
              alt="Yossi Ghinsberg with youth of El Salvador after his keynote gift"
              className="w-full"
            />
          </div>

          {/* Body */}
          <div className="max-w-3xl text-white/55 text-base leading-relaxed space-y-5">
            <p>
              I started this movement from a simple desire to give something back to the community.
            </p>
            <p>
              Most of my work happens in corporate environments. The work takes me all over the world, and I began to think: while I am already here, why not give one more talk to the community?
            </p>
            <p>
              It could be in the cinema of Hermosillo, Mexico, with the whole town invited. It could be a youth initiative in El Salvador for young people from disadvantaged circumstances. A private school in Switzerland. A senior citizens&apos; home in Tel Aviv. It matters not.
            </p>
            <p>
              I am already there. I can give more.
            </p>
            <p>
              The corporation that invites me is also invited to gift me to any community purpose they choose. And often, corporations that accept this challenge take so much pride in the event they gift that it becomes as meaningful as the keynote itself.
            </p>
            <p>
              It becomes a double gift. I gift the corporation. They gift the community. And in return, I too receive a gift.
            </p>
            <p className="text-white/80 italic">
              That random gift has the power to transform a life.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Uchupiamona Ambassador */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">Uchupiamona Nation</p>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-6 leading-snug">
              Ambassador to the World.
            </h2>
            <div className="text-white/55 text-base leading-relaxed space-y-4">
              <p>
                In 2025, the Uchupiamona Nation formally appointed Yossi Ghinsberg as their Ambassador to the World. It was not honorary. It was the recognition of a relationship built over four decades.
              </p>
              <p>
                The Uchupiamona are the indigenous people of the Bolivian Amazon, guardians of one of the most biodiverse territories on earth. Yossi has worked alongside them since the 1980s, helping to establish Chalalan Ecolodge and Madidi National Park, two of the most significant conservation achievements in South American history.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="/images/yossi/yossi-uchupiamona.jpg"
              alt="Yossi Ghinsberg with the Uchupiamona people"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. Chalalan */}
      <section className="bg-brand-surface border-t border-white/5">

        {/* Hero image — full width */}
        <div className="relative w-full" style={{ maxHeight: "520px", overflow: "hidden" }}>
          <img
            src="/images/yossi/chalalan/yossi-canoe.jpg"
            alt="Yossi Ghinsberg paddling on Lake Chalalan, Bolivian Amazon"
            className="w-full object-cover object-center"
            style={{ maxHeight: "520px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/80 via-transparent to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Images stacked */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/yossi/chalalan/chalalan-lake.jpg"
                  alt="Lake Chalalan, Madidi National Park"
                  className="w-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/yossi/chalalan/yossi-with-elder.jpg"
                  alt="Yossi Ghinsberg with an Uchupiamona elder"
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">Chalalan Ecolodge · Madidi</p>
              <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-8 leading-snug">
                The naiveté of those who do not know what is impossible.
              </h2>
              <div className="text-white/55 text-base leading-relaxed space-y-5">
                <p>
                  Ten years after the ordeal in the Amazon, Yossi returned to the place that had nearly taken his life. He went upriver to the village of the Uchupiamona people, to thank them for saving him.
                </p>
                <p>
                  When he thanked them for saving his life, they asked if he would help them save theirs. Their village was dying. The young people were leaving and not coming back. Their dream was to build a lodge for tourists on a small, hidden gem of a lake called Chalalan.
                </p>
                <p>
                  There was no money. The location was six hours upriver, deep in the jungle.
                </p>
                <p className="text-white/80 font-medium">
                  He could not say no. So he said yes.
                </p>
                <p>
                  For three years he lived with them and they built Chalalan together. Against all odds. The Madidi was declared a protected national park. 140 Amazonian indigenous communities were inspired to stop waiting to be saved and take action themselves. The poorest, most remote village received $1.25 million from the Inter-American Development Bank and became the largest resort in the region.
                </p>
                <p>
                  Chalalan changed the lives of tens of thousands of people.
                </p>
                <p>
                  Thirty years later, Chalalan is still alive. Still the biggest and most important eco-lodge in the Madidi. Yossi is its lifetime director, and he travels there as often as he can.
                </p>
                <a
                  href="https://www.chalalan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-semibold hover:opacity-70 transition-opacity"
                >
                  Visit chalalan.com →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Lino Cambi */}
      <section className="border-t border-white/5">

        {/* Hero render — full width */}
        <div className="relative w-full overflow-hidden" style={{ maxHeight: "520px" }}>
          <img
            src="/images/yossi/lino-cambi/summer-evening.png"
            alt="Lino Cambi — an evening on the terrace, South Crete"
            className="w-full object-cover object-center"
            style={{ maxHeight: "520px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/70 via-transparent to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            <div>
              <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">Lino Cambi · South Crete</p>
              <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-8 leading-snug">
                Nothing shouts. Everything softly whispers.
              </h2>
              <div className="text-white/55 text-base leading-relaxed space-y-5">
                <p>
                  Lino Cambi is the dream Yossi shares with his brother, Paul Templer. Together, they are building a sanctuary for transformation in the heart of South Crete.
                </p>
                <p>
                  Isolated enough to feel like a world apart. Close enough to be reached by those who are called to it.
                </p>
                <p>
                  It is a premium facility created for respite, longevity, alignment, and transformation. Not a pampered vacation. A commitment to growth, to a deeper way of being.
                </p>
                <p>
                  Lino Cambi is not architect-led, designer-led, or shaped by outside formulas. It is the manifestation of their dream, built on 15,000 square meters purchased from Agapitos and Dimitra Zeakis, who also passed down the name, carried through generations.
                </p>
                <p>
                  Yossi and Paul see themselves as custodians of this land. They are giving it their own DNA. And though a team of Greek craftsmen is helping them build the facilities, what they are creating is as unique and inimitable as themselves.
                </p>
                <p className="text-white/80 italic">
                  Subtle yet deep, the experience of Lino Cambi is transformational.
                </p>
              </div>
              <a
                href="https://linocambi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-semibold mt-8 hover:opacity-70 transition-opacity"
              >
                Visit linocambi.com →
              </a>
            </div>

            {/* Two renders stacked */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/yossi/lino-cambi/suite-daylight.png"
                  alt="Lino Cambi suite — daylight"
                  className="w-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/yossi/lino-cambi/spa-hero.png"
                  alt="Lino Cambi — the spa, cliff above the Libyan Sea"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Amazon relationship */}
      <section className="border-t border-white/5">
        {/* Full-bleed river photo */}
        <div className="relative w-full overflow-hidden" style={{ maxHeight: "460px" }}>
          <img
            src="/images/yossi/yossi-amazon-river.jpg"
            alt="Yossi Ghinsberg on the Amazon river"
            className="w-full object-cover object-center"
            style={{ maxHeight: "460px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent" />
        </div>

        <div className="py-20 md:py-28 bg-brand-surface">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-6">The Amazon</p>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-8 leading-snug">
              Not a place he survived. A place he belongs.
            </h2>
            <div className="text-white/55 text-base leading-relaxed space-y-4 text-left max-w-2xl mx-auto">
              <p>
                Most people who have a near-death experience want to put distance between themselves and the thing that almost killed them. Yossi went back. Then again. Then again.
              </p>
              <p>
                The Amazon is not his past. It is his reference point, his community, his ongoing project. The Laws of the Jungle were not written in an office. They were lived, over decades, in the jungle and at home in it.
              </p>
              <p>
                He is the lifetime director of Chalalan. He is the Ambassador of the Uchupiamona Nation. He founded the Guardians of the Madidi. He travels there as often as he can, for the community, and for his own nourishment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <p className="text-white/40 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          To book Yossi for a keynote, a workshop, or a conversation about what is possible, start here.
        </p>
        <Button variant="gold" href="/book-yossi">
          Book a Call
        </Button>
      </section>

    </main>
  );
}
