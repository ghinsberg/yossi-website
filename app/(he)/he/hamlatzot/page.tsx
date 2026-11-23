import type { Metadata } from "next";
import PageIntro from "@/components/he/PageIntro";
import ListOrPlaceholder from "@/components/he/ListOrPlaceholder";
import EndorsementList from "@/components/he/EndorsementList";
import { heEndorsements, heEndorsementsPage as p } from "@/data/he/endorsements";
import { hebrewAlternates } from "@/lib/he/canonical";

export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  alternates: hebrewAlternates("/hamlatzot"),
};

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <PageIntro title={p.title} intro={p.intro} />
      <section className="mt-12">
        <ListOrPlaceholder items={heEndorsements} empty={p.empty}>
          {(items) => <EndorsementList items={items} />}
        </ListOrPlaceholder>
      </section>
    </div>
  );
}
