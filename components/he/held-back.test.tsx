/// <reference types="vite/client" />
// Names held back until Yossi confirms them (review ruling, 2026-11-24; the
// reasons are in the source map under "Held back until Yossi confirms"). They
// must not return to any Hebrew page or data value by accident.
import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import HomePage from "@/app/(he)/he/page";
import HasipurPage from "@/app/(he)/he/hasipur/page";
import HartzaotPage from "@/app/(he)/he/hartzaot/page";
import VideoPage from "@/app/(he)/he/video/page";
import HamlatzotPage from "@/app/(he)/he/hamlatzot/page";
import TikshoretPage from "@/app/(he)/he/tikshoret/page";
import SheelotPage from "@/app/(he)/he/sheelot/page";
import HazmanaPage from "@/app/(he)/he/hazmana/page";
import NegishutPage from "@/app/(he)/he/negishut/page";
import PratiyutPage from "@/app/(he)/he/pratiyut/page";
import HeHeader from "./HeHeader";
import HeFooter from "./HeFooter";
import { heStory } from "@/data/he/story";
import { heHome } from "@/data/he/home";

const HELD_BACK = /Elrom|אלרום|אל-רום|שלווה|סינמה סיטי|חיל החינוך|משרד ראש הממשלה|לאוהל בחצר/i;
// Google is also a client logo (from the English client list) and appears in
// the privacy page's YouTube line, so it is checked only where Google Israel was.
const GOOGLE = /Google|גוגל/i;

const pages = {
  home: HomePage, hasipur: HasipurPage, hartzaot: HartzaotPage, video: VideoPage, hamlatzot: HamlatzotPage,
  tikshoret: TikshoretPage, sheelot: SheelotPage, hazmana: HazmanaPage, negishut: NegishutPage, pratiyut: PratiyutPage,
  header: HeHeader, footer: HeFooter,
};

describe("held-back names", () => {
  it.each(Object.entries(pages))("%s renders none of them", (_n, Page) => {
    expect(renderToStaticMarkup(<Page />)).not.toMatch(HELD_BACK);
  });
  it("no data/he value holds one", () => {
    const modules = import.meta.glob(["../../data/he/*.ts", "!../../data/he/*.test.ts"], { eager: true }) as Record<string, Record<string, unknown>>;
    expect(Object.keys(modules).length).toBeGreaterThanOrEqual(10);
    const strings: string[] = [];
    const walk = (v: unknown, seen = new Set<unknown>()) => {
      if (typeof v === "string") strings.push(v);
      else if (v && typeof v === "object" && !seen.has(v)) {
        seen.add(v);
        for (const x of Object.values(v)) walk(x, seen);
      }
    };
    for (const m of Object.values(modules)) walk(m);
    expect(strings.filter((s) => HELD_BACK.test(s))).toEqual([]);
  });
  it("Google Israel is not on the Israeli list or the home Israeli line", () => {
    for (const line of heStory.stage.israel) expect(line).not.toMatch(GOOGLE);
    expect(heHome.proof.israelLine).not.toMatch(GOOGLE);
  });
});
