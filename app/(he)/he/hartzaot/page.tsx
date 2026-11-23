import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageIntro from "@/components/he/PageIntro";
import ListOrPlaceholder from "@/components/he/ListOrPlaceholder";
import KeynoteList from "@/components/he/KeynoteList";
import { heKeynotes, heKeynotesPage as p } from "@/data/he/keynotes";
import { heSite } from "@/data/he/site";
import { hebrewAlternates } from "@/lib/he/canonical";

export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  alternates: hebrewAlternates("/hartzaot"),
};

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <PageIntro title={p.title} intro={p.intro} />
      <section className="mt-12">
        <ListOrPlaceholder items={heKeynotes} empty={p.empty}>
          {(items) => <KeynoteList items={items} forWhomLabel={p.forWhomLabel} takeawayLabel={p.takeawayLabel} />}
        </ListOrPlaceholder>
      </section>
      <div className="mt-12">
        <Button variant="gold" size="lg" href={heSite.bookingHref}>
          {p.bookCta}
        </Button>
      </div>
    </div>
  );
}
