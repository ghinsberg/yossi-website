export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  name: string;
  company: string;
  email: string;
  phone: string;
  region: string;
}

export interface SocialLinks {
  linkedin: string;
  youtube: string;
}

export interface SiteConfig {
  siteName: string;
  siteTitle: string;
  siteDescription: string;
  siteUrl: string;
  navigation: NavItem[];
  contacts: ContactInfo[];
  social: SocialLinks;
  credentialBar: string[];
  speakerReelId: string;
}

export const siteConfig: SiteConfig = {
  siteName: "Yossi Ghinsberg",
  siteTitle: "Yossi Ghinsberg | Transformation Keynote Speaker",
  siteDescription:
    "Voted Most Unforgettable Speaker. Yossi Ghinsberg is a transformation keynote speaker on survival, AI, and leading through disruption. From the Amazon jungle to Silicon Valley, he helps leaders navigate uncertainty with courage and clarity.",
  siteUrl: "https://yossighinsberg.com",
  navigation: [
    { label: "Keynotes", href: "/keynotes" },
    { label: "Story", href: "/story" },
    { label: "Endorsements", href: "/endorsements" },
    { label: "Videos", href: "/videos" },
    { label: "Media", href: "/media" },
    { label: "Book Yossi", href: "/book-yossi" },
  ],
  contacts: [
    {
      name: "Michelle Carter",
      company: "Carter Global Speakers",
      email: "Michelle@carterglobalspeakers.com",
      phone: "+1 703 819 2511",
      region: "North America",
    },
    {
      name: "Michael Arnot",
      company: "Encore Speakers",
      email: "michael@encorespeakers.com",
      phone: "+61 (0)422 002 685",
      region: "Europe & Australasia",
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/yossighinsberg/",
    youtube: "https://www.youtube.com/@yossighinsberg",
  },
  credentialBar: [
    "The laws of the jungle are the laws of nature — the bigger the dream, the greater the resistance to it",
  ],
  speakerReelId: "LCRjBVnQ5JM",
} as const satisfies SiteConfig;
