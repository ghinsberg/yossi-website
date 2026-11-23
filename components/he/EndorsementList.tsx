import type { HeEndorsement } from "@/data/he/endorsements";

export default function EndorsementList({ items }: { items: readonly HeEndorsement[] }) {
  return (
    <ul className="grid gap-8 md:grid-cols-2">
      {items.map((e) => (
        <li key={`${e.name}-${e.organization}`}>
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
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
