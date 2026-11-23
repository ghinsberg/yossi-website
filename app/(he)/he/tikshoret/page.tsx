import type { Metadata } from "next";
import PageIntro from "@/components/he/PageIntro";
import Placeholder from "@/components/he/Placeholder";
import ListOrPlaceholder from "@/components/he/ListOrPlaceholder";
import MediaList from "@/components/he/MediaList";
import { heAsSeenIn, heMedia, heMediaPage as p } from "@/data/he/media";
import { hebrewAlternates } from "@/lib/he/canonical";

export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  alternates: hebrewAlternates("/tikshoret"),
};

const h2 = "text-2xl md:text-3xl font-heading font-bold text-brand-text";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <PageIntro title={p.title} intro={p.intro} />
      {/* Israeli press first, as the design asks. The English site names none yet. */}
      <section className="mt-12">
        <h2 className={h2}>{p.israelTitle}</h2>
        <Placeholder className="mt-6">{p.israelPlaceholder}</Placeholder>
      </section>
      <section className="mt-12">
        <h2 className={h2}>{p.worldTitle}</h2>
        <div className="mt-6">
          <ListOrPlaceholder items={heMedia} empty={p.empty}>
            {(items) => <MediaList items={items} readCta={p.readCta} />}
          </ListOrPlaceholder>
        </div>
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
