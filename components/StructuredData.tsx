export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://yossighinsberg.com/#person",
        name: "Yossi Ghinsberg",
        url: "https://yossighinsberg.com",
        image:
          "https://yossighinsberg.com/images/headshots/yossi-headshot-1.jpg",
        jobTitle: "Transformation Keynote Speaker",
        description:
          "Voted Most Unforgettable Speaker. Jungle survivor, AI visionary, bestselling author. Keynotes on leadership, resilience, and navigating disruption.",
        knowsAbout: [
          "Leadership",
          "Survival",
          "Artificial Intelligence",
          "Resilience",
          "Transformation",
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
        performerIn: [
          {
            "@type": "Event",
            name: "Transformation Keynote by Yossi Ghinsberg",
            description:
              "A powerful keynote on leadership, resilience, and navigating disruption — delivered by jungle survivor and bestselling author Yossi Ghinsberg.",
            performer: {
              "@type": "Person",
              "@id": "https://yossighinsberg.com/#person",
            },
            organizer: {
              "@type": "Organization",
              name: "Encore Speakers Bureau",
              url: "https://encorespeakers.com",
            },
            eventAttendanceMode:
              "https://schema.org/OfflineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            offers: {
              "@type": "Offer",
              url: "https://yossighinsberg.com/book-yossi",
              availability: "https://schema.org/InStock",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        name: "Yossi Ghinsberg",
        url: "https://yossighinsberg.com",
        description:
          "Official website of Yossi Ghinsberg — transformation keynote speaker",
        publisher: {
          "@type": "Person",
          "@id": "https://yossighinsberg.com/#person",
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
