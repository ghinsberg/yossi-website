import type { Metadata } from "next";
import { preload } from "react-dom";
import "@/app/fonts-he.css";
import "@/app/(en)/globals.css";
import HeHeader from "@/components/he/HeHeader";
import HeFooter from "@/components/he/HeFooter";
import HeMobileCTA from "@/components/he/HeMobileCTA";
import HeStructuredData from "@/components/he/HeStructuredData";
import AgentTagCapture from "@/components/he/AgentTagCapture";
import HeDraftBanner from "@/components/he/HeDraftBanner";
import { heSite } from "@/data/he/site";
import { HE_SHARE_IMAGE, hebrewOpenGraphBase } from "@/lib/he/canonical";

// Heebo for both roles for now; alternatives (Assistant, Rubik) are judged in preview.
// Self-hosted in app/fonts-he.css with the weights the Hebrew pages use (normal,
// medium, semibold, bold, extrabold) and bound to the English layout's two CSS
// variable names, so font-heading / font-body just work.

const canonicalHost = process.env.HE_CANONICAL_HOST;
const live = process.env.HE_LIVE === "1";
const plausibleDomain = process.env.HE_PLAUSIBLE_DOMAIN;

export const metadata: Metadata = {
  // Never the English domain. Unset (relative URLs) until the Hebrew host is known.
  ...(canonicalHost ? { metadataBase: new URL(`https://${canonicalHost}`) } : {}),
  title: { default: heSite.meta.titleDefault, template: heSite.meta.titleTemplate },
  description: heSite.meta.description,
  // The Hebrew share image (WhatsApp and social previews). Relative URLs resolve
  // against metadataBase once the Hebrew host is set.
  openGraph: hebrewOpenGraphBase(),
  twitter: {
    card: "summary_large_image",
    title: heSite.meta.titleDefault,
    description: heSite.meta.description,
    images: [HE_SHARE_IMAGE.url],
  },
  robots: live ? { index: true, follow: true } : { index: false, follow: false },
};

// Heebo's latin and hebrew subsets render above the fold on every Hebrew page.
// preload() emits one <link rel="preload"> each in <head>.
const FONT_PRELOADS = ["heebo-latin", "heebo-hebrew"];
const FONT_PRELOAD = { as: "font", type: "font/woff2", crossOrigin: "anonymous" } as const;

export default function HebrewRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  for (const f of FONT_PRELOADS) preload(`/fonts/${f}.woff2`, FONT_PRELOAD);
  return (
    <html lang="he" dir="rtl" className="h-full">
      <head>
        {plausibleDomain ? (
          <script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" />
        ) : null}
      </head>
      {/* --he-banner-h is the draft banner's height; the sticky header sits below it. Both go at launch. */}
      <body className="bg-brand-bg text-brand-text font-body antialiased [--he-banner-h:2rem]">
        {/* Needs an absolute origin, so only once the Hebrew canonical host is set. */}
        {canonicalHost ? <HeStructuredData base={`https://${canonicalHost}`} /> : null}
        {/* Every page keeps ?a=<agent>, so a client entering on any page is credited. */}
        <AgentTagCapture />
        <HeDraftBanner />
        <HeHeader />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <HeMobileCTA />
        <HeFooter />
      </body>
    </html>
  );
}
