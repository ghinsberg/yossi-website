interface VideoPlayerProps {
  videoId: string;
  size?: "large" | "medium";
  poster?: string;
}

export default function VideoPlayer({ videoId, size = "medium" }: VideoPlayerProps) {
  return (
    <div className={`aspect-video w-full rounded-2xl overflow-hidden ${size === "large" ? "shadow-2xl" : "shadow-lg"}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Yossi Ghinsberg video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
