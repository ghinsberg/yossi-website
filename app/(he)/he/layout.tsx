import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "@/app/(en)/globals.css";
import HeHeader from "@/components/he/HeHeader";
import HeFooter from "@/components/he/HeFooter";
import HeMobileCTA from "@/components/he/HeMobileCTA";
import HeStructuredData from "@/components/he/HeStructuredData";
import { heSite } from "@/data/he/site";

// Heebo for both roles for now; alternatives (Assistant, Rubik) are judged in preview.
// Same CSS variable names as the English layout, so font-heading / font-body just work.
const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});
const heeboBody = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const canonicalHost = process.env.HE_CANONICAL_HOST;
const live = process.env.HE_LIVE === "1";
const plausibleDomain = process.env.HE_PLAUSIBLE_DOMAIN;

export const metadata: Metadata = {
  // Never the English domain. Unset (relative URLs) until the Hebrew host is known.
  ...(canonicalHost ? { metadataBase: new URL(`https://${canonicalHost}`) } : {}),
  title: { default: heSite.meta.titleDefault, template: heSite.meta.titleTemplate },
  description: heSite.meta.description,
  openGraph: {
    type: "website",
    siteName: heSite.meta.siteName,
    locale: "he_IL",
    title: heSite.meta.titleDefault,
    description: heSite.meta.description,
  },
  robots: live ? { index: true, follow: true } : { index: false, follow: false },
};

export default function HebrewRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" className={`h-full ${heebo.variable} ${heeboBody.variable}`}>
      <head>
        {plausibleDomain ? (
          <script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" />
        ) : null}
      </head>
      <body className="bg-brand-bg text-brand-text font-body antialiased">
        {/* Needs an absolute origin, so only once the Hebrew canonical host is set. */}
        {canonicalHost ? <HeStructuredData base={`https://${canonicalHost}`} /> : null}
        <HeHeader />
        <main id="main" className="pb-16 md:pb-0">
          {children}
        </main>
        <HeMobileCTA />
        <HeFooter />
      </body>
    </html>
  );
}
