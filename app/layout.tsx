import type { Metadata } from "next";
import "./globals.css";
import CredentialBar from "@/components/layout/CredentialBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "Yossi Ghinsberg | Transformation Keynote Speaker",
    template: "%s | Yossi Ghinsberg",
  },
  description:
    "Voted Most Unforgettable Speaker. Jungle survivor, AI visionary, bestselling author (1M+ copies), Daniel Radcliffe film. Book Yossi for your next event.",
  keywords: [
    "keynote speaker",
    "transformation",
    "leadership",
    "AI",
    "resilience",
    "Yossi Ghinsberg",
  ],
  openGraph: {
    type: "website",
    siteName: "Yossi Ghinsberg",
    title: "Yossi Ghinsberg | Transformation Keynote Speaker",
    description:
      "Voted Most Unforgettable Speaker. Jungle survivor, AI visionary, bestselling author (1M+ copies), Daniel Radcliffe film. Book Yossi for your next event.",
    images: [
      {
        url: "https://yossighinsberg.com/images/headshots/yossi-headshot-1.jpg",
        width: 1200,
        height: 630,
        alt: "Yossi Ghinsberg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yossi Ghinsberg | Transformation Keynote Speaker",
    description:
      "Voted Most Unforgettable Speaker. Jungle survivor, AI visionary, bestselling author (1M+ copies), Daniel Radcliffe film. Book Yossi for your next event.",
    images: ["https://yossighinsberg.com/images/headshots/yossi-headshot-1.jpg"],
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
      </body>
    </html>
  );
}
