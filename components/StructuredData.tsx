const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // ── Person ──────────────────────────────────────────────────────────────
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: "Yossi Ghinsberg",
        url: BASE_URL,
        image: `${BASE_URL}/images/headshots/yossi-headshot-1.jpg`,
        jobTitle: "Keynote Speaker",
        description:
          "Yossi Ghinsberg survived 20 days alone in the Bolivian Amazon in 1981. His memoir Jungle has sold over one million copies in 20 languages and was adapted into a 2017 Hollywood film starring Daniel Radcliffe. He is a bestselling author, conservation pioneer, and one of the world's most sought-after keynote speakers, trusted by Google, Apple, Microsoft, BMW, and the MDRT. Voted Most Unforgettable Speaker. Equator Prize winner, UNDP 2008.",
        knowsAbout: [
          "Leadership",
          "Resilience",
          "Survival",
          "Navigating Uncertainty",
          "Human Potential",
          "Stress Management",
          "Conservation",
          "Amazon Rainforest",
          "Indigenous Rights",
          "Keynote Speaking",
        ],
        sameAs: [
          "https://en.wikipedia.org/wiki/Yossi_Ghinsberg",
          "https://www.linkedin.com/in/yossighinsberg/",
          "https://www.youtube.com/@yossighinsberg",
          "https://www.instagram.com/yossi_ghinsberg/",
          "https://www.tiktok.com/@ghinsberg",
          "https://www.facebook.com/ghinsberg/",
          "https://x.com/yossi_ghinsberg",
          "https://open.spotify.com/track/5itX3vGLG1W2Ym8kEbisEB",
          "https://wondery.com/shows/against-the-odds/season/32/",
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
        award: [
          "Voted Most Unforgettable Speaker",
          "Equator Prize, UNDP 2008 — for Chalalan Ecolodge and Madidi National Park",
          "National Geographic Traveler 2002 — Chalalan named one of 20 most important tourist destinations in the world",
          "CoreNet Global speaker rating 6.6 / 7.0",
          "#2 Highest Rated Inspirational Speaker for Business — The Sweeney Agency, 2017",
        ],
        affiliation: [
          {
            "@type": "Organization",
            name: "Chalalan Ecolodge",
            url: "https://www.chalalan.com",
            description:
              "Indigenous-run ecolodge in Bolivia's Madidi National Park, co-founded with the Uchupiamona people. Equator Prize winner, UNDP 2008.",
          },
        ],
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
          {
            "@type": "Organization",
            name: "Smart Speakers",
            description: "Latin America booking agent",
          },
        ],
        offers: {
          "@type": "Offer",
          url: `${BASE_URL}/book-yossi`,
          availability: "https://schema.org/InStock",
          description: "Book Yossi Ghinsberg for your keynote or event",
        },
        subjectOf: [
          // ── Tier 1: Global mainstream press ──────────────────────────────
          {
            "@type": "NewsArticle",
            headline: "Yossi Ghinsberg on Larry King Live",
            url: "http://edition.cnn.com/TRANSCRIPTS/0604/27/lkl.01.html",
            publisher: { "@type": "Organization", name: "CNN" },
          },
          {
            "@type": "NewsArticle",
            headline: "Lack of experience can be key to success — Yossi Ghinsberg",
            url: "https://www.cnbc.com/2018/03/08/yossi-ghinsberg-lack-of-experience-can-be-key-to-success.html",
            publisher: { "@type": "Organization", name: "CNBC" },
          },
          {
            "@type": "NewsArticle",
            headline: "From Andes to Amazon: trekking through the Bolivian jungle",
            url: "https://www.theguardian.com/travel/2017/oct/20/bolivia-trekking-amazon-jungle-madidi-national-park-ecolodge",
            publisher: { "@type": "Organization", name: "The Guardian" },
          },
          {
            "@type": "Article",
            headline: "Jungle review — Daniel Radcliffe in the Amazon",
            url: "https://www.theguardian.com/film/2017/aug/04/jungle-review-daniel-radcliffe-flounders-through-shallow-amazon-misadventure",
            publisher: { "@type": "Organization", name: "The Guardian" },
          },
          {
            "@type": "NewsArticle",
            headline: "Madidi National Park, Bolivia — Yossi Ghinsberg's jungle",
            url: "https://www.independent.co.uk/travel/americas/madidi-national-park-bolivia-jungle-film-daniel-radcliffe-yossi-ghinsberg-a8069996.html",
            publisher: { "@type": "Organization", name: "The Independent" },
          },
          {
            "@type": "NewsArticle",
            headline: "Lost in the Jungle: the backpacking trip that went wrong",
            url: "https://www.thetimes.co.uk/edition/thetimesmagazine/lost-in-the-jungle-the-backpacking-trip-that-wen",
            publisher: { "@type": "Organization", name: "The Times" },
          },
          {
            "@type": "Article",
            headline: "Daniel Radcliffe on alcoholism, starving himself, and Harry Potter",
            url: "http://www.telegraph.co.uk/films/0/daniel-radcliffe-on-alcoholism-starving-himself-harry-potter---a/",
            publisher: { "@type": "Organization", name: "The Daily Telegraph" },
          },
          {
            "@type": "NewsArticle",
            headline: "Daniel Radcliffe on Jungle and his post-Potter film choices",
            url: "http://time.com/4989362/daniel-radcliffe-jungle-movie-interview/",
            publisher: { "@type": "Organization", name: "Time" },
          },
          {
            "@type": "NewsArticle",
            headline: "Daniel Radcliffe on Jungle — Newsweek",
            url: "http://www.newsweek.com/daniel-radcliffe-jungle-swiss-army-man-movies-689020",
            publisher: { "@type": "Organization", name: "Newsweek" },
          },
          {
            "@type": "Article",
            headline: "Daniel Radcliffe takes on nature in the Jungle trailer",
            url: "http://www.gq.com/story/daniel-radcliffe-jungle-trailer",
            publisher: { "@type": "Organization", name: "GQ" },
          },
          {
            "@type": "NewsArticle",
            headline: "Preserving the Amazon — World Economic Forum",
            url: "https://www.weforum.org/agenda/2017/07/preserving-the-amazon-could-solve-some-of-mankind-s-biggest-p",
            publisher: { "@type": "Organization", name: "World Economic Forum" },
          },
          {
            "@type": "NewsArticle",
            headline: "BBC World Service — Survival Stories: Fish bacon for breakfast",
            url: "http://www.bbc.co.uk/programmes/p0455z6l",
            publisher: { "@type": "Organization", name: "BBC" },
          },
          {
            "@type": "NewsArticle",
            headline: "First Look: Daniel Radcliffe in Jungle",
            url: "http://www.bbcamerica.com/anglophenia/2016/09/first-look-daniel-radcliffe-in-new-movie-jungle",
            publisher: { "@type": "Organization", name: "BBC America" },
          },
          {
            "@type": "NewsArticle",
            headline: "Lost, starving, close to death — Yossi Ghinsberg and the gift that keeps giving",
            url: "http://www.smh.com.au/entertainment/movies/lost-starving-close-to-death-yossi-ghinsberg-and-the-gift-that-keeps-on-giving-20170802-gxnzuy.html",
            publisher: { "@type": "Organization", name: "Sydney Morning Herald" },
          },
          {
            "@type": "NewsArticle",
            headline: "Harry Potter gets lost in the Amazon in MIFF opening night film Jungle",
            url: "http://www.smh.com.au/entertainment/movies/harry-potter-gets-lost-in-the-amazon-in-miff-opening-night-film-jungle-20170613-gwqaky.html",
            publisher: { "@type": "Organization", name: "Sydney Morning Herald" },
          },
          {
            "@type": "NewsArticle",
            headline: "Daniel Radcliffe far away from Harry Potter for role in Jungle",
            url: "http://www.abc.net.au/news/2017-08-04/daniel-radcliffe-far-away-from-harry-potter-for-role-in-jungle/8771342",
            publisher: { "@type": "Organization", name: "ABC Australia" },
          },
          {
            "@type": "NewsArticle",
            headline: "Yossi Ghinsberg — Variety AFM interview",
            url: "http://variety.com/2017/film/markets-festivals/afm-yossi-ghinsberg-talks-about-his-jungle-experience-1202599551/",
            publisher: { "@type": "Organization", name: "Variety" },
          },
          {
            "@type": "Article",
            headline: "Jungle review — Hollywood Reporter",
            url: "http://www.hollywoodreporter.com/news/thomas-kretschmann-alex-russell-join-877187",
            publisher: { "@type": "Organization", name: "Hollywood Reporter" },
          },
          {
            "@type": "Article",
            headline: "Jungle (2017) — Roger Ebert Reviews",
            url: "http://www.rogerebert.com/reviews/jungle-2017",
            publisher: { "@type": "Organization", name: "RogerEbert.com" },
          },
          {
            "@type": "NewsArticle",
            headline: "Yossi Ghinsberg — Blinq in TechCrunch",
            url: "http://techcrunch.com/2015/01/30/blinq-enhances-your-favorite-messaging-applications-with-extra-information/",
            publisher: { "@type": "Organization", name: "TechCrunch" },
          },
          {
            "@type": "NewsArticle",
            headline: "Los Angeles Times — Yossi Ghinsberg profile",
            url: "http://www.latimes.com/sdhoy-yossi-ghinsberg-el-israeli-que-renacio-en-la-2016sep26-story.html",
            publisher: { "@type": "Organization", name: "Los Angeles Times" },
          },
          // ── TEDx talks ───────────────────────────────────────────────────
          {
            "@type": "VideoObject",
            name: "TEDx Melbourne — Why the Amazon proves Darwin was wrong",
            url: "https://www.tedxmelbourne.com/talks/why-the-amazon-proves-darwin-was-wrong",
            publisher: { "@type": "Organization", name: "TEDx" },
          },
          {
            "@type": "VideoObject",
            name: "TEDx Bratislava — Yossi Ghinsberg",
            url: "http://tedxtalks.ted.com/video/TEDxBratislava-Yossi-Ghinsberg",
            publisher: { "@type": "Organization", name: "TEDx" },
          },
          // ── Notable profiles and interviews ──────────────────────────────
          {
            "@type": "Article",
            headline: "Seven Questions — Yossi Ghinsberg",
            url: "https://uk.lush.com/article/seven-questions-yossi-ghinsberg",
            publisher: { "@type": "Organization", name: "Lush" },
          },
          {
            "@type": "Article",
            headline: "Stranded in the Amazon: an interview with Yossi Ghinsberg",
            url: "https://www.speakerscorner.co.uk/blog/stranded-in-the-amazon-an-interview-with-yossi-ghinsberg",
            publisher: { "@type": "Organization", name: "Speakers Corner" },
          },
          {
            "@type": "Article",
            headline: "Yossi Ghinsberg — Mixergy interview: Lost in the Jungle",
            url: "https://mixergy.com/interviews/lost-jungle-yossi-ghinsberg/",
            publisher: { "@type": "Organization", name: "Mixergy" },
          },
          {
            "@type": "Article",
            headline: "The Real-Life Indiana Jones who became a motivational speaker",
            url: "https://www.fromthegrapevine.com/arts/real-life-Indiana-Jones-motivational-speaker",
            publisher: { "@type": "Organization", name: "From The Grapevine" },
          },
          {
            "@type": "NewsArticle",
            headline: "Haaretz — Yossi Ghinsberg profile",
            url: "https://www.haaretz.co.il/magazine/the-edge/.premium-MAGAZINE-1.8743753",
            publisher: { "@type": "Organization", name: "Haaretz" },
          },
        ],
      },

      // ── Book: Jungle ────────────────────────────────────────────────────────
      {
        "@type": "Book",
        "@id": `${BASE_URL}/#book-jungle`,
        name: "Jungle",
        alternateName: ["Back from Tuichi", "Jungle: A Harrowing True Story of Adventure, Danger and Survival"],
        author: {
          "@type": "Person",
          "@id": `${BASE_URL}/#person`,
        },
        description:
          "The memoir of Yossi Ghinsberg's 20 days alone in the Bolivian Amazon in 1981. Over one million copies sold in 20 languages. Adapted into a 2017 Hollywood film starring Daniel Radcliffe.",
        isbn: "9781849538824",
        url: "https://www.amazon.com/Jungle-Harrowing-Adventure-Danger-Survival/dp/1849538824",
        inLanguage: "en",
        datePublished: "1985",
        publisher: {
          "@type": "Organization",
          name: "Summersdale Publishers",
        },
        subjectOf: {
          "@type": "Movie",
          "@id": `${BASE_URL}/#film-jungle`,
        },
        genre: ["Adventure", "Memoir", "Survival"],
      },

      // ── Book: Laws of the Jungle ─────────────────────────────────────────────
      {
        "@type": "Book",
        "@id": `${BASE_URL}/#book-laws`,
        name: "Laws of the Jungle",
        author: {
          "@type": "Person",
          "@id": `${BASE_URL}/#person`,
        },
        description:
          "Nine principles of leadership and resilience drawn from decades in the Amazon, by Yossi Ghinsberg. Applied wisdom from the world's most demanding classroom.",
        isbn: "9780977171910",
        url: "https://www.amazon.com/Laws-Jungle-Jaguars-Self-help-Books/dp/0977171914",
        inLanguage: "en",
        genre: ["Leadership", "Business", "Self-help"],
      },

      // ── Movie: Jungle (2017) ─────────────────────────────────────────────────
      {
        "@type": "Movie",
        "@id": `${BASE_URL}/#film-jungle`,
        name: "Jungle",
        description:
          "A 2017 biographical adventure film based on Yossi Ghinsberg's memoir, starring Daniel Radcliffe as Yossi Ghinsberg. Directed by Greg McLean. Premiered as the opening night gala at the Melbourne International Film Festival.",
        datePublished: "2017",
        director: {
          "@type": "Person",
          name: "Greg McLean",
        },
        actor: [
          {
            "@type": "Person",
            name: "Daniel Radcliffe",
          },
        ],
        about: {
          "@type": "Person",
          "@id": `${BASE_URL}/#person`,
        },
        url: "https://www.amazon.com/Jungle-Daniel-Radcliffe/dp/B076HD7XQY",
        image: `${BASE_URL}/images/books/jungle-book-usa.jpg`,
        countryOfOrigin: {
          "@type": "Country",
          name: "Australia",
        },
        genre: ["Biography", "Adventure", "Drama"],
      },

      // ── WebSite ──────────────────────────────────────────────────────────────
      {
        "@type": "WebSite",
        name: "Yossi Ghinsberg",
        url: BASE_URL,
        description:
          "Official website of Yossi Ghinsberg — keynote speaker, bestselling author, and survival story behind a Hollywood film.",
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
