import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import type { Metadata } from "next";

type OG = { url?: string; locale?: string; images: { url: string; width?: number; height?: number; alt?: string }[] };
const og = (m: Metadata) => m.openGraph as unknown as OG;

// Every indexable Hebrew page declares its own clean path as canonical once
// the Hebrew host is known; the thank-you page stays noindex with none.
const PAGES = ["hasipur", "hartzaot", "video", "hamlatzot", "tikshoret", "sheelot", "negishut", "pratiyut", "hazmana"];

describe("Hebrew page canonicals", () => {
  beforeAll(() => {
    process.env.HE_CANONICAL_HOST = "he.example";
    vi.resetModules();
  });
  afterAll(() => {
    delete process.env.HE_CANONICAL_HOST;
    vi.resetModules();
  });

  it.each(PAGES)("/%s declares /%s as canonical", async (slug) => {
    const { metadata } = await import(`@/app/(he)/he/${slug}/page.tsx`);
    expect(metadata.alternates).toEqual({ canonical: `/${slug}` });
  });
  it.each(PAGES)("/%s restates the Open Graph with its own url and the share image", async (slug) => {
    const { metadata } = await import(`@/app/(he)/he/${slug}/page.tsx`);
    expect(og(metadata).url).toBe(`/${slug}`);
    expect(og(metadata).locale).toBe("he_IL");
    expect(og(metadata).images[0].url).toBe("/images/stage/carousel-4.jpg");
  });
  it("home declares / as canonical", async () => {
    const { metadata } = await import("@/app/(he)/he/page");
    expect(metadata.alternates?.canonical).toBe("/");
    expect(og(metadata).url).toBe("/");
  });
  it("thank-you page is noindex without a canonical", async () => {
    const { metadata } = await import("@/app/(he)/he/toda/page");
    expect(metadata.robots).toEqual({ index: false, follow: false });
    expect(metadata.alternates).toBeUndefined();
    // No key at all: a key set to undefined would erase the layout's share image.
    expect("openGraph" in metadata).toBe(false);
  });
  it("the layout carries the share image for Open Graph and X, with no host needed", async () => {
    vi.resetModules();
    const { metadata } = await import("@/app/(he)/he/layout");
    expect(og(metadata).images[0]).toMatchObject({ url: "/images/stage/carousel-4.jpg", width: 1920, height: 1080 });
    expect(og(metadata).images[0].alt).toMatch(/[\u0590-\u05FF]/);
    expect(metadata.twitter).toMatchObject({ card: "summary_large_image", images: ["/images/stage/carousel-4.jpg"] });
  });
});

describe("without the Hebrew host", () => {
  it("emits no canonical, so Next never invents a host", async () => {
    vi.resetModules();
    const { metadata } = await import("@/app/(he)/he/hasipur/page");
    expect(metadata.alternates).toBeUndefined();
    // No key at all: a key set to undefined would erase the layout's share image.
    expect("openGraph" in metadata).toBe(false);
  });
  it("the layout carries the share image for Open Graph and X, with no host needed", async () => {
    vi.resetModules();
    const { metadata } = await import("@/app/(he)/he/layout");
    expect(og(metadata).images[0]).toMatchObject({ url: "/images/stage/carousel-4.jpg", width: 1920, height: 1080 });
    expect(og(metadata).images[0].alt).toMatch(/[\u0590-\u05FF]/);
    expect(metadata.twitter).toMatchObject({ card: "summary_large_image", images: ["/images/stage/carousel-4.jpg"] });
  });
});

// Until launch a forwarded WhatsApp or social card says it is a draft. The
// browser tab title is unchanged; only openGraph.title and twitter.title.
describe("share titles carry the draft prefix until launch", () => {
  type Titled = { openGraph?: { title?: string }; twitter?: { title?: string }; title?: unknown };
  const load = async (live: boolean, host?: string) => {
    if (live) process.env.HE_LIVE = "1";
    else delete process.env.HE_LIVE;
    if (host) process.env.HE_CANONICAL_HOST = host;
    else delete process.env.HE_CANONICAL_HOST;
    vi.resetModules();
    const { heSite } = await import("@/data/he/site");
    const layout = (await import("@/app/(he)/he/layout")).metadata as Titled;
    const story = (await import("@/app/(he)/he/hasipur/page")).metadata as Titled;
    const home = (await import("@/app/(he)/he/page")).metadata as Titled;
    return { heSite, layout, story, home };
  };
  afterAll(() => {
    delete process.env.HE_LIVE;
    delete process.env.HE_CANONICAL_HOST;
    vi.resetModules();
  });

  it("the prefix comes from data and is Hebrew", async () => {
    const { heSite } = await load(false);
    expect(heSite.meta.ogDraftPrefix.trim()).not.toBe("");
    expect(heSite.meta.ogDraftPrefix).toMatch(/[֐-׿]/);
  });
  it("draft, no host: the layout's Open Graph and X titles are prefixed, the tab title is not", async () => {
    const { heSite, layout } = await load(false);
    const p = heSite.meta.ogDraftPrefix;
    expect(layout.openGraph!.title).toBe(p + heSite.meta.titleDefault);
    expect(layout.twitter!.title).toBe(p + heSite.meta.titleDefault);
    expect(layout.title).toEqual({ default: heSite.meta.titleDefault, template: heSite.meta.titleTemplate });
  });
  it("draft, with the host: each page's Open Graph title is prefixed, the tab title is not", async () => {
    const { heSite, story, home } = await load(false, "he.example");
    const p = heSite.meta.ogDraftPrefix;
    expect(story.openGraph!.title).toBe(p + heSite.meta.titleTemplate.replace("%s", heSite.pageNames.hasipur));
    expect(home.openGraph!.title).toBe(p + heSite.meta.titleDefault);
    expect(story.title).toBe(heSite.pageNames.hasipur);
  });
  it("live: no prefix anywhere", async () => {
    const { heSite, layout } = await load(true);
    expect(layout.openGraph!.title).toBe(heSite.meta.titleDefault);
    expect(layout.twitter!.title).toBe(heSite.meta.titleDefault);
    const withHost = await load(true, "he.example");
    expect(withHost.story.openGraph!.title).toBe(heSite.meta.titleTemplate.replace("%s", heSite.pageNames.hasipur));
    expect(withHost.home.openGraph!.title).toBe(heSite.meta.titleDefault);
  });
  it("the default share description is the home page's, which says Hebrew and English", async () => {
    const { layout } = await load(false);
    const { heHome } = await import("@/data/he/home");
    expect((layout.openGraph as { description?: string }).description).toBe(heHome.metaDescription);
    expect((layout.twitter as { description?: string }).description).toBe(heHome.metaDescription);
  });
});
