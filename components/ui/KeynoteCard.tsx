import Link from "next/link";
import type { Keynote } from "@/data/keynotes";

interface KeynoteCardProps {
  keynote: Keynote;
}

export default function KeynoteCard({ keynote }: KeynoteCardProps) {
  return (
    <Link
      href={`/keynotes/${keynote.slug}`}
      className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-gold/40 hover:bg-white/[0.07] transition-all duration-300"
    >
      {/* Header */}
      <div className="mb-6">
        {keynote.flagship && (
          <span className="bg-brand-gold text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">
            Flagship
          </span>
        )}
        <h3 className="text-xl font-bold text-brand-text font-heading mb-2">
          {keynote.title}
        </h3>
        <p className="text-brand-text-secondary text-sm leading-relaxed">
          {keynote.subtitle}
        </p>
      </div>

      {/* Outcomes — what C-suite cares about */}
      <div className="flex-1 mb-6">
        <p className="text-xs uppercase tracking-widest text-brand-gold/70 mb-3">
          Your team walks away with
        </p>
        <ul className="space-y-2">
          {keynote.outcomes.map((outcome, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-brand-text-secondary leading-snug">
              <span className="text-brand-gold mt-0.5 flex-shrink-0">→</span>
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      {/* Best for */}
      <div className="pt-5 border-t border-white/10">
        <p className="text-xs text-brand-text-secondary/50 mb-3 uppercase tracking-wider">Best for</p>
        <p className="text-xs text-brand-text-secondary leading-relaxed">{keynote.bestFor}</p>
      </div>

      <span className="mt-5 text-brand-gold text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
        Full details &rarr;
      </span>
    </Link>
  );
}
