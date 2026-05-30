import Button from "@/components/ui/Button";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";

export const metadata: Metadata = {
  title: "The Two Techniques",
  description:
    "Yossi Ghinsberg teaches two techniques that reset the sympathetic nervous system — not with the mind, but through the body. Full sensory activation and the snake breath. Taught nowhere else.",
  keywords: [
    "survival techniques for stress",
    "sensory activation stress relief",
    "snake breath technique",
    "sympathetic nervous system reset",
    "stress management keynote speaker",
    "yossi ghinsberg techniques",
    "real survival vs imaginary survival",
  ],
  openGraph: {
    title: "The Two Techniques | Yossi Ghinsberg",
    description:
      "The mind is not the right tool to fix what the mind created. Two techniques that bypass the alarm, reset the nervous system, and work — taught by Yossi Ghinsberg in workshops worldwide.",
    images: [{ url: `${BASE_URL}/images/headshots/yossi-headshot-1.jpg`, width: 1200, height: 630 }],
  },
  alternates: {
    canonical: `${BASE_URL}/the-two-techniques`,
  },
};

export default function TheTwoTechniquesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Keynotes", href: "/keynotes" },
          { name: "The Two Techniques", href: "/the-two-techniques" },
        ]}
      />

      {/* ── HERO ── */}
      <section className="bg-brand-bg py-28 md:py-36 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/60 mb-6">
          Real Survival vs Imaginary Survival
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-brand-text max-w-4xl mx-auto leading-tight">
          The mind is not the right tool to fix what the mind created.
        </h1>
        <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-10" />
      </section>

      {/* ── THE BUG ── */}
      <section className="bg-brand-bg py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-brand-gold mb-6">
            There is a bug in the system.
          </h2>
          <p className="text-brand-text-secondary text-lg leading-relaxed">
            For most of human history, the senses detected danger. The eyes saw the predator.
            The ears heard the river rising. The nose caught the smoke. That signal traveled
            from the environment, through the senses, to the nervous system. The body responded.
            The body recovered.
          </p>
          <p className="text-brand-text-secondary text-lg leading-relaxed mt-5">
            Something changed. The mind began doing the job the senses used to do.
            It started announcing danger — deadlines, presentations, performance reviews,
            emails at 11pm. None of these are predators. But the reptile brain does not know that.
            It receives the signal through what has become the primary channel — the mind —
            and it believes it. Because the channel used to be trustworthy.
          </p>
          <p className="text-brand-text text-lg leading-relaxed mt-5 font-medium">
            The result is chronic sympathetic stimulation. The alarm never fully stops.
            The body never fully recovers. People call it stress. It is something older than that.
          </p>
        </div>
      </section>

      {/* ── THE WRONG SOLUTION ── */}
      <section className="bg-brand-surface border-y border-white/10 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <blockquote className="text-2xl md:text-3xl font-heading font-bold text-brand-text leading-snug">
            &ldquo;Don&apos;t worry&rdquo; is the stupidest advice ever given.
          </blockquote>
          <p className="text-brand-text-secondary text-lg leading-relaxed mt-8">
            You cannot fix the problem with the problem. Telling the mind to calm the mind
            is like asking the fire to put itself out. It does not work. It has never worked.
            And every person in the room already knows this — they have tried it a thousand times.
          </p>
          <p className="text-brand-text-secondary text-lg leading-relaxed mt-5">
            The fix is not a mindset shift. It is a channel shift.
            The nervous system needs to receive accurate information through the right channel.
            The senses. Not the mind.
          </p>
          <p className="text-brand-text text-lg leading-relaxed mt-5 font-medium">
            That is what Yossi teaches. Two techniques that bypass the alarm entirely.
            Both are immediate. Both are learnable in a single session. Both are priceless.
          </p>
        </div>
      </section>

      {/* ── TECHNIQUE 1 ── */}
      <section className="bg-brand-bg py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">

          <div className="flex items-start gap-6 mb-12">
            <span className="text-7xl md:text-8xl font-heading font-bold text-brand-gold/20 leading-none shrink-0 select-none">
              01
            </span>
            <div>
              <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold mb-2">
                Technique One
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text leading-tight">
                Full Sensory Activation
              </h2>
            </div>
          </div>

          <p className="text-brand-text-secondary text-lg leading-relaxed max-w-3xl">
            The senses are the correct channel. When they are fully open, the nervous system
            receives accurate environmental data — and accurate data is the only thing
            that can override a false alarm.
          </p>
          <p className="text-brand-text-secondary text-lg leading-relaxed max-w-3xl mt-5">
            Yossi teaches a deliberate sequence. All six senses, one by one.
            Let the mind keep screaming. Open the senses anyway. The nervous system
            will begin to trust what it receives through them, because it was designed to.
          </p>

          {/* The 6 senses */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                number: "1",
                sense: "Sight",
                detail:
                  "Eyes open. Scanning the full horizon. Moving the neck slowly, side to side. A vast amount of information enters through the eyes when you stop staring at a single point. The nervous system registers: open space. No predator in view.",
              },
              {
                number: "2",
                sense: "Smell",
                detail:
                  "Eyes close. The olfactory system activates. The air carries information the mind ignores entirely. Soil, wind, the temperature of the room. The body reads it. Most people have not truly used this sense in years.",
              },
              {
                number: "3",
                sense: "Hearing",
                detail:
                  "Still eyes closed. The full sound environment. Not filtering, not identifying — just receiving. Distant sounds. Near sounds. Silence between sounds. The ears are reporting: no alarm in the environment.",
              },
              {
                number: "4",
                sense: "Taste",
                detail:
                  "The mouth holds memory. Attention on the tongue brings the nervous system into the present. The present is the only moment that is ever actually safe.",
              },
              {
                number: "5",
                sense: "Touch",
                detail:
                  "The weight of the body. The texture of the chair. The temperature of the skin. Tactile sensation is grounding in the literal sense. The body is here. Not where the mind went.",
              },
              {
                number: "6",
                sense: "Presence",
                detail:
                  "The sixth sense. Not supernatural. Something older. A sense of connection with the environment that humans carried for hundreds of thousands of years and modern life has nearly erased. It returns. Gradually. Then unmistakably.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-brand-gold/20 transition-colors"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-brand-gold font-heading font-bold text-lg">
                    {item.number}.
                  </span>
                  <h3 className="text-brand-text font-semibold text-base">
                    {item.sense}
                  </h3>
                </div>
                <p className="text-brand-text-secondary text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-l-2 border-brand-gold pl-6 max-w-2xl">
            <p className="text-brand-text text-lg leading-relaxed">
              The eyes see no danger. The ears hear no danger. The nose smells no danger.
              That information reaches the nervous system through the right channel.
              It begins to balance the false screams of the mind.
              The alarm quiets. Not because you thought it quiet. Because the body received better evidence.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="bg-brand-gold/10 border-y border-brand-gold/20 py-6 text-center">
        <p className="text-brand-gold/60 text-xs uppercase tracking-[0.4em] font-semibold">
          The second technique
        </p>
      </div>

      {/* ── TECHNIQUE 2 ── */}
      <section className="bg-brand-bg py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">

          <div className="flex items-start gap-6 mb-12">
            <span className="text-7xl md:text-8xl font-heading font-bold text-brand-gold/20 leading-none shrink-0 select-none">
              02
            </span>
            <div>
              <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold mb-2">
                Technique Two
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-text leading-tight">
                The Snake Breath — The Switch
              </h2>
            </div>
          </div>

          {/* The Switch concept */}
          <div className="max-w-3xl mb-12">
            <p className="text-brand-text text-xl md:text-2xl font-heading font-bold leading-snug mb-6">
              Imagine you knew how to reach a switch — and just flip your nervous system
              from sympathetic to parasympathetic. Instantly.
            </p>
            <p className="text-brand-text-secondary text-lg leading-relaxed">
              From <span className="text-white font-semibold">&ldquo;I am being attacked&rdquo;</span> to{" "}
              <span className="text-brand-gold font-semibold">&ldquo;there is absolutely nothing going on.&rdquo;</span>
            </p>
            <p className="text-brand-text-secondary text-lg leading-relaxed mt-4">
              That switch exists. Most people never find it because no one told them where to look.
              The snake breath gives you direct access to it. All you have to do is learn how to hiss.
            </p>
          </div>

          {/* Lineage */}
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 mb-10 max-w-2xl">
            <p className="text-brand-gold text-[10px] uppercase tracking-widest font-semibold mb-4">
              The lineage
            </p>
            <div className="flex items-center gap-3 flex-wrap text-sm">
              <span className="text-brand-text font-semibold">Pattabhi Jois</span>
              <span className="text-brand-gold/40">—</span>
              <span className="text-brand-text-secondary">Ashtanga founder, Yoga Master</span>
              <span className="text-white/20 text-lg">›</span>
              <span className="text-brand-text font-semibold">Rom Kest</span>
              <span className="text-brand-gold/40">—</span>
              <span className="text-brand-text-secondary">Surgeon, Yoga Master</span>
              <span className="text-white/20 text-lg">›</span>
              <span className="text-brand-text font-semibold">Yossi Ghinsberg</span>
              <span className="text-white/20 text-lg">›</span>
              <span className="text-brand-text font-semibold">your audience</span>
            </div>
          </div>

          {/* The sound */}
          <div className="my-10 text-center">
            <p className="text-4xl md:text-6xl font-heading font-bold text-brand-gold tracking-[0.2em] select-none">
              hissss sssssssssssss
            </p>
          </div>

          <div className="mt-8 bg-brand-surface border border-white/10 rounded-2xl p-8 md:p-10 max-w-3xl">
            <h3 className="font-heading font-bold text-brand-text text-xl mb-4">
              Why it flips the switch.
            </h3>
            <p className="text-brand-text-secondary leading-relaxed">
              The organism has one physiological proof of safety: the ability to breathe out slowly.
              You cannot exhale for sixty seconds and be in mortal danger.
              The body knows this at a level that predates language.
            </p>
            <p className="text-brand-text-secondary leading-relaxed mt-4">
              The mind keeps screaming. We let it scream. We do not fight it.
              The exhale is happening. Long. Slow. Undeniable.
              The reptile brain receives the signal it was designed to trust.
              Not from words. From the body itself.
              The switch flips. The alarm steps down.
            </p>
            <p className="text-brand-text font-semibold leading-relaxed mt-4">
              You cannot worry your way to safety. But you can breathe your way there.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS IN THE ROOM ── */}
      <section className="bg-brand-light-bg py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-bg mb-8">
            What happens in the room.
          </h2>
          <p className="text-brand-bg/70 text-lg leading-relaxed">
            Within a single session, an audience of five hundred people learns both techniques.
            Not lectures about them. The actual techniques. Practiced together in the room.
            The shift is physical and it is immediate.
          </p>
          <p className="text-brand-bg/70 text-lg leading-relaxed mt-5">
            People who have spent years in therapy, on medication, in wellness programs —
            they do this once and something changes. Not because it is magic.
            Because it is correct. It addresses the actual mechanism, not the symptoms.
          </p>
          <p className="text-brand-bg text-lg leading-relaxed mt-5 font-semibold">
            These techniques are not available in any other keynote program.
            Yossi teaches them in the full-day workshop and in select keynote formats.
          </p>
        </div>
      </section>

      {/* ── THE KEYNOTE ── */}
      <section className="bg-brand-bg py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Where this lives
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-text mb-4">
            Real Survival vs Imaginary Survival
          </h2>
          <p className="text-brand-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            The keynote that contains both techniques. Ninety minutes that reframe how
            an audience understands their own stress, and give them two tools they
            will use for the rest of their lives.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" href="/book-yossi" size="lg">
              Book the Workshop
            </Button>
            <Button variant="outline" href="/keynotes/real-vs-imaginary-survival" size="lg">
              See the Keynote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
