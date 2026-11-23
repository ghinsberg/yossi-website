import { draft, ph } from "./site";

export type HeMediaItem = { outlet: string; title: string; url: string; year?: number };

// Empty until each item is verified and approved. Nothing is invented here.
export const heMedia: HeMediaItem[] = [];

export const heMediaPage = {
  metaTitle: draft("בתקשורת"),
  metaDescription: draft("יוסי גינסברג בעיתונות ובטלוויזיה, בישראל ובעולם."),
  title: ph("בתקשורת"),
  intro: ph("קודם בישראל, אחר כך בעולם."),
  empty: draft("הכתבות והראיונות יופיעו כאן, אחרי שכל פריט ייבדק ויאושר"),
  readCta: draft("לפריט המקורי"),
};
