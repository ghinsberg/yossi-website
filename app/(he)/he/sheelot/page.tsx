import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageIntro from "@/components/he/PageIntro";
import ListOrNothing from "@/components/he/ListOrNothing";
import FaqList from "@/components/he/FaqList";
import { heFaq, heFaqPage as p } from "@/data/he/faq";
import { heSite } from "@/data/he/site";
import { hebrewAlternates, hebrewOpenGraph } from "@/lib/he/canonical";

export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  alternates: hebrewAlternates("/sheelot"),
  ...hebrewOpenGraph("/sheelot", { title: p.metaTitle, description: p.metaDescription }),
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <PageIntro title={p.title} intro={p.intro} />
      {/* An empty list renders no section at all. */}
      <ListOrNothing items={heFaq}>
        {(items) => (
          <section className="mt-12">
            <FaqList items={items} />
          </section>
        )}
      </ListOrNothing>
      <div className="mt-12">
        <Button variant="outline" href={heSite.bookingHref}>
          {p.bookCta}
        </Button>
      </div>
    </div>
  );
}
