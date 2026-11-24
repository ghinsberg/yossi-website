import { draft } from "./site";

export type HeMediaItem = {
  /** Latin outlet name, as the English site writes it (rendered in <bdi>). */
  outlet: string;
  /** The English title of the item, exactly as the English site writes it
   *  (tested); MediaList shows its em dash as a comma. */
  titleEn?: string;
  /** One Hebrew line saying what the item is. */
  title: string;
  /** A link that appears in the English media or story page source (tested). */
  url: string;
  year?: number;
};

// From app/(en)/media/page.tsx and app/(en)/story/page.tsx. Israeli items are
// in heIsraelMedia below, from the librarian's census, not the English site.
// The film is left out here on purpose: it is mentioned once, on the story page.
export const heMedia: HeMediaItem[] = [
  {
    outlet: "Discovery Channel / Animal Planet",
    titleEn: "I Shouldn't Be Alive",
    title: draft("שחזור דרמטי של הסיפור לסדרת התעודה. עונה 1, פרק 3, \"Escape from the Amazon\"."),
    url: "https://www.youtube.com/watch?v=myPx-zAA_1Q",
    year: 2005,
  },
  {
    outlet: "Wondery / Amazon Podcasts",
    titleEn: "Against The Odds — Season 32",
    title: draft("\"Lost in the Rainforest\", סדרת פודקאסט עלילתית בארבעה פרקים."),
    url: "https://wondery.com/shows/against-the-odds/season/32/",
    year: 2023,
  },
];

/** Outlets the English media page lists under "As Seen In" (names only, no
 *  links there). TechCrunch is left out under the project rule in CLAUDE.md.
 *  Each name is checked against data/clients.ts mediaLogos by a test. */
export const heAsSeenIn = [
  "The Washington Post",
  "Newsweek",
  "Variety",
  "The Hollywood Reporter",
  "CNN",
  "Los Angeles Times",
  "Discovery Channel",
  "BBC",
  "National Geographic",
] as const;

/** An Israeli media item. url and year only where known. */
export type HeIsraelMediaItem = {
  outlet: string;
  title: string;
  url?: string;
  year?: number;
  /** The title is a published headline, copied exactly, not our copy. */
  publishedHeadline?: true;
};

// The podcast: from the census of his files (2026-11-23), the only Israeli item
// its podcast log marks as confirmed (booked or signed items are not shown as
// aired). The two ynet items: headlines copied exactly as his agent's public
// page (gilataviv.co.il, "מה אמרו בתקשורת") shows them, with its links; the
// articles were not opened, so no year and no summary. The first ynet headline
// is about the film, so the film appears twice on the site (it and the story
// sentence); listed for Yossi in the source map.
export const heIsraelMedia: HeIsraelMediaItem[] = [
  { outlet: draft("הפודקאסט של ערן שטרן"), title: draft("פרק בהשתתפות יוסי."), year: 2021 },
  {
    outlet: "ynet",
    title: draft(`"בחזרה מטואיצ'י", גרסת המסך הגדול: "טיול בפארק לעומת המציאות"`),
    url: "https://www.ynet.co.il/articles/0,7340,L-5124308,00.html",
    publishedHeadline: true,
  },
  {
    outlet: "ynet",
    // Held back until Yossi confirms (review ruling 2026-11-24): the article is
    // about his home. A blank title renders nothing, not even the link.
    title: "",
    url: "https://www.ynet.co.il/articles/0,7340,L-4023042,00.html",
    publishedHeadline: true,
  },
];

export const heMediaPage = {
  metaTitle: draft("בתקשורת"),
  metaDescription: draft("יוסי גינסברג בתקשורת, בישראל ובעולם: טלוויזיה, עיתונות ופודקאסטים."),
  title: draft("בתקשורת"),
  intro: draft("יותר מארבעים שנה אחרי, הסיפור עדיין מסופר: בטלוויזיה, בעיתונות ובפודקאסטים."),
  israelTitle: draft("בישראל"),
  // Cleared 2026-11-24: the Israeli section shows heIsraelMedia, or nothing.
  israelPlaceholder: "",
  worldTitle: draft("בעולם"),
  asSeenInTitle: draft("סיקרו את הסיפור:"),
  // Cleared 2026-11-24: an empty list now renders nothing.
  empty: "",
  readCta: draft("לפריט המקורי"),
};
