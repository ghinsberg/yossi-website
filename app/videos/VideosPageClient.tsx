"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

interface Video {
  id: string;
  youtubeId: string | null;
  title: string;
  description: string;
  category: string;
  duration?: string;
}

const videos: Video[] = [
  {
    id: "speaker-reel",
    youtubeId: "LCRjBVnQ5JM",
    title: "Speaker Reel",
    description: "90-second highlight reel showcasing Yossi on stage",
    category: "Keynote Highlights",
    duration: "1:30",
  },
  {
    id: "tedx-melbourne",
    youtubeId: "TEDx_PLACEHOLDER",
    title: "TEDxMelbourne 2018",
    description: "Yossi shares his transformation story at TEDxMelbourne",
    category: "TEDx",
    duration: "18:00",
  },
  {
    id: "i-shouldnt-be-alive",
    youtubeId: null,
    title: '"I Shouldn\'t Be Alive"',
    description:
      "Discovery Channel documentary on Yossi's survival in the Amazon",
    category: "Media Appearances",
    duration: "45:00",
  },
  {
    id: "ypo-clips",
    youtubeId: null,
    title: "YPO Keynote Clips",
    description: "Selected clips from YPO chapter events worldwide",
    category: "Media Appearances",
    duration: "12:00",
  },
];

const categories = ["Keynote Highlights", "TEDx", "Media Appearances"];

function VideoCard({ video }: { video: Video }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const hasYoutube = video.youtubeId !== null;
  const thumbnailUrl = hasYoutube
    ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
    : null;

  return (
    <div className="group">
      <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5">
        {isPlaying && hasYoutube ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full absolute inset-0"
            title={video.title}
          />
        ) : (
          <button
            onClick={() => hasYoutube && setIsPlaying(true)}
            className={`w-full h-full flex items-center justify-center ${
              hasYoutube ? "cursor-pointer" : "cursor-default"
            }`}
            aria-label={hasYoutube ? `Play ${video.title}` : video.title}
          >
            {thumbnailUrl ? (
              <Image
                src={thumbnailUrl}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 text-white/20"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
            {/* Play button overlay */}
            {hasYoutube && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors duration-300">
                <div className="w-14 h-14 rounded-full bg-brand-gold/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
            {/* Placeholder badge */}
            {!hasYoutube && (
              <div className="absolute bottom-3 left-3 bg-white/10 backdrop-blur-sm text-white/60 text-xs px-2 py-1 rounded">
                Coming Soon
              </div>
            )}
          </button>
        )}
        {/* Duration badge */}
        {video.duration && !isPlaying && (
          <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </div>
        )}
      </div>
      {/* Card info */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
            {video.category}
          </span>
        </div>
        <h3 className="text-lg font-heading font-semibold text-brand-text">
          {video.title}
        </h3>
        <p className="text-sm text-brand-text-secondary mt-1">
          {video.description}
        </p>
      </div>
    </div>
  );
}

function FeaturedPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "LCRjBVnQ5JM";

  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 shadow-2xl shadow-brand-gold/5">
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full absolute inset-0"
          title="Yossi Ghinsberg Speaker Reel"
        />
      ) : (
        <button
          onClick={() => setIsPlaying(true)}
          className="w-full h-full flex items-center justify-center cursor-pointer group"
          aria-label="Play speaker highlight reel"
        >
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Yossi Ghinsberg Speaker Reel"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-gold/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold transition-all duration-300 shadow-lg shadow-brand-gold/30">
              <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 md:w-10 md:h-10 ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <p className="text-xs uppercase tracking-wider text-brand-gold font-semibold mb-1">
              Featured
            </p>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
              Speaker Highlight Reel
            </h3>
            <p className="text-sm text-white/70 mt-1">1:30</p>
          </div>
        </button>
      )}
    </div>
  );
}

export default function VideosPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center">
            See Yossi in Action
          </h1>
          <p className="text-xl text-brand-text-secondary text-center max-w-3xl mx-auto mt-6">
            From electrifying keynotes to in-depth interviews, experience the
            power and presence that make Yossi one of the most unforgettable
            speakers in the world.
          </p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <FeaturedPlayer />
        </div>
      </section>

      {/* Video Grid by Category */}
      {categories.map((category) => {
        const categoryVideos = videos.filter((v) => v.category === category);
        if (categoryVideos.length === 0) return null;

        return (
          <section
            key={category}
            className="border-t border-white/10 py-16 md:py-20"
          >
            <div className="max-w-7xl mx-auto px-6">
              <SectionHeading title={category} align="left" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {categoryVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="border-t border-white/10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Ready to bring transformation to your stage?
          </h2>
          <p className="text-lg text-brand-text-secondary mt-4">
            Book Yossi for your next event and give your audience an experience
            they will never forget.
          </p>
          <div className="mt-8">
            <Button variant="gold" href="/book-yossi" size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
