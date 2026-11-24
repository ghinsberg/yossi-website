import { draft } from "./site";

// DRAFT SHELLS for the accessibility statement (/negishut) and the privacy
// notice (/pratiyut).
//
// COUNSEL MUST CONFIRM THE WORDING OF BOTH PAGES BEFORE LAUNCH. Nothing here
// is legal advice or an approved text. Every line is wrapped in draft(): the
// launch gate counts each one, and the layout's draft banner marks the page.
//
// Only facts the code demonstrably shows are stated (booking form fields, who
// receives the enquiry, session storage of the agent tag and link
// parameters, optional Plausible statistics, no advertising pixels). Facts the
// code cannot know (named contact person, conformance level, audit date,
// controller details, retention, processors) are NOT written: each is a
// `missing` entry, rendered as a plain list under "details still to be
// completed", naming what counsel/Yossi must supply.

export const heLegal = {
  accessibility: {
    metaTitle: draft("הצהרת נגישות"),
    metaDescription: draft("הצהרת הנגישות של האתר."),
    title: draft("הצהרת נגישות"),
    intro: draft("האתר נבנה מתוך מחשבה על נגישות, כדי שאפשר יהיה להשתמש בו בקלות."),
    measuresTitle: draft("מה עשינו"),
    measures: [
      draft("אפשר לנווט באתר ולמלא את טופס ההזמנה באמצעות המקלדת בלבד."),
      draft("כל רכיב שאפשר ללחוץ עליו מקבל סימון מיקוד ברור כשעוברים אליו."),
      draft("בראש כל עמוד יש קישור לדילוג ישיר לתוכן."),
      draft("לכל שדה בטופס יש תווית. שגיאות מוצמדות לשדה שלהן, ומעל הטופס מוכרזת שורה אחת שמסכמת כמה שדות צריך לתקן."),
      draft("לתמונות יש טקסט חלופי."),
      draft("האתר בנוי מימין לשמאל, וכותרות ואזורי העמוד מסומנים."),
    ] as string[],
    missingTitle: draft("פרטים שעוד יושלמו"),
    missing: [
      draft("איש הקשר לענייני נגישות, ואיך אפשר לפנות אליו"),
      draft("רמת ההתאמה לתקן, ותאריך הבדיקה האחרונה"),
    ] as string[],
  },
  privacy: {
    metaTitle: draft("מדיניות פרטיות"),
    metaDescription: draft("מדיניות הפרטיות של האתר."),
    title: draft("מדיניות פרטיות"),
    intro: draft("כאן מוסבר איזה מידע האתר אוסף ולמה."),
    formTitle: draft("טופס ההזמנה"),
    form: [
      draft("בטופס ההזמנה אתם מוסרים שם, ארגון וטלפון. אפשר גם למסור אימייל, פרטי האירוע והודעה."),
      draft("המידע משמש כדי לענות לפנייה שלכם."),
      draft("הפנייה נשלחת באימייל ליוסי גינסברג, ולנציג של יוסי בישראל שמטפל בפנייה."),
      draft("האימייל נשלח באמצעות השירות Resend."),
      draft("יחד עם הפנייה נשלח גם מידע על הדרך שבה הגעתם לאתר, כמו פרמטרים בקישור והעמוד שממנו הגעתם."),
    ] as string[],
    visitTitle: draft("הביקור באתר"),
    visit: [
      draft("האתר לא מפעיל פיקסלים פרסומיים."),
      draft("אם הקישור שהגעתם דרכו כולל תג של נציג, התג נשמר בדפדפן למשך הביקור בלבד (אחסון הפעלה), כדי שהפנייה תגיע לנציג הנכון."),
      draft("בעמודים עם סרטונים מוטמע נגן של YouTube. טעינה או הפעלה של סרטון מחברת את הדפדפן שלכם אל YouTube (Google)."),
    ] as string[],
    statsLine: draft("ייתכן שנעשה שימוש בסטטיסטיקת ביקורים ידידותית לפרטיות, בלי עוגיות."),
    missingTitle: draft("פרטים שעוד יושלמו"),
    missing: [
      draft("מי הגוף האחראי על המידע, ואיך יוצרים איתו קשר"),
      draft("כמה זמן נשמרות פניות"),
      draft("אילו ספקי שירות מעבדים את המידע"),
      draft("רשימת הגורמים החיצוניים שמקבלים מידע (ספק שליחת האימייל, מארח הסרטונים, וספק הסטטיסטיקה אם יופעל), והבסיס החוקי לכך"),
      draft("הזכויות של המשתמשים וכיצד לממש אותן"),
    ] as string[],
  },
};
