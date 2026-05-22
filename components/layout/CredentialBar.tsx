const QUOTE =
  "The universe will not conspire to assist you. It will resist. The bigger the dream, the greater the resistance. It is not personal. It’s a law. All you have to do is stay the course.";

const SEPARATOR = "   —   ";

// Six repetitions per half-track so the ticker fills any screen without gaps
function Track() {
  return (
    <div className="flex-shrink-0 flex items-center whitespace-nowrap">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="text-black text-sm font-bold italic tracking-wide">
          {QUOTE}
          <span className="opacity-50 not-italic">{SEPARATOR}</span>
        </span>
      ))}
    </div>
  );
}

export default function CredentialBar() {
  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-brand-gold py-3 overflow-hidden">
      <div
        className="flex"
        style={{ animation: "marquee 60s linear infinite" }}
      >
        <Track />
        {/* Duplicate track ensures seamless loop when first track scrolls off */}
        <Track />
      </div>
    </div>
  );
}
