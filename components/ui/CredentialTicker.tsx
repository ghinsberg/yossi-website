"use client";

const items = [
  { number: "8,000", event: "Booking.com", city: "Amsterdam" },
  { number: "6,000", event: "MDRT Global Conference", city: "Miami" },
  { number: "5,000", event: "Amway", city: "Melbourne" },
  { number: "5,000", event: "Jeunesse", city: "Bangkok" },
  { number: "3,500", event: "YPO Edge", city: "Singapore" },
];

const separator = <span className="mx-6 opacity-40">·</span>;

function TickerContent() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-baseline gap-2 mx-6 whitespace-nowrap">
          <span className="text-brand-bg font-heading font-black text-lg tracking-tight">
            {item.number}
          </span>
          <span className="text-brand-bg/80 font-medium text-sm uppercase tracking-widest">
            {item.event}
          </span>
          {separator}
          <span className="text-brand-bg/60 text-sm uppercase tracking-widest">
            {item.city}
          </span>
        </span>
      ))}
    </>
  );
}

export default function CredentialTicker() {
  return (
    <div className="bg-brand-gold overflow-hidden py-3.5 select-none">
      <div
        className="flex"
        style={{
          animation: "ticker 30s linear infinite",
          width: "max-content",
        }}
      >
        {/* Duplicated for seamless loop */}
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
