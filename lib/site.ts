// Host routing for two sites served by one project: English (canonical host
// below) and Hebrew (hosts listed in HE_HOSTS). Every decision is a pure
// function so it can be unit tested; middleware.ts only maps it to responses.

export const CANONICAL_HOST = "yossighinsberg.com";
// The production site must live on exactly one host. The bare Vercel alias
// serves a full duplicate that Google indexes, splitting search authority.
export const DUPLICATE_HOSTS = new Set([
  "yossi-website.vercel.app",
  "www.yossighinsberg.com",
]);

export type RouteDecision =
  | { action: "next" }
  | { action: "redirect"; host: string; pathname: string }
  | { action: "rewrite"; pathname: string }
  | { action: "notFound" };

export type SiteEnv = {
  /** Comma-separated Hebrew hosts (full host strings, port included), or "*". */
  heHosts?: string;
  /** "1" once the Hebrew site is public. */
  heLive?: string;
  /** Canonical Hebrew host; www.<it> redirects to it. */
  heCanonicalHost?: string;
};

export function readSiteEnv(): SiteEnv {
  return {
    heHosts: process.env.HE_HOSTS,
    heLive: process.env.HE_LIVE,
    heCanonicalHost: process.env.HE_CANONICAL_HOST,
  };
}

const SHARED_PREFIXES = ["/api/", "/_next/", "/images/", "/videos/", "/audio/"];
const SHARED_FILES = new Set([
  "/icon.svg",
  "/sitemap.xml",
  "/robots.txt",
  "/favicon.ico",
]);
// Extensions of the files that sit at the top of public/ (svg, txt, html, pdf).
const PUBLIC_FILE_EXT = /\.(svg|txt|html|pdf|xml|ico)$/i;

/** Paths served the same on every host: assets, API, metadata files. */
export function isSharedPath(pathname: string): boolean {
  return (
    SHARED_PREFIXES.some((p) => pathname.startsWith(p)) ||
    SHARED_FILES.has(pathname) ||
    PUBLIC_FILE_EXT.test(pathname)
  );
}

export function isHebrewHost(host: string, env: SiteEnv): boolean {
  const h = host.toLowerCase();
  const entries = (env.heHosts ?? "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  return entries.includes("*") || entries.includes(h);
}

const isHePath = (p: string) => p === "/he" || p.startsWith("/he/");

export function decideRoute(
  hostHeader: string,
  pathname: string,
  env: SiteEnv,
): RouteDecision {
  const host = hostHeader.toLowerCase();
  const heCanonical = env.heCanonicalHost?.toLowerCase();

  if (heCanonical && host === `www.${heCanonical}`) {
    return { action: "redirect", host: heCanonical, pathname };
  }

  if (isHebrewHost(host, env)) {
    if (isSharedPath(pathname)) return { action: "next" };
    if (isHePath(pathname)) {
      return { action: "redirect", host, pathname: pathname.slice(3) || "/" };
    }
    return { action: "rewrite", pathname: pathname === "/" ? "/he" : `/he${pathname}` };
  }

  if (DUPLICATE_HOSTS.has(host)) {
    return { action: "redirect", host: CANONICAL_HOST, pathname };
  }

  if (isHePath(pathname)) {
    if (env.heLive === "1" && heCanonical) {
      return { action: "redirect", host: heCanonical, pathname: pathname.slice(3) || "/" };
    }
    return { action: "notFound" };
  }
  return { action: "next" };
}
