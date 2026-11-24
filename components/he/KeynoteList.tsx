import type { HeKeynote } from "@/data/he/keynotes";

export default function KeynoteList({
  items,
  forWhomLabel,
  takeawayLabel,
  titleEnLabel,
}: {
  items: readonly HeKeynote[];
  forWhomLabel: string;
  takeawayLabel: string;
  titleEnLabel: string;
}) {
  return (
    <ul className="grid gap-8">
      {items.map((k) => (
        <li key={k.slug} className="rounded-2xl border border-brand-gold/20 bg-brand-surface/30 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-text"><bdi>{k.title}</bdi></h2>
          {/* The English name, so Yossi and the agents can match the proposal to the talk. */}
          <p className="mt-1 text-xs text-brand-text-secondary">
            {titleEnLabel} <bdi lang="en">{k.titleEn}</bdi>
          </p>
          <dl className="mt-4 grid gap-4">
            <div>
              <dt className="font-semibold text-brand-gold">{forWhomLabel}</dt>
              <dd className="mt-1 text-brand-text-secondary">{k.forWhom}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-gold">{takeawayLabel}</dt>
              <dd className="mt-1 text-brand-text-secondary">{k.takeaway}</dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
}
