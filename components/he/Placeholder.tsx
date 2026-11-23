import { PLACEHOLDER_MARK } from "@/data/he/site";

// Visibly marked block for media or proof that is not yet approved.
// Never ships to a public domain: scripts/check-he-launch.sh fails while any exist.
export default function Placeholder({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-placeholder
      className={`border-2 border-dashed border-brand-gold/70 bg-brand-gold/10 text-brand-gold rounded-xl px-5 py-6 text-center text-sm ${className}`}
    >
      <span className="font-semibold">{PLACEHOLDER_MARK}</span> {children}
    </div>
  );
}
