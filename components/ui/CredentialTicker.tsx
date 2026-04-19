"use client";

const audienceItems = [
  { number: "8,000", event: "Booking.com", city: "Amsterdam" },
  { number: "6,000", event: "MDRT Global Conference", city: "Miami" },
  { number: "5,000", event: "Amway", city: "Melbourne" },
  { number: "5,000", event: "Jeunesse", city: "Bangkok" },
  { number: "3,500", event: "YPO Edge", city: "Singapore" },
];

const stageNames = [
  "Dr. Wayne Dyer",
  "Richard Branson",
  "Bill Clinton",
  "Queen Rania",
  "Steve Ballmer",
  "Nassim Taleb",
  "John Cleese",
  "Steve Irwin",
  "PM Lee Hsien Loong",
  "Billie Jean King",
];

const dot = <span className="mx-5 opacity-30 font-light">·</span>;
const bigDot = <span className="mx-8 text-brand-bg/20 font-black text-xl">◆</span>;

function TickerContent() {
  return (
    <span className="inline-flex items-center whitespace-nowrap">
      {/* Audience sizes */}
      {audienceItems.map((item, i) => (
        <span key={`a-${i}`} className="inline-flex items-baseline gap-2">
          <span className="text-brand-bg font-heading font-black text-base tracking-tight">
            {item.number}
          </span>
          <span className="text-brand-bg/50 text-[10px] uppercase tracking-widest font-semibold mr-1">
            attendees
          </span>
          <span className="text-brand-bg/80 font-semibold text-xs uppercase tracking-widest">
            {item.event}
          </span>
          {dot}
          <span className="text-brand-bg/60 text-xs uppercase tracking-widest">
            {item.city}
          </span>
          {bigDot}
        </span>
      ))}

      {/* Divider label */}
      <span className="inline-flex items-center mr-6">
        <span className="text-brand-bg/50 text-[10px] uppercase tracking-[0.3em] font-semibold mr-5">
          Shared the stage with
        </span>
      </span>

      {/* Luminaries */}
      {stageNames.map((name, i) => (
        <span key={`n-${i}`} className="inline-flex items-center">
          <span className="text-brand-bg font-semibold text-xs uppercase tracking-widest">
            {name}
          </span>
          {i < stageNames.length - 1 ? dot : bigDot}
        </span>
      ))}
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
