import { heSeo } from "@/data/he/seo";

// Hebrew Person and book. Facts only: name, speaker, the book as a work he wrote.
export default function HeStructuredData({ base }: { base: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${base}/#person`,
        name: heSeo.personName,
        url: `${base}/`,
        jobTitle: heSeo.jobTitle,
        description: heSeo.description,
        inLanguage: "he",
      },
      {
        "@type": "Book",
        "@id": `${base}/#book`,
        name: heSeo.bookTitle,
        inLanguage: "he",
        author: { "@id": `${base}/#person` },
      },
    ],
  };

  // Escape "<" so no string can close the script tag.
  const json = JSON.stringify(schema).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
