import LawsPageClient from "@/components/sections/LawsPageClient";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";
const OG_IMAGE = `${BASE_URL}/images/headshots/yossi-headshot-1.jpg`;

const DESCRIPTION =
  "Nine laws of leadership and resilience drawn from decades in the Amazon. Each law set to an original score. Yossi Ghinsberg's framework, applied by leaders at Google, Apple, Microsoft, and beyond.";

export const metadata = {
  title: "The Laws of the Jungle",
  description: DESCRIPTION,
  openGraph: {
    title: "The Laws of the Jungle | Yossi Ghinsberg",
    description: DESCRIPTION,
    url: `${BASE_URL}/laws`,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg — The Laws of the Jungle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "The Laws of the Jungle | Yossi Ghinsberg",
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${BASE_URL}/laws`,
  },
};

export default function LawsPage() {
  return <LawsPageClient />;
}
