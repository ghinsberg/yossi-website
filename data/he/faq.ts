import { draft, ph } from "./site";
import { heKeynoteNames } from "./keynotes";

export type HeFaqItem = { q: string; a: string };

// From app/(en)/faq/page.tsx and app/(en)/keynotes/page.tsx, adjusted only as
// the brief allows: the talk is in Hebrew in Israel, booking goes through the
// Hebrew booking page, nothing about fees, currency or where he lives. The
// English FAQ says nothing about technical needs or travel to Israel, so
// neither is answered here. Source map: docs/plans/2026-11-24-hebrew-content-sources.md
export const heFaq: HeFaqItem[] = [
  {
    q: draft("על מה יוסי מרצה?"),
    a: draft(
      "על מנהיגות כשאין ודאות, על חוסן, על הישרדות, על התמודדות עם מצבי לחץ ומשברים ועל הפוטנציאל האנושי. ההרצאות בנויות מסיפורי הרפתקאות אישיים, מהג'ונגל ומהעשורים שאחריו, המלווים במסרים מעשיים. יש שלוש הרצאות, והפירוט בעמוד ההרצאות.",
    ),
  },
  {
    q: draft("באיזו שפה ההרצאה?"),
    a: draft("בישראל, בעברית. יוסי מרצה גם באנגלית."),
  },
  {
    q: draft("כמה זמן נמשכת הרצאה?"),
    a: draft(
      "הרצאה רגילה נמשכת 60 דקות. אפשר גם הרצאה ואחריה שיחה מונחית של 20 עד 30 דקות, ולארגונים שרוצים חוויה עמוקה יותר יש יום סדנה מלא.",
    ),
  },
  {
    q: draft("אפשר להתאים את ההרצאה לאירוע שלנו?"),
    a: draft(
      "כן. כל הזמנה מתחילה בתדריך לפני האירוע, וההרצאה נבנית סביב הקהל שלכם, נושא האירוע והתוצאה שאתם רוצים. אין שתי הרצאות זהות.",
    ),
  },
  {
    q: draft("ההרצאה רק פרונטלית?"),
    a: draft("לא. יוסי מרצה באולם, מרחוק, ובשילוב של השניים. כל פורמט מותאם לקהל ולמטרה, ולא מדובר בהרצאה מוקלטת."),
  },
  {
    q: draft("לאיזה גודל קהל?"),
    a: ph(
      "ממפגשי הנהלה קטנים ועד במות ראשיות מול אלפי אנשים, כולל הבמה הראשית של כנס MDRT ב-2025.",
    ),
  },
  {
    q: draft("מה זה יום הסדנה?"),
    a: draft(
      `יום שלם שיוסי מעצב ומוביל סביב התוצאה שהארגון מחפש, במשרדים או מחוץ להם. האורך, המקום והמבנה נקבעים יחד אחרי תדריך מעמיק. יוסי מוביל את כל היום ומעביר בעצמו את שתי הטכניקות שהוא מלמד רק בסדנה ובהרצאה '${heKeynoteNames.realVsImaginary}'. לחלקים שמתאימים לכך הוא מצרף מנחים מהשורה הראשונה.`,
    ),
  },
  {
    q: draft("איך מזמינים?"),
    a: draft("ממלאים את טופס ההזמנה באתר. הפנייה מגיעה לנציגים של יוסי בישראל, ונחזור אליכם."),
  },
];

export const heFaqPage = {
  metaTitle: draft("שאלות ותשובות"),
  metaDescription: draft("שפה, אורך, פורמטים והתאמה לאירוע: מה שמארגנים שואלים לפני שמזמינים הרצאה של יוסי גינסברג."),
  title: draft("שאלות ותשובות"),
  intro: draft("מה שמארגנים שואלים לפני שמזמינים הרצאה."),
  empty: draft("השאלות והתשובות יופיעו כאן, אחרי שיוסי יאשר אותן"),
  bookCta: draft("לא מצאתם תשובה? הזמנת הרצאה"),
};
