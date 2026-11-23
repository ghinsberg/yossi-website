import { draft, ph } from "./site";

export type HeVideo = { youtubeId: string; title: string; language: "he" | "en"; context: string };

// Empty until Yossi approves each clip. Nothing is invented here.
export const heVideos: HeVideo[] = [];

/** Hebrew clips first, English after. Order inside each language is kept. */
export function orderVideos(videos: readonly HeVideo[]): HeVideo[] {
  return [...videos.filter((v) => v.language === "he"), ...videos.filter((v) => v.language !== "he")];
}

export const heVideosPage = {
  metaTitle: draft("סרטונים"),
  metaDescription: draft("הרצאות וראיונות של יוסי גינסברג, קודם בעברית ואחר כך מהבמות בעולם."),
  title: ph("סרטונים"),
  intro: ph("קודם מה שיוסי אומר בעברית. אחר כך מהבמות בעולם."),
  empty: draft("הסרטונים יופיעו כאן, אחרי שיוסי יאשר כל אחד מהם"),
  hebrewHeading: ph("בעברית"),
  englishHeading: ph("מהבמות בעולם"),
  englishNote: ph("הסרטונים האלה באנגלית."),
  embedTitlePrefix: draft("סרטון"),
};
