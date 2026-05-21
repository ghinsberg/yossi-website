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
    title: "From Survival to Legacy",
    subtitle:
      "How to lead with clarity, courage, and creativity when the map runs out",
    flagship: true,
    description:
      "The map has run out. Every organisation is navigating terrain that didn't exist five years ago: disruption, volatility, the quiet collapse of certainty as a management tool.\n\nIn 1981, Yossi Ghinsberg spent 21 days alone in the Bolivian Amazon. No map. No food. No rescue coming. He did not have a framework. He had instinct, will, and the refusal to stop moving. He came out the other side with something no course teaches.\n\nThat is what this keynote offers. Not theory. Not optimism. A way of thinking that works when nothing is certain. Leaders leave making faster decisions and trusting their own judgment. Teams stop waiting for the map to reappear and start navigating the terrain in front of them.",
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
      "21 days alone in the Amazon. No food. No rescue. No certainty of survival. What happened in those three weeks became a book, a film, and 25 years of standing in front of people who needed to hear it.\n\nThis is not a talk about the jungle. It is a talk about you. About the moment you stop waiting to be rescued and start making yourself useful. About the difference between pain and suffering. About what is still possible on the other side of the thing you were sure would break you.\n\nTeams walk out of this room changed. Not inspired for a day. Changed.",
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
  {
    slug: "real-vs-imaginary-survival",
    title: "Real Survival vs Imaginary Survival",
    subtitle:
      "A survivor's perspective on chronic stress, and the path back to optimal performance",
    flagship: false,
    description:
      "Most stress keynotes are delivered by experts. This one is delivered by a survivor. In 1981, Yossi Ghinsberg spent 21 days alone in the Amazon. He knows real survival. He also knows that most people, teams, and organisations are not running on real survival. They are running on something else entirely.\n\nReal survival is not the enemy. Real danger calls out the best in us. Senses sharpen. Decisions speed up. Courage shows up. When it is real, it is an invitation. What most of us actually experience is imaginary survival. No bear. No olympic race. Just the grind of the mundane and its mundane pressure. The body cannot tell the difference. The survival system fires anyway. We call it stress. It is the malady of our time, the biggest modern killer, the precursor to disease of body, mind, and spirit.\n\nThis keynote gives audiences the tools to switch the system off. Not through the mind, which is too slow. Through the body, through sensorial practices that act on the organism directly, moving people from sympathetic to parasympathetic in real time. Peaks are for peaks. The rest of the time we are meant to operate at optimal performance. People leave with the discernment between real and imaginary survival, and the practices to use it at work and at home. Life changing. Sometimes life saving.",
    takeaways: [
      {
        title: "Real Survival Is Not The Enemy",
        description:
          "Why real crisis calls out the best in us, and why imaginary crisis quietly grinds us down",
      },
      {
        title: "Peak Is For Peaks",
        description:
          "Why optimal performance, not peak, is the sustainable goal for leaders and teams",
      },
      {
        title: "The Switch Is In The Body",
        description:
          "How to move from sympathetic to parasympathetic through sensorial practices, not through the mind",
      },
    ],
    bestFor:
      "All corporate audiences. Especially leadership teams, sales organisations, healthcare professionals, and any group running too hot for too long.",
    solves: [
      "Burnout",
      "Chronic stress",
      "Anxiety and overwhelm",
      "Teams running on empty",
      "Disengagement",
    ],
    outcomes: [
      "People leave with practical tools to switch off the stress response, on demand",
      "Leaders ease the load on their teams without sacrificing performance",
      "Organisations gain a shared language for what stress actually is, and how to manage it",
    ],
    testimonial: {
      quote:
        "Yossi's keynote was a breath of fresh air and an injection of much needed oxygen for our sales and management teams.",
      author: "Bert Wong",
      title: "CEO",
      company: "Fuji Xerox",
    },
  },
];
