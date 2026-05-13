import VideoPlayer from "@/components/ui/VideoPlayer";
import { siteConfig } from "@/data/siteConfig";

export default function DemoReel() {
  return (
    <section id="reel" className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-brand-gold mb-4">
            Watch
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-text mb-4">
            See it for yourself.
          </h2>
          <p className="text-brand-text-secondary text-lg max-w-xl mx-auto">
            On their feet. Every time. Two minutes.
          </p>
        </div>

        {/* Video */}
        <VideoPlayer
          videoId={siteConfig.speakerReelId}
          size="large"
          poster="/images/stage/carousel-5.jpg"
        />

        {/* Social proof strip below video */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 text-center">
          {[
            { stat: "1M+", label: "Books sold" },
            { stat: "Most Unforgettable", label: "Speaker — The Sweeney Agency" },
            { stat: "Jungle", label: "Film starring Daniel Radcliffe" },
            { stat: "55+", label: "Countries" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="text-brand-gold font-bold text-xl">{stat}</p>
              <p className="text-brand-text-secondary text-xs uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
