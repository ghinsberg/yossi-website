// How the draft state LOOKS (2026-11-24): one sticky banner on every page and
// nothing else. No placeholder box and no per-line stamp anywhere in a page's
// content, while the launch gate still refuses a production Hebrew deploy.
import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import HomePage from "@/app/(he)/he/page";
import HasipurPage from "@/app/(he)/he/hasipur/page";
import HartzaotPage from "@/app/(he)/he/hartzaot/page";
import VideoPage from "@/app/(he)/he/video/page";
import HamlatzotPage from "@/app/(he)/he/hamlatzot/page";
import TikshoretPage from "@/app/(he)/he/tikshoret/page";
import SheelotPage from "@/app/(he)/he/sheelot/page";
import HazmanaPage from "@/app/(he)/he/hazmana/page";
import TodaPage from "@/app/(he)/he/toda/page";
import NegishutPage from "@/app/(he)/he/negishut/page";
import PratiyutPage from "@/app/(he)/he/pratiyut/page";
import NotFound from "@/app/(he)/he/not-found";
import HeHeader from "./HeHeader";
import HeFooter from "./HeFooter";
import HeMobileCTA from "./HeMobileCTA";
import { PLACEHOLDER_MARK } from "@/data/he/site";
import { collect, findLaunchBlockers } from "../../scripts/check-he-launch.mjs";

const pages = {
  home: HomePage, hasipur: HasipurPage, hartzaot: HartzaotPage, video: VideoPage,
  hamlatzot: HamlatzotPage, tikshoret: TikshoretPage, sheelot: SheelotPage,
  hazmana: HazmanaPage, toda: TodaPage, negishut: NegishutPage, pratiyut: PratiyutPage, notFound: NotFound,
};

describe("no placeholder and no stamp in any Hebrew page's content", () => {
  for (const [name, Page] of Object.entries(pages)) {
    it(name, () => {
      const html = renderToStaticMarkup(<Page />);
      expect(html).not.toContain(PLACEHOLDER_MARK);
      expect(html).not.toContain("data-placeholder");
    });
  }
  it("header, footer and mobile bar", () => {
    for (const C of [HeHeader, HeFooter, HeMobileCTA]) {
      const html = renderToStaticMarkup(<C />);
      expect(html).not.toContain(PLACEHOLDER_MARK);
      expect(html).not.toContain("data-placeholder");
    }
  });
  it("the Placeholder component is gone and nothing under app/(he) or components/he renders it", () => {
    expect(existsSync("components/he/Placeholder.tsx")).toBe(false);
    for (const b of findLaunchBlockers(collect("."))) expect(b.reason).not.toBe("<Placeholder> still present");
  });
});

describe("built pages (after `npm run build`)", () => {
  // Prerendered Hebrew HTML lives under .next/server/app/he*. Skipped only
  // when no build exists; the release checklist runs it after a build.
  const dir = ".next/server/app";
  const files = existsSync(dir)
    ? [
        ...(existsSync(`${dir}/he.html`) ? [`${dir}/he.html`] : []),
        ...(existsSync(`${dir}/he`) ? readdirSync(`${dir}/he`).filter((f) => f.endsWith(".html")).map((f) => `${dir}/he/${f}`) : []),
      ]
    : [];
  it.skipIf(files.length === 0)("no built Hebrew page has the stamp inside <main>, and each has the banner", () => {
    expect(files.length).toBeGreaterThanOrEqual(11);
    for (const f of files) {
      const html = readFileSync(f, "utf8");
      const main = html.match(/<main\b[\s\S]*?<\/main>/);
      expect(main, f).not.toBeNull();
      expect(main![0], f).not.toContain(PLACEHOLDER_MARK);
      expect(main![0], f).not.toContain("data-placeholder");
      expect(html, f).toContain("data-draft-banner");
    }
  });
});

describe("data/he", () => {
  it("has no ph( caller (the function itself stays exported for tests)", () => {
    for (const f of readdirSync("data/he").filter((x) => x.endsWith(".ts") && !x.endsWith(".test.ts"))) {
      const code = readFileSync(`data/he/${f}`, "utf8")
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\/\/.*$/gm, "");
      const calls = [...code.matchAll(/(?<![A-Za-z0-9_$.])ph\s*\(/g)].filter((m) => !/function\s+$/.test(code.slice(0, m.index)));
      expect(calls, f).toHaveLength(0);
    }
  });
});

describe("launch gate", () => {
  const blockers = findLaunchBlockers(collect("."));
  it("still reports blockers: the draft( calls and the banner", () => {
    expect(blockers.length).toBeGreaterThan(0);
    expect(blockers.some((b) => b.reason === "draft( draft text still present")).toBe(true);
    expect(blockers.some((b) => b.reason === "<HeDraftBanner> still present")).toBe(true);
  });
  it("has no unwrapped Hebrew and no Hebrew in components or app", () => {
    expect(blockers.filter((b) => /not wrapped|component or app|non-code file/.test(b.reason))).toEqual([]);
  });
});
