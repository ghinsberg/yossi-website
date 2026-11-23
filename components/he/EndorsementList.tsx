import type { HeEndorsement } from "@/data/he/endorsements";

export function EndorsementFigure({ e, translatedNote }: { e: HeEndorsement; translatedNote: string }) {
  return (
    <figure className="h-full rounded-2xl border border-brand-gold/20 bg-brand-surface/30 p-6">
      <blockquote className="text-lg leading-relaxed text-brand-text">{e.quote}</blockquote>
      <figcaption className="mt-4 text-brand-text-secondary">
        <span className="font-semibold text-brand-text">
          <bdi>{e.name}</bdi>
        </span>
        {", "}
        {e.role}
        {", "}
        <bdi>{e.organization}</bdi>
        {e.translatedFrom === "en" ? (
          <span className="mt-2 block text-xs text-brand-text-secondary">{translatedNote}</span>
        ) : null}
      </figcaption>
    </figure>
  );
}

export default function EndorsementList({
  items,
  translatedNote,
}: {
  items: readonly HeEndorsement[];
  translatedNote: string;
}) {
  return (
    <ul className="grid gap-8 md:grid-cols-2">
      {items.map((e) => (
        <li key={`${e.name}-${e.organization}`}>
          <EndorsementFigure e={e} translatedNote={translatedNote} />
        </li>
      ))}
    </ul>
  );
}
