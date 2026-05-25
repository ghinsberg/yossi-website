import type { Metadata } from "next";
import "./globals.css";
import CredentialBar from "@/components/layout/CredentialBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import StructuredData from "@/components/StructuredData";
import ChatbotMount from "@/components/ui/ChatbotMount";
import SocialStrip from "@/components/ui/SocialStrip";
import Analytics from "@/components/Analytics";
import Contentsquare from "@/components/Contentsquare";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossi-website.vercel.app";
const OG_IMAGE = `${BASE_URL}/images/headshots/yossi-headshot-1.jpg`;
const DESCRIPTION =
  "Yossi Ghinsberg survived 21 days alone in the Amazon. His book sold over a million copies and became a Hollywood film. Voted Most Unforgettable Speaker. Trusted by Google, Apple, Microsoft, BMW, and more. He speaks to audiences of 10,000 and leaves them permanently changed.";

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
  ],
  authors: [{ name: "Yossi Ghinsberg" }],
  creator: "Yossi Ghinsberg",
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
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-brand-bg text-brand-text font-body antialiased">
        <Analytics />
        <Contentsquare />
        <StructuredData />
        <CredentialBar />
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
