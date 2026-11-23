import type { HeFaqItem } from "@/data/he/faq";

export default function FaqList({ items }: { items: readonly HeFaqItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((f) => (
        <details key={f.q} className="rounded-xl border border-brand-gold/20 p-5">
          <summary className="cursor-pointer text-lg font-semibold text-brand-text">{f.q}</summary>
          <p className="mt-3 text-brand-text-secondary">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
