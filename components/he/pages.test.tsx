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

describe("pages with empty lists", () => {
  const pages = { hamlatzot: HamlatzotPage, hartzaot: HartzaotPage, video: VideoPage, tikshoret: TikshoretPage, sheelot: SheelotPage };
  for (const [name, Page] of Object.entries(pages)) {
    it(`${name}: one h1, a Placeholder, no empty list or sections`, () => {
      const html = renderToStaticMarkup(<Page />);
      expect(count(html, "<h1")).toBe(1);
      expect(html).toContain("data-placeholder");
      expect(html).not.toMatch(/<ul[^>]*><\/ul>/);
      expect(html).not.toMatch(/<h2[^>]*><\/h2>/);
    });
  }
  it("video: no group headings while the list is empty", () => {
    expect(count(renderToStaticMarkup(<VideoPage />), "<h2")).toBe(0);
  });
});

describe("story and thanks", () => {
  it("story has one h1 and marks unknown facts with placeholders", () => {
    const html = renderToStaticMarkup(<HasipurPage />);
    expect(count(html, "<h1")).toBe(1);
    expect(count(html, "data-placeholder")).toBeGreaterThanOrEqual(3);
  });
  it("thanks has one h1 and is noindex", () => {
    expect(count(renderToStaticMarkup(<TodaPage />), "<h1")).toBe(1);
    expect(todaMeta.robots).toMatchObject({ index: false });
  });
});
