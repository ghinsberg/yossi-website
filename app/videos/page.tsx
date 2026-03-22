import type { Metadata } from "next";
import VideosPageClient from "./VideosPageClient";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch Yossi Ghinsberg on stage. Speaker highlight reel, TEDx talks, and media appearances from the world's most unforgettable transformation keynote speaker.",
  openGraph: {
    title: "Videos | Yossi Ghinsberg",
    description:
      "Watch Yossi Ghinsberg on stage. Speaker highlight reel, TEDx talks, and media appearances from the world's most unforgettable transformation keynote speaker.",
    images: [
      {
        url: "https://yossighinsberg.com/images/stage/carousel-1.jpg",
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg on stage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Videos | Yossi Ghinsberg",
    description:
      "Watch Yossi Ghinsberg on stage. Speaker highlight reel, TEDx talks, and media appearances from the world's most unforgettable transformation keynote speaker.",
    images: ["https://yossighinsberg.com/images/stage/carousel-1.jpg"],
  },
};

export default function VideosPage() {
  return <VideosPageClient />;
}
