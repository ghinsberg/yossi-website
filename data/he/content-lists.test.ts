/// <reference types="vite/client" />
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { heKeynotes } from "./keynotes";
import { heEndorsements, heFeaturedEndorsement } from "./endorsements";
import { heAsSeenIn, heMedia } from "./media";
import { heFaq } from "./faq";
import { heHome, heProofClientNames } from "./home";
import { heStory } from "./story";
import { heVideos, orderVideos, type HeVideo } from "./videos";
import { PLACEHOLDER_MARK } from "./site";
import { keynotes } from "@/data/keynotes";
import { testimonials } from "@/data/testimonials";
import { clients, mediaLogos } from "@/data/clients";
import { videos } from "@/data/videos";
import { siteConfig } from "@/data/siteConfig";

// Every Hebrew list is built from the English site. These tests tie each item
// back to the English data, so nothing can be invented or mistyped.

describe("keynotes", () => {
  it("one entry per English keynote, same order", () => {
    expect(heKeynotes.map((k) => k.slug)).toEqual(keynotes.map((k) => k.slug));
  });
  it("English titles match, except the flagship, which follows its new name", () => {
    for (const [i, k] of heKeynotes.entries()) {
      const en = keynotes[i];
      expect(k.titleEn).toBe(en.flagship ? "The Map Has Run Out" : en.title);
    }
  });
  it("titles are stamped proposals; who-for and takeaway are filled", () => {
    for (const k of heKeynotes) {
      expect(k.title.startsWith(PLACEHOLDER_MARK)).toBe(true);
      expect(k.forWhom.trim()).not.toBe("");
      expect(k.takeaway.trim()).not.toBe("");
    }
  });
});

describe("endorsements", () => {
  it("is non-empty and at most about nine", () => {
    expect(heEndorsements.length).toBeGreaterThan(0);
    expect(heEndorsements.length).toBeLessThanOrEqual(9);
  });
  it.each(heEndorsements.map((e) => [e.name, e] as const))("%s: complete, translated, and published on the English site", (_n, e) => {
    expect(e.name.trim()).not.toBe("");
    expect(e.organization.trim()).not.toBe("");
    expect(e.quote.trim()).not.toBe("");
    expect(e.translatedFrom).toBe("en");
    expect(e.consentOnRecord).toBe(true);
    const en = testimonials.find((t) => t.author === e.name);
    expect(en, `${e.name} not in data/testimonials.ts`).toBeDefined();
    expect(e.organization).toBe(en!.company);
    // The role is tied to the English data: roleEn is the English title, and a
    // Hebrew role exists only as a rendering of it.
    expect(e.roleEn).toBe(en!.title);
    if (e.role !== undefined) expect(e.role).toMatch(/[֐-׿]/);
  });
  it("shows Chris Varelas's title in English, not a Hebrew interpretation", () => {
    expect(heEndorsements.find((e) => e.name === "Chris Varelas")!.role).toBeUndefined();
  });
  it("features one of the listed endorsements on the home page", () => {
    expect(heEndorsements).toContain(heFeaturedEndorsement);
  });
});

describe("videos", () => {
  const englishIds = new Set(videos.map((v) => v.id));
  it("is non-empty and every YouTube id exists in data/videos.ts", () => {
    expect(heVideos.length).toBeGreaterThan(0);
    for (const v of heVideos) expect(englishIds.has(v.youtubeId), v.youtubeId).toBe(true);
  });
  it("English titles match data/videos.ts", () => {
    for (const v of heVideos) expect(v.titleEn).toBe(videos.find((e) => e.id === v.youtubeId)!.title);
  });
  it("has no duplicates, all are marked English, each has a Hebrew title and context", () => {
    expect(new Set(heVideos.map((v) => v.youtubeId)).size).toBe(heVideos.length);
    for (const v of heVideos) {
      expect(v.language).toBe("en");
      expect(v.title).toMatch(/[֐-׿]/);
      expect(v.context.trim()).not.toBe("");
    }
  });
  it("leaves out the film clips and the bureau-branded reel", () => {
    const ids = heVideos.map((v) => v.youtubeId);
    for (const film of ["Zlztb8QXGTg", "Tn-lbqRLdcE", "HruuP7Q90vg"]) expect(ids).not.toContain(film);
    expect(ids).not.toContain(siteConfig.speakerReelId);
  });
});

describe("home proof strip", () => {
  it("every client name is one the English FAQ says he has spoken for", () => {
    const faq = readFileSync("app/(en)/faq/page.tsx", "utf8");
    const line = faq.split("\n").find((l) => l.includes("Google, Apple, Microsoft"))!;
    expect(line).toContain("Million Dollar Round Table");
    for (const n of heProofClientNames) expect(line.includes(n), n).toBe(true);
  });
  it("every client name exists in the English client list", () => {
    expect(heProofClientNames.length).toBeGreaterThan(0);
    const names = new Set(clients.map((c) => c.name));
    for (const n of heProofClientNames) expect(names.has(n), n).toBe(true);
  });
  it("the proof heading is a stamped claim", () => {
    expect(heHome.proof.title.startsWith(PLACEHOLDER_MARK)).toBe(true);
  });
});

describe("media", () => {
  const enSource = readFileSync("app/(en)/media/page.tsx", "utf8") + readFileSync("app/(en)/story/page.tsx", "utf8");
  it("is non-empty and every URL appears in the English media or story page source", () => {
    expect(heMedia.length).toBeGreaterThan(0);
    for (const m of heMedia) expect(enSource.includes(m.url), m.url).toBe(true);
  });
  it("every titleEn and year ties back to the English source", () => {
    const decoded = enSource.replace(/&apos;/g, "'").replace(/&mdash;/g, "—");
    for (const m of heMedia) {
      const at = decoded.indexOf(m.titleEn!);
      expect(at, m.titleEn).toBeGreaterThanOrEqual(0);
      if (m.year) expect(decoded.slice(Math.max(0, at - 600), at + 600)).toContain(String(m.year));
    }
  });
  it("every outlet name appears in the English source", () => {
    for (const m of heMedia) expect(enSource.includes(m.outlet), m.outlet).toBe(true);
  });
  it("'as seen in' names come from the English media logos, without TechCrunch", () => {
    const names = new Set(mediaLogos.map((m) => m.name));
    for (const n of heAsSeenIn) expect(names.has(n), n).toBe(true);
    expect(heAsSeenIn as readonly string[]).not.toContain("TechCrunch");
  });
});

describe("FAQ", () => {
  it("has five to eight questions, each answered", () => {
    expect(heFaq.length).toBeGreaterThanOrEqual(5);
    expect(heFaq.length).toBeLessThanOrEqual(8);
    for (const f of heFaq) {
      expect(f.q.trim()).not.toBe("");
      expect(f.a.trim()).not.toBe("");
    }
  });
  it("says nothing about fees, currency, the foreign bureaus or where he lives", () => {
    const text = JSON.stringify(heFaq);
    expect(text).not.toMatch(/שכר|מחיר|עלות|תשלום|דולר|\$|€|₪|קליפורני|California|Carter|Encore|Lamarch|@/);
  });
});

describe("the film", () => {
  // Every export of every data/he/*.ts module (tests excluded), walked to its strings.
  const modules = import.meta.glob(["./*.ts", "!./*.test.ts"], { eager: true }) as Record<string, Record<string, unknown>>;
  const strings: string[] = [];
  const walk = (v: unknown, seen = new Set<unknown>()) => {
    if (typeof v === "string") strings.push(v);
    else if (v && typeof v === "object" && !seen.has(v)) {
      seen.add(v);
      for (const x of Object.values(v)) walk(x, seen);
    }
  };
  for (const mod of Object.values(modules)) walk(mod);
  // "Jungle" not preceded by "the ": "The Laws of the Jungle" is a keynote, not the film.
  // "הסרט" as a whole word: "הסרטונים" (videos) is not the film.
  const FILM = /רדקליף|(?<!the )Jungle|(^|[^א-ת])הסרט($|[^א-ת])|סרט קולנוע/;
  it("is mentioned in exactly one string on the whole Hebrew site: the stamped story proposal", () => {
    expect(Object.keys(modules).length).toBeGreaterThanOrEqual(10);
    const hits = strings.filter((s) => FILM.test(s));
    expect(hits).toEqual([heStory.book.film]);
    expect(heStory.book.film.startsWith(PLACEHOLDER_MARK)).toBe(true);
  });
});

describe("orderVideos", () => {
  const v = (id: string, language: "he" | "en"): HeVideo => ({ youtubeId: id, title: id, language, context: "" });
  it("puts Hebrew before English and keeps order within each language", () => {
    const out = orderVideos([v("e1", "en"), v("h1", "he"), v("e2", "en"), v("h2", "he")]);
    expect(out.map((x) => x.youtubeId)).toEqual(["h1", "h2", "e1", "e2"]);
  });
  it("does not mutate the input and handles empty", () => {
    const input = [v("e1", "en"), v("h1", "he")];
    orderVideos(input);
    expect(input[0].youtubeId).toBe("e1");
    expect(orderVideos([])).toEqual([]);
  });
});
