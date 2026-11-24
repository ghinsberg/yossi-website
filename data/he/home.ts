import { draft } from "./site";

// Home page strings. Every fact here traces to the English site; the source
// map is docs/plans/2026-11-24-hebrew-content-sources.md. Every line is draft();
// the claims Yossi must confirm are listed there under "Claims for Yossi to
// confirm" (until 2026-11-24 they carried a visible stamp, ph()).

/** Client names shown in the proof strip. Each must exist in data/clients.ts
 *  (checked by data/he/content-lists.test.ts), and each is a company the
 *  English FAQ names as one he has spoken for. Latin brand names, not copy. */
export const heProofClientNames = [
  "Google",
  "Apple",
  "Microsoft",
  "Coca-Cola",
  "BMW",
  "American Express",
  "Citibank",
  "General Motors",
] as const;

export const heHome = {
  metaDescription: draft(
    "יוסי גינסברג מרצה לארגונים ולכנסים, בעברית ובאנגלית. ההרצאות, הסרטונים, ההמלצות והזמנת הרצאה.",
  ),
  hero: {
    title: draft("מכירים את הסיפור. עכשיו תכירו את מה שבא אחריו."),
    sub: draft(
      "יוסי גינסברג מרצה לארגונים ולכנסים, בעברית ובאנגלית. הוא מדבר על מנהיגות כשאין ודאות, על חוסן ועל התמודדות עם מצבי לחץ ומשברים, מתוך מה שלמד בג'ונגל ובעשורים שאחריו.",
    ),
    primaryCta: draft("הזמנת הרצאה"),
    secondaryCta: draft("צפייה בסרטונים"),
    secondaryHref: "/video",
    imageAlt: draft("יוסי גינסברג על במה, במקטורן ועם מיקרופון ראש. הוא מחייך ומרים אצבע תוך כדי דיבור. ברקע אורות במה ירוקים"),
    // Cleared 2026-11-24: no Hebrew talk film exists yet, so the hero shows the
    // photo alone. Fill this slot only together with a film.
    footagePlaceholder: "",
  },
  proof: {
    title: draft("בין הארגונים שבהם הרצה"),
    // Israeli organisations, from a document in his files (census 2026-11-23).
    // Not yet confirmed by Yossi; each name is a row on the story page's list.
    israelLine: draft("ובישראל: ועידת התיירות של כלכליסט, המועצה המקומית כפר כמא, מלון פסטורל כפר בלום."),
  },
  // The talk at Calcalist's tourism conference, 2018 (public YouTube video on
  // Calcalist's channel; also in data/he/videos.ts). Spoken language not confirmed.
  israelVideo: {
    title: draft("מהבמה בישראל"),
    caption: draft("ועידת התיירות של כלכליסט, 2018"),
    youtubeId: "4nKdAjljNhU",
  },
  endorsement: {
    title: draft("מה אמרו עליו"),
    cta: draft("לכל ההמלצות"),
    href: "/hamlatzot",
  },
  after: {
    title: draft("אחרי הספר"),
    body: draft(
      "הספר נגמר ביציאה מהג'ונגל. החיים לא. אחריו באו יותר מארבעים שנה: כפר נופש אקולוגי באמזונס, שהקים יחד עם בני השבט שהצילו את חייו, חברות בסיליקון ואלי שלא שינו את העולם, אלבום, ובמות ברחבי העולם.",
    ),
    cta: draft("הסיפור המלא"),
    href: "/hasipur",
  },
  keynotes: {
    title: draft("ההרצאות"),
    body: draft("שלוש הרצאות. כל אחת נבנית מחדש לקהל, לנושא האירוע ולמה שאתם רוצים שיקרה בו."),
    cta: draft("לפירוט ההרצאות"),
    href: "/hartzaot",
    imageAlt: draft("במה גדולה בכנס: על מסך ענק דיוקן של יוסי גינסברג, והוא עצמו עומד בקצה הבמה וידיו מורמות"),
  },
  reel: {
    title: draft("מהבמות בעולם"),
    caption: draft("קטעים מהרצאות של יוסי על במות בחו\"ל. הסרטון באנגלית."),
    videoLabel: draft("סרטון קטעים מהרצאות של יוסי גינסברג, באנגלית"),
  },
  booking: {
    title: draft("מתכננים אירוע?"),
    body: draft("ספרו לנו על האירוע ונחזור אליכם."),
    cta: draft("הזמנת הרצאה"),
  },
};
