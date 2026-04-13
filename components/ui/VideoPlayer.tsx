"use client";

import { useState } from "react";

interface VideoPlayerProps {
  videoId: string;
  title?: string;
  size?: "large" | "medium";
  poster?: string;
}

export default function VideoPlayer({
  videoId,
  title,
  size = "large",
  poster,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playButtonSize = size === "large" ? "w-20 h-20" : "w-16 h-16";
  const posterUrl =
    poster || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div>
      <div className="rounded-2xl overflow-hidden aspect-video relative shadow-[0_0_80px_rgba(0,0,0,0.6)]">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            title={title || "Video player"}
          />
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            className="w-full h-full flex items-center justify-center group cursor-pointer relative"
            aria-label="Play video"
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-100 transition-transform duration-700"
              style={{ backgroundImage: `url(${posterUrl})` }}
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />

            {/* Play button */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className={`${playButtonSize} rounded-full bg-brand-gold flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-300`}>
                <svg viewBox="0 0 24 24" fill="white" className="w-9 h-9 ml-1.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-white/80 text-sm font-medium tracking-wide">Watch the Reel · 2 min</span>
            </div>
          </button>
        )}
      </div>
      {title && (
        <p className="text-brand-text-secondary text-sm mt-3 text-center">
          {title}
        </p>
      )}
    </div>
  );
}
