// YouTube embed with a caller-supplied title (the shared player has an English title).
export default function HeVideoEmbed({ youtubeId, title }: { youtubeId: string; title: string }) {
  return (
    <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
