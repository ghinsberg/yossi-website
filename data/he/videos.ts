import { draft } from "./site";

export type HeVideo = {
  youtubeId: string;
  title: string;
  /** The English title as published on YouTube and the English site. */
  titleEn?: string;
  language: "he" | "en";
  context: string;
};

// From data/videos.ts (every id is checked against it by a test). All are in
// English. Left out on purpose:
//  - the three clips about the film (trailer, "The Turtle", behind the scenes):
//    whether the film appears on the Hebrew site is Yossi's call, and it is
//    mentioned once, on the story page, as a proposal;
//  - the reel in siteConfig.speakerReelId: data/videos.ts notes it was removed
//    from the English site as bureau-branded.
// The English site has no description per clip, only its section ("From the
// Stage", "The Story", "Quick Clips"), so the context line says only that.
// Hebrew-language clips will be added later and sort first (orderVideos).
export const heVideos: HeVideo[] = [
  { youtubeId: "BDGQx1V1MK0", titleEn: "Stories and Lessons", title: draft("סיפורים ולקחים"), language: "en", context: draft("מהבמה.") },
  { youtubeId: "RS3p_8di8WA", titleEn: "Innovation Is Key", title: draft("החדשנות היא המפתח"), language: "en", context: draft("מהבמה.") },
  { youtubeId: "FINMVryLQmw", titleEn: "Nature Is the Answer", title: draft("הטבע הוא התשובה"), language: "en", context: draft("מהבמה.") },
  { youtubeId: "_QyWIuCarUc", titleEn: "Dreamers", title: draft("חולמים"), language: "en", context: draft("מהבמה.") },
  { youtubeId: "ebBx8fFMCSY", titleEn: "The Now Is Here", title: draft("העכשיו כבר כאן"), language: "en", context: draft("מהבמה.") },
  { youtubeId: "hDQWgqtuGUw", titleEn: "Being a Dreamer and Making Dreams Come True", title: draft("להיות חולם, ולהגשים חלומות"), language: "en", context: draft("מהבמה.") },
  { youtubeId: "UepK6QniFgA", titleEn: "What We Really Search For", title: draft("מה אנחנו באמת מחפשים"), language: "en", context: draft("מהבמה.") },
  { youtubeId: "hZqjdbmyJKI", titleEn: "Surviving the Impossible", title: draft("לשרוד את הבלתי אפשרי"), language: "en", context: draft("יוסי מספר את הסיפור מהאמזונס הבוליביאני.") },
  { youtubeId: "N1ADswxJdVU", titleEn: "Once in a Lifetime — Amazon Expedition", title: draft("פעם בחיים: מסע לאמזונס"), language: "en", context: draft("מתוך הסיפור.") },
  { youtubeId: "bjfqeAGa7cg", titleEn: "Victim Is a Choice", title: draft("קורבן זו בחירה"), language: "en", context: draft("קליפ קצר.") },
  { youtubeId: "R1-QtfpBxqI", titleEn: "Inspiring the Heroes", title: draft("לתת השראה לגיבורים"), language: "en", context: draft("קליפ קצר.") },
  { youtubeId: "Jc6-JiOZw1Q", titleEn: "Save the Amazon", title: draft("להציל את האמזונס"), language: "en", context: draft("קליפ קצר.") },
];

/** Hebrew clips first, English after. Order inside each language is kept. */
export function orderVideos(videos: readonly HeVideo[]): HeVideo[] {
  return [...videos.filter((v) => v.language === "he"), ...videos.filter((v) => v.language !== "he")];
}

export const heVideosPage = {
  metaTitle: draft("סרטונים"),
  metaDescription: draft("קטעים מהרצאות של יוסי גינסברג על במות בעולם. הסרטונים באנגלית."),
  title: draft("סרטונים"),
  intro: draft("הסרטונים כאן באנגלית, רובם מבמות בחו\"ל. סרטונים בעברית יתווספו בהמשך."),
  empty: draft("הסרטונים יופיעו כאן, אחרי שיוסי יאשר כל אחד מהם"),
  hebrewHeading: draft("בעברית"),
  englishHeading: draft("באנגלית"),
  englishNote: draft("מהבמות בחו\"ל, מהסיפור, וקליפים קצרים."),
  embedTitlePrefix: draft("סרטון"),
};
