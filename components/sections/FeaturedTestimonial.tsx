import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function FeaturedTestimonial() {
  const featured = testimonials.find(
    (t) => t.author === "Rachel McVinish"
  );

  if (!featured) return null;

  return (
    <section className="bg-brand-surface py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <TestimonialCard
          quote={featured.quote}
          author={featured.author}
          title={featured.title}
          company={featured.company}
          variant="featured"
        />
      </div>
    </section>
  );
}
