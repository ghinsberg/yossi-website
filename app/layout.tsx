import type { Metadata } from "next";
import "./globals.css";
import CredentialBar from "@/components/layout/CredentialBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import StructuredData from "@/components/StructuredData";
import ChatbotMount from "@/components/ui/ChatbotMount";

const BASE_URL = "https://yossi-website.vercel.app";
const OG_IMAGE = `${BASE_URL}/images/headshots/yossi-headshot-1.jpg`;
const DESCRIPTION =
  "Survival wisdom for an uncertain world. Yossi Ghinsberg is a transformation keynote speaker — jungle survivor, bestselling author (1M+ copies), Hollywood film. Trusted by Google, Apple, Microsoft, BMW and more.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Yossi Ghinsberg | Keynote Speaker",
    template: "%s | Yossi Ghinsberg",
  },
  description: DESCRIPTION,
  keywords: [
    "keynote speaker",
    "transformation keynote",
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
    title: "Yossi Ghinsberg | Keynote Speaker",
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Yossi Ghinsberg — Keynote Speaker" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yossi Ghinsberg | Keynote Speaker",
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
        <StructuredData />
        <CredentialBar />
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <MobileCTA />
        <Footer />
        <ChatbotMount />
      </body>
    </html>
  );
}
