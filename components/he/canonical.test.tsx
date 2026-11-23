import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

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
    const { metadata } = await import(`@/app/(he)/he/${slug}/page`);
    expect(metadata.alternates).toEqual({ canonical: `/${slug}` });
  });
  it("home declares / as canonical", async () => {
    const { metadata } = await import("@/app/(he)/he/page");
    expect(metadata.alternates?.canonical).toBe("/");
  });
  it("thank-you page is noindex without a canonical", async () => {
    const { metadata } = await import("@/app/(he)/he/toda/page");
    expect(metadata.robots).toEqual({ index: false, follow: false });
    expect(metadata.alternates).toBeUndefined();
  });
});

describe("without the Hebrew host", () => {
  it("emits no canonical, so Next never invents a host", async () => {
    vi.resetModules();
    const { metadata } = await import("@/app/(he)/he/hasipur/page");
    expect(metadata.alternates).toBeUndefined();
  });
});
