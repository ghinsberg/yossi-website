import type { Metadata } from "next";
import PageIntro from "@/components/he/PageIntro";
import Placeholder from "@/components/he/Placeholder";
import { heLegal } from "@/data/he/legal";

const p = heLegal.privacy;

export const metadata: Metadata = { title: p.metaTitle, description: p.metaDescription };

const h2 = "text-2xl md:text-3xl font-heading font-bold text-brand-text";
const list = "mt-4 list-disc ps-6 space-y-2 text-lg leading-relaxed text-brand-text-secondary";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <PageIntro title={p.title} intro={p.intro} />
      <section className="mt-12">
        <h2 className={h2}>{p.formTitle}</h2>
        <ul className={list}>
          {p.form.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>
      <section className="mt-12">
        <h2 className={h2}>{p.visitTitle}</h2>
        <ul className={list}>
          {p.visit.map((m) => (
            <li key={m}>{m}</li>
          ))}
          <li>{p.statsLine}</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className={h2}>{p.missingTitle}</h2>
        <div className="mt-4 grid gap-4">
          {p.missing.map((m) => (
            <Placeholder key={m}>{m}</Placeholder>
          ))}
        </div>
      </section>
    </div>
  );
}
