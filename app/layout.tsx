import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import StructuredData from "@/components/StructuredData";
import ChatbotMount from "@/components/ui/ChatbotMount";
import SocialStrip from "@/components/ui/SocialStrip";
import Analytics from "@/components/Analytics";
import Contentsquare from "@/components/Contentsquare";
import MetaPixel from "@/components/MetaPixel";
import Preloader from "@/components/Preloader";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";
const OG_IMAGE = `${BASE_URL}/images/headshots/yossi-headshot-1.jpg`;
const DESCRIPTION =
  "Yossi Ghinsberg survived 20 days alone in the Amazon. His book sold over a million copies and became a Hollywood film. Voted Most Unforgettable Speaker. Trusted by Google, Apple, Microsoft, BMW, and more. He speaks to audiences of 10,000 and leaves them permanently changed.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Yossi Ghinsberg | The Most Unforgettable Speaker",
    template: "%s | Yossi Ghinsberg",
  },
  description: DESCRIPTION,
  keywords: [
    "keynote speaker",
    "survival speaker",
    "leadership speaker",
    "resilience speaker",
    "survival wisdom",
    "Yossi Ghinsberg",
    "motivational speaker",
    "conference speaker",
    "yossi ghinsberg speaker",
    "yossi ghinsberg jungle",
    "survival keynote speaker",
    "amazon survival speaker",
    "resilience keynote speaker",
    "keynote speaker overcoming adversity",
    "leadership through uncertainty speaker",
    "laws of the jungle speaker",
    "power to survive keynote",
    "motivational speaker adventure survival",
    "hire yossi ghinsberg",
    "survival skills for business keynote",
    "amazon jungle survival story speaker",
    "corporate resilience speaker fees",
    "adaptability change keynote speaker",
    "adventurer motivational speaker",
    "yossi ghinsberg booking fee",
  ],
  authors: [{ name: "Yossi Ghinsberg" }],
  creator: "Yossi Ghinsberg",
  verification: {
    google: "P1gjmWm4Ox5Z6k0WL1aI8PnU-M9dt1HhsjYGhjFEm6A",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    siteName: "Yossi Ghinsberg",
    url: BASE_URL,
    title: "Yossi Ghinsberg | The Most Unforgettable Speaker",
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Yossi Ghinsberg — The Most Unforgettable Speaker" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yossi Ghinsberg | The Most Unforgettable Speaker",
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${dmSans.variable} ${inter.variable}`}>
      <head>
        {/* Preload first hero image with high priority — signals LCP element to browser */}
        <link rel="preload" as="image" href="/images/stage/carousel_bkk_for_website.jpg" fetchPriority="high" />
      </head>
      <body className="bg-brand-bg text-brand-text font-body antialiased">
        <Preloader />
        <Analytics />
        <MetaPixel />
        <Contentsquare />
        <StructuredData />
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <MobileCTA />
        <Footer />
        <SocialStrip />
        <ChatbotMount />
      </body>
    </html>
  );
}
