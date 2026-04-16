export interface Video {
  id: string;
  title: string;
  category: "reel" | "keynote" | "story" | "short";
}

export const videos: Video[] = [
  // Featured reel
  { id: "LCRjBVnQ5JM", title: "Speaker Reel", category: "reel" },

  // Keynote / speaking clips
  { id: "BDGQx1V1MK0", title: "Stories and Lessons", category: "keynote" },
  { id: "RS3p_8di8WA", title: "Innovation Is Key", category: "keynote" },
  { id: "FINMVryLQmw", title: "Nature Is the Answer", category: "keynote" },
  { id: "_QyWIuCarUc", title: "Dreamers", category: "keynote" },
  { id: "ebBx8fFMCSY", title: "The Now Is Here", category: "keynote" },
  { id: "hDQWgqtuGUw", title: "Being a Dreamer and Making Dreams Come True", category: "keynote" },
  { id: "UepK6QniFgA", title: "What We Really Search For", category: "keynote" },

  // The Story — Amazon / Jungle / Film
  { id: "hZqjdbmyJKI", title: "Surviving the Impossible", category: "story" },
  { id: "Zlztb8QXGTg", title: "Jungle — Official Trailer", category: "story" },
  { id: "N1ADswxJdVU", title: "Once in a Lifetime — Amazon Expedition", category: "story" },
  { id: "Tn-lbqRLdcE", title: "Jungle — The Turtle", category: "story" },
  { id: "HruuP7Q90vg", title: "Behind the Scenes with Daniel Radcliffe", category: "story" },

  // Shorts
  { id: "bjfqeAGa7cg", title: "Victim Is a Choice", category: "short" },
  { id: "R1-QtfpBxqI", title: "Inspiring the Heroes", category: "short" },
  { id: "Jc6-JiOZw1Q", title: "Save the Amazon", category: "short" },
];

export const featuredReel = videos.find((v) => v.category === "reel")!;
export const keynoteVideos = videos.filter((v) => v.category === "keynote");
export const storyVideos = videos.filter((v) => v.category === "story");
export const shortVideos = videos.filter((v) => v.category === "short");
