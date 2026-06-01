import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Enquiry Received",
  description: "Thank you for your enquiry. Yossi's team will be in touch within 24 hours.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-brand-bg px-6">
      <div className="max-w-xl mx-auto text-center">

        {/* Gold check */}
        <div className="w-16 h-16 rounded-full border-2 border-brand-gold flex items-center justify-center mx-auto mb-8">
          <svg className="w-8 h-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <p className="text-brand-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4">
          Enquiry received
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-text mb-4">
          We&apos;ll be in touch within 24 hours.
        </h1>
        <p className="text-brand-text-secondary text-lg leading-relaxed mb-10">
          Yossi&apos;s team reviews every enquiry personally. You&apos;ll hear from us
          with availability and a tailored proposal — no generic decks, no runaround.
        </p>

        {/* What happens next */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-left mb-10">
          <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-6">
            What happens next
          </p>
          <div className="space-y-5">
            {[
              "Availability confirmed within 24 hours",
              "A brief call with Yossi or his team to understand your event",
              "A tailored proposal within 48 hours",
              "Pre-event briefing to shape the keynote for your audience",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-brand-gold text-black text-sm font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-brand-text-secondary text-sm leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <Button variant="outline" href="/">
          Back to home
        </Button>
      </div>
    </section>
  );
}
