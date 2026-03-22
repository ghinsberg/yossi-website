export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  tier: 1 | 2 | 3;
  usage: string[];
}

export const testimonials: Testimonial[] = [
  // Tier 1 — Lead testimonials
  {
    quote:
      "YOSSI GHINSBERG DEFINITELY RANKS ON MY TOP 5 LIST OF UNFORGETTABLE SPEAKERS",
    author: "Derek Sweeney",
    title: "President",
    company: "The Sweeney Agency",
    tier: 1,
    usage: ["endorsements", "homepage"],
  },
  {
    quote:
      "I have travelled the globe seeing and engaging motivational and keynote speakers over the past 13 years and never have I seen an audience as captivated by a speaker as they were by Yossi. He has a truly remarkable gift for making an audience not just hear but feel.",
    author: "Rachel McVinish",
    title: "President Asia Pacific",
    company: "Jeunesse Global",
    tier: 1,
    usage: ["homepage", "one-pager"],
  },
  {
    quote:
      "Yossi doesn't just recount a survival story. He invites you into a world where survival becomes transformation. He takes you on a journey into the jungle that becomes a journey into the soul. His words don't feel rehearsed; they feel remembered. And in the remembering, he draws out something universal.",
    author: "Regina Bedoya, CLU, ChFC",
    title: "MDRT Past President",
    company: "MDRT",
    tier: 1,
    usage: ["homepage", "booking", "one-pager"],
  },
  {
    quote:
      "It was a moving and emotional talk, probably the best I have ever listened to. Our guests were excited, sad and inspired at the same time, during the live show and after the post-event cocktail hour.",
    author: "Francesco Prandoni",
    title: "Event Producer",
    company: "DOC-Events",
    tier: 1,
    usage: ["homepage", "keynotes"],
  },
  // Tier 2 — Supporting
  {
    quote:
      "Thank you so much for joining us live yesterday for your keynote. Our audience really were amazed by your story and in awe of everything you endured and overcame. After the event we had a cocktail networking lounge and the attendees were all speaking about your keynote thru that hour. You definitely made an impact.",
    author: "Dee Knopp",
    title: "Executive Director",
    company: "Diversity Alliance for Science",
    tier: 2,
    usage: ["keynotes"],
  },
  {
    quote:
      "I wanted to express my great admiration and gratitude to you for sharing your inspirational story. Your journey and the lessons you imparted resonated deeply with me and I found them incredibly moving. Your wisdom and insights during our chat left a lasting impression.",
    author: "Stuart Hayes",
    title: "Director",
    company: "H&D&U, Melbourne",
    tier: 2,
    usage: ["keynotes"],
  },
  {
    quote:
      "Very appreciate for your sharing. Yossi's story and sharing will be our chicken soup for the souls of our business, family, society and whole life.",
    author: "Mark Wang",
    title: "President North America & China",
    company: "Jeunesse Global",
    tier: 2,
    usage: ["keynotes"],
  },
  {
    quote:
      "We loved SO MUCH your company last night Yossi. Thank you for the generosity of your knowledge, your stories and most of all, your authentic candour.",
    author: "Pauline Nguyen",
    title: "Speaker, Author & Restaurateur",
    company: "Sydney",
    tier: 2,
    usage: ["keynotes"],
  },
  {
    quote:
      "Thank you so much for your contribution to our event. Your story is inspiring and was the perfect addition to our Jungle theme brunch.",
    author: "Nina Sutton",
    title: "Property Management Partners",
    company: "Melbourne",
    tier: 2,
    usage: ["keynotes"],
  },
  {
    quote:
      "It was a joy to have you on the screens. Kerwin would have been honoured to see you up there. On behalf of myself and the whole K-Team -- THANK YOU!",
    author: "Elise Cimino",
    title: "Event Coordinator",
    company: "Business Mastery International (Kerwin Rae)",
    tier: 2,
    usage: ["keynotes"],
  },
  // Tier 3 — Reader/Audience
  {
    quote:
      "Your words passed through me like light in a forest. It's not often one is seen so clearly, with open heart and clarity.",
    author: "Gaia Tamagnini",
    title: "Reader",
    company: "Umbria, Italy",
    tier: 3,
    usage: ["books"],
  },
];
