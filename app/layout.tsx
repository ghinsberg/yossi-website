import type { Metadata } from "next";
import "./globals.css";
import CredentialBar from "@/components/layout/CredentialBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Yossi Ghinsberg | Transformation Keynote Speaker",
  description:
    "Voted Most Unforgettable Speaker. Jungle survivor, AI visionary, bestselling author. Book Yossi Ghinsberg for transformation keynotes on leadership, resilience, and navigating disruption.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-brand-bg text-brand-text font-body antialiased">
        <CredentialBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
