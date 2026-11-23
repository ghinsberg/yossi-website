import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Placeholder from "@/components/he/Placeholder";
import PageIntro from "@/components/he/PageIntro";
import { heStory as s } from "@/data/he/story";
import { heSite } from "@/data/he/site";
import { hebrewAlternates } from "@/lib/he/canonical";

export const metadata: Metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
  alternates: hebrewAlternates("/hasipur"),
};

const h2 = "text-2xl md:text-3xl font-heading font-bold text-brand-text";
const body = "mt-4 text-lg leading-relaxed text-brand-text-secondary";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <PageIntro title={s.title} />
      <section className="mt-12">
        <h2 className={h2}>{s.book.title}</h2>
        <p className={body}>{s.book.body}</p>
      </section>
      <section className="mt-12">
        <h2 className={h2}>{s.after.title}</h2>
        <p className={body}>{s.after.body}</p>
      </section>
      <section className="mt-12">
        <h2 className={h2}>{s.stage.title}</h2>
        <p className={body}>{s.stage.body}</p>
        <Placeholder className="mt-4">{s.stage.placeholder}</Placeholder>
      </section>
      <section className="mt-12">
        <h2 className={h2}>{s.chalalan.name}</h2>
        <p className={body}>{s.chalalan.body}</p>
        <Placeholder className="mt-4">{s.chalalan.placeholder}</Placeholder>
      </section>
      <section className="mt-12">
        <h2 className={h2}>{s.ventures.title}</h2>
        <p className={body}>{s.ventures.body}</p>
        <Placeholder className="mt-4">{s.ventures.placeholder}</Placeholder>
      </section>
      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <Button variant="gold" size="lg" href={heSite.bookingHref}>
          {s.cta.book}
        </Button>
        <Button variant="outline" size="lg" href={s.cta.talksHref}>
          {s.cta.talks}
        </Button>
      </div>
    </div>
  );
}
