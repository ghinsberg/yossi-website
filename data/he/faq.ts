import { draft, ph } from "./site";

export type HeFaqItem = { q: string; a: string };

// Draft questions an organizer asks. Answers state no facts: each one only says
// the detail awaits Yossi's confirmation.
export const heFaq: HeFaqItem[] = [
  { q: ph("באיזו שפה ההרצאה?"), a: ph("התשובה תתפרסם אחרי שיוסי יאשר אותה.") },
  { q: ph("כמה זמן נמשכת הרצאה?"), a: ph("התשובה תתפרסם אחרי שיוסי יאשר אותה.") },
  { q: ph("באילו פורמטים אפשר להזמין?"), a: ph("התשובה תתפרסם אחרי שיוסי יאשר אותה.") },
  { q: ph("איך מסדרים נסיעות ולינה?"), a: ph("התשובה תתפרסם אחרי שיוסי יאשר אותה.") },
  { q: ph("מה צריך להכין מבחינה טכנית?"), a: ph("התשובה תתפרסם אחרי שיוסי יאשר אותה.") },
];

export const heFaqPage = {
  metaTitle: draft("שאלות ותשובות"),
  metaDescription: draft("שאלות שמארגני אירועים שואלים לפני שמזמינים הרצאה."),
  title: ph("שאלות ותשובות"),
  intro: ph("מה שמארגנים שואלים לפני שמזמינים הרצאה."),
  empty: draft("השאלות והתשובות יופיעו כאן, אחרי שיוסי יאשר אותן"),
  bookCta: draft("לא מצאתם תשובה? הזמנת הרצאה"),
};
