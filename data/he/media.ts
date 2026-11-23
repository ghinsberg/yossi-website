import { draft, ph } from "./site";

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

// From app/(en)/media/page.tsx and app/(en)/story/page.tsx. The English site
// names no Israeli outlet, so Israeli press stays a Placeholder on the page.
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

export const heMediaPage = {
  metaTitle: draft("בתקשורת"),
  metaDescription: draft("יוסי גינסברג בטלוויזיה, בפודקאסטים ובעיתונות בעולם."),
  title: draft("בתקשורת"),
  intro: draft("יותר מארבעים שנה אחרי, הסיפור עדיין מסופר: בטלוויזיה ובעיתונות."),
  israelTitle: draft("בישראל"),
  israelPlaceholder: draft("כתבות וראיונות מהתקשורת הישראלית יופיעו כאן, אחרי שכל פריט ייבדק ויאושר"),
  worldTitle: draft("בעולם"),
  asSeenInTitle: ph("סיקרו את הסיפור:"),
  empty: draft("הכתבות והראיונות יופיעו כאן, אחרי שכל פריט ייבדק ויאושר"),
  readCta: draft("לפריט המקורי"),
};
