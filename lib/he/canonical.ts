import { heSite } from "@/data/he/site";
import { heHome } from "@/data/he/home";

/**
 * Canonical link for a Hebrew page. Callers pass the page's clean path, never
 * a query such as ?a=rafi, so tagged URLs all point at the untagged address. Emitted only
 * once the Hebrew canonical host is known, because next/metadata needs
 * metadataBase to resolve a path; without it Next would invent a host.
 */
export function hebrewAlternates(path: string, canonicalHost = process.env.HE_CANONICAL_HOST) {
  return canonicalHost ? { canonical: path } : undefined;
}

/**
 * The share image for the Hebrew site (WhatsApp, Facebook, LinkedIn, X).
 * stage/carousel-4.jpg, viewed 2026-11-24: Yossi on stage as he looks today
 * (bald, short grey beard), head microphone, finger raised. 1920x1080, 268 KB,
 * no text added. Its alt is the home hero's alt, from data/he.
 */
export const HE_SHARE_IMAGE = {
  url: "/images/stage/carousel-4.jpg",
  width: 1920,
  height: 1080,
  type: "image/jpeg",
} as const;

/** The layout's Open Graph, shared by every Hebrew page. */
export function hebrewOpenGraphBase() {
  return {
    type: "website" as const,
    siteName: heSite.meta.siteName,
    locale: "he_IL",
    title: heSite.meta.titleDefault,
    description: heSite.meta.description,
    images: [{ ...HE_SHARE_IMAGE, alt: heHome.hero.imageAlt }],
  };
}

/**
 * Open Graph for one Hebrew page. A page-level openGraph replaces the layout's
 * whole object, so the shared fields are restated with the page's own title,
 * description and url. Like the canonical, it is emitted only once the Hebrew
 * host is known; until then it returns {} so the page inherits the layout's
 * Open Graph (a key set to undefined would erase it). Spread it into metadata.
 */
export function hebrewOpenGraph(
  path: string,
  page: { title?: string; description?: string } = {},
  canonicalHost = process.env.HE_CANONICAL_HOST,
) {
  if (!canonicalHost) return {};
  const base = hebrewOpenGraphBase();
  return {
    openGraph: {
      ...base,
      title: page.title ? heSite.meta.titleTemplate.replace("%s", page.title) : base.title,
      description: page.description ?? base.description,
      url: path,
    },
  };
}
