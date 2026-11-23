import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import PageIntro from "@/components/he/PageIntro";
import HeText from "@/components/he/HeText";
import { heStory as s } from "@/data/he/story";
import { heSite } from "@/data/he/site";
import { hebrewAlternates } from "@/lib/he/canonical";

export const metadata: Metadata = {
  title: s.metaTitle,
  description: s.metaDescription,
  alternates: hebrewAlternates("/hasipur"),
};

const h2 = "text-2xl md:text-3xl font-heading font-bold text-brand-text";
const h3 = "mt-8 text-xl font-heading font-bold text-brand-text";
const body = "mt-4 text-lg leading-relaxed text-brand-text-secondary";
const caption = "mt-3 text-sm text-center text-brand-text-secondary";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <PageIntro title={s.title} />

      <section className="mt-12">
        <h2 className={h2}>{s.book.title}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_10rem] items-start">
          <div>
            <p className="text-lg leading-relaxed text-brand-text-secondary"><HeText>{s.book.body}</HeText></p>
            <p className={body}><HeText>{s.book.film}</HeText></p>
          </div>
          <figure className="mx-auto w-40">
            <Image
              src="/images/adventure/rescue-1981.jpg"
              alt={s.book.imageAlt}
              width={425}
              height={638}
              sizes="10rem"
              className="w-full h-auto rounded-xl"
            />
            <figcaption className={caption}><HeText>{s.book.imageCaption}</HeText></figcaption>
          </figure>
        </div>
      </section>

      <section className="mt-16">
        <h2 className={h2}>{s.stage.title}</h2>
        <p className={body}><HeText>{s.stage.body}</HeText></p>
        <p className={body}><HeText>{s.stage.scale}</HeText></p>
        <figure className="mt-8">
          <Image
            src="/images/stage/on-stage.jpg"
            alt={s.stage.imageAlt}
            width={1900}
            height={1060}
            sizes="(min-width: 768px) 48rem, 100vw"
            className="w-full h-auto rounded-xl"
          />
          <figcaption className={caption}><HeText>{s.stage.imageCaption}</HeText></figcaption>
        </figure>
        <p className={body}><HeText>{s.stage.workshop}</HeText></p>
        <h3 className={h3}>{s.stage.giveTitle}</h3>
        <p className={body}><HeText>{s.stage.give}</HeText></p>
      </section>

      <section className="mt-16">
        <h2 className={h2}>{s.chalalan.name}</h2>
        <p className={body}><HeText>{s.chalalan.body}</HeText></p>
        <p className={body}><HeText>{s.chalalan.built}</HeText></p>
        <Image
          src="/images/yossi/chalalan/chalalan-lake.jpg"
          alt={s.chalalan.imageAlt}
          width={1190}
          height={793}
          sizes="(min-width: 768px) 48rem, 100vw"
          className="mt-8 w-full h-auto rounded-xl"
        />
        <p className={body}><HeText>{s.chalalan.recognition}</HeText></p>
        <p className={body}><HeText>{s.chalalan.ambassador}</HeText></p>
      </section>

      <section className="mt-16">
        <h2 className={h2}>{s.ventures.title}</h2>
        <p className={body}><HeText>{s.ventures.siliconValley}</HeText></p>
        <p className="mt-4 text-lg leading-relaxed font-medium text-brand-text"><HeText>{s.ventures.honest}</HeText></p>
        <p className={body}><HeText>{s.ventures.cita}</HeText></p>
        <p className={body}><HeText>{s.ventures.album}</HeText></p>
        <p className={body}><HeText>{s.ventures.linoCambi}</HeText></p>
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
