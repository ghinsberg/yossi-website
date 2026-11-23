import { describe, expect, it } from "vitest";
import { homeAlternates, robotsFor, sitemapFor, siteForRequest } from "@/lib/seo";
import { keynotes } from "@/data/keynotes";
import { posts } from "@/data/posts";
import { speakerLocations } from "@/data/locations";

const EN = "https://yossighinsberg.com";
const HE = "https://he.example.co.il";

describe("sitemapFor", () => {
  // The English sitemap as it was before the Hebrew work: a fixed list of
  // static pages, then one entry per keynote, blog post and city, in that
  // order. Counts and URLs come from the data, so a new post needs no edit here.
  const STATIC = [
    "", "/keynotes", "/book-yossi", "/story", "/videos", "/endorsements", "/media", "/faq",
    "/blog", "/laws", "/yossi", "/power-to-survive", "/the-two-techniques",
    "/survival-skills-for-business", "/survival-keynote-speaker", "/resilience-keynote-speaker",
    "/adventure-keynote-speaker", "/adaptability-keynote-speaker", "/amazon-survival-speaker",
    "/leadership-keynote-speaker", "/motivational-keynote-speaker", "/stress-management-speaker",
    "/keynote-speaker-financial-services", "/keynote-speaker-insurance", "/keynote-speaker-mdrt",
    "/keynote-speaker-overcoming-adversity", "/keynote-speaker-technology",
  ];
  const en = sitemapFor("en", EN);
  const groups = {
    static: en.slice(0, STATIC.length),
    keynotes: en.slice(STATIC.length, STATIC.length + keynotes.length),
    posts: en.slice(STATIC.length + keynotes.length, STATIC.length + keynotes.length + posts.length),
    cities: en.slice(STATIC.length + keynotes.length + posts.length),
  };

  it("english has exactly the static pages, keynotes, posts and cities", () => {
    expect(en).toHaveLength(STATIC.length + keynotes.length + posts.length + speakerLocations.length);
  });
  it("english static pages: fixed list, weekly, home 1, booking 0.9, others 0.7", () => {
    expect(groups.static).toEqual(
      STATIC.map((p) => ({
        url: `${EN}${p}`,
        changeFrequency: "weekly",
        priority: p === "" ? 1 : p === "/book-yossi" ? 0.9 : 0.7,
      })),
    );
  });
  it("english keynotes: one per keynote, monthly, 0.8", () => {
    expect(groups.keynotes).toEqual(
      keynotes.map((k) => ({ url: `${EN}/keynotes/${k.slug}`, changeFrequency: "monthly", priority: 0.8 })),
    );
  });
  it("english posts: one per post, monthly, 0.6", () => {
    expect(groups.posts).toEqual(
      posts.map((p) => ({ url: `${EN}/blog/${p.slug}`, changeFrequency: "monthly", priority: 0.6 })),
    );
  });
  it("english cities: one per speaker location, monthly, 0.6", () => {
    expect(groups.cities).toEqual(
      speakerLocations.map((l) => ({ url: `${EN}/keynote-speaker/${l.slug}`, changeFrequency: "monthly", priority: 0.6 })),
    );
  });
  it("english never lists a Hebrew path", () => {
    expect(en.some((e) => /\/he(\/|$)/.test(e.url.slice(EN.length)))).toBe(false);
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
