import { draft } from "./site";

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
// are proposals (listed in the source map; stamped with ph() until 2026-11-24). The flagship's English name is changing from "From
// Survival to Legacy" to "The Map Has Run Out" (owner decision); the Hebrew
// proposal follows the new name. Source map: docs/plans/2026-11-24-hebrew-content-sources.md
/** Hebrew title proposals, unstamped, so other pages (the FAQ) can name a talk
 *  without a second literal. heKeynotes wraps them in draft(). */
export const heKeynoteNames = {
  map: draft("המפה נגמרה"),
  laws: draft("חוקי הג'ונגל"),
  realVsImaginary: draft("הישרדות אמיתית, הישרדות מדומיינת"),
};

export const heKeynotes: HeKeynote[] = [
  {
    slug: "be-brave-in-a-new-world",
    title: draft(heKeynoteNames.map),
    titleEn: "The Map Has Run Out",
    forWhom: draft(
      "ארגונים שחיים בשינוי מתמיד: הייטק, פיננסים, שירותים מקצועיים, וכל ארגון שהוודאות של פעם כבר לא עובדת בו וחייב להתאים את עצמו לעולם החדש.",
    ),
    takeaway: draft(
      "דרך חשיבה שעובדת כשאין ודאות. לחץ כאינסטינקט הישרדות שמופעל במקום הלא נכון. גמישות במקום אשליית השליטה, ויצירתיות תחת לחץ. אחרי ההרצאה מנהלים מקבלים החלטות מהר יותר וסומכים על שיקול הדעת שלהם, וצוותים מפסיקים לחכות שהמפה תחזור ומתחילים לנווט בשטח שלפניהם.",
    ),
  },
  {
    slug: "made-not-broken",
    title: draft(heKeynoteNames.laws),
    titleEn: "The Laws of the Jungle",
    forWhom: draft(
      "כל קהל ארגוני: פיננסים, ביטוח, הייטק, בריאות, ארגונים מקצועיים. במיוחד צוותים שחוקים, צוותים שעובדים תחת לחץ קיצוני, ומקומות שהמורל בהם נמוך.",
    ),
    takeaway: draft(
      "ההבדל בין כאב לסבל. למה התנגדות גדולה היא סימן שאתם בדרך הנכונה. איך עוברים משיתוק לתועלת. צוותים שחוקים מוצאים מחדש טעם ומניע, אנשים מפסיקים להתחמק משיחות קשות ומהחלטות קשות, וחוסן מנטלי הופך למיומנות ולא לתכונת אופי.",
    ),
  },
  {
    slug: "real-vs-imaginary-survival",
    title: draft(heKeynoteNames.realVsImaginary),
    titleEn: "Real Survival vs Imaginary Survival",
    forWhom: draft(
      "כל קהל ארגוני, ובמיוחד צוותי הנהלה, ארגוני מכירות, אנשי מקצועות הבריאות, וכל צוות שעובד על טורים גבוהים כבר יותר מדי זמן.",
    ),
    takeaway: draft(
      "ההבחנה בין סכנה אמיתית לבין הלחץ היומיומי שהגוף מפרש כסכנה. כלים מעשיים להתמודדות עם מצבי לחץ: לכבות את תגובת הלחץ בזמן אמת, דרך הגוף ולא דרך המחשבה, כולל שתי טכניקות שיוסי מלמד רק בהרצאה הזו ובסדנה. מנהלים מורידים עומס מהצוות בלי לוותר על ביצועים, והארגון מקבל שפה משותפת להבין מה זה לחץ באמת.",
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
  // Cleared 2026-11-24: an empty list now renders nothing.
  empty: "",
  forWhomLabel: draft("למי זה מתאים"),
  takeawayLabel: draft("מה לוקחים מזה"),
  titleEnLabel: draft("השם באנגלית:"),
  bookCta: draft("הזמנת הרצאה"),
  // The full-day workshop, from app/(en)/keynotes/page.tsx (section "workshop").
  workshopTitle: draft("יום סדנה מלא"),
  workshopBody: draft(
    "הרצאה מזיזה אולם לשעה. יום שלם מעביר אנשים דרך משהו שהם לא שוכחים. לארגונים שרוצים יותר מהרצאה, יוסי מעצב ומוביל יום סדנה סביב התוצאה שאתם מחפשים, במשרדים או מחוץ להם. האורך, המקום והמבנה נקבעים יחד איתכם, אחרי תדריך מעמיק.",
  ),
  workshopFit: draft("מתאים לימי הנהלה, לכנסי פתיחה של צוותי מכירות, ולצוותים שעוברים שינוי."),
};
