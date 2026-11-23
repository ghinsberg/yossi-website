import HeVideoEmbed from "@/components/he/HeVideoEmbed";
import type { HeVideo } from "@/data/he/videos";

// One group of clips. Titles may be Latin, so they are isolated with <bdi>.

/** The English titles keep the English site's em dash in data (a test compares
 *  them); the Hebrew site shows a comma instead. */
export function displayTitleEn(title: string): string {
  return title.replace(/\s*—\s*/g, ", ");
}
export default function VideoList({
  videos,
  embedTitlePrefix,
}: {
  videos: readonly HeVideo[];
  embedTitlePrefix: string;
}) {
  return (
    <ul className="grid gap-10 md:grid-cols-2">
      {videos.map((v) => (
        <li key={v.youtubeId}>
          <HeVideoEmbed youtubeId={v.youtubeId} title={`${embedTitlePrefix}: ${v.title}`} />
          <h3 className="mt-4 text-xl font-heading font-bold text-brand-text">
            <bdi>{v.title}</bdi>
          </h3>
          {v.titleEn ? (
            <p className="mt-1 text-sm text-brand-text-secondary">
              <bdi lang="en">{displayTitleEn(v.titleEn)}</bdi>
            </p>
          ) : null}
          <p className="mt-2 text-brand-text-secondary">{v.context}</p>
        </li>
      ))}
    </ul>
  );
}
