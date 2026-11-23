import { draft, ph } from "./site";

export type HeEndorsement = {
  quote: string;
  name: string;
  role: string;
  organization: string;
  consentOnRecord: true;
};

// Empty on purpose: an endorsement ships only after Yossi approves it item by item
// and the consent is on record. Nothing is invented here.
export const heEndorsements: HeEndorsement[] = [];

export const heEndorsementsPage = {
  metaTitle: draft("המלצות"),
  metaDescription: draft("המלצות על יוסי גינסברג ממי שהזמינו אותו להרצות."),
  title: ph("המלצות"),
  intro: ph("מה אומרים מי שהזמינו אותו להרצות."),
  empty: draft("ההמלצות יופיעו כאן, בשם, בתפקיד ובארגון, אחרי שכל אחת תאושר ותהיה הסכמה בכתב"),
};
