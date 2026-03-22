import { Metadata } from "next";
import VideoPlayer from "@/components/ui/VideoPlayer";
import TestimonialCard from "@/components/ui/TestimonialCard";
import BookingForm from "@/components/sections/BookingForm";
import { siteConfig } from "@/data/siteConfig";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Book Yossi",
  description:
    "Book Yossi Ghinsberg for your next event. Transformation keynotes on leadership, resilience, and navigating disruption. We respond within 24 hours.",
};

const bookingTestimonial = testimonials.find(
  (t) => t.tier === 1 && t.usage.includes("booking")
)!;

const steps = [
  "We review your enquiry and confirm availability",
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

            {/* Prefer to speak directly */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mt-8">
              <h3 className="text-lg font-semibold mb-4">
                Prefer to speak directly?
              </h3>
              <p className="font-semibold">{siteConfig.contact.name}</p>
              <p className="text-brand-text-secondary text-sm">
                {siteConfig.contact.company}
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-brand-gold text-sm block mt-2 hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="text-brand-text-secondary text-sm block mt-1 hover:underline"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
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
