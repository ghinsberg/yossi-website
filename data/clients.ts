export interface Client {
  name: string;
  slug: string;
  ext?: string;
}

export const clients: Client[] = [
  { name: "Google", slug: "google", ext: "png" },
  { name: "Apple", slug: "apple", ext: "png" },
  { name: "Microsoft", slug: "microsoft", ext: "png" },
  { name: "Coca-Cola", slug: "coca-cola", ext: "png" },
  { name: "BMW", slug: "bmw", ext: "png" },
  { name: "American Express", slug: "american-express", ext: "jpeg" },
  { name: "Citibank", slug: "citibank", ext: "png" },
  { name: "BP", slug: "bp", ext: "png" },
  { name: "General Motors", slug: "general-motors", ext: "jpeg" },
  { name: "MDRT", slug: "mdrt", ext: "png" },
  { name: "All Blacks", slug: "all-blacks", ext: "png" },
  { name: "Singularity University", slug: "singularity-university", ext: "png" },
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
