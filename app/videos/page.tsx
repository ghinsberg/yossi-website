import type { Metadata } from "next";
import VideosPageClient from "./VideosPageClient";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch Yossi Ghinsberg's speaker reel, TEDx talk, and keynote highlights. See why audiences of 10,000 sit in silence.",
  openGraph: {
    title: "Videos | Yossi Ghinsberg",
    description:
      "Watch Yossi Ghinsberg's speaker reel, TEDx talk, and keynote highlights. See why audiences of 10,000 sit in silence.",
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
      "Watch Yossi Ghinsberg's speaker reel, TEDx talk, and keynote highlights. See why audiences of 10,000 sit in silence.",
    images: ["https://yossighinsberg.com/images/stage/carousel-1.jpg"],
  },
};

export default function VideosPage() {
  return <VideosPageClient />;
}
