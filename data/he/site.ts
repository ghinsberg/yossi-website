// Hebrew site configuration. All Hebrew strings live under data/he/, never in components.

/** Marks draft copy that Yossi has not approved. Launch check lists every use. */
export const PLACEHOLDER_MARK = "⟦טיוטה⟧";

/** Draft text with a visible stamp. Since 2026-11-24 nothing in data/he calls
 *  it (a test checks): the stamped claims and proposals are draft() and listed
 *  in the source map. Kept for tests and for a page that must show a stamp. */
export function ph(text: string): string {
  return `${PLACEHOLDER_MARK} ${text}`;
}

/** Draft text without a per-line stamp: body copy, labels, alt text, meta, aria.
 *  Still counted by the launch gate. While any draft text exists, the layout
 *  shows one sticky draft banner (components/he/HeDraftBanner) instead. */
export function draft(text: string): string {
  return text;
}

/** Text Yossi has approved. Returns the text unchanged. Nothing uses it yet. */
export function ok(text: string): string {
  return text;
}

export const heSite = {
  name: draft("יוסי גינסברג"),
  nav: [
    { label: draft("הסיפור"), href: "/hasipur" },
    { label: draft("הרצאות"), href: "/hartzaot" },
    { label: draft("סרטונים"), href: "/video" },
    { label: draft("המלצות"), href: "/hamlatzot" },
    { label: draft("בתקשורת"), href: "/tikshoret" },
    { label: draft("שאלות ותשובות"), href: "/sheelot" },
  ] as { label: string; href: string }[],
  bookingHref: "/hazmana" as const,
  bookingLabel: draft("הזמנת הרצאה"),
  englishSiteLabel: draft("האתר הבינלאומי, באנגלית"),
  englishSiteUrl: "https://yossighinsberg.com" as const,
  footer: {
    navTitle: draft("באתר"),
    legalLinks: [
      { label: draft("הצהרת נגישות"), href: "/negishut" },
      { label: draft("מדיניות פרטיות"), href: "/pratiyut" },
    ],
    contactTitle: draft("הזמנת הרצאה"),
    // Cleared 2026-11-24. A contact note under contactTitle; the footer shows
    // the contact column only while this is non-empty.
    contactPlaceholder: "",
    rights: draft("כל הזכויות שמורות ליוסי גינסברג"),
  },
  ui: {
    homeAria: draft("יוסי גינסברג, לעמוד הראשי"),
    openMenu: draft("פתיחת התפריט"),
    closeMenu: draft("סגירת התפריט"),
    mainNav: draft("ניווט ראשי"),
    skipToContent: draft("דילוג לתוכן"),
    homeLabel: draft("ראשי"),
    mobileMenu: draft("תפריט"),
    footerNav: draft("ניווט בתחתית העמוד"),
    legalNav: draft("מידע משפטי"),
  },
  meta: {
    titleDefault: draft("יוסי גינסברג | הרצאות לארגונים ולכנסים"),
    titleTemplate: draft("%s | יוסי גינסברג"),
    description: draft("יוסי גינסברג, מרצה. הרצאות בעברית."),
    siteName: draft("יוסי גינסברג"),
    /** Until launch (HE_LIVE not 1), put before the Open Graph and X title of
     *  every Hebrew page, so a forwarded share card does not look approved. The
     *  browser tab title is unchanged. */
    ogDraftPrefix: draft("טיוטה: "),
  },
  notFound: {
    title: draft("העמוד לא נמצא"),
    body: draft("הכתובת שחיפשתם לא קיימת, או שהיא עברה למקום אחר."),
    home: draft("חזרה לעמוד הראשי"),
    book: draft("הזמנת הרצאה"),
  },
  placeholder: {
    stub: draft("העמוד הזה עוד לא נכתב"),
  },
  /** The sticky banner shown on every page until launch. */
  draftBanner: {
    text: draft("גרסת טיוטה לבדיקה. התוכן עוד לא אושר."),
    label: draft("הודעה על גרסת טיוטה"),
  },
  pageNames: {
    hasipur: draft("הסיפור"),
    hartzaot: draft("הרצאות"),
    video: draft("סרטונים"),
    hamlatzot: draft("המלצות"),
    tikshoret: draft("בתקשורת"),
    sheelot: draft("שאלות ותשובות"),
    hazmana: draft("הזמנת הרצאה"),
    toda: draft("תודה"),
    negishut: draft("הצהרת נגישות"),
    pratiyut: draft("מדיניות פרטיות"),
  } as Record<string, string>,
};

export type HeSite = typeof heSite;
