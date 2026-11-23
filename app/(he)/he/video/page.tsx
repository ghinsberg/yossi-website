import type { Metadata } from "next";
import PageIntro from "@/components/he/PageIntro";
import ListOrPlaceholder from "@/components/he/ListOrPlaceholder";
import VideoList from "@/components/he/VideoList";
import { heVideos, heVideosPage as p, orderVideos } from "@/data/he/videos";
import { hebrewAlternates } from "@/lib/he/canonical";

export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  alternates: hebrewAlternates("/video"),
};

export default function Page() {
  const ordered = orderVideos(heVideos);
  const hebrew = ordered.filter((v) => v.language === "he");
  const english = ordered.filter((v) => v.language !== "he");
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <PageIntro title={p.title} intro={p.intro} />
      <div className="mt-12 grid gap-16">
        <ListOrPlaceholder items={ordered} empty={p.empty}>
          {() => (
            <>
              {hebrew.length > 0 ? (
                <section>
                  <h2 className="mb-6 text-2xl md:text-3xl font-heading font-bold text-brand-text">{p.hebrewHeading}</h2>
                  <VideoList videos={hebrew} embedTitlePrefix={p.embedTitlePrefix} />
                </section>
              ) : null}
              {english.length > 0 ? (
                <section>
                  <h2 className="mb-2 text-2xl md:text-3xl font-heading font-bold text-brand-text">{p.englishHeading}</h2>
                  <p className="mb-6 text-brand-text-secondary">{p.englishNote}</p>
                  <VideoList videos={english} embedTitlePrefix={p.embedTitlePrefix} />
                </section>
              ) : null}
            </>
          )}
        </ListOrPlaceholder>
      </div>
    </div>
  );
}
