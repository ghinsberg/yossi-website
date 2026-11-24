import type { Metadata } from "next";
import PageIntro from "@/components/he/PageIntro";
import ListOrNothing from "@/components/he/ListOrNothing";
import MediaList from "@/components/he/MediaList";
import HeText from "@/components/he/HeText";
import { heAsSeenIn, heIsraelMedia, heMedia, heMediaPage as p } from "@/data/he/media";
import { hebrewAlternates, hebrewOpenGraph } from "@/lib/he/canonical";

export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  alternates: hebrewAlternates("/tikshoret"),
  ...hebrewOpenGraph("/tikshoret", { title: p.metaTitle, description: p.metaDescription }),
};

const h2 = "text-2xl md:text-3xl font-heading font-bold text-brand-text";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <PageIntro title={p.title} intro={p.intro} />
      {/* Israeli media first, as the design asks. */}
      <ListOrNothing items={heIsraelMedia}>
        {(items) => (
          <section className="mt-12">
            <h2 className={h2}>{p.israelTitle}</h2>
            <ul className="mt-6 grid gap-4">
              {items.map((m) => (
                <li key={m.title} className="rounded-xl border border-brand-gold/20 p-5">
                  <p className="text-sm text-brand-gold">
                    <HeText>{m.outlet}</HeText>
                    {m.year ? <> · {m.year}</> : null}
                  </p>
                  <p className={m.publishedHeadline ? "mt-1 text-lg font-semibold text-brand-text" : "mt-1 text-brand-text-secondary"}>
                    <HeText>{m.title}</HeText>
                  </p>
                  {m.url ? (
                    <a href={m.url} className="mt-2 inline-block text-brand-gold underline" rel="noopener">
                      {p.readCta}
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        )}
      </ListOrNothing>
      <section className="mt-12">
        <h2 className={h2}>{p.worldTitle}</h2>
        <ListOrNothing items={heMedia}>
          {(items) => (
            <div className="mt-6">
              <MediaList items={items} readCta={p.readCta} />
            </div>
          )}
        </ListOrNothing>
        <h3 className="mt-10 text-lg font-heading font-bold text-brand-text">{p.asSeenInTitle}</h3>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-brand-text-secondary">
          {heAsSeenIn.map((name) => (
            <li key={name}>
              <bdi>{name}</bdi>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
