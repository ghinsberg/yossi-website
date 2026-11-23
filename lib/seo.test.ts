import { describe, expect, it } from "vitest";
import golden from "./__fixtures__/en-sitemap.golden.json";
import { homeAlternates, robotsFor, sitemapFor, siteForRequest } from "@/lib/seo";

const EN = "https://yossighinsberg.com";
const HE = "https://he.example.co.il";

describe("sitemapFor", () => {
  // Golden captured from the unmodified app/sitemap.ts before the refactor.
  it("english output equals today's sitemap exactly", () => {
    expect(sitemapFor("en", EN)).toEqual(golden);
  });
  it("hebrew lists the ten pages on the Hebrew base and no English path", () => {
    const urls = sitemapFor("he", HE).map((e) => e.url);
    expect(urls).toEqual([
      `${HE}/`, `${HE}/hasipur`, `${HE}/hartzaot`, `${HE}/video`, `${HE}/hamlatzot`,
      `${HE}/tikshoret`, `${HE}/sheelot`, `${HE}/hazmana`, `${HE}/negishut`, `${HE}/pratiyut`,
    ]);
    expect(urls).toHaveLength(10);
    expect(urls.some((u) => u.includes("yossighinsberg.com"))).toBe(false);
    expect(urls.some((u) => u.endsWith("/toda"))).toBe(false);
  });
});

describe("robotsFor", () => {
  it("english allows / and names the English sitemap", () => {
    expect(robotsFor("en", EN, false)).toEqual({
      rules: { userAgent: "*", allow: "/" },
      sitemap: `${EN}/sitemap.xml`,
    });
  });
  it("hebrew disallows everything, with no sitemap, until live", () => {
    const r = robotsFor("he", HE, false);
    expect(r.rules).toEqual({ userAgent: "*", disallow: "/" });
    expect(r.sitemap).toBeUndefined();
  });
  it("hebrew when live allows / and names the Hebrew sitemap", () => {
    expect(robotsFor("he", HE, true)).toEqual({
      rules: { userAgent: "*", allow: "/" },
      sitemap: `${HE}/sitemap.xml`,
    });
  });
});

describe("homeAlternates", () => {
  it("is undefined with nothing set", () => {
    expect(homeAlternates({})).toBeUndefined();
  });
  it("is undefined when live but no canonical host, or host but not live", () => {
    expect(homeAlternates({ heLive: "1" })).toBeUndefined();
    expect(homeAlternates({ heCanonicalHost: "he.example.co.il" })).toBeUndefined();
  });
  it("returns en, he and x-default when live with a host", () => {
    expect(homeAlternates({ heLive: "1", heCanonicalHost: "he.example.co.il" })).toEqual({
      en: `${EN}/`,
      he: `${HE}/`,
      "x-default": `${EN}/`,
    });
  });
});

describe("siteForRequest", () => {
  it("english host uses the configured English base, never the request host", () => {
    expect(siteForRequest("evil.example", { heHosts: "he.example.co.il" })).toEqual({ site: "en", base: EN });
  });
  it("hebrew host with a canonical host uses it", () => {
    expect(siteForRequest("preview.vercel.app", { heHosts: "preview.vercel.app", heCanonicalHost: "he.example.co.il" }))
      .toEqual({ site: "he", base: HE });
  });
  it("hebrew host in preview uses the request host", () => {
    expect(siteForRequest("he.localhost:3100", { heHosts: "he.localhost:3100" }))
      .toEqual({ site: "he", base: "https://he.localhost:3100" });
  });
});
