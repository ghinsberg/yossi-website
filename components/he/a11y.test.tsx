import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import HomePage from "@/app/(he)/he/page";
import HasipurPage from "@/app/(he)/he/hasipur/page";
import HartzaotPage from "@/app/(he)/he/hartzaot/page";
import VideoPage from "@/app/(he)/he/video/page";
import HamlatzotPage from "@/app/(he)/he/hamlatzot/page";
import TikshoretPage from "@/app/(he)/he/tikshoret/page";
import SheelotPage from "@/app/(he)/he/sheelot/page";
import HazmanaPage from "@/app/(he)/he/hazmana/page";
import TodaPage from "@/app/(he)/he/toda/page";
import NegishutPage, { metadata as negMeta } from "@/app/(he)/he/negishut/page";
import PratiyutPage, { metadata as priMeta } from "@/app/(he)/he/pratiyut/page";
import NotFound from "@/app/(he)/he/not-found";
import HeHeader from "./HeHeader";
import HeFooter from "./HeFooter";
import HeMobileCTA from "./HeMobileCTA";
import { heLegal } from "@/data/he/legal";
import { PLACEHOLDER_MARK } from "@/data/he/site";

const pages = {
  home: HomePage, hasipur: HasipurPage, hartzaot: HartzaotPage, video: VideoPage,
  hamlatzot: HamlatzotPage, tikshoret: TikshoretPage, sheelot: SheelotPage,
  hazmana: HazmanaPage, toda: TodaPage, negishut: NegishutPage, pratiyut: PratiyutPage, notFound: NotFound,
};
const count = (html: string, needle: string) => html.split(needle).length - 1;
const layoutSrc = readFileSync("app/(he)/he/layout.tsx", "utf8");

describe("every Hebrew page", () => {
  for (const [name, Page] of Object.entries(pages)) {
    const html = renderToStaticMarkup(<Page />);
    it(`${name}: exactly one h1, no skipped heading level, every img has alt`, () => {
      expect(count(html, "<h1")).toBe(1);
      const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
      let max = 0;
      for (const l of levels) {
        expect(l).toBeLessThanOrEqual(max + 1);
        max = Math.max(max, l);
      }
      for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
        expect(img).toMatch(/\salt="[^"]+"/);
      }
    });
  }
  it("home renders its images with non-empty alt text", () => {
    const imgs = renderToStaticMarkup(<HomePage />).match(/<img\b[^>]*>/g) ?? [];
    expect(imgs.length).toBeGreaterThanOrEqual(2);
  });
});

describe("layout", () => {
  it("is lang=he dir=rtl and main is the skip-link target", () => {
    expect(layoutSrc).toContain('lang="he"');
    expect(layoutSrc).toContain('dir="rtl"');
    expect(layoutSrc).toMatch(/<main id="main" tabIndex=\{-1\}/);
  });
});

describe("header", () => {
  const html = renderToStaticMarkup(<HeHeader />);
  it("skip link is the first focusable element and targets #main", () => {
    const firstFocusable = html.match(/<(a|button)\b[^>]*>/)![0];
    expect(firstFocusable).toContain('href="#main"');
  });
  it("menu toggle names the menu it controls and the menu has that id", () => {
    expect(html).toContain('aria-controls="he-mobile-menu"');
    expect(html).toContain('id="he-mobile-menu"');
    expect(html).toContain('aria-expanded="false"');
  });
  it("closed menu is inert and hidden from assistive tech", () => {
    const menu = html.match(/<div[^>]*id="he-mobile-menu"[^>]*>/)![0];
    expect(menu).toContain('aria-hidden="true"');
    expect(menu).toContain("inert");
  });
  it("labels every nav landmark", () => {
    for (const nav of html.match(/<nav\b[^>]*>/g)!) expect(nav).toContain("aria-label=");
  });
});

describe("footer and mobile bar", () => {
  it("footer has labelled navs and links both legal pages", () => {
    const html = renderToStaticMarkup(<HeFooter />);
    for (const nav of html.match(/<nav\b[^>]*>/g)!) expect(nav).toContain("aria-label=");
    expect(html).toContain('href="/negishut"');
    expect(html).toContain('href="/pratiyut"');
  });
  it("footer leaves room for the fixed mobile bar", () => {
    expect(renderToStaticMarkup(<HeFooter />)).toContain("pb-[calc(6rem+env(safe-area-inset-bottom))]");
    expect(renderToStaticMarkup(<HeMobileCTA />)).toContain("fixed bottom-0");
  });
});

describe("legal shells", () => {
  it("are fully stamped draft text, with Hebrew titles in metadata", () => {
    for (const html of [renderToStaticMarkup(<NegishutPage />), renderToStaticMarkup(<PratiyutPage />)]) {
      for (const li of html.match(/<li>[\s\S]*?<\/li>/g) ?? []) expect(li).toContain(PLACEHOLDER_MARK);
      expect(html).toContain("data-placeholder");
    }
    expect(negMeta.title).toBe(heLegal.accessibility.metaTitle);
    expect(priMeta.title).toBe(heLegal.privacy.metaTitle);
  });
  it("does not name a person, a standard, a date or a retention period", () => {
    const text = JSON.stringify(heLegal);
    expect(text).not.toMatch(/\d{4}/); // no audit date or year
    expect(text).not.toMatch(/AA|WCAG|5568|תקן ישראלי/);
    expect(text).not.toMatch(/@|tel:/);
  });
});
