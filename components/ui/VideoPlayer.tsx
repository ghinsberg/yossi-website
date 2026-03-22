"use client";

import { useState } from "react";

interface VideoPlayerProps {
  videoId: string;
  title?: string;
  size?: "large" | "medium";
}

export default function VideoPlayer({
  videoId,
  title,
  size = "large",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playButtonSize = size === "large" ? "w-20 h-20" : "w-16 h-16";

  return (
    <div>
      <div className="bg-brand-bg rounded-xl overflow-hidden aspect-video relative">
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
            className="w-full h-full flex items-center justify-center bg-brand-bg group cursor-pointer"
            aria-label="Play video"
          >
            <div
              className={`${playButtonSize} rounded-full bg-brand-gold/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold transition-all duration-300`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="white"
                className="w-8 h-8 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
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
