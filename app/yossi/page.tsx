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

      {/* Hero */}
      <section className="py-24 md:py-36 text-center px-6">
        <p className="text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-6">Who Yossi is</p>
        <h1 className="font-heading font-bold text-white text-4xl md:text-6xl leading-none mb-6">
          Beyond the keynote.
        </h1>
        <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
          The story did not end in 1981. Yossi&apos;s relationship with the Amazon is a living one. He gives back. He builds. He leads. Here is the fuller picture.
        </p>
      </section>

      {/* 1. Transformational Workshops */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">

          {/* Header */}
          <div className="mb-14">
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">Awakening the Beast · The Adventure</p>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-6 leading-snug max-w-2xl">
              Even the smallest change of course is a shift of destiny.
            </h2>
            <div className="text-white/55 text-base leading-relaxed space-y-4 max-w-2xl">
              <p>
                Yossi leads immersive transformational workshops that go deep. Participants do not sit and listen. They are moved, challenged, and invited to choose one meaningful goal for their growth and fulfillment, and to make the one decision they have been avoiding.
              </p>
              <p>
                The preparation breaks open every faculty. Ice bath. Fire-walking. Ecstatic dance. Laughter yoga. Holotropic breathwork. Not as spectacle. As initiation.
              </p>
              <p>
                When the preparation is complete, each person commits. Not to a vague intention. To a specific goal, a daily structure, accountability to the group, and a direct channel with Yossi and his team.
              </p>
              <p>
                Every day of the process carries a theme. Wednesdays are Holy Wednesdays: say thank you for everything, to everyone, whatever happens. There are weeks with no complaining, regardless of circumstances. A tougher challenge than it sounds. Morning self-love rituals. 25 minutes of guided meditation before the day begins.
              </p>
              <p>
                Yossi does every task he gives. He is always part of the group.
              </p>
            </div>
          </div>

          {/* Two images + timeframe strip */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/yossi/workshops/workshop-fire-circle.jpg"
                alt="Awakening the Beast workshop — fire circle gathering"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/yossi/workshops/workshop-night.jpg"
                alt="The Adventure workshop — night ceremony"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Timeframe strip */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 border-t border-white/10 pt-10">
            {[
              { duration: "9 months", label: "Long-form group journey" },
              { duration: "3 months", label: "Focused cohort" },
              { duration: "3 weeks", label: "Intensive immersion" },
              { duration: "3 days", label: "Deep-dive retreat" },
              { duration: "3 hours", label: "One-on-one session" },
            ].map(({ duration, label }) => (
              <div key={duration} className="text-center">
                <p className="text-brand-gold font-heading font-bold text-xl mb-1">{duration}</p>
                <p className="text-white/30 text-[10px] uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-white/40 text-sm mb-6">
              People remain in touch with Yossi for life. They describe the process as a turning point, a permanent and positive shift.
            </p>
            <a
              href="/book-yossi"
              className="inline-flex items-center gap-2 border border-brand-gold/50 text-brand-gold text-xs uppercase tracking-widest font-semibold px-6 py-3 hover:bg-brand-gold/10 transition-colors"
            >
              Enquire about a workshop
            </a>
          </div>
        </div>
      </section>

      {/* 2. Buy One Give One */}
      <section className="py-20 md:py-28 bg-brand-surface border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Placeholder image */}
          <div className="aspect-[4/3] bg-white/5 rounded-xl border border-white/10 flex items-center justify-center order-2 md:order-1">
            <p className="text-white/20 text-xs uppercase tracking-widest">Community photo coming</p>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">Buy One Give One</p>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-6 leading-snug">
              Every ticket sold sends a child to school.
            </h2>
            <div className="text-white/55 text-base leading-relaxed space-y-4">
              <p>
                {/* PLACEHOLDER — Yossi to describe the Buy One Give One programme */}
                For every keynote booking, a portion goes directly to educational initiatives in indigenous and underserved communities. It is not a corporate responsibility gesture. It is a personal commitment.
              </p>
              <p>
                {/* PLACEHOLDER — add specific numbers, communities, outcomes */}
                To date, the programme has supported [communities / children / schools — Yossi to confirm numbers].
              </p>
            </div>
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
              src="/images/yossi/ambassador.jpg"
              alt="Yossi Ghinsberg as Ambassador of the Uchupiamona Nation"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. Chalalan */}
      <section className="py-20 md:py-28 bg-brand-surface border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Placeholder image */}
          <div className="aspect-[4/3] bg-white/5 rounded-xl border border-white/10 flex items-center justify-center order-2 md:order-1">
            <p className="text-white/20 text-xs uppercase tracking-widest">Chalalan photo coming</p>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">Chalalan Ecolodge</p>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-6 leading-snug">
              A community. An ecosystem. A model for the world.
            </h2>
            <div className="text-white/55 text-base leading-relaxed space-y-4">
              <p>
                Chalalan Ecolodge sits at the edge of Madidi National Park, deep in the Bolivian Amazon. It was built by the Uchupiamona people, owned by the Uchupiamona people, and run by the Uchupiamona people. It is one of the most successful models of indigenous-led eco-tourism anywhere in the world.
              </p>
              <p>
                Yossi was instrumental in making it happen. He is still involved. Chalalan is not a past project. It is a living relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Lino Cambi */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] mb-4">Current Project</p>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-6 leading-snug">
              Lino Cambi. A sanctuary being built.
            </h2>
            <div className="text-white/55 text-base leading-relaxed space-y-4">
              <p>
                {/* PLACEHOLDER — Yossi to describe Lino Cambi */}
                Lino Cambi is Yossi&apos;s current project: a sanctuary in [location — Yossi to confirm] being designed and built as a place of healing, creativity, and reconnection with nature.
              </p>
              <p>
                It is part retreat, part architectural statement, part continuation of everything the Amazon taught him. More details coming soon.
              </p>
            </div>
          </div>
          {/* Placeholder image */}
          <div className="aspect-[4/3] bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
            <p className="text-white/20 text-xs uppercase tracking-widest">Lino Cambi render coming</p>
          </div>
        </div>
      </section>

      {/* 6. Amazon relationship */}
      <section className="py-20 md:py-28 bg-brand-surface border-t border-white/5">
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
              {/* PLACEHOLDER — Yossi to add any additional context about current Amazon work */}
            </p>
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
