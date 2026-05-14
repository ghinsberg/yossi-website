export interface KeynoteTakeaway {
  title: string;
  description: string;
}

export interface KeynoteTestimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export interface Keynote {
  slug: string;
  title: string;
  subtitle: string;
  flagship: boolean;
  description: string;
  takeaways: KeynoteTakeaway[];
  bestFor: string;
  solves: string[];
  outcomes: string[];
  testimonial: KeynoteTestimonial;
}

export const keynotes: Keynote[] = [
  {
    slug: "be-brave-in-a-new-world",
    title: "The Power to Survive",
    subtitle:
      "How to lead with clarity, courage, and creativity when the map runs out",
    flagship: true,
    description:
      "The map has run out. Every organisation is navigating terrain that didn't exist five years ago: AI disruption, geopolitical volatility, the collapse of certainty as a management tool. And here is something extraordinary: Yossi Ghinsberg has been here twice. In 1981, he navigated 21 days alone in the Amazon with no map, no support, and no certainty of survival. Between 2013 and 2017, he was in Silicon Valley building AI companies before most of the world knew what AI was. He is not a jungle speaker who pivoted to AI to stay relevant. He is a man who has always been a decade ahead, and who now helps leaders navigate a world those systems are reshaping.",
    takeaways: [
      {
        title: "Redefining Stress",
        description:
          "Redefining stress as a misdirected survival instinct, the clarity tool no framework teaches",
      },
      {
        title: "The Illusion of Control",
        description:
          "Why adaptability beats certainty as a leadership strategy",
      },
      {
        title: "Innovation Under Pressure",
        description:
          "The creative muscle every organisation needs now",
      },
    ],
    bestFor:
      "Technology, financial services, professional services, any organisation navigating disruption",
    solves: [
      "Lack of creativity",
      "Poor decision-making under pressure",
      "Fear of change",
      "Leadership stagnation",
    ],
    outcomes: [
      "Leaders make faster, bolder decisions under uncertainty",
      "Teams shift from reactive to adaptive",
      "Creative confidence returns to risk-averse cultures",
    ],
    testimonial: {
      quote:
        "Our audience were all speaking about Yossi's keynote through the entire cocktail hour. You definitely made an impact.",
      author: "Dee Knopp",
      title: "Executive Director",
      company: "Diversity Alliance for Science",
    },
  },
  {
    slug: "made-not-broken",
    title: "The Laws of the Jungle",
    subtitle:
      "Nature's principles for leadership, culture, and the legacy that outlasts you",
    flagship: false,
    description:
      "The signature keynote. 21 days alone in the Amazon becomes a masterclass in what human beings are actually capable of when everything is stripped away. Audiences of 10,000 have sat in absolute silence. C-suite leaders have wept. Teams have walked out permanently changed. This is not a talk about the jungle. It is a talk about you. About the moment you stop waiting to be rescued and start making yourself useful. About the difference between pain and suffering. About what happens on the other side of the thing you were sure would break you.",
    takeaways: [
      {
        title: "The Bigger Your Goal, The More Resistance You Face",
        description:
          "And why that's the signal you're on the right path",
      },
      {
        title: "Pain Doesn't Mean Suffering",
        description:
          "The distinction that changes how people navigate hardship",
      },
      {
        title: "When Failure is Not an Option",
        description:
          "From paralysis to usefulness to unstoppable momentum",
      },
    ],
    bestFor:
      "All corporate audiences. Financial services, insurance, technology, healthcare, professional associations.",
    solves: [
      "Low morale",
      "Burnout",
      "Stress & anxiety",
      "Poor resilience",
      "Teams facing extreme pressure",
    ],
    outcomes: [
      "Burned-out teams rediscover purpose and drive",
      "People stop avoiding hard conversations and hard decisions",
      "Resilience becomes a skill, not a personality trait",
    ],
    testimonial: {
      quote:
        "It was a moving and emotional talk, probably the best I have ever listened to. Our guests were excited, sad and inspired at the same time, during the live show and after the post-event cocktail hour.",
      author: "Francesco Prandoni",
      title: "Event Producer",
      company: "DOC-Events",
    },
  },
];
