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

export const mediaLogos: string[] = [
  "Discovery Channel",
  "Larry King",
  "TEDx",
  "TechCrunch",
  "Cunard",
  "YPO",
];
