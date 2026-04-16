"use client";

import { useState } from "react";
import { featuredReel, keynoteVideos, storyVideos, shortVideos, Video } from "@/data/videos";

function VideoThumbnail({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  if (playing) {
    return (
      <div className="aspect-video w-full rounded-xl overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="group relative aspect-video w-full rounded-xl overflow-hidden block"
      aria-label={`Play ${video.title}`}
    >
      {/* Thumbnail */}
      <img
        src={thumb}
        alt={video.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-brand-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function VideoCard({ video }: { video: Video }) {
  return (
    <div className="flex flex-col gap-3">
      <VideoThumbnail video={video} />
      <p className="text-sm font-medium text-brand-text leading-snug">{video.title}</p>
    </div>
  );
}

export default function VideosPageClient() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Watch Yossi
          </h1>
          <p className="text-xl text-brand-text-secondary">
            See why audiences of 10,000 sit in silence — and leave permanently changed.
          </p>
        </div>
      </section>

      {/* Featured Reel */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="aspect-video w-full rounded-2xl overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${featuredReel.id}`}
            title={featuredReel.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <p className="text-center text-brand-text-secondary text-sm mt-4 uppercase tracking-widest">
          Speaker Reel
        </p>
      </section>

      {/* Keynote Clips */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-heading font-bold mb-8">From the Stage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {keynoteVideos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>

      {/* The Story */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-heading font-bold mb-2">The Story</h2>
        <p className="text-brand-text-secondary mb-8">
          21 days alone in the Amazon. A bestselling book. A Hollywood film starring Daniel Radcliffe.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {storyVideos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>

      {/* Shorts */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-2xl font-heading font-bold mb-8">Quick Clips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {shortVideos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xl font-heading font-semibold mb-2">
            Want to see Yossi live at your event?
          </p>
          <p className="text-brand-text-secondary mb-6">
            Check availability and get a tailored proposal within 48 hours.
          </p>
          <a
            href="/book-yossi"
            className="inline-block bg-brand-gold text-black font-semibold px-8 py-4 rounded-full hover:bg-brand-gold/90 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </section>
    </>
  );
}
