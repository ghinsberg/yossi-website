import { describe, expect, it } from "vitest";
import { decideRoute, isHebrewHost, isSharedPath, readSiteEnv, redirectUrl } from "@/lib/site";

const HE = { heHosts: "x.co.il" };

describe("decideRoute", () => {
  it("redirects www to the canonical English host", () => {
    expect(decideRoute("www.yossighinsberg.com", "/story", {})).toEqual({
      action: "redirect", host: "yossighinsberg.com", pathname: "/story",
    });
  });
  it("redirects the vercel alias to the canonical English host", () => {
    expect(decideRoute("yossi-website.vercel.app", "/", {})).toEqual({
      action: "redirect", host: "yossighinsberg.com", pathname: "/",
    });
  });
  it("passes English pages through", () => {
    expect(decideRoute("yossighinsberg.com", "/story", {})).toEqual({ action: "next" });
  });
  it("blocks /he on the English host", () => {
    expect(decideRoute("yossighinsberg.com", "/he", {})).toEqual({ action: "notFound" });
  });
  it("blocks /he/... on the English host", () => {
    expect(decideRoute("yossighinsberg.com", "/he/hartzaot", {})).toEqual({ action: "notFound" });
  });
  it("blocks only /he and /he/..., not /hello", () => {
    expect(decideRoute("yossighinsberg.com", "/hello", {})).toEqual({ action: "next" });
  });
  it("redirects /he/... to the Hebrew canonical host once live", () => {
    expect(
      decideRoute("yossighinsberg.com", "/he/hartzaot", { heLive: "1", heCanonicalHost: "x.co.il" }),
    ).toEqual({ action: "redirect", host: "x.co.il", pathname: "/hartzaot" });
  });
  it("rewrites the Hebrew root to /he", () => {
    expect(decideRoute("x.co.il", "/", HE)).toEqual({ action: "rewrite", pathname: "/he" });
  });
  it("rewrites Hebrew paths under /he", () => {
    expect(decideRoute("x.co.il", "/hartzaot", HE)).toEqual({ action: "rewrite", pathname: "/he/hartzaot" });
  });
  it("matches the Hebrew host case-insensitively", () => {
    expect(decideRoute("X.CO.IL", "/hartzaot", HE)).toEqual({ action: "rewrite", pathname: "/he/hartzaot" });
  });
  it("redirects www on the Hebrew site to the canonical Hebrew host", () => {
    expect(
      decideRoute("www.x.co.il", "/hartzaot", { heHosts: "x.co.il", heCanonicalHost: "x.co.il" }),
    ).toEqual({ action: "redirect", host: "x.co.il", pathname: "/hartzaot" });
  });
  it("strips a direct /he prefix on a Hebrew host, same host", () => {
    expect(decideRoute("x.co.il", "/he/hartzaot", HE)).toEqual({
      action: "redirect", host: "x.co.il", pathname: "/hartzaot",
    });
  });
  it("turns /he alone into / on a Hebrew host", () => {
    expect(decideRoute("x.co.il", "/he", HE)).toEqual({
      action: "redirect", host: "x.co.il", pathname: "/",
    });
  });
  it.each([
    "/%68e", "/%68e/hasipur", "/he.rsc", "/he.segments/x", "/HE", "/He/hartzaot",
    "/%E0%A4%A",
  ])("blocks encoded, suffixed or odd-case %s on the English host", (p) => {
    expect(decideRoute("yossighinsberg.com", p, {})).toEqual({ action: "notFound" });
  });
  // "/%2568e" decodes once to "/%68e", which Next routes as the literal
  // segment "%68e", not /he, so it is an ordinary English 404.
  it.each(["/hello", "/hebrew", "/health", "/story/he", "/%2568e"])("passes %s through on the English host", (p) => {
    expect(decideRoute("yossighinsberg.com", p, {})).toEqual({ action: "next" });
  });
  it("redirects a decoded /%68e/hartzaot to the Hebrew host once live", () => {
    expect(
      decideRoute("yossighinsberg.com", "/%68e/hartzaot", { heLive: "1", heCanonicalHost: "x.co.il" }),
    ).toEqual({ action: "redirect", host: "x.co.il", pathname: "/hartzaot" });
  });
  it("still 404s /he.rsc once live (no page to redirect to)", () => {
    expect(
      decideRoute("yossighinsberg.com", "/he.rsc", { heLive: "1", heCanonicalHost: "x.co.il" }),
    ).toEqual({ action: "notFound" });
  });
  it.each([
    ["/HE/hartzaot", "/hartzaot"],
    ["/%68e/hasipur", "/hasipur"],
    ["/He", "/"],
  ])("strips a direct %s prefix on a Hebrew host", (p, to) => {
    expect(decideRoute("x.co.il", p, HE)).toEqual({ action: "redirect", host: "x.co.il", pathname: to });
  });
  it("404s a malformed path on a Hebrew host", () => {
    expect(decideRoute("x.co.il", "/%E0%A4%A", HE)).toEqual({ action: "notFound" });
  });
  it.each(["/llms.txt", "/yossi-ghinsberg-speaker-onesheet.html", "/yossi-ghinsberg-speaker-onesheet.pdf", "/x/y.pdf", "/globe.svg"])(
    "rewrites English-only file %s under /he on a Hebrew host",
    (p) => {
      expect(decideRoute("x.co.il", p, HE)).toEqual({ action: "rewrite", pathname: `/he${p}` });
    },
  );
  it.each(["/llms.txt", "/yossi-ghinsberg-speaker-onesheet.html"])(
    "leaves %s alone on the English host",
    (p) => {
      expect(decideRoute("yossighinsberg.com", p, {})).toEqual({ action: "next" });
    },
  );
  it.each(["/images/a.jpg", "/api/contact", "/sitemap.xml", "/robots.txt"])(
    "passes shared path %s through on a Hebrew host",
    (p) => {
      expect(decideRoute("x.co.il", p, HE)).toEqual({ action: "next" });
    },
  );
  it("wildcard HE_HOSTS makes any host Hebrew", () => {
    expect(decideRoute("anything.vercel.app", "/hartzaot", { heHosts: "*" })).toEqual({
      action: "rewrite", pathname: "/he/hartzaot",
    });
  });
  it("wildcard wins over the duplicate-host redirect", () => {
    expect(decideRoute("yossi-website.vercel.app", "/", { heHosts: "*" })).toEqual({
      action: "rewrite", pathname: "/he",
    });
  });
});

describe("isHebrewHost", () => {
  it("matches full host strings including port, comma lists, whitespace", () => {
    const env = { heHosts: "he.localhost:3100, x.co.il" };
    expect(isHebrewHost("HE.localhost:3100", env)).toBe(true);
    expect(isHebrewHost("x.co.il", env)).toBe(true);
    expect(isHebrewHost("he.localhost:3000", env)).toBe(false);
  });
  it("is false with no env", () => {
    expect(isHebrewHost("x.co.il", {})).toBe(false);
  });
  it("ignores the wildcard in Production", () => {
    expect(isHebrewHost("yossighinsberg.com", { heHosts: "*", vercelEnv: "production" })).toBe(false);
  });
  it("honours the wildcard in Preview", () => {
    expect(isHebrewHost("a.vercel.app", { heHosts: "*", vercelEnv: "preview" })).toBe(true);
  });
  it("honours the wildcard locally (no VERCEL_ENV)", () => {
    expect(isHebrewHost("localhost:3100", { heHosts: "*" })).toBe(true);
  });
  it("still matches listed hosts in Production", () => {
    expect(isHebrewHost("x.co.il", { heHosts: "*, x.co.il", vercelEnv: "production" })).toBe(true);
  });
  it("always treats the canonical Hebrew host and its www as Hebrew", () => {
    const env = { heHosts: "other.co.il", heCanonicalHost: "x.co.il", heLive: "1" };
    expect(isHebrewHost("x.co.il", env)).toBe(true);
    expect(isHebrewHost("WWW.x.co.il", env)).toBe(true);
    expect(isHebrewHost("yossighinsberg.com", env)).toBe(false);
  });
  it("serves Hebrew on the canonical host even when HE_HOSTS omits it", () => {
    expect(
      decideRoute("x.co.il", "/hartzaot", { heLive: "1", heCanonicalHost: "x.co.il" }),
    ).toEqual({ action: "rewrite", pathname: "/he/hartzaot" });
  });
});

describe("isSharedPath", () => {
  it.each([
    "/api/contact", "/_next/static/a.js", "/images/a.jpg", "/videos/a.mp4", "/audio/a.mp3",
    "/icon.svg", "/sitemap.xml", "/robots.txt", "/favicon.ico",
  ])("%s is shared", (p) => {
    expect(isSharedPath(p)).toBe(true);
  });
  it.each([
    "/", "/hartzaot", "/he", "/apiary", "/imagesx/a",
    "/llms.txt", "/globe.svg", "/yossi-ghinsberg-speaker-onesheet.pdf",
    "/yossi-ghinsberg-speaker-onesheet.html", "/x/y.pdf",
  ])("%s is not shared", (p) => {
    expect(isSharedPath(p)).toBe(false);
  });
});

describe("readSiteEnv", () => {
  it("reads the HE_* variables", () => {
    process.env.HE_HOSTS = "a";
    process.env.HE_LIVE = "1";
    process.env.HE_CANONICAL_HOST = "b";
    process.env.VERCEL_ENV = "preview";
    expect(readSiteEnv()).toMatchObject({
      heHosts: "a", heLive: "1", heCanonicalHost: "b", vercelEnv: "preview",
    });
    delete process.env.HE_HOSTS;
    delete process.env.HE_LIVE;
    delete process.env.HE_CANONICAL_HOST;
    delete process.env.VERCEL_ENV;
  });
});

describe("query strings", () => {
  it("rewrite decision carries only the pathname, so a cloned nextUrl keeps ?a=gilat", () => {
    const url = new URL("https://x.co.il/hartzaot?a=gilat");
    const d = decideRoute("x.co.il", url.pathname, HE);
    if (d.action !== "rewrite") throw new Error("expected rewrite");
    url.pathname = d.pathname;
    expect(url.search).toBe("?a=gilat");
  });
});

describe("redirectUrl", () => {
  it("same host keeps protocol, port and query", () => {
    const u = redirectUrl(new URL("http://he.localhost:3100/he/hartzaot?a=gilat"), "he.localhost:3100", {
      host: "he.localhost:3100", pathname: "/hartzaot",
    });
    expect(u.href).toBe("http://he.localhost:3100/hartzaot?a=gilat");
  });
  it("cross host forces https, clears the port, keeps the query", () => {
    const u = redirectUrl(new URL("http://localhost:3100/he/hartzaot?a=gilat"), "localhost:3100", {
      host: "x.co.il", pathname: "/hartzaot",
    });
    expect(u.href).toBe("https://x.co.il/hartzaot?a=gilat");
  });
  it("www to canonical is a cross-host redirect", () => {
    const u = redirectUrl(new URL("https://www.yossighinsberg.com/story?utm_source=x"), "www.yossighinsberg.com", {
      host: "yossighinsberg.com", pathname: "/story",
    });
    expect(u.href).toBe("https://yossighinsberg.com/story?utm_source=x");
  });
});
