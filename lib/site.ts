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
  // bare: answer 404 straight from the middleware. Used for a path that does
  // not decode, which Next's router would otherwise turn into a 500.
  | { action: "notFound"; bare?: true };

export type SiteEnv = {
  /** Comma-separated Hebrew hosts (full host strings, port included), or "*". */
  heHosts?: string;
  /** "1" once the Hebrew site is public. */
  heLive?: string;
  /** Canonical Hebrew host; www.<it> redirects to it. */
  heCanonicalHost?: string;
  /** Vercel's VERCEL_ENV: "production", "preview" or "development". */
  vercelEnv?: string;
};

export function readSiteEnv(): SiteEnv {
  return {
    heHosts: process.env.HE_HOSTS,
    heLive: process.env.HE_LIVE,
    heCanonicalHost: process.env.HE_CANONICAL_HOST,
    vercelEnv: process.env.VERCEL_ENV,
  };
}

const SHARED_PREFIXES = ["/api/", "/_next/", "/images/", "/videos/", "/audio/"];
const SHARED_FILES = new Set([
  "/icon.svg",
  "/sitemap.xml",
  "/robots.txt",
  "/favicon.ico",
]);

/**
 * Paths a Hebrew host serves as is: assets, API, metadata files. Everything
 * else on a Hebrew host is rewritten under /he, so English-only files such as
 * /llms.txt or the one-sheet never appear on the Hebrew domain.
 */
export function isSharedPath(pathname: string): boolean {
  return SHARED_PREFIXES.some((p) => pathname.startsWith(p)) || SHARED_FILES.has(pathname);
}

export function isHebrewHost(host: string, env: SiteEnv): boolean {
  const h = host.toLowerCase();
  const canonical = env.heCanonicalHost?.trim().toLowerCase();
  // A canonical host that is one of the English hosts is a misconfiguration
  // and is ignored, so it can never turn the English site Hebrew.
  const canonicalIsEnglish =
    canonical === CANONICAL_HOST || (canonical !== undefined && DUPLICATE_HOSTS.has(canonical));
  if (canonical && !canonicalIsEnglish && (h === canonical || h === `www.${canonical}`)) return true;
  const entries = (env.heHosts ?? "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  // "*" is for previews and local dev. In Production it would turn the
  // English site Hebrew, so it is ignored there.
  const wildcard = entries.includes("*") && env.vercelEnv !== "production";
  return wildcard || entries.includes(h);
}

// "/he", "/he/...", and Next's suffixed forms ("/he.rsc", "/he.segments/..."),
// any case. Tested on the decoded path so "/%68e" cannot slip past.
const HE_PATH = /^\/he(?=$|[/.])/i;
// Only these map to a page once the prefix is stripped.
const HE_DIR = /^\/he(?=$|\/)/i;

function decodePath(pathname: string): string | null {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return null;
  }
}

export function decideRoute(
  hostHeader: string,
  pathname: string,
  env: SiteEnv,
): RouteDecision {
  const host = hostHeader.toLowerCase();
  const heCanonical = env.heCanonicalHost?.trim().toLowerCase();
  const p = decodePath(pathname);
  if (p === null) return { action: "notFound", bare: true };

  if (heCanonical && host === `www.${heCanonical}`) {
    return { action: "redirect", host: heCanonical, pathname };
  }

  if (isHebrewHost(host, env)) {
    if (isSharedPath(pathname)) return { action: "next" };
    if (HE_DIR.test(p)) {
      return { action: "redirect", host, pathname: p.slice(3) || "/" };
    }
    return { action: "rewrite", pathname: pathname === "/" ? "/he" : `/he${pathname}` };
  }

  if (DUPLICATE_HOSTS.has(host)) {
    return { action: "redirect", host: CANONICAL_HOST, pathname };
  }

  if (HE_PATH.test(p)) {
    if (env.heLive === "1" && heCanonical && HE_DIR.test(p)) {
      return { action: "redirect", host: heCanonical, pathname: p.slice(3) || "/" };
    }
    return { action: "notFound" };
  }
  return { action: "next" };
}

/**
 * The absolute URL a redirect decision points to. The query string is kept.
 * Same host: protocol and port stay as requested (local dev on http works).
 * Another host: always https on the default port.
 */
export function redirectUrl(
  current: URL,
  requestHost: string,
  d: { host: string; pathname: string },
): URL {
  const url = new URL(current.href);
  if (d.host.toLowerCase() !== requestHost.toLowerCase()) url.protocol = "https:";
  // The Host header carries the port when there is one, so a same-host
  // redirect keeps it; a bare host name means the default port.
  url.host = d.host;
  if (!d.host.includes(":")) url.port = "";
  url.pathname = d.pathname;
  return url;
}
