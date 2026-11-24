import type { Metadata } from "next";
import PageIntro from "@/components/he/PageIntro";
import ListOrNothing from "@/components/he/ListOrNothing";
import EndorsementList from "@/components/he/EndorsementList";
import { heEndorsements, heEndorsementsPage as p } from "@/data/he/endorsements";
import { hebrewAlternates, hebrewOpenGraph } from "@/lib/he/canonical";

export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  alternates: hebrewAlternates("/hamlatzot"),
  ...hebrewOpenGraph("/hamlatzot", { title: p.metaTitle, description: p.metaDescription }),
};

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <PageIntro title={p.title} intro={p.intro} />
      {/* An empty list renders no section at all. */}
      <ListOrNothing items={heEndorsements}>
        {(items) => (
          <section className="mt-12">
            <EndorsementList items={items} translatedNote={p.translatedNote} />
          </section>
        )}
      </ListOrNothing>
    </div>
  );
}
