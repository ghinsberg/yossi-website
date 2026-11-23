// Hebrew site configuration. All Hebrew strings live under data/he/, never in components.

/** Marks draft copy that Yossi has not approved. Launch check lists every use. */
export const PLACEHOLDER_MARK = "⟦טיוטה⟧";

/** Wrap any Hebrew body copy, headline or claim that is still a draft. */
export function ph(text: string): string {
  return `${PLACEHOLDER_MARK} ${text}`;
}

export const heSite = {
  name: "יוסי גינסברג",
  nav: [
    { label: "הסיפור", href: "/hasipur" },
    { label: "הרצאות", href: "/hartzaot" },
    { label: "סרטונים", href: "/video" },
    { label: "המלצות", href: "/hamlatzot" },
    { label: "בתקשורת", href: "/tikshoret" },
    { label: "שאלות ותשובות", href: "/sheelot" },
  ] as { label: string; href: string }[],
  bookingHref: "/hazmana" as const,
  bookingLabel: "הזמנת הרצאה",
  englishSiteLabel: "האתר הבינלאומי, באנגלית",
  englishSiteUrl: "https://yossighinsberg.com" as const,
  footer: {
    navTitle: "באתר",
    legalLinks: [
      { label: "הצהרת נגישות", href: "/negishut" },
      { label: "מדיניות פרטיות", href: "/pratiyut" },
    ],
    contactTitle: "הזמנת הרצאה",
    contactPlaceholder: "פרטי הקשר של הנציגים בישראל יופיעו כאן, אחרי אישורם",
    rights: "כל הזכויות שמורות ליוסי גינסברג",
  },
  ui: {
    homeAria: "יוסי גינסברג, לעמוד הראשי",
    openMenu: "פתיחת התפריט",
    closeMenu: "סגירת התפריט",
    mainNav: "ניווט ראשי",
    skipToContent: "דלג לתוכן",
    homeLabel: "ראשי",
  },
  meta: {
    titleDefault: "יוסי גינסברג | הרצאות לארגונים ולכנסים",
    titleTemplate: "%s | יוסי גינסברג",
    description: ph(
      "יוסי גינסברג, מרצה על במות בארץ ובעולם. הרצאות בעברית לארגונים, לכנסים ולאירועים.",
    ),
    siteName: "יוסי גינסברג",
  },
  notFound: {
    title: "העמוד לא נמצא",
    body: "הכתובת שחיפשתם לא קיימת, או שהיא עברה למקום אחר.",
    home: "חזרה לעמוד הראשי",
    book: "הזמנת הרצאה",
  },
  placeholder: {
    stub: "העמוד הזה עוד לא נכתב",
  },
  pageNames: {
    hasipur: "הסיפור",
    hartzaot: "הרצאות",
    video: "סרטונים",
    hamlatzot: "המלצות",
    tikshoret: "בתקשורת",
    sheelot: "שאלות ותשובות",
    hazmana: "הזמנת הרצאה",
    toda: "תודה",
    negishut: "הצהרת נגישות",
    pratiyut: "מדיניות פרטיות",
  } as Record<string, string>,
};

export type HeSite = typeof heSite;
