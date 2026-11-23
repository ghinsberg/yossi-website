import { draft, ph } from "./site";

export type HeFaqItem = { q: string; a: string };

// Empty until Yossi supplies real answers. Nothing is invented here.
export const heFaq: HeFaqItem[] = [];

export const heFaqPage = {
  metaTitle: draft("שאלות ותשובות"),
  metaDescription: draft("שאלות שמארגני אירועים שואלים לפני שמזמינים הרצאה."),
  title: ph("שאלות ותשובות"),
  intro: ph("מה שמארגנים שואלים לפני שמזמינים הרצאה."),
  empty: draft("השאלות והתשובות יופיעו כאן, אחרי שיוסי יאשר אותן"),
  bookCta: draft("לא מצאתם תשובה? הזמנת הרצאה"),
};
