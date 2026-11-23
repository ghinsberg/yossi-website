import { describe, expect, it } from "vitest";
import { decideRoute, isHebrewHost, isSharedPath, readSiteEnv } from "@/lib/site";

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
});

describe("isSharedPath", () => {
  it.each([
    "/api/contact", "/_next/static/a.js", "/images/a.jpg", "/videos/a.mp4", "/audio/a.mp3",
    "/icon.svg", "/sitemap.xml", "/robots.txt", "/favicon.ico",
    "/llms.txt", "/globe.svg", "/yossi-ghinsberg-speaker-onesheet.pdf",
    "/yossi-ghinsberg-speaker-onesheet.html",
  ])("%s is shared", (p) => {
    expect(isSharedPath(p)).toBe(true);
  });
  it.each(["/", "/hartzaot", "/he", "/apiary", "/imagesx/a"])("%s is not shared", (p) => {
    expect(isSharedPath(p)).toBe(false);
  });
});

describe("readSiteEnv", () => {
  it("reads the HE_* variables", () => {
    process.env.HE_HOSTS = "a";
    process.env.HE_LIVE = "1";
    process.env.HE_CANONICAL_HOST = "b";
    expect(readSiteEnv()).toMatchObject({ heHosts: "a", heLive: "1", heCanonicalHost: "b" });
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
