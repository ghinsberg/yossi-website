# /blog — Generate an SEO Blog Post for yossighinsberg.com

Generate a complete, publish-ready blog post for yossighinsberg.com targeting a specific keyword.

## Usage
/blog [keyword or topic]

Examples:
- /blog "leadership speaker dubai"
- /blog "how to book a keynote speaker"
- /blog "resilience under pressure"
- /blog "amazon survival lessons"

## What to produce

Generate a complete blog post and append it to `data/posts.ts` as a new entry in the `posts` array.

### Post structure

```typescript
{
  slug: "kebab-case-from-title",
  title: "Title targeting the keyword naturally",
  excerpt: "One or two sentences. No filler. Shown on the listing page.",
  date: "YYYY-MM-DD", // use today's date
  readTime: "X min read", // estimate based on word count (~200wpm)
  category: "Leadership" | "Event Planning" | "Speaking" | "Resilience",
  keywords: ["primary keyword", "secondary keyword", "tertiary keyword"],
  content: "Full post as plain paragraphs..."
}
```

### Content rules (non-negotiable)

1. **600-900 words.** Not less. Not more.
2. **No AI slop.** No "in today's fast-paced world." No "as we navigate unprecedented challenges." No "it's more important than ever."
3. **Specific over vague.** "21 days alone" beats "a difficult experience." "Google, Apple, Microsoft" beats "leading companies."
4. **Yossi's voice.** Warm, direct, a little wry. Short sentences. Occasional paragraph of one sentence for emphasis.
5. **No em dashes.** Use commas or new sentences.
6. **No buzzwords.** Not: transformative, innovative, world-class, leverage, journey, impactful.
7. **The real story rule.** Yossi's actual story is extraordinary. Never embellish it. Frame the truth powerfully.
8. **Section titles in ALL CAPS** as their own paragraph. No markdown headers — the post renderer handles them.
9. **End with a CTA paragraph** that mentions booking Yossi naturally, not as a sales pitch.

### SEO rules

- Use the target keyword in the first 100 words
- Use it again 2-3 times naturally throughout
- Title should be 50-65 characters
- Excerpt should be 120-155 characters

### After generating

1. Append the new post to the `posts` array in `data/posts.ts`
2. Also create the sitemap entry — open `public/sitemap.xml` and add:
```xml
<url>
  <loc>https://yossighinsberg.com/blog/SLUG</loc>
  <priority>0.7</priority>
  <changefreq>monthly</changefreq>
</url>
```
3. Run `npx tsc --noEmit` to confirm no TypeScript errors
4. Report the post title, slug, word count, and target keyword

## Voice reference

Read `data/posts.ts` for existing examples before writing. Match that tone.

The audience is event planners, conference directors, and HR leaders searching for a keynote speaker. They are busy and skeptical. They have seen a hundred speaker reels. Write for them.
