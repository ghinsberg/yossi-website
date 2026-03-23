export interface Client {
  name: string;
  slug: string;
}

export const clients: Client[] = [
  { name: "Google", slug: "google" },
  { name: "Apple", slug: "apple" },
  { name: "IBM", slug: "ibm" },
  { name: "Microsoft", slug: "microsoft" },
  { name: "Coca-Cola", slug: "coca-cola" },
  { name: "BMW", slug: "bmw" },
  { name: "American Express", slug: "american-express" },
  { name: "MDRT", slug: "mdrt" },
  { name: "YPO", slug: "ypo" },
  { name: "Cunard", slug: "cunard" },
  { name: "TEDx", slug: "tedx" },
];

export const mediaLogos: Client[] = [
  { name: "The Washington Post", slug: "washington-post" },
  { name: "Newsweek", slug: "newsweek" },
  { name: "Variety", slug: "variety" },
  { name: "The Hollywood Reporter", slug: "hollywood-reporter" },
  { name: "CNN", slug: "cnn" },
  { name: "Los Angeles Times", slug: "la-times" },
  { name: "Discovery Channel", slug: "discovery" },
  { name: "BBC", slug: "bbc" },
  { name: "National Geographic", slug: "national-geographic" },
  { name: "TechCrunch", slug: "techcrunch" },
];
