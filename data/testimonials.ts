export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  category: "ceo" | "corporate" | "bureau" | "event" | "industry" | "other" | "result";
  resultLabel?: string; // short outcome label shown above the quote
  logo?: string; // path to company logo in /public
}

export const resultTestimonials: Testimonial[] = [
  {
    quote: "Yossi doesn't just recount a survival story. He invites you into a world where survival becomes transformation. His words don't feel rehearsed; they feel remembered. And in the remembering, he draws out something universal.",
    author: "Regina Bedoya, CLU, ChFC",
    title: "Past President",
    company: "MDRT",
    category: "result",
    resultLabel: "Most Unforgettable Speaker",
    logo: "/images/logos/mdrt.svg",
  },
  {
    quote: "Yossi's keynote was a breath of fresh air and an injection of much needed oxygen for our sales and management teams.",
    author: "Bert Wong",
    title: "CEO",
    company: "Fuji Xerox",
    category: "result",
    resultLabel: "Sales team performance",
    logo: "/images/clients/fuji-xerox.png",
  },
  {
    quote: "Every person I spoke with was enthralled and captivated. Yossi's insights will directly help us build our partner ecosystem and drive the outcomes we need.",
    author: "John Hennessey",
    title: "General Manager, Small, Medium and Corporate Business",
    company: "Microsoft",
    category: "result",
    resultLabel: "Partner ecosystem growth",
    logo: "/images/logos/microsoft.svg",
  },
  {
    quote: "Your presentation gave us the inspiration and tools necessary to Be Brave and win in our business. Our team left ready to act, not just feel.",
    author: "Mark Wang",
    title: "Executive President, Greater China & North America",
    company: "Jeunesse Global",
    category: "result",
    resultLabel: "Team activation",
    logo: "/images/clients/jeunesse.png",
  },
  {
    quote: "Max scores in every evaluation category. Our members rated this the highest-impact session in the chapter's history.",
    author: "Juan Federico Salaverria Q.",
    title: "Education Chair",
    company: "YPO El Salvador",
    category: "result",
    resultLabel: "Highest-rated session in chapter history",
    logo: "/images/logos/ypo.svg",
  },
  {
    quote: "We were so impressed with the impact that we invited Yossi back for a second presentation the following day — unprecedented for our events.",
    author: "Elmo de Alwis",
    title: "CEO and Managing Director",
    company: "Sigma Pharmaceuticals",
    category: "result",
    resultLabel: "Invited back the next day",
    logo: "/images/clients/sigma.png",
  },
];

export const testimonials: Testimonial[] = [
  // CEOs & C-Suite
  {
    quote: "Yossi Ghinsberg ranks number one in my experience.",
    author: "Chris Varelas",
    title: "Head of National Investment Bank",
    company: "Citibank",
    category: "ceo",
  },
  {
    quote: "Yossi's keynote was a breath of fresh air — an injection of much needed oxygen for our sales and management teams.",
    author: "Bert Wong",
    title: "CEO",
    company: "Fuji Xerox",
    category: "ceo",
  },
  {
    quote: "Yossi's story is inspirational and full of practical business lessons.",
    author: "Abe Peled",
    title: "Chairman and CEO",
    company: "NDS",
    category: "ceo",
  },
  {
    quote: "We were so impressed that we invited Yossi for a second presentation the following day. He is a speaker of exceptional caliber.",
    author: "Elmo de Alwis",
    title: "CEO and Managing Director",
    company: "Sigma Pharmaceuticals",
    category: "ceo",
  },
  {
    quote: "Truly moving and yet inspirational.",
    author: "Dr. Santrupt B Misra",
    title: "CEO",
    company: "Aditya Birla Corporation",
    category: "ceo",
  },
  {
    quote: "Yossi is the ultimate blow them away, bring the house down kind of speaker.",
    author: "Leanne Christie",
    title: "CEO & Co-Founder",
    company: "ODE Management",
    category: "ceo",
  },
  {
    quote: "Yossi is among the most impressive speakers we have ever had. His message is something I will always carry with me.",
    author: "Jerry C. Meyer",
    title: "President/COO",
    company: "Aegis Living",
    category: "ceo",
  },

  // Corporate Leaders
  {
    quote: "Spectacular, inspiring, emotional, breathtaking. I will be recommending Yossi for keynotes wherever and whenever possible.",
    author: "John Zaharakis",
    title: "General Manager, Conferences & Events",
    company: "American Express",
    category: "corporate",
  },
  {
    quote: "Every person I spoke with was enthralled and captivated. Yossi's insights will help us build our partner ecosystem.",
    author: "John Hennessey",
    title: "General Manager, Small, Medium and Corporate Business",
    company: "Microsoft",
    category: "corporate",
  },
  {
    quote: "Yossi has an amazing ability to reach out and touch people's inner self.",
    author: "Abhijit Das",
    title: "Regional Business Leader, Asia Partner Sales",
    company: "Microsoft",
    category: "corporate",
  },
  {
    quote: "Nothing short of a magician. Yossi created an enormous sense of exhilaration in the room.",
    author: "Ron Yariv",
    title: "Managing Director, International Sales",
    company: "Hilton International",
    category: "corporate",
  },
  {
    quote: "Yossi's style is extremely moving and inspiring. His content is something audiences can relate easily to their own situations.",
    author: "Christopher Stenhouse",
    title: "General Manager",
    company: "Telstra",
    category: "corporate",
  },
  {
    quote: "Yossi had everyone on the edge of their seats. He was a major talking point of the conference.",
    author: "Paul Woess",
    title: "National Training Manager",
    company: "Schwarzkopf",
    category: "corporate",
  },
  {
    quote: "I have never seen a packed room so totally absorbed at a convention session in my career.",
    author: "Bob Fuller",
    title: "Tech Support Executive",
    company: "IBM",
    category: "corporate",
  },
  {
    quote: "I have travelled the globe seeing and engaging motivational and keynote speakers over the past 13 years and never have I seen an audience as captivated by a speaker as they were by Yossi. He has a truly remarkable gift for making an audience not just hear but feel.",
    author: "Rachel McVinish",
    title: "President Asia Pacific",
    company: "Jeunesse Global",
    category: "corporate",
  },
  {
    quote: "Yossi doesn't just recount a survival story. He invites you into a world where survival becomes transformation. His words don't feel rehearsed; they feel remembered. And in the remembering, he draws out something universal.",
    author: "Regina Bedoya, CLU, ChFC",
    title: "Past President",
    company: "MDRT",
    category: "corporate",
  },
  {
    quote: "Thank you for making our event one of the very best we have ever held. Your presentation had an enormous impact on our audience and gave us the inspiration and tools necessary to Be Brave and win in our business.",
    author: "Mark Wang",
    title: "Executive President, Greater China & North America",
    company: "Jeunesse Global",
    category: "corporate",
  },

  // Bureau Presidents & Speaker Industry
  {
    quote: "YOSSI GHINSBERG DEFINITELY RANKS ON MY TOP 5 LIST OF UNFORGETTABLE SPEAKERS.",
    author: "Derek Sweeney",
    title: "Director of Speaker Ideas",
    company: "The Sweeney Agency",
    category: "bureau",
  },
  {
    quote: "Gripping and hugely inspirational. Yossi delivers messages that can change a person's mindset and sometimes even transform a life.",
    author: "Marek Kriwald",
    title: "Founder",
    company: "Parliament Speakers",
    category: "bureau",
  },
  {
    quote: "The electric energy Yossi creates is extraordinary. He speaks to anyone who has ever been at the point of giving up.",
    author: "Julie Masters",
    title: "Co-Founder",
    company: "ODE Management",
    category: "bureau",
  },
  {
    quote: "Yossi possesses the extremely rare gift of a great storyteller. I look forward to working with him again.",
    author: "Wendy Hand",
    title: "Managing Partner",
    company: "Big Yellow Suitcase",
    category: "bureau",
  },

  // Event Organizers
  {
    quote: "Delegate feedback was fantastic, captivating — they didn't want him to stop. I give my unreserved recommendation.",
    author: "Kerry McWhinnie",
    title: "Event Organizer",
    company: "RE/MAX",
    category: "event",
  },
  {
    quote: "The group was still talking about Yossi long after — which is a great sign.",
    author: "Kerin Clancy",
    title: "Event Manager",
    company: "Commonwealth Bank",
    category: "event",
  },
  {
    quote: "Yossi leaves an impression on the hearts of delegates, one that will not be forgotten in years to come.",
    author: "Eugene De Villiers",
    title: "Founder",
    company: "Extra Mile Company",
    category: "event",
  },
  {
    quote: "It was a moving and emotional talk, probably the best I have ever listened to. Our guests were excited, sad and inspired at the same time.",
    author: "Francesco Prandoni",
    title: "Event Producer",
    company: "DOC-Events",
    category: "event",
  },
  {
    quote: "Our audience really were amazed by your story and in awe of everything you endured and overcame. You definitely made an impact.",
    author: "Dee Knopp",
    title: "Executive Director",
    company: "Diversity Alliance for Science",
    category: "event",
  },

  // Industry Leaders & Notable
  {
    quote: "Delegates described Yossi's presentation as a life-changing event.",
    author: "Peter Chenoweth",
    title: "President",
    company: "CCIQ",
    category: "industry",
  },
  {
    quote: "The audience reaction has been unlike any other speaker we've had before.",
    author: "Matt Perez",
    title: "COO & Co-Founder",
    company: "Nearsoft",
    category: "other",
  },
  {
    quote: "I was transported to another world. It was deeply personal and profoundly moving.",
    author: "Gilbert Enoka",
    title: "Mental Skills Coach",
    company: "New Zealand All Blacks",
    category: "other",
  },
  {
    quote: "Yossi brought a vision of the possible that began to manifest the moment he spoke.",
    author: "Lisa Jensen",
    title: "Marketing",
    company: "Procter & Gamble",
    category: "other",
  },
  {
    quote: "Thank you for your words of wisdom, kindness and humility. They had a profound effect.",
    author: "Rastislav Geschwandtner",
    title: "Founder",
    company: "TEDxBratislava",
    category: "other",
  },
  {
    quote: "Max scores in every evaluation category.",
    author: "Juan Federico Salaverria Q.",
    title: "Education Chair",
    company: "YPO El Salvador",
    category: "industry",
  },
];
