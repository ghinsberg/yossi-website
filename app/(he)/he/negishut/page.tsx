import type { Metadata } from "next";
import PageIntro from "@/components/he/PageIntro";
import { heLegal } from "@/data/he/legal";
import { hebrewAlternates, hebrewOpenGraph } from "@/lib/he/canonical";

const p = heLegal.accessibility;

export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  alternates: hebrewAlternates("/negishut"),
  ...hebrewOpenGraph("/negishut", { title: p.metaTitle, description: p.metaDescription }),
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <PageIntro title={p.title} intro={p.intro} />
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-text">{p.measuresTitle}</h2>
        <ul className="mt-4 list-disc ps-6 space-y-2 text-lg leading-relaxed text-brand-text-secondary">
          {p.measures.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-text">{p.missingTitle}</h2>
        {/* What counsel or Yossi still has to supply: a plain list, so a lawyer can read the page and fill it in. */}
        <ul data-to-complete className="mt-4 list-disc ps-6 space-y-2 text-lg leading-relaxed text-brand-text-secondary">
          {p.missing.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
