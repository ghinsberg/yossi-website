export interface SpeakerLocation {
  slug: string;
  city: string;
  country: string;
  region: string;
  agent: "carter" | "encore" | "smart";
  intro: string; // one unique sentence about speaking in this city/market
}

export const speakerLocations: SpeakerLocation[] = [
  {
    slug: "sydney",
    city: "Sydney",
    country: "Australia",
    region: "Asia Pacific",
    agent: "encore",
    intro:
      "Sydney audiences expect substance. They've heard every motivational arc. Yossi's story lands differently — because it's real.",
  },
  {
    slug: "melbourne",
    city: "Melbourne",
    country: "Australia",
    region: "Asia Pacific",
    agent: "encore",
    intro:
      "Melbourne conferences are known for high expectations. Yossi has spoken across Australia for two decades, and the post-event conversations always run long.",
  },
  {
    slug: "brisbane",
    city: "Brisbane",
    country: "Australia",
    region: "Asia Pacific",
    agent: "encore",
    intro:
      "Brisbane events are growing in scale and ambition. Yossi brings a keynote that meets that ambition with something audiences don't forget.",
  },
  {
    slug: "auckland",
    city: "Auckland",
    country: "New Zealand",
    region: "Asia Pacific",
    agent: "encore",
    intro:
      "New Zealand audiences are direct. They want the truth of the story, not the polish of it. Yossi gives them that.",
  },
  {
    slug: "singapore",
    city: "Singapore",
    country: "Singapore",
    region: "Asia Pacific",
    agent: "encore",
    intro:
      "Singapore draws global talent to a single stage. Yossi has keynoted across Asia Pacific for leading financial services and technology conferences.",
  },
  {
    slug: "dubai",
    city: "Dubai",
    country: "UAE",
    region: "Middle East",
    agent: "encore",
    intro:
      "Dubai conferences attract an international audience that has heard the world's best speakers. Yossi is one of the few who holds the room from the first sentence.",
  },
  {
    slug: "london",
    city: "London",
    country: "United Kingdom",
    region: "Europe",
    agent: "encore",
    intro:
      "London's conference circuit is competitive. Yossi has been covered by The Guardian, The Times, and The Telegraph, and has spoken to UK audiences for over twenty years.",
  },
  {
    slug: "amsterdam",
    city: "Amsterdam",
    country: "Netherlands",
    region: "Europe",
    agent: "encore",
    intro:
      "Amsterdam hosts some of Europe's most influential industry summits. Yossi brings a keynote with real roots, in the Amazon, and in the decades since.",
  },
  {
    slug: "new-york",
    city: "New York",
    country: "United States",
    region: "North America",
    agent: "carter",
    intro:
      "New York audiences are discerning. They've seen great speakers. Yossi is consistently the one they're still talking about a year later.",
  },
  {
    slug: "chicago",
    city: "Chicago",
    country: "United States",
    region: "North America",
    agent: "carter",
    intro:
      "Chicago's major industry conferences draw decision-makers from across North America. Yossi delivers the keynote that becomes the reference point for the day.",
  },
  {
    slug: "los-angeles",
    city: "Los Angeles",
    country: "United States",
    region: "North America",
    agent: "carter",
    intro:
      "Los Angeles has no shortage of storytellers. Yossi's is the one that actually happened, 21 days alone in the Amazon, with no rescue coming.",
  },
  {
    slug: "toronto",
    city: "Toronto",
    country: "Canada",
    region: "North America",
    agent: "carter",
    intro:
      "Toronto conferences span every sector. Yossi adapts the framing to your industry, and the story, and the lessons from it, are universal.",
  },
  {
    slug: "johannesburg",
    city: "Johannesburg",
    country: "South Africa",
    region: "Africa",
    agent: "encore",
    intro:
      "Johannesburg draws leadership audiences who understand adversity firsthand. Yossi's keynote meets that audience on their own terms.",
  },
  {
    slug: "cape-town",
    city: "Cape Town",
    country: "South Africa",
    region: "Africa",
    agent: "encore",
    intro:
      "Cape Town's conference scene has grown fast. Yossi brings a keynote that has been trusted by global brands on every continent.",
  },
  {
    slug: "tel-aviv",
    city: "Tel Aviv",
    country: "Israel",
    region: "Middle East",
    agent: "encore",
    intro:
      "Tel Aviv's startup and innovation conferences value directness. Yossi, Israeli-born and Amazon-tested, speaks that language.",
  },
  {
    slug: "hong-kong",
    city: "Hong Kong",
    country: "Hong Kong",
    region: "Asia Pacific",
    agent: "encore",
    intro:
      "Hong Kong financial services conferences demand credibility. Yossi has keynoted for some of the world's largest financial institutions.",
  },
];
