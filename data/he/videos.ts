import { draft } from "./site";

export type HeVideo = {
  youtubeId: string;
  title: string;
  /** The English title as published on YouTube and the English site. */
  titleEn?: string;
  language: "he" | "en";
  context: string;
};

// From data/videos.ts (every id is checked against it by a test), except the
// ids in HE_ONLY_VIDEO_IDS below. Left out on purpose:
//  - the three clips about the film (trailer, "The Turtle", behind the scenes):
//    whether the film appears on the Hebrew site is Yossi's call, and it is
//    mentioned once, on the story page, as a proposal;
//  - the reel in siteConfig.speakerReelId: data/videos.ts notes it was removed
//    from the English site as bureau-branded.
// The English site has no description per clip, only its section ("From the
// Stage", "The Story", "Quick Clips"), so the context line says only that.
// Hebrew-language clips, once there are any, sort first (orderVideos).
export const heVideos: HeVideo[] = [
  { youtubeId: "BDGQx1V1MK0", titleEn: "Stories and Lessons", title: draft("סיפורים ולקחים"), language: "en", context: draft("מהבמה.") },
  { youtubeId: "RS3p_8di8WA", titleEn: "Innovation Is Key", title: draft("חדשנות היא המפתח"), language: "en", context: draft("מהבמה.") },
  { youtubeId: "FINMVryLQmw", titleEn: "Nature Is the Answer", title: draft("הטבע הוא התשובה"), language: "en", context: draft("מהבמה.") },
  { youtubeId: "_QyWIuCarUc", titleEn: "Dreamers", title: draft("חולמים"), language: "en", context: draft("מהבמה.") },
  { youtubeId: "ebBx8fFMCSY", titleEn: "The Now Is Here", title: draft("העכשיו כבר כאן"), language: "en", context: draft("מהבמה.") },
  { youtubeId: "hDQWgqtuGUw", titleEn: "Being a Dreamer and Making Dreams Come True", title: draft("להיות חולם ולהגשים חלומות"), language: "en", context: draft("מהבמה.") },
  { youtubeId: "UepK6QniFgA", titleEn: "What We Really Search For", title: draft("מה אנחנו באמת מחפשים"), language: "en", context: draft("מהבמה.") },
  { youtubeId: "hZqjdbmyJKI", titleEn: "Surviving the Impossible", title: draft("לשרוד את הבלתי אפשרי"), language: "en", context: draft("יוסי מספר את הסיפור מהאמזונס הבוליביאני.") },
  { youtubeId: "N1ADswxJdVU", titleEn: "Once in a Lifetime — Amazon Expedition", title: draft("פעם בחיים: מסע לאמזונס"), language: "en", context: draft("מתוך הסיפור.") },
  { youtubeId: "bjfqeAGa7cg", titleEn: "Victim Is a Choice", title: draft("להיות קורבן זו בחירה"), language: "en", context: draft("קליפ קצר.") },
  { youtubeId: "R1-QtfpBxqI", titleEn: "Inspiring the Heroes", title: draft("לתת השראה לגיבורים"), language: "en", context: draft("קליפ קצר.") },
  { youtubeId: "Jc6-JiOZw1Q", titleEn: "Save the Amazon", title: draft("להציל את האמזונס"), language: "en", context: draft("קליפ קצר.") },
  // Appended last so existing rows keep their position in the copy deck; it
  // still shows first, because orderVideos puts "he" before "en". Source: the
  // public YouTube video on Calcalist's channel, title "ועידת התיירות 2018 -
  // יוסי גינסברג". Not played: "he" here means an Israeli stage, and the
  // spoken language is NOT confirmed, so no text says it is in Hebrew.
  { youtubeId: "4nKdAjljNhU", title: draft("ועידת התיירות 2018"), language: "he", context: draft("הרצאה בוועידת התיירות של כלכליסט, 2018.") },
];

/** Videos on the Hebrew site that are not on the English site, each with its
 *  source. The test that ties every other id to data/videos.ts stays strict. */
export const HE_ONLY_VIDEO_IDS: Record<string, string> = {
  "4nKdAjljNhU": "Calcalist's public YouTube channel (youtube.com/@Calcalist)",
};

/** Hebrew clips first, English after. Order inside each language is kept. */
export function orderVideos(videos: readonly HeVideo[]): HeVideo[] {
  return [...videos.filter((v) => v.language === "he"), ...videos.filter((v) => v.language !== "he")];
}

export const heVideosPage = {
  metaTitle: draft("סרטונים"),
  metaDescription: draft("קטעים מהרצאות של יוסי גינסברג, מהבמה בישראל ומהבמות בעולם."),
  title: draft("סרטונים"),
  intro: draft("קטעים מהרצאות של יוסי, מהבמה בישראל ומהבמות בעולם."),
  // Cleared 2026-11-24: an empty list now renders nothing.
  empty: "",
  // "בישראל", not "בעברית": the spoken language of the clip is not confirmed.
  hebrewHeading: draft("בישראל"),
  englishHeading: draft("בעולם"),
  englishNote: draft("מהבמות בחו\"ל, מהסיפור, וקליפים קצרים. הסרטונים באנגלית."),
  embedTitlePrefix: draft("סרטון"),
};
