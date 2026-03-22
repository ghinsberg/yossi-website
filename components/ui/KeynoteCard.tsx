import Link from "next/link";
import type { Keynote } from "@/data/keynotes";

interface KeynoteCardProps {
  keynote: Keynote;
}

export default function KeynoteCard({ keynote }: KeynoteCardProps) {
  return (
    <Link
      href={`/keynotes/${keynote.slug}`}
      className="block bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-gold/30 hover:bg-white/[0.07] transition-all duration-300"
    >
      {keynote.flagship && (
        <span className="bg-brand-gold text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">
          Flagship
        </span>
      )}
      <h3 className="text-2xl font-bold text-brand-text font-heading mb-2">
        {keynote.title}
      </h3>
      <p className="text-brand-text-secondary text-base leading-relaxed mb-6">
        {keynote.subtitle}
      </p>
      <span className="text-brand-gold hover:text-brand-gold-light font-medium text-sm">
        Learn More &rarr;
      </span>
    </Link>
  );
}
