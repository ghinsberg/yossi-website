import { draft, ph } from "./site";

// Story page. Facts only from the approved design: the Amazon, the book, the
// more than forty years since, that he speaks in Israel and abroad, Chalalan by
// name, ventures that did not all succeed.
export const heStory = {
  metaTitle: draft("הסיפור"),
  metaDescription: draft("הספר ומה שבא אחריו."),
  title: ph("הסיפור אחרי הספר"),
  book: {
    title: ph("הספר"),
    body: ph(
      "כשהיה צעיר, יוסי שרד לבדו בג'ונגל של האמזונס. את הסיפור הזה מכירים בישראל מהספר בחזרה מטואיצ'י, שהפך כאן לספר קאלט.",
    ),
  },
  after: {
    title: ph("מאז"),
    body: ph("מאז עברו יותר מארבעים שנה. הספר נגמר, והחיים המשיכו."),
  },
  stage: {
    title: ph("הבמה"),
    body: ph("יוסי מרצה בארץ ובעולם."),
    placeholder: draft("כאן יבוא הפירוט על הקריירה על הבמה, אחרי שיוסי יאשר אותו"),
  },
  chalalan: {
    name: draft("צ'לאלן"),
    body: ph("אחד הדברים שיוסי עשה אחרי הספר."),
    placeholder: draft("כאן יבוא התיאור של המקום, אחרי שיוסי יאשר אותו"),
  },
  ventures: {
    title: ph("מיזמים"),
    body: ph("יוסי הקים מיזמים. חלקם לא הצליחו. גם על זה נספר, כי זה חלק מהסיפור."),
    placeholder: draft("כאן יבוא הפירוט על המיזמים, כולל אלה שלא הצליחו, אחרי שיוסי יאשר אותו"),
  },
  cta: {
    talks: draft("ההרצאות"),
    talksHref: "/hartzaot",
    book: draft("הזמנת הרצאה"),
  },
};
