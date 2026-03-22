import SectionHeading from "@/components/ui/SectionHeading";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { siteConfig } from "@/data/siteConfig";

export default function DemoReel() {
  return (
    <section id="reel" className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          title="Watch what happens when Yossi takes the stage."
          align="center"
        />
        <div className="mt-12">
          <VideoPlayer videoId={siteConfig.speakerReelId} size="large" />
        </div>
      </div>
    </section>
  );
}
