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
