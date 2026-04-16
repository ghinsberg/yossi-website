import { Metadata } from "next";
import VideoPlayer from "@/components/ui/VideoPlayer";
import TestimonialCard from "@/components/ui/TestimonialCard";
import BookingForm from "@/components/sections/BookingForm";
import { siteConfig } from "@/data/siteConfig";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Book Yossi Ghinsberg",
  description:
    "Inquire about booking Yossi Ghinsberg for your next keynote, conference, or leadership event. Represented by Carter Global Speakers (North America) and Encore Speakers (Europe &amp; Australasia).",
  openGraph: {
    title: "Book Yossi Ghinsberg | Yossi Ghinsberg",
    description:
      "Inquire about booking Yossi Ghinsberg for your next keynote, conference, or leadership event. Represented by Carter Global Speakers (North America) and Encore Speakers (Europe &amp; Australasia).",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Yossi Ghinsberg | Yossi Ghinsberg",
    description:
      "Inquire about booking Yossi Ghinsberg for your next keynote, conference, or leadership event. Represented by Carter Global Speakers (North America) and Encore Speakers (Europe &amp; Australasia).",
  },
};

const bookingTestimonial = testimonials.find(
  (t) => t.author === "Regina Bedoya, CLU, ChFC"
)!;

const steps = [
  "We review your enquiry and confirm availability, within 24 hours",
  "A brief call with Yossi or his team to understand your event",
  "A tailored proposal within 48 hours",
  "Pre-event briefing to customise the keynote for your audience",
];

export default function BookYossiPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold">
            Let&apos;s talk about your audience.
          </h1>
          <p className="text-xl text-brand-text-secondary mt-4 max-w-2xl mx-auto">
            Every engagement starts with a conversation. Tell us about your
            event and we&apos;ll be in touch within 24 hours.
          </p>
        </div>
      </section>

      {/* Demo Reel */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <VideoPlayer videoId={siteConfig.speakerReelId} size="large" />
      </section>

      {/* Form + Sidebar */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <BookingForm />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* What happens next */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-xl font-heading font-semibold mb-6">
                What happens next
              </h2>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-gold text-black text-sm font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-brand-text-secondary text-sm">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Speaker One-Sheet */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-8">
              <h3 className="text-lg font-semibold mb-1">Speaker One-Sheet</h3>
              <p className="text-brand-text-secondary text-sm mb-5">
                Keynotes, outcomes, client list, and testimonials — everything your internal team needs to present the booking.
              </p>
              <a
                href="/yossi-ghinsberg-speaker-onesheet.pdf"
                download
                className="inline-flex items-center gap-2 bg-brand-gold text-black text-sm font-semibold px-5 py-3 rounded-full hover:bg-brand-gold/90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
                Download PDF
              </a>
            </div>

            {/* Prefer to speak directly */}
            {siteConfig.contacts.map((agent) => (
              <div
                key={agent.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-8"
              >
                <h3 className="text-lg font-semibold mb-1">
                  {agent.region}
                </h3>
                <p className="text-xs uppercase tracking-wider text-brand-text-secondary/60 mb-4">
                  Prefer to speak directly?
                </p>
                <p className="font-semibold">{agent.name}</p>
                <p className="text-brand-text-secondary text-sm">
                  {agent.company}
                </p>
                <a
                  href={`mailto:${agent.email}`}
                  className="text-brand-gold text-sm block mt-2 hover:underline"
                >
                  {agent.email}
                </a>
                <a
                  href={`tel:${agent.phone.replace(/\s/g, "")}`}
                  className="text-brand-text-secondary text-sm block mt-1 hover:underline"
                >
                  {agent.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <TestimonialCard
          quote={bookingTestimonial.quote}
          author={bookingTestimonial.author}
          title={bookingTestimonial.title}
          company={bookingTestimonial.company}
          variant="featured"
        />
      </section>

      {/* Bottom padding */}
      <div className="pb-16" />
    </>
  );
}
