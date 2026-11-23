import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import ListOrPlaceholder from "./ListOrPlaceholder";
import HamlatzotPage from "@/app/(he)/he/hamlatzot/page";
import HartzaotPage from "@/app/(he)/he/hartzaot/page";
import VideoPage from "@/app/(he)/he/video/page";
import TikshoretPage from "@/app/(he)/he/tikshoret/page";
import SheelotPage from "@/app/(he)/he/sheelot/page";
import HasipurPage from "@/app/(he)/he/hasipur/page";
import TodaPage, { metadata as todaMeta } from "@/app/(he)/he/toda/page";
import HeText, { splitLatin } from "./HeText";
import { displayTitleEn } from "./VideoList";
import { readFileSync } from "node:fs";
import { heKeynotes, heKeynoteNames } from "@/data/he/keynotes";
import { heEndorsements, heEndorsementsPage } from "@/data/he/endorsements";
import { heVideos } from "@/data/he/videos";
import { heFaq } from "@/data/he/faq";
import { heMedia } from "@/data/he/media";

const count = (html: string, needle: string) => html.split(needle).length - 1;

describe("ListOrPlaceholder", () => {
  it("renders a Placeholder and no list container for an empty list", () => {
    const html = renderToStaticMarkup(
      <ListOrPlaceholder items={[]} empty="x">
        {() => <ul data-list />}
      </ListOrPlaceholder>,
    );
    expect(html).toContain("data-placeholder");
    expect(html).not.toContain("data-list");
  });
  it("renders the list and no Placeholder when there are items", () => {
    const html = renderToStaticMarkup(
      <ListOrPlaceholder items={[1]} empty="x">
        {() => <ul data-list />}
      </ListOrPlaceholder>,
    );
    expect(html).toContain("data-list");
    expect(html).not.toContain("data-placeholder");
  });
});

describe("pages with content", () => {
  const listPages = { hamlatzot: HamlatzotPage, hartzaot: HartzaotPage, video: VideoPage, sheelot: SheelotPage };
  for (const [name, Page] of Object.entries(listPages)) {
    it(`${name}: one h1, no Placeholder, no empty list or headings`, () => {
      const html = renderToStaticMarkup(<Page />);
      expect(count(html, "<h1")).toBe(1);
      expect(html).not.toContain("data-placeholder");
      expect(html).not.toMatch(/<ul[^>]*><\/ul>/);
      expect(html).not.toMatch(/<h[23][^>]*><\/h[23]>/);
    });
  }
  it("hartzaot renders every keynote with its English name in a Latin-isolated bdi", () => {
    const html = renderToStaticMarkup(<HartzaotPage />);
    expect(count(html, "<li")).toBe(heKeynotes.length);
    for (const k of heKeynotes) expect(html).toContain(`<bdi lang="en">${k.titleEn}</bdi>`);
  });
  it("hamlatzot renders every endorsement with the translated-from-English note", () => {
    const html = renderToStaticMarkup(<HamlatzotPage />);
    expect(count(html, "<blockquote")).toBe(heEndorsements.length);
    expect(count(html, heEndorsementsPage.translatedNote)).toBe(heEndorsements.length);
    for (const e of heEndorsements) expect(html).toContain(`<bdi>${e.organization.replace("&", "&amp;")}</bdi>`);
  });
  it("video renders one embed per clip and only the English group while no Hebrew clip exists", () => {
    const html = renderToStaticMarkup(<VideoPage />);
    expect(count(html, "<iframe")).toBe(heVideos.length);
    expect(count(html, "<h2")).toBe(1);
  });
  it("video shows English titles with a comma where the English data has an em dash", () => {
    const html = renderToStaticMarkup(<VideoPage />);
    expect(html).not.toContain("—");
    expect(html).toContain("Once in a Lifetime, Amazon Expedition");
    expect(displayTitleEn("A — B")).toBe("A, B");
  });
  it("hamlatzot shows Chris Varelas's English title in a Latin-isolated bdi", () => {
    expect(renderToStaticMarkup(<HamlatzotPage />)).toContain('<bdi lang="en">Head of National Investment Bank</bdi>');
  });
  it("sheelot names the keynote from the keynote data, not a second literal", () => {
    const html = renderToStaticMarkup(<SheelotPage />);
    expect(html).toContain(heKeynoteNames.realVsImaginary);
    expect(readFileSync("data/he/faq.ts", "utf8")).toContain("${heKeynoteNames.realVsImaginary}");
  });
  it("tikshoret shows no em dash", () => {
    expect(renderToStaticMarkup(<TikshoretPage />)).not.toContain("—");
  });
  it("sheelot renders every question", () => {
    expect(count(renderToStaticMarkup(<SheelotPage />), "<details")).toBe(heFaq.length);
  });
  it("tikshoret keeps the Israeli press placeholder and lists the international items", () => {
    const html = renderToStaticMarkup(<TikshoretPage />);
    expect(count(html, "<h1")).toBe(1);
    expect(count(html, "data-placeholder")).toBe(1);
    for (const m of heMedia) expect(html).toContain(`href="${m.url}"`);
  });
});

describe("story and thanks", () => {
  it("story has one h1, no placeholders, and the film once", () => {
    const html = renderToStaticMarkup(<HasipurPage />);
    expect(count(html, "<h1")).toBe(1);
    expect(html).not.toContain("data-placeholder");
    expect(count(html, "רדקליף")).toBe(1);
  });
  it("story isolates Latin names in bdi", () => {
    const html = renderToStaticMarkup(<HasipurPage />);
    for (const name of ["Blinq", "Headbox", "MDRT", "CITA", "Lino Cambi"]) expect(html).toContain(`<bdi>${name}`);
  });
  it("thanks has one h1 and is noindex", () => {
    expect(count(renderToStaticMarkup(<TodaPage />), "<h1")).toBe(1);
    expect(todaMeta.robots).toMatchObject({ index: false });
  });
});

describe("HeText", () => {
  it("wraps each Latin run in bdi and leaves Hebrew and numbers alone", () => {
    expect(splitLatin("ב-2008 עם Avishai Barnatan ו-Amir Paiss.")).toEqual([
      { text: "ב-2008 עם ", latin: false },
      { text: "Avishai Barnatan", latin: true },
      { text: " ו-", latin: false },
      { text: "Amir Paiss", latin: true },
      { text: ".", latin: false },
    ]);
    expect(splitLatin("שלום")).toEqual([{ text: "שלום", latin: false }]);
    expect(renderToStaticMarkup(<HeText>{"כנס ASPIRE, ICE קרקוב"}</HeText>)).toBe("כנס <bdi>ASPIRE, ICE</bdi> קרקוב");
  });
});
