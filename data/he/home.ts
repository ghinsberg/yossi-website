import { draft, ph } from "./site";

// Home page strings. Every fact here traces to the English site; the source
// map is docs/plans/2026-11-24-hebrew-content-sources.md. ph() marks the
// lines Yossi must confirm (claims); draft() is all other draft copy.

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
      "יוסי גינסברג מרצה לארגונים ולכנסים, בעברית ובאנגלית. הוא מדבר על מנהיגות כשאין ודאות, על חוסן ועל לחץ, מתוך מה שלמד בג'ונגל ובעשורים שאחריו.",
    ),
    primaryCta: draft("הזמנת הרצאה"),
    secondaryCta: draft("צפייה בסרטונים"),
    secondaryHref: "/video",
    imageAlt: draft("יוסי גינסברג על במה חשוכה, במקטורן חום, מדבר בידיים פתוחות. בקדמת התמונה צלליות של הקהל"),
    footagePlaceholder: draft("כאן יופיע סרטון הרצאה בעברית"),
  },
  proof: {
    title: ph("בין הארגונים שבהם הרצה"),
  },
  endorsement: {
    title: draft("מה אמרו עליו"),
    cta: draft("לכל ההמלצות"),
    href: "/hamlatzot",
  },
  after: {
    title: draft("אחרי הספר"),
    body: draft(
      "הספר נגמר ביציאה מהג'ונגל. החיים לא. אחריו באו יותר מארבעים שנה: אכסניה באמזונס שהקים יחד עם הקהילה שהצילה אותו, חברות בעמק הסיליקון שלא שינו את העולם, אלבום, ובמות ברחבי העולם.",
    ),
    cta: draft("הסיפור המלא"),
    href: "/hasipur",
  },
  keynotes: {
    title: draft("ההרצאות"),
    body: draft("שלוש הרצאות. כל אחת נבנית מחדש לקהל, לנושא האירוע ולמה שאתם רוצים שיקרה בו."),
    cta: draft("לפירוט ההרצאות"),
    href: "/hartzaot",
    imageAlt: draft("יוסי גינסברג על במה גדולה, בגבו למצלמה וידיו מורמות, מול אולם מלא. אלומות אור כחולות מעליו"),
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
