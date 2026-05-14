export interface LawPassage {
  text: string;
}

export interface Law {
  number: number;
  title: string;
  musicTitle: string;
  audioSrc: string;
  intro: string;
  passages: LawPassage[];
}

export const laws: Law[] = [
  {
    number: 1,
    title: "If You Want to Be Human, Be a Beast First",
    musicTitle: "Human Beast",
    audioSrc: "/audio/laws/01-human-beast.mp3",
    intro: "The laws of the jungle are not taught. They are written in the code of life itself.",
    passages: [
      {
        text: "The laws of the jungle are not taught to the creatures by older generations, and the laws are not handed down to them by some great bearer of knowledge. These laws are written in the code of life itself and all living things possess the faculty to access the code, to read straight from it, and act accordingly.",
      },
      {
        text: "We are a part of this earth, we are not guests; we do not need to be delivered from this place. It is our home.",
      },
      {
        text: "The drop is an illusion. Let it go, and be the vast ocean.",
      },
      {
        text: "Each species does exactly what it does best to survive, except for human beings. Our acquired reality is that of separation, while the truth of our existence is that of unity. We see the world as separate from ourselves and fail to live within the interconnectedness and interdependence of this world. But there are no winners unless we all win.",
      },
      {
        text: "Without separation, there is no need for salvation, for there is nothing wrong with us. We are a part of this earth, we are not guests. It is our home.",
      },
    ],
  },
  {
    number: 2,
    title: "Be the Music, Not the Conductor",
    musicTitle: "Be the Music",
    audioSrc: "/audio/laws/02-be-the-music.mp3",
    intro: "The orchestra is cosmic and the music sublime. Can you hear it?",
    passages: [
      {
        text: "Be the music, not the conductor. Listen for the beautiful music that exists within you. It will guide you. Understand how your unique music contributes to the amazing symphony that is life. Understand that without your music, the symphony is lessened.",
      },
      {
        text: "Fueled with eagerness for power and control, inflamed by shortsighted ambitions, we push and we shove and we force ourselves against the music that flows within us, trying to assume the role of the conductor. But this role was never available to us and never endowed.",
      },
      {
        text: "Give up your need for control, let it go.",
      },
      {
        text: "It is scary to let go; fear strikes. But fear is the best guide. It shows you the way — always towards it, never away from it. If you run from it, it will chase you forever.",
      },
      {
        text: "Letting go is the essence of life. One cannot hold onto anything, for nothing can be held; everything is in a constant state of flux.",
      },
    ],
  },
  {
    number: 3,
    title: "The Fig Tree Will Never Bear Mangos",
    musicTitle: "Being Me",
    audioSrc: "/audio/laws/03-being-me.mp3",
    intro: "You can be the best version of what you are. You cannot be something else.",
    passages: [
      {
        text: "If you are born a fig, you will not yield mango no matter how hard you try. You may fool some for a minute into believing you have changed and become someone else, but when your season arrives, you will still be you.",
      },
      {
        text: "You can bear big, sweet figs that will ferment into an invaluable elixir, or yield shriveled bitter figs that are good for nothing. But mangos, my son, you will not yield, no matter how hard you try.",
      },
      {
        text: "We are the fig tree that wants to be a mango tree.",
      },
      {
        text: "Being ourselves — what is so simple and natural to all living things on earth — has become extremely complicated for us. Separating ourselves from the natural world, we've lost our sense of true identity. Not recognizing our true selves, we are often torn between what we are and what we desire to be.",
      },
      {
        text: "The fig tree seeks sage advice from gurus and teachers, experts in mango trees. It studies and learns everything there is to know about mango trees. It does its best to adorn itself like a mango tree. Yet when it is time to bear fruit, the fig tree will have figs hanging from its branches, not mangos.",
      },
    ],
  },
  {
    number: 4,
    title: "The Seasons Always Change",
    musicTitle: "The Seasons Always Change",
    audioSrc: "/audio/laws/04-seasons-always-change.mp3",
    intro: "The Amazon doesn't resist change. It becomes it.",
    passages: [
      {
        text: "Adaptation to change is the art of survival and survival is the only game that is played in the Amazon. All species in the Amazon are alert and vibrant, constantly attentive to the slightest fluctuation in their environment.",
      },
      {
        text: "There is a flawless flow and nothing but the flawless flow.",
      },
      {
        text: "The essence of survival is a swift and efficient adaptation to new circumstances. The dead must be buried, and the living must move on with life.",
      },
      {
        text: "No species in the jungle complains and no species tries to hold onto the old. They are not attached to anything but the sacredness of the continuity of life. When the season changes they adjust immediately and naturally to the new situation and thrive in it.",
      },
      {
        text: "It is not that we need to change ourselves, although that is a prevalent illusion; rather we must understand the essence of change and align our world with it. All living things exist within the flawless flow of constant change. Surrender to the flow; trust its flawlessness.",
      },
    ],
  },
  {
    number: 5,
    title: "The Cage Door Is Open",
    musicTitle: "We Are Born Free",
    audioSrc: "/audio/laws/05-we-are-born-free.mp3",
    intro: "We were born free. Then we were taught to forget.",
    passages: [
      {
        text: "We are born free, but soon after we're taught to forget what we know and what we innately understand. We're taught that we belong in a box.",
      },
      {
        text: "To break free, all the elephant must do is eliminate the one limiting idea that he has been taught. The cage door is open.",
      },
      {
        text: "You are a cosmic being. Claim your right to live in the real world, awe inspired.",
      },
      {
        text: "The box is a cage we have built to protect us from the elements. We dwell in the illusory safety of the cage, afraid of the world we have alienated. We are trapped, like animals in a zoo. And we call this cage civilization.",
      },
      {
        text: "The force of creation has no name and no place. It is within us all; it is all.",
      },
    ],
  },
  {
    number: 6,
    title: "Evolution Is Created",
    musicTitle: "Evolution Is Created",
    audioSrc: "/audio/laws/06-evolution-is-created.mp3",
    intro: "Darwin was right. And Darwin alone is not enough.",
    passages: [
      {
        text: "Darwin was right, evolution is the ability of a species to constantly flow with change and adapt to circumstances. Those who adhere to the law of change survive. However, their adaptation and evolution is encoded in their design, which science alone cannot explain.",
      },
      {
        text: "In this orchid I saw the face of the creator, and my eyes opened to see the miracles of the mundane.",
      },
      {
        text: "The orchid has no mirror, no colored pencils. Nature produced that precise image of a wasp from within. Here creation is apparent and one needs to be completely blind not to see that.",
      },
      {
        text: "Life is a miracle.",
      },
      {
        text: "The process of perfection through genetic manipulation, through trial and error, fails to recognize a truth that is so apparent. That process is guided by an underlying intelligence that guides all things and all beings.",
      },
    ],
  },
  {
    number: 7,
    title: "Life Is Perfectly Perfect",
    musicTitle: "Perfectly Perfect",
    audioSrc: "/audio/laws/07-perfectly-perfect.mp3",
    intro: "There is enough of everything for everyone. Always has been.",
    passages: [
      {
        text: "The truth is that there is enough of everything on this planet for everybody and on every level — an unlimited abundance of food, water, energy, space, peace, and good health. In this way, life is perfect. Nothing is lacking. Nothing except understanding and cooperation.",
      },
      {
        text: "In its perfection, life offers unlimited abundance.",
      },
      {
        text: "We don't see the perfection of life because we view life with a limited perspective.",
      },
      {
        text: "The Amazon is home to almost 50 percent of the species on earth, yet there is room for all. Each species finds its own special and unique niche to make its home. No home is bigger than what is needed, efficient simplicity is the guiding line, and there is no greed.",
      },
      {
        text: "If we can trust that there is enough for everybody, we will achieve abundance-based cooperation, respectful management of the resources, a sense of harmony.",
      },
    ],
  },
  {
    number: 8,
    title: "The Time Is Now",
    musicTitle: "The Time Is Now",
    audioSrc: "/audio/laws/08-the-time-is-now.mp3",
    intro: "The future is an assumption. This moment is real.",
    passages: [
      {
        text: "Tomorrow is only an assumption; it is a solid assumption, but it is still only an assumption. If the future is an illusion, falling in love with the future, becoming obsessed with the future, is insanity.",
      },
      {
        text: "The best way to prepare for tomorrow is to live today.",
      },
      {
        text: "You cannot experience anything but the now. The future is in the now.",
      },
      {
        text: "There is only one action, one experience, one moment that is valid — live life fully and fearlessly now.",
      },
      {
        text: "The future lives only in the present, the past lives only in the present, there is nothing else. See this and see that the present always contains all possibilities, the present is eternal.",
      },
    ],
  },
  {
    number: 9,
    title: "The Purpose of Life Is Death",
    musicTitle: "The Purpose of Life Is Death",
    audioSrc: "/audio/laws/09-purpose-of-life-is-death.mp3",
    intro: "This life is not the beginning. Death is not the end.",
    passages: [
      {
        text: "This life is not the beginning and death is not the end.",
      },
      {
        text: "What we perceive as real is the illusion; true reality waits beyond the reach of the six senses.",
      },
      {
        text: "This life that we perceive is only one dimension of the universe. It is foolish to believe it is the only dimension, that we are capable of understanding every possible dimension.",
      },
      {
        text: "Our human faculties are dull and cumbersome when it comes to perceiving the subtle phenomena of life and death. We believe that what we cannot perceive does not exist, what we cannot perceive is an illusion. In fact the opposite is much closer to the truth.",
      },
      {
        text: "As human beings, our DNA contains the truth of the continuum. Yet the boundaries of our perception block our ability to understand it. When we are able to change our perception, we will see the truth.",
      },
    ],
  },
];
