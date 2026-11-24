import { draft } from "./site";

export type HeEndorsement = {
  quote: string;
  /** Latin, as on the English site (rendered inside <bdi>). */
  name: string;
  /** The person's title exactly as data/testimonials.ts has it (tested). */
  roleEn: string;
  /** Hebrew rendering of roleEn. When absent, the page shows roleEn in Latin. */
  role?: string;
  /** Latin company name, as on the English site (rendered inside <bdi>). */
  organization: string;
  consentOnRecord: true;
  /** Set when the quote is a Hebrew translation; the page shows a note. */
  translatedFrom?: "en";
};

// Translated faithfully from data/testimonials.ts (the `testimonials` list),
// same length, no added emphasis. Names and organizations are kept exactly as
// the English data spells them (a test compares them).
//
// consentOnRecord: these quotes are already published on Yossi's own English
// site (yossighinsberg.com/endorsements), which is the basis for `true` here.
// Yossi still approves each one for the Hebrew site before launch.
export const heEndorsements: HeEndorsement[] = [
  {
    quote: draft("מרהיב, מעורר השראה, מרגש, עוצר נשימה. אמליץ על יוסי כמרצה מרכזי בכל מקום ובכל פעם שאוכל."),
    name: "John Zaharakis",
    roleEn: "General Manager, Conferences & Events",
    role: draft("מנהל כללי, כנסים ואירועים"),
    organization: "American Express",
    consentOnRecord: true,
    translatedFrom: "en",
  },
  {
    quote: draft("בניסיון שלי, יוסי גינסברג במקום הראשון."),
    name: "Chris Varelas",
    roleEn: "Head of National Investment Bank",
    // Shown in English: the Hebrew interpretation of this title was not reliable (controller ruling).
    organization: "Citibank",
    consentOnRecord: true,
    translatedFrom: "en",
  },
  {
    quote: draft("כל מי שדיברתי איתו היה מרותק ושבוי. התובנות של יוסי יעזרו לנו לבנות את מערך השותפים שלנו."),
    name: "John Hennessey",
    roleEn: "General Manager, Small, Medium and Corporate Business",
    role: draft("מנהל כללי, עסקים קטנים, בינוניים ותאגידים"),
    organization: "Microsoft",
    consentOnRecord: true,
    translatedFrom: "en",
  },
  {
    quote: draft("לא פחות מקוסם. יוסי יצר באולם תחושת התרוממות רוח עצומה."),
    name: "Ron Yariv",
    roleEn: "Managing Director, International Sales",
    role: draft("מנהל כללי, מכירות בינלאומיות"),
    organization: "Hilton International",
    consentOnRecord: true,
    translatedFrom: "en",
  },
  {
    quote: draft("הסיפור של יוסי מעורר השראה ומלא בלקחים עסקיים מעשיים."),
    name: "Abe Peled",
    roleEn: "Chairman and CEO",
    role: draft("יו\"ר ומנכ\"ל"),
    organization: "NDS",
    consentOnRecord: true,
    translatedFrom: "en",
  },
  {
    quote: draft("בכל שנות הקריירה שלי לא ראיתי אולם מלא כל כך מרותק במושב של כנס."),
    name: "Bob Fuller",
    roleEn: "Tech Support Executive",
    role: draft("בכיר בתמיכה טכנית"),
    organization: "IBM",
    consentOnRecord: true,
    translatedFrom: "en",
  },
  {
    quote: draft("התרשמנו כל כך, שהזמנו את יוסי להרצאה נוספת למחרת. הוא מרצה בקליבר יוצא דופן."),
    name: "Elmo de Alwis",
    roleEn: "CEO and Managing Director",
    role: draft("מנכ\"ל ומנהל כללי"),
    organization: "Sigma Pharmaceuticals",
    consentOnRecord: true,
    translatedFrom: "en",
  },
  {
    quote: draft("המשובים מהמשתתפים היו פנטסטיים. הם היו מרותקים ולא רצו שיפסיק. המלצה בלי הסתייגות."),
    name: "Kerry McWhinnie",
    roleEn: "Event Organizer",
    role: draft("הפקת אירועים"),
    organization: "RE/MAX",
    consentOnRecord: true,
    translatedFrom: "en",
  },
  {
    quote: draft("הרגשתי שנלקחתי לעולם אחר. זה היה אישי מאוד ומרגש עמוקות."),
    name: "Gilbert Enoka",
    roleEn: "Mental Skills Coach",
    role: draft("מאמן מנטלי"),
    organization: "New Zealand All Blacks",
    consentOnRecord: true,
    translatedFrom: "en",
  },
];

/** The one endorsement featured on the home page. */
export const heFeaturedEndorsement: HeEndorsement = heEndorsements[0];

export const heEndorsementsPage = {
  metaTitle: draft("המלצות"),
  metaDescription: draft(
    "מה אמרו על הרצאות של יוסי גינסברג מנהלים ומארגני אירועים ב-American Express, Citibank, Microsoft, IBM ועוד.",
  ),
  title: draft("המלצות"),
  intro: draft("מה אמרו מי שהזמינו אותו, ומי שישבו באולם."),
  // Cleared 2026-11-24: an empty list now renders nothing.
  empty: "",
  translatedNote: draft("תורגם מאנגלית"),
};
