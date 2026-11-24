import type { Metadata } from "next";
import PageIntro from "@/components/he/PageIntro";
import ListOrNothing from "@/components/he/ListOrNothing";
import VideoList from "@/components/he/VideoList";
import { heVideos, heVideosPage as p, orderVideos } from "@/data/he/videos";
import { hebrewAlternates, hebrewOpenGraph } from "@/lib/he/canonical";

export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  alternates: hebrewAlternates("/video"),
  ...hebrewOpenGraph("/video", { title: p.metaTitle, description: p.metaDescription }),
};

const h2 = "text-2xl md:text-3xl font-heading font-bold text-brand-text";

// Two groups: clips from Israeli stages ("he") first, then the rest. Each group
// renders only when it has clips, so no heading ever stands alone.
export default function Page() {
  const ordered = orderVideos(heVideos);
  const israel = ordered.filter((v) => v.language === "he");
  const world = ordered.filter((v) => v.language !== "he");
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <PageIntro title={p.title} intro={p.intro} />
      <div className="mt-12 grid gap-16">
        <ListOrNothing items={israel}>
          {(items) => (
            <section>
              <h2 className={`mb-6 ${h2}`}>{p.hebrewHeading}</h2>
              <VideoList videos={items} embedTitlePrefix={p.embedTitlePrefix} />
            </section>
          )}
        </ListOrNothing>
        <ListOrNothing items={world}>
          {(items) => (
            <section>
              <h2 className={`mb-2 ${h2}`}>{p.englishHeading}</h2>
              {p.englishNote ? <p className="mb-6 text-brand-text-secondary">{p.englishNote}</p> : null}
              <VideoList videos={items} embedTitlePrefix={p.embedTitlePrefix} />
            </section>
          )}
        </ListOrNothing>
      </div>
    </div>
  );
}
