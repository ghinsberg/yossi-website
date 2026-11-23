import type { Metadata } from "next";
import PageIntro from "@/components/he/PageIntro";
import ListOrPlaceholder from "@/components/he/ListOrPlaceholder";
import MediaList from "@/components/he/MediaList";
import { heMedia, heMediaPage as p } from "@/data/he/media";
import { hebrewAlternates } from "@/lib/he/canonical";

export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  alternates: hebrewAlternates("/tikshoret"),
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <PageIntro title={p.title} intro={p.intro} />
      <section className="mt-12">
        <ListOrPlaceholder items={heMedia} empty={p.empty}>
          {(items) => <MediaList items={items} readCta={p.readCta} />}
        </ListOrPlaceholder>
      </section>
    </div>
  );
}
