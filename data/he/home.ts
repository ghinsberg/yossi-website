import { ph } from "./site";

// Home page strings. Draft copy: every headline and sentence goes through ph().
export const heHome = {
  hero: {
    title: ph("מכירים את הסיפור. עכשיו תכירו את מה שבא אחריו."),
    sub: ph("יוסי גינסברג עומד על במות בארץ ובעולם. הרצאות בעברית לארגונים, לכנסים ולאירועים."),
    primaryCta: "הזמנת הרצאה",
    secondaryCta: "צפייה בסרטונים",
    secondaryHref: "/video",
    imageAlt: "יוסי גינסברג על הבמה, מדבר אל קהל",
    footagePlaceholder: "כאן יופיע סרטון הרצאה בעברית",
  },
  proof: {
    title: ph("מי הזמין אותו"),
    placeholder: "שמות הלקוחות בישראל ובעולם יופיעו כאן, אחרי שיוסי יאשר כל שם",
  },
  after: {
    title: ph("אחרי הספר"),
    body: ph(
      "הספר מספר על הג'ונגל. הוא לא מספר על מה שבא אחריו: ארבעים שנה של במות ושל מיזמים, כולל אלה שלא הצליחו.",
    ),
    cta: "הסיפור המלא",
    href: "/hasipur",
  },
  keynotes: {
    title: ph("הרצאות בעברית"),
    body: ph("מה יוסי מרצה, ולמי זה מתאים. הפירוט בעמוד ההרצאות."),
    placeholder: "שמות ההרצאות בעברית יופיעו כאן, אחרי אישורם",
    cta: "לכל ההרצאות",
    href: "/hartzaot",
    imageAlt: "יוסי גינסברג על במה גדולה, מול קהל",
  },
  booking: {
    title: ph("מתכננים אירוע?"),
    body: ph("ספרו לנו על האירוע ונחזור אליכם."),
    cta: "הזמנת הרצאה",
  },
};
