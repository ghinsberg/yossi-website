interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  variant?: "featured" | "compact";
}

export default function TestimonialCard({
  quote,
  author,
  title,
  company,
  variant = "featured",
}: TestimonialCardProps) {
  if (variant === "compact") {
    return (
      <div>
        <p className="text-base italic text-brand-text-secondary leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="mt-4">
          <p className="text-brand-text font-semibold text-sm">{author}</p>
          <p className="text-brand-text-secondary text-sm">
            {title}, {company}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <span className="text-6xl text-brand-gold/30 font-serif leading-none select-none">
        &ldquo;
      </span>
      <p className="text-xl md:text-2xl text-brand-text-secondary italic leading-relaxed">
        {quote}
      </p>
      <div className="w-12 h-0.5 bg-brand-gold my-6" />
      <p className="text-brand-text font-semibold">{author}</p>
      <p className="text-brand-text-secondary text-sm">
        {title}, {company}
      </p>
    </div>
  );
}
