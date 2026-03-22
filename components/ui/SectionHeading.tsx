interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const titleColor = light ? "text-brand-bg" : "text-brand-text";
  const subtitleColor = light ? "text-brand-bg/70" : "text-brand-text-secondary";

  return (
    <div className={alignment}>
      <h2
        className={`font-heading font-bold text-3xl md:text-4xl lg:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl ${subtitleColor} max-w-2xl mt-4 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
