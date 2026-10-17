const outcomes = [
  {
    title: "Snake Breath",
    detail:
      "A breathing technique for acute stress, born in the jungle and taught live on stage. Your audience uses it the same day.",
  },
  {
    title: "Full Sensory Activation",
    detail:
      "A practice for presence under pressure. The antidote to running on autopilot when the stakes are highest.",
  },
  {
    title: "Real vs. imaginary survival",
    detail:
      "A framework that separates true threats from the manufactured stress that burns teams out. Most pressure is imaginary. Knowing the difference changes how people work.",
  },
  {
    title: "A shared language",
    detail:
      "Teams quote the story for years. The next step, the river, the jungle. It becomes shorthand for how the team faces hard things.",
  },
];

const bestFit = [
  "Annual kickoffs and sales conferences",
  "Leadership summits and executive offsites",
  "Insurance and financial services (MDRT main stage, 2025)",
  "Resilience, wellbeing, and change programs",
];

const formats = [
  { name: "Keynote", detail: "60 minutes, tailored to your event theme" },
  { name: "Keynote + fireside chat", detail: "Adds 20 to 30 minutes of moderated Q&A" },
  { name: "Workshop", detail: "Half day or full day, hands-on with the techniques" },
];

export default function BookingFacts() {
  return (
    <section className="bg-brand-surface py-16 md:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
          What your audience walks away with
        </h2>
        <p className="text-brand-text-secondary text-lg max-w-3xl mb-12">
          The story opens the room. These are the tools that stay after it.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="bg-white/5 border border-white/10 rounded-xl p-8"
            >
              <h3 className="text-lg font-heading font-semibold text-brand-gold">
                {o.title}
              </h3>
              <p className="text-brand-text-secondary text-sm mt-2 leading-relaxed">
                {o.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">
              Best fit
            </h3>
            <ul className="space-y-3">
              {bestFit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0 mt-2" />
                  <span className="text-brand-text-secondary text-sm leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">
              Formats and fee
            </h3>
            <ul className="space-y-3 mb-6">
              {formats.map((f) => (
                <li key={f.name} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0 mt-2" />
                  <span className="text-brand-text-secondary text-sm leading-snug">
                    <span className="text-brand-text font-medium">{f.name}.</span>{" "}
                    {f.detail}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-brand-text-secondary text-sm leading-relaxed">
              Most engagements fall between USD 30,000 and 50,000, depending on
              format, location, and travel. Every enquiry receives a tailored
              proposal within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
