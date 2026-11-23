// Hebrew site configuration. All Hebrew strings live under data/he/, never in components.

/** Marks draft copy that Yossi has not approved. Launch check lists every use. */
export const PLACEHOLDER_MARK = "⟦טיוטה⟧";

/** Draft body copy, headline or claim. Carries a visible stamp. */
export function ph(text: string): string {
  return `${PLACEHOLDER_MARK} ${text}`;
}

/** Draft short interface text where a visible stamp would wreck the layout
 *  (labels, alt text, meta, aria). Returns the text unchanged. */
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
    contactPlaceholder: draft("פרטי הקשר של הנציגים בישראל יופיעו כאן, אחרי אישורם"),
    rights: ph("כל הזכויות שמורות ליוסי גינסברג"),
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
  },
  notFound: {
    title: ph("העמוד לא נמצא"),
    body: ph("הכתובת שחיפשתם לא קיימת, או שהיא עברה למקום אחר."),
    home: draft("חזרה לעמוד הראשי"),
    book: draft("הזמנת הרצאה"),
  },
  placeholder: {
    stub: draft("העמוד הזה עוד לא נכתב"),
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
