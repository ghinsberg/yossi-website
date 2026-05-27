import type { Metadata } from "next";
import VideosPageClient from "./VideosPageClient";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";

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

// VideoObject schema for Google rich video results
const videoSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Yossi Ghinsberg — Speaker Videos",
  description: "Speaker reel, TEDx talk, and keynote highlights from Yossi Ghinsberg.",
  url: `${BASE_URL}/videos`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "VideoObject",
        name: "Yossi Ghinsberg — Speaker Reel",
        description:
          "Official speaker reel for Yossi Ghinsberg — survival keynote speaker, bestselling author, and subject of the 2017 Daniel Radcliffe film Jungle. Trusted by Google, Apple, Microsoft, and BMW.",
        thumbnailUrl: `${BASE_URL}/images/stage/carousel-1.jpg`,
        uploadDate: "2024-01-01",
        embedUrl: "https://www.youtube.com/embed/LCRjBVnQ5JM",
        contentUrl: "https://www.youtube.com/watch?v=LCRjBVnQ5JM",
        author: {
          "@type": "Person",
          "@id": `${BASE_URL}/#person`,
          name: "Yossi Ghinsberg",
        },
      },
    },
  ],
};

export default function VideosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <VideosPageClient />
    </>
  );
}
