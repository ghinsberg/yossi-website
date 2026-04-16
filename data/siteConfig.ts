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
  siteTitle: "Yossi Ghinsberg | An Epic Storyteller Audiences Never Forget",
  siteDescription:
    "Voted Most Unforgettable Speaker. Yossi Ghinsberg survived 21 days alone in the Amazon. His story became a book — over one million copies sold — and a Hollywood film. He speaks to audiences of 10,000 and leaves them permanently changed.",
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
    {
      name: "Juanita Cortes Cleves",
      company: "Smart Speakers",
      email: "juanita.cortes@smartspeakers.co",
      phone: "+57 313 8985266",
      region: "Latin America",
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
