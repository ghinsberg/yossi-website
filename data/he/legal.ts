import { draft, ph } from "./site";

// DRAFT SHELLS for the accessibility statement (/negishut) and the privacy
// notice (/pratiyut).
//
// COUNSEL MUST CONFIRM THE WORDING OF BOTH PAGES BEFORE LAUNCH. Nothing here
// is legal advice or an approved text. Every body line is wrapped in ph() so
// it carries the visible draft stamp and the launch gate blocks publication.
//
// Only facts the code demonstrably shows are stated (booking form fields, who
// receives the enquiry, session storage of the agent tag and link
// parameters, optional Plausible statistics, no advertising pixels). Facts the
// code cannot know (named contact person, conformance level, audit date,
// controller details, retention, processors) are NOT written: each is a
// `missing` entry, rendered as a Placeholder naming what counsel/Yossi must
// supply.

export const heLegal = {
  accessibility: {
    metaTitle: draft("הצהרת נגישות"),
    metaDescription: draft("הצהרת הנגישות של האתר."),
    title: ph("הצהרת נגישות"),
    intro: ph("האתר נבנה מתוך מחשבה על נגישות, כדי שאפשר יהיה להשתמש בו בקלות."),
    measuresTitle: ph("מה עשינו"),
    measures: [
      ph("אפשר לנווט באתר ולמלא את טופס ההזמנה באמצעות המקלדת בלבד."),
      ph("כל רכיב שאפשר ללחוץ עליו מקבל סימון מיקוד ברור כשעוברים אליו."),
      ph("בראש כל עמוד יש קישור לדילוג ישיר לתוכן."),
      ph("לכל שדה בטופס יש תווית, ושגיאות מוצמדות לשדה שלהן ומוכרזות כהתראות."),
      ph("לתמונות יש טקסט חלופי."),
      ph("האתר בנוי מימין לשמאל, וכותרות ואזורי העמוד מסומנים."),
    ] as string[],
    missingTitle: ph("פרטים שחסרים"),
    missing: [
      draft("איש הקשר לענייני נגישות, ואיך אפשר לפנות אליו"),
      draft("רמת ההתאמה לתקן, ותאריך הבדיקה האחרונה"),
    ] as string[],
  },
  privacy: {
    metaTitle: draft("מדיניות פרטיות"),
    metaDescription: draft("מדיניות הפרטיות של האתר."),
    title: ph("מדיניות פרטיות"),
    intro: ph("כאן מוסבר איזה מידע האתר אוסף ולמה."),
    formTitle: ph("טופס ההזמנה"),
    form: [
      ph("בטופס ההזמנה אתם מוסרים שם, ארגון וטלפון. אפשר גם למסור אימייל, פרטי האירוע והודעה."),
      ph("המידע משמש כדי לענות לפנייה שלכם."),
      ph("הפנייה נשלחת באימייל ליוסי גינסברג, ולנציג המטפל בפנייה, כשפרטיו יוגדרו."),
      ph("האימייל נשלח באמצעות השירות Resend."),
      ph("יחד עם הפנייה נשלח גם מידע על הדרך שבה הגעתם לאתר, כמו פרמטרים בקישור והעמוד שממנו הגעתם."),
    ] as string[],
    visitTitle: ph("הביקור באתר"),
    visit: [
      ph("האתר לא מפעיל פיקסלים פרסומיים."),
      ph("אם הקישור שהגעתם דרכו כולל תג של נציג, התג נשמר בדפדפן למשך הביקור בלבד (אחסון הפעלה), כדי שהפנייה תגיע לנציג הנכון."),
      ph("בעמודים עם סרטונים מוטמע נגן של YouTube. טעינה או הפעלה של סרטון מחברת את הדפדפן שלכם אל YouTube (Google)."),
    ] as string[],
    statsLine: ph("ייתכן שנעשה שימוש בסטטיסטיקת ביקורים ידידותית לפרטיות, בלי עוגיות."),
    missingTitle: ph("פרטים שחסרים"),
    missing: [
      draft("מי הגוף האחראי על המידע, ואיך יוצרים איתו קשר"),
      draft("כמה זמן נשמרות פניות"),
      draft("אילו ספקי שירות מעבדים את המידע"),
      draft("רשימת הגורמים החיצוניים שמקבלים מידע (ספק שליחת האימייל, מארח הסרטונים, וספק הסטטיסטיקה אם יופעל), והבסיס החוקי לכך"),
      draft("הזכויות של המשתמשים וכיצד לממש אותן"),
    ] as string[],
  },
};
