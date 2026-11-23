import HeVideoEmbed from "@/components/he/HeVideoEmbed";
import type { HeVideo } from "@/data/he/videos";

// One group of clips. Titles may be Latin, so they are isolated with <bdi>.
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
          <p className="mt-2 text-brand-text-secondary">{v.context}</p>
        </li>
      ))}
    </ul>
  );
}
