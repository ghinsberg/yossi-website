import { draft, ph } from "./site";

export type HeKeynote = {
  /** The English keynote slug in data/keynotes.ts (checked by a test). */
  slug: string;
  /** Hebrew title PROPOSAL, for Yossi to approve or rename. */
  title: string;
  /** The English title, shown small so Yossi and the agents can match them. */
  titleEn: string;
  forWhom: string;
  takeaway: string;
};

// One entry per keynote in data/keynotes.ts, in the same order. Hebrew titles
// are proposals (ph). The flagship's English name is changing from "From
// Survival to Legacy" to "The Map Has Run Out" (owner decision); the Hebrew
// proposal follows the new name. Source map: docs/plans/2026-11-24-hebrew-content-sources.md
export const heKeynotes: HeKeynote[] = [
  {
    slug: "be-brave-in-a-new-world",
    title: ph("המפה נגמרה"),
    titleEn: "The Map Has Run Out",
    forWhom: draft(
      "ארגונים שמנווטים בשינוי מתמיד: הייטק, פיננסים, שירותים מקצועיים, וכל ארגון שהוודאות של פעם כבר לא עובדת בו.",
    ),
    takeaway: draft(
      "דרך חשיבה שעובדת כשאין ודאות. לחץ כאינסטינקט הישרדות שפשוט מכוון למקום הלא נכון. גמישות במקום אשליית השליטה, ויצירתיות תחת לחץ. מנהלים יוצאים מקבלים החלטות מהר יותר וסומכים על שיקול הדעת שלהם, וצוותים מפסיקים לחכות שהמפה תחזור ומתחילים לנווט בשטח שלפניהם.",
    ),
  },
  {
    slug: "made-not-broken",
    title: ph("חוקי הג'ונגל"),
    titleEn: "The Laws of the Jungle",
    forWhom: draft(
      "כל קהל ארגוני: פיננסים, ביטוח, הייטק, בריאות, ארגונים מקצועיים. במיוחד צוותים שחוקים, צוותים שעובדים תחת לחץ קיצוני, ומקומות שהמורל בהם נמוך.",
    ),
    takeaway: draft(
      "ההבדל בין כאב לסבל. למה התנגדות גדולה היא סימן שאתם בדרך הנכונה. איך עוברים משיתוק לעשייה. צוותים שחוקים מוצאים מחדש טעם ומניע, אנשים מפסיקים להתחמק משיחות קשות ומהחלטות קשות, וחוסן הופך למיומנות ולא לתכונת אופי.",
    ),
  },
  {
    slug: "real-vs-imaginary-survival",
    title: ph("הישרדות אמיתית, הישרדות מדומיינת"),
    titleEn: "Real Survival vs Imaginary Survival",
    forWhom: draft(
      "כל קהל ארגוני, ובמיוחד צוותי הנהלה, ארגוני מכירות, אנשי מקצועות הבריאות, וכל קבוצה שרצה חם מדי כבר יותר מדי זמן.",
    ),
    takeaway: draft(
      "ההבחנה בין סכנה אמיתית לבין הלחץ היומיומי שהגוף מפרש כסכנה. כלים מעשיים לכבות את תגובת הלחץ בזמן אמת, דרך הגוף ולא דרך המחשבה, כולל שתי טכניקות שיוסי מלמד רק בהרצאה הזו ובסדנה. מנהלים מורידים עומס מהצוות בלי לוותר על ביצועים, והארגון מקבל שפה משותפת למה שלחץ הוא באמת.",
    ),
  },
];

export const heKeynotesPage = {
  metaTitle: draft("הרצאות"),
  metaDescription: draft(
    "שלוש ההרצאות של יוסי גינסברג: על מנהיגות כשאין ודאות, על חוסן ועל לחץ. למי כל הרצאה מתאימה ומה הקהל לוקח ממנה.",
  ),
  title: draft("הרצאות"),
  intro: draft(
    "שלוש הרצאות. כל אחת נבנית מחדש לקהל, לנושא האירוע ולמה שאתם רוצים שיקרה בו. בישראל ההרצאות בעברית.",
  ),
  empty: draft("שמות ההרצאות, למי הן מתאימות ומה הקהל לוקח מהן יופיעו כאן, אחרי שיוסי יאשר אותם"),
  forWhomLabel: draft("למי זה מתאים"),
  takeawayLabel: draft("מה לוקחים מזה"),
  titleEnLabel: draft("השם באנגלית:"),
  bookCta: draft("הזמנת הרצאה"),
};
