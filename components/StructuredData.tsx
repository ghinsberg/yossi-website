export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Yossi Ghinsberg",
        url: "https://yossighinsberg.com",
        image:
          "https://yossighinsberg.com/images/headshots/yossi-headshot-1.jpg",
        jobTitle: "Transformation Keynote Speaker",
        description:
          "Voted Most Unforgettable Speaker. Jungle survivor, AI visionary, bestselling author. Keynotes on leadership, resilience, and navigating disruption.",
        knowsAbout: [
          "Leadership",
          "Resilience",
          "Artificial Intelligence",
          "Transformation",
          "Survival",
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
      },
      {
        "@type": "WebSite",
        name: "Yossi Ghinsberg",
        url: "https://yossighinsberg.com",
        description:
          "Official website of Yossi Ghinsberg — transformation keynote speaker",
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
