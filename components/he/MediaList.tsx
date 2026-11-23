import type { HeMediaItem } from "@/data/he/media";
import HeText from "@/components/he/HeText";

export default function MediaList({ items, readCta }: { items: readonly HeMediaItem[]; readCta: string }) {
  return (
    <ul className="grid gap-4">
      {items.map((m) => (
        <li key={m.url} className="rounded-xl border border-brand-gold/20 p-5">
          <p className="text-sm text-brand-gold">
            <bdi>{m.outlet}</bdi>
            {m.year ? <> · {m.year}</> : null}
          </p>
          {m.titleEn ? (
            <p className="mt-1 text-lg font-semibold text-brand-text">
              <bdi lang="en">{m.titleEn}</bdi>
            </p>
          ) : null}
          <p className="mt-1 text-brand-text-secondary">
            <HeText>{m.title}</HeText>
          </p>
          <a href={m.url} className="mt-2 inline-block text-brand-gold underline" rel="noopener">
            {readCta}
          </a>
        </li>
      ))}
    </ul>
  );
}
