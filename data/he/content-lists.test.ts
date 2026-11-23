import { describe, it, expect } from "vitest";
import { heKeynotes } from "./keynotes";
import { heEndorsements } from "./endorsements";
import { heMedia } from "./media";
import { heFaq } from "./faq";
import { heVideos, orderVideos, type HeVideo } from "./videos";
import { PLACEHOLDER_MARK } from "./site";

describe("content lists", () => {
  it("start empty: nothing unapproved ships", () => {
    expect(heKeynotes).toEqual([]);
    expect(heVideos).toEqual([]);
    expect(heEndorsements).toEqual([]);
    expect(heMedia).toEqual([]);
  });
  it("every FAQ question and answer is a stamped draft", () => {
    for (const f of heFaq) {
      expect(f.q.startsWith(PLACEHOLDER_MARK)).toBe(true);
      expect(f.a.startsWith(PLACEHOLDER_MARK)).toBe(true);
    }
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
