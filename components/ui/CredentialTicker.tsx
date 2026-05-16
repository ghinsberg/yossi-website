"use client";

const QUOTE = "The universe will not conspire to assist you. It will resist. The bigger the dream, the greater the resistance to it — it is not personal; it's a law! All you have to do is stay the course.";

const bigDot = <span className="mx-10 text-brand-bg/30 font-black text-lg">◆</span>;

function TickerContent() {
  return (
    <span className="inline-flex items-center whitespace-nowrap">
      <span className="text-brand-bg font-semibold text-sm tracking-wide italic">
        {QUOTE}
      </span>
      {bigDot}
    </span>
  );
}

export default function CredentialTicker() {
  return (
    <div className="bg-brand-gold overflow-hidden py-3.5 select-none">
      <div
        className="flex items-center"
        style={{
          animation: "ticker 50s linear infinite",
          width: "max-content",
        }}
      >
        <TickerContent />
        <TickerContent />
        <TickerContent />
      </div>
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .flex { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
