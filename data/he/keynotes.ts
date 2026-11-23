import { draft, ph } from "./site";

export type HeKeynote = { slug: string; title: string; forWhom: string; takeaway: string };

// Empty until Yossi names the keynotes he gives in Hebrew. Nothing is invented here.
export const heKeynotes: HeKeynote[] = [];

export const heKeynotesPage = {
  metaTitle: draft("הרצאות"),
  metaDescription: draft("ההרצאות של יוסי גינסברג בעברית, למי הן מתאימות ומה הקהל לוקח מהן."),
  title: ph("הרצאות בעברית"),
  intro: ph("לכל הרצאה: למי היא מתאימה, ומה הקהל לוקח איתו כשהוא יוצא מהאולם."),
  empty: draft("שמות ההרצאות, למי הן מתאימות ומה הקהל לוקח מהן יופיעו כאן, אחרי שיוסי יאשר אותם"),
  forWhomLabel: draft("למי זה מתאים"),
  takeawayLabel: draft("מה לוקחים מזה"),
  bookCta: draft("הזמנת הרצאה"),
};
