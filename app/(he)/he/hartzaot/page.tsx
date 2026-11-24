import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageIntro from "@/components/he/PageIntro";
import ListOrNothing from "@/components/he/ListOrNothing";
import KeynoteList from "@/components/he/KeynoteList";
import { heKeynotes, heKeynotesPage as p } from "@/data/he/keynotes";
import { heSite } from "@/data/he/site";
import { hebrewAlternates, hebrewOpenGraph } from "@/lib/he/canonical";

export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  alternates: hebrewAlternates("/hartzaot"),
  ...hebrewOpenGraph("/hartzaot", { title: p.metaTitle, description: p.metaDescription }),
};

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <PageIntro title={p.title} intro={p.intro} />
      <ListOrNothing items={heKeynotes}>
        {(items) => (
          <section className="mt-12">
            <KeynoteList items={items} forWhomLabel={p.forWhomLabel} takeawayLabel={p.takeawayLabel} titleEnLabel={p.titleEnLabel} />
          </section>
        )}
      </ListOrNothing>
      {p.workshopTitle ? (
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-text">{p.workshopTitle}</h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-text-secondary">{p.workshopBody}</p>
          <p className="mt-4 text-lg leading-relaxed text-brand-text-secondary">{p.workshopFit}</p>
        </section>
      ) : null}
      <div className="mt-12">
        <Button variant="gold" size="lg" href={heSite.bookingHref}>
          {p.bookCta}
        </Button>
      </div>
    </div>
  );
}
