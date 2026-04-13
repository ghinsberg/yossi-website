const BASE_URL = "https://yossi-website.vercel.app";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: "Yossi Ghinsberg",
        url: BASE_URL,
        image: `${BASE_URL}/images/headshots/yossi-headshot-1.jpg`,
        jobTitle: "Keynote Speaker",
        description:
          "Survival wisdom for an uncertain world. Jungle survivor, bestselling author (1M+ copies), Hollywood film. Trusted by Google, Apple, Microsoft, BMW and more.",
        knowsAbout: [
          "Leadership",
          "Survival",
          "Resilience",
          "Transformation",
          "Navigating Uncertainty",
          "Human Potential",
        ],
        sameAs: [
          "https://www.linkedin.com/in/yossighinsberg/",
          "https://www.youtube.com/@yossighinsberg",
        ],
        nationality: "Israeli",
        birthDate: "1959-04-05",
        homeLocation: {
          "@type": "Place",
          name: "Byron Bay, Australia",
        },
        hasOccupation: {
          "@type": "Occupation",
          name: "Keynote Speaker",
          occupationLocation: {
            "@type": "AdministrativeArea",
            name: "Worldwide",
          },
        },
        memberOf: [
          {
            "@type": "Organization",
            name: "Carter Global Speakers",
            url: "https://carterglobalspeakers.com",
            description: "North America booking agent",
          },
          {
            "@type": "Organization",
            name: "Encore Speakers",
            url: "https://encorespeakers.com",
            description: "Europe & Australasia booking agent",
          },
        ],
        offers: {
          "@type": "Offer",
          url: `${BASE_URL}/book-yossi`,
          availability: "https://schema.org/InStock",
          description: "Book Yossi Ghinsberg for your keynote or event",
        },
      },
      {
        "@type": "WebSite",
        name: "Yossi Ghinsberg",
        url: BASE_URL,
        description: "Official website of Yossi Ghinsberg, keynote speaker",
        publisher: {
          "@type": "Person",
          "@id": `${BASE_URL}/#person`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${BASE_URL}/keynotes`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
