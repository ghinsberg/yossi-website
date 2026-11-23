import { draft, ph } from "./site";

// Home page strings. Draft copy: every headline and sentence is wrapped as a draft.
export const heHome = {
  hero: {
    title: ph("מכירים את הסיפור. עכשיו תכירו את מה שבא אחריו."),
    sub: ph("יוסי גינסברג עומד על במות בארץ ובעולם. הרצאות בעברית לארגונים, לכנסים ולאירועים."),
    primaryCta: draft("הזמנת הרצאה"),
    secondaryCta: draft("צפייה בסרטונים"),
    secondaryHref: "/video",
    imageAlt: draft("יוסי גינסברג על הבמה, מדבר אל קהל"),
    footagePlaceholder: draft("כאן יופיע סרטון הרצאה בעברית"),
  },
  proof: {
    title: ph("מי הזמין אותו"),
    placeholder: draft("שמות הלקוחות בישראל ובעולם יופיעו כאן, אחרי שיוסי יאשר כל שם"),
  },
  after: {
    title: ph("אחרי הספר"),
    body: ph(
      "הספר מספר על הג'ונגל. הוא לא מספר על מה שבא אחריו: ארבעים שנה של במות ושל מיזמים, כולל אלה שלא הצליחו.",
    ),
    cta: draft("הסיפור המלא"),
    href: "/hasipur",
  },
  keynotes: {
    title: ph("הרצאות בעברית"),
    body: ph("מה יוסי מרצה, ולמי זה מתאים. הפירוט בעמוד ההרצאות."),
    placeholder: draft("שמות ההרצאות בעברית יופיעו כאן, אחרי אישורם"),
    cta: draft("לכל ההרצאות"),
    href: "/hartzaot",
    imageAlt: draft("יוסי גינסברג על במה גדולה, מול קהל"),
  },
  booking: {
    title: ph("מתכננים אירוע?"),
    body: ph("ספרו לנו על האירוע ונחזור אליכם."),
    cta: draft("הזמנת הרצאה"),
  },
};
