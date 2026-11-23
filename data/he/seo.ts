// Hebrew strings for the structured data (schema.org) of the Hebrew site.
// Only facts already in data/he/ or the design doc: name, speaker, book title.
import { draft, heSite } from "@/data/he/site";

export const heSeo = {
  personName: heSite.name,
  jobTitle: draft("מרצה"),
  description: heSite.meta.description,
  bookTitle: draft("בחזרה מטואיצ'י"),
};
