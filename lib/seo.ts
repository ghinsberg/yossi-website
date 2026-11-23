import type { MetadataRoute } from "next";
import { keynotes } from "@/data/keynotes";
import { posts } from "@/data/posts";
import { speakerLocations } from "@/data/locations";
import { heSite } from "@/data/he/site";
import { isHebrewHost, type SiteEnv } from "@/lib/site";

export type SiteKind = "en" | "he";

/** The English origin: configured value, never taken from a request. */
export const EN_BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";

// Single source of truth for the Hebrew pages: home, then the same nav,
// booking and legal links the header and footer render. /toda is left out.
export const HE_SITEMAP_PATHS: string[] = [
  "/",
  ...heSite.nav.map((n) => n.href),
  heSite.bookingHref,
  ...heSite.footer.legalLinks.map((l) => l.href),
];

const EN_STATIC_PATHS = [
  "",
  "/keynotes",
  "/book-yossi",
  "/story",
  "/videos",
  "/endorsements",
  "/media",
  "/faq",
  "/blog",
  "/laws",
  "/yossi",
  "/power-to-survive",
  "/the-two-techniques",
  "/survival-skills-for-business",
  "/survival-keynote-speaker",
  "/resilience-keynote-speaker",
  "/adventure-keynote-speaker",
  "/adaptability-keynote-speaker",
  "/amazon-survival-speaker",
  "/leadership-keynote-speaker",
  "/motivational-keynote-speaker",
  "/stress-management-speaker",
  "/keynote-speaker-financial-services",
  "/keynote-speaker-insurance",
  "/keynote-speaker-mdrt",
  "/keynote-speaker-overcoming-adversity",
  "/keynote-speaker-technology",
];

function englishSitemap(base: string): MetadataRoute.Sitemap {
  const staticRoutes = EN_STATIC_PATHS.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path === "/book-yossi" ? 0.9 : 0.7,
  }));
  const keynoteRoutes = keynotes.map((k) => ({
    url: `${base}/keynotes/${k.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  const cityRoutes = speakerLocations.map((loc) => ({
    url: `${base}/keynote-speaker/${loc.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...staticRoutes, ...keynoteRoutes, ...postRoutes, ...cityRoutes];
}

function hebrewSitemap(base: string): MetadataRoute.Sitemap {
  return HE_SITEMAP_PATHS.map((path) => ({
    url: path === "/" ? `${base}/` : `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : path === heSite.bookingHref ? 0.9 : 0.7,
  }));
}

export function sitemapFor(site: SiteKind, base: string): MetadataRoute.Sitemap {
  return site === "he" ? hebrewSitemap(base) : englishSitemap(base);
}

export function robotsFor(
  site: SiteKind,
  base: string,
  heLive: boolean,
): MetadataRoute.Robots {
  if (site === "he" && !heLive) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}

/**
 * hreflang pairs for the two home pages. Undefined until the Hebrew site is
 * live and its canonical host is known, so nothing changes before launch.
 */
export function homeAlternates(env: SiteEnv): Record<string, string> | undefined {
  if (env.heLive !== "1" || !env.heCanonicalHost) return undefined;
  const en = `${EN_BASE_URL}/`;
  return { en, he: `https://${env.heCanonicalHost}/`, "x-default": en };
}

/**
 * Which site a request belongs to and the origin to put in its URLs.
 * The request host only picks the site and, for Hebrew in preview (no
 * canonical host set), the Hebrew origin. English always uses the configured base.
 */
export function siteForRequest(
  host: string,
  env: SiteEnv,
): { site: SiteKind; base: string } {
  if (!isHebrewHost(host, env)) return { site: "en", base: EN_BASE_URL };
  return {
    site: "he",
    base: `https://${env.heCanonicalHost ?? host}`,
  };
}
