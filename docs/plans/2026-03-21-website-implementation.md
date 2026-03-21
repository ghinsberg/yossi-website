# Yossi Ghinsberg Website — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a premium 9/10 keynote speaker website for yossighinsberg.com with 6 pages + 3 keynote sub-pages using Next.js 15, Tailwind CSS, and static export.

**Architecture:** Static Next.js 15 App Router site with TypeScript. All content lives in data files (no CMS). Formspree handles form submissions. Images optimized at build time. Deployed to Vercel as static HTML.

**Tech Stack:** Next.js 15 (App Router), Tailwind CSS v4, TypeScript, Formspree, Vercel, Google Fonts (DM Sans + Inter)

**Design doc:** `docs/plans/2026-03-21-website-design.md`

**Content sources (on local machine):**
- V2.1 website copy: `~/Library/CloudStorage/GoogleDrive-ghinsberg@gmail.com/My Drive/NEW WEBSITE AND BRAND POSITIONING PROJECT/07 - Website Copy/Yossi Ghinsberg - Website Copy All 7 Pages (v2.1).docx`
- Testimonials: `~/Library/CloudStorage/GoogleDrive-ghinsberg@gmail.com/My Drive/NEW WEBSITE AND BRAND POSITIONING PROJECT/04 - Testimonials/Yossi Ghinsberg - Testimonials Curated Top 10.docx`
- Keynote topics: `~/Library/CloudStorage/GoogleDrive-ghinsberg@gmail.com/My Drive/NEW WEBSITE AND BRAND POSITIONING PROJECT/03 - Keynote Topics/Yossi Ghinsberg - Three Keynote Topics (Bureau-Ready).docx`
- Images: `~/Downloads/yossi on stage/` and `~/Downloads/*.jpg`

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- Create: `.gitignore`

**Step 1: Initialize Next.js project**

Run from `~/New Website With Claude`:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --turbopack --yes
```
Expected: Project scaffolded with Next.js 15, Tailwind, TypeScript, App Router.

**Step 2: Configure for static export**

Modify `next.config.ts`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

**Step 3: Set up design tokens in globals.css**

Replace `app/globals.css` with the brand color system and typography imports:
```css
@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');

@theme {
  --color-brand-bg: #0A0A0A;
  --color-brand-surface: #1B3A2D;
  --color-brand-gold: #B8860B;
  --color-brand-gold-light: #D4A843;
  --color-brand-teal: #01696F;
  --color-brand-teal-light: #028A92;
  --color-brand-text: #FFFFFF;
  --color-brand-text-secondary: #CDCCCA;
  --color-brand-light-bg: #F7F6F2;

  --font-heading: "DM Sans", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

**Step 4: Verify dev server starts**

```bash
npm run dev
```
Expected: Dev server runs on localhost:3000 with no errors.

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js 15 project with Tailwind and brand design tokens"
```

---

## Task 2: Data Layer

**Files:**
- Create: `data/siteConfig.ts`
- Create: `data/keynotes.ts`
- Create: `data/testimonials.ts`
- Create: `data/clients.ts`

**Step 1: Create site config**

Create `data/siteConfig.ts` with brand info, navigation links, contact details, and social links. Include:
- Site title, description, URL
- Navigation items: [{label, href}] — Keynotes, Story, Videos (coming soon), Book Yossi
- Contact: Michael Arnot, Encore Speakers, email, phone
- Social links: LinkedIn, YouTube, Instagram

**Step 2: Create keynotes data**

Create `data/keynotes.ts` with 3 keynote objects. Each object contains:
- `slug`: URL-safe name (e.g., "be-brave-in-a-new-world")
- `title`: Display name
- `subtitle`: One-line description
- `flagship`: boolean (true for Be Brave)
- `description`: Full description from v2.1 copy (2-3 paragraphs)
- `takeaways`: Array of {title, description} objects (3 per keynote)
- `bestFor`: String describing ideal audience
- `solves`: Array of strings (problems it addresses)
- `testimonial`: Object with quote, author, title, company

Source all copy from the v2.1 website copy document and the Bureau-Ready keynote topics document. "Be Brave in a New World" is listed FIRST and marked as flagship.

**Step 3: Create testimonials data**

Create `data/testimonials.ts` with all 10 curated testimonials. Each has:
- `quote`: Full testimonial text
- `author`: Name
- `title`: Job title
- `company`: Company name
- `tier`: 1 | 2 | 3 (from the Testimonials Curated Top 10 doc)
- `usage`: Array of strings indicating where to use (homepage, speaking, booking, etc.)

**Step 4: Create clients data**

Create `data/clients.ts` with the logo wall companies:
- Google, Apple, IBM, Microsoft, Coca-Cola, BMW, American Express, MDRT, YPO, Cunard, TEDx
- Each entry: { name, logoSrc (placeholder path for now) }

**Step 5: Commit**

```bash
git add data/
git commit -m "feat: add data layer with keynotes, testimonials, clients, and site config"
```

---

## Task 3: Copy Images Into Project

**Files:**
- Create: `public/images/stage/` — stage photos
- Create: `public/images/headshots/` — professional headshots
- Create: `public/images/adventure/` — Bolivia, rescue photos
- Create: `public/images/logos/` — client logo SVGs (placeholder)

**Step 1: Create image directories and copy photos**

```bash
mkdir -p public/images/{stage,headshots,adventure,logos,media}
```

Copy from `~/Downloads/yossi on stage/`:
- `on stage.jpg` → `public/images/stage/on-stage.jpg` (hero candidate — intimate stage shot)
- `ypo edge stage.jpg` → `public/images/stage/ypo-edge.jpg` (large arena shot)
- `gartner icc stage.jpg` → `public/images/stage/gartner-icc.jpg`
- `IMG_3292.jpg` → `public/images/stage/logo-wall-stage.jpg` (stage with client logos)

Copy headshots from `~/Downloads/yossi on stage/Yossi's Headshoots by Maayan Krisi/`:
- `031A9100.jpg` → `public/images/headshots/yossi-headshot-1.jpg` (with driftwood, black shirt)
- `031A9009.jpg` → `public/images/headshots/yossi-headshot-2.jpg` (vest, standing)
- `031A9015.jpg` → `public/images/headshots/yossi-headshot-3.jpg` (smiling, vest)
- `031A9108.jpg` → `public/images/headshots/yossi-headshot-4.jpg` (carrying driftwood)

Copy adventure photos from `~/Downloads/`:
- `Bolivia_BTT_3529.jpg` → `public/images/adventure/bolivia-canoe.jpg`
- `Yossi-rescued-front.jpg` → `public/images/adventure/rescue-1981.jpg`

**Step 2: Create placeholder SVG logos for client wall**

Create simple text-based SVG placeholder files in `public/images/logos/` for each client company. These will be replaced with real logos later. Create for: google, apple, ibm, microsoft, coca-cola, bmw, american-express, mdrt, ypo, cunard, tedx.

**Step 3: Commit**

```bash
git add public/images/
git commit -m "feat: add photography assets and logo placeholders"
```

---

## Task 4: Layout Shell — Header & Footer

**Files:**
- Create: `components/layout/Header.tsx`
- Create: `components/layout/Footer.tsx`
- Create: `components/layout/CredentialBar.tsx`
- Modify: `app/layout.tsx`

**Step 1: Build CredentialBar component**

Slim gold (#B8860B) bar at the very top of every page. Single line of text:
"Voted Most Unforgettable Speaker · Millions of copies · Hollywood Film · AI Visionary · Branson · Clinton · Taleb"

- Fixed height, small text (text-xs), gold background, black text
- Hidden on mobile (visible md: and up) — mobile can't afford the vertical space

**Step 2: Build Header component**

Sticky header with:
- Left: "GHINSBERG" wordmark in bold gold, uppercase, letter-spaced (DM Sans 800 weight)
- Center/right: Nav links — Keynotes, Story, Book Yossi
- Far right: "Check Availability" button (gold background, black text, rounded)
- Background: transparent when at top, `#0A0A0A` with slight opacity when scrolled
- Mobile: hamburger menu icon that opens a full-screen overlay nav with gold CTA
- Use `useState` for mobile menu open/close
- Use `useEffect` + scroll listener for sticky background change

**Step 3: Build Footer component**

Dark background (#0A0A0A), border-top with subtle gold line. Contains:
- Left column: "GHINSBERG" wordmark + "Transformation Keynote Speaker" tagline
- Center column: Quick links to all pages
- Right column: Booking agent info (Michael Arnot, Encore Speakers, email, phone)
- Bottom row: "Represented by Encore Speakers" + copyright + social links (LinkedIn, YouTube icons)
- Social icons: use simple inline SVGs for LinkedIn and YouTube

**Step 4: Wire into layout.tsx**

Update `app/layout.tsx`:
- Import and render CredentialBar, Header, Footer
- Set `<body>` to `bg-brand-bg text-brand-text font-body`
- Add `<main>` wrapper between Header and Footer
- Set metadata: title "Yossi Ghinsberg | Transformation Keynote Speaker", description with SEO keywords

**Step 5: Verify layout renders**

```bash
npm run dev
```
Navigate to localhost:3000. Should see credential bar + header + empty content + footer. Test mobile hamburger menu by resizing browser.

**Step 6: Commit**

```bash
git add components/layout/ app/layout.tsx
git commit -m "feat: add header with gold wordmark, footer, and credential bar"
```

---

## Task 5: UI Components

**Files:**
- Create: `components/ui/Button.tsx`
- Create: `components/ui/VideoPlayer.tsx`
- Create: `components/ui/KeynoteCard.tsx`
- Create: `components/ui/TestimonialCard.tsx`
- Create: `components/ui/LogoWall.tsx`
- Create: `components/ui/SectionHeading.tsx`
- Create: `components/ui/ChatbotMount.tsx`

**Step 1: Button component**

Props: `variant: 'gold' | 'teal' | 'outline'`, `size: 'sm' | 'md' | 'lg'`, `href?: string`, `children`, `className?`
- Gold: `bg-brand-gold text-black hover:bg-brand-gold-light` — primary CTA
- Teal: `bg-brand-teal text-white hover:bg-brand-teal-light` — secondary CTA
- Outline: `border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black`
- If `href` provided, render as `<a>` tag (for internal links use Next.js `Link`). Otherwise `<button>`.
- Rounded corners, font-semibold, transition effects

**Step 2: VideoPlayer component**

Cinematic YouTube embed with custom overlay thumbnail.
Props: `videoId: string`, `title?: string`, `thumbnailSrc?: string`, `size: 'large' | 'medium'`
- Default state: shows thumbnail image with a centered play button overlay (gold circle with white triangle)
- On click: replaces thumbnail with YouTube iframe (autoplay=1)
- Large: full-width, 16:9 aspect ratio
- Medium: smaller, for secondary video sections
- Rounded corners, subtle box-shadow for cinematic feel
- Use `useState` for play state (thumbnail vs iframe)

**Step 3: KeynoteCard component**

Props: `keynote` object from data layer
- Card with dark surface background (#1B3A2D at ~20% or subtle border)
- If flagship: gold "FLAGSHIP" badge in top-right corner
- Title in white, large font
- Subtitle in secondary text color
- "Learn More" link in gold with arrow
- Hover: subtle border-gold glow or slight scale transform
- Links to `/keynotes/[slug]`

**Step 4: TestimonialCard component**

Props: `testimonial` object from data layer
- Large quote marks (gold, decorative)
- Quote text in italic, text-lg, text-brand-text-secondary
- Author name in bold white
- Title + company in secondary text
- Optional: small photo or company logo if available

**Step 5: LogoWall component**

Props: `clients` array from data layer
- Horizontal row of logos, evenly spaced
- Logos in white/light gray (desaturated — premium feel)
- On desktop: single row, all visible
- On mobile: CSS animation that slowly scrolls horizontally (infinite marquee)
- Use `opacity-60 hover:opacity-100` for subtle interaction
- `filter: grayscale(100%) brightness(2)` treatment on logos for uniformity

**Step 6: SectionHeading component**

Props: `title: string`, `subtitle?: string`, `align: 'left' | 'center'`
- Title: DM Sans, text-3xl md:text-5xl, font-bold, text-white
- Subtitle: Inter, text-lg, text-brand-text-secondary, max-width for readability
- Optional gold accent line below title

**Step 7: ChatbotMount component**

Phase 2 placeholder. Renders a fixed-position button in bottom-right corner.
- Small gold circle with chat icon (speech bubble SVG)
- On click: shows a styled modal/panel that says "Yossi.ai coming soon"
- This is the mount point where the real chatbot will plug in later
- Keep it minimal — just the button and a placeholder message

**Step 8: Commit**

```bash
git add components/ui/
git commit -m "feat: add UI component library (Button, VideoPlayer, KeynoteCard, etc.)"
```

---

## Task 6: Homepage

**Files:**
- Modify: `app/page.tsx`
- Create: `components/sections/Hero.tsx`
- Create: `components/sections/DemoReel.tsx`
- Create: `components/sections/KeynotesPreview.tsx`
- Create: `components/sections/ClientLogos.tsx`
- Create: `components/sections/FeaturedTestimonial.tsx`
- Create: `components/sections/TheDifference.tsx`
- Create: `components/sections/MediaLogos.tsx`
- Create: `components/sections/FooterCTA.tsx`

**Step 1: Hero section**

Full-viewport height section:
- Background: stage photo (`/images/stage/on-stage.jpg`) with dark overlay gradient (black at 60% opacity)
- Top: "GHINSBERG" wordmark in gold, uppercase, massive letter-spacing (DM Sans 900)
- Headline: "Survival Wisdom for the AI Age" — text-4xl md:text-6xl, font-bold, white
- Sub-headline: "Jungle survivor. AI visionary. Bestselling author. Hollywood film. He doesn't deliver keynotes — he transforms rooms." — text-lg, text-secondary
- Two buttons side by side: "Watch the Reel" (outline) + "Check Availability" (gold)
- Below buttons: Three proof badges in a horizontal row:
  - "Hollywood Feature Film — Daniel Radcliffe"
  - "Millions of copies sold — 20 languages"
  - "Shared stages: Branson · Clinton · Taleb"
- Subtle scroll-down indicator (animated chevron) at bottom

**Step 2: Demo Reel section**

- Section heading: "Watch what happens when Yossi takes the stage."
- Large cinematic VideoPlayer component with YouTube embed
- Video ID: `LCRjBVnQ5JM`
- Full-width on mobile, max-w-5xl centered on desktop
- Dark background section
- Below player: "Watch Full Reel" button (teal)

**Step 3: Keynotes Preview section**

- Section heading: "Three Keynotes. One Extraordinary Life."
- Three KeynoteCard components in a responsive grid (1 column mobile, 3 columns desktop)
- Import keynotes data, render cards
- Below cards: "See All Keynotes" button (outline)
- Background: very subtle gradient from #0A0A0A to slightly lighter

**Step 4: Client Logos section**

- No heading — just the logo wall
- LogoWall component with all client logos
- Slim section with generous vertical padding
- Subtle top/bottom border lines

**Step 5: Featured Testimonial section**

- Dark green surface background (#1B3A2D)
- TestimonialCard with Rachel McVinish quote (Tier 1 lead testimonial)
- Large, centered, generous padding
- Gold decorative quote marks

**Step 6: The Difference section**

- Light background (#F7F6F2) for contrast — this breaks up the dark
- Left: Text content
  - Headline: "Before resilience was a keynote topic, he was surviving the Amazon."
  - Second line: "Before AI was a buzzword, he was building it in Silicon Valley."
  - Body paragraph from v2.1 copy (the Difference section)
  - "Read His Full Story" button (teal)
- Right: Headshot photo (yossi-headshot-4.jpg — carrying driftwood)
- Text color: dark on light background
- Responsive: stacks vertically on mobile

**Step 7: Media Logos section**

- Slim section with media outlet logos
- Discovery Channel, Larry King, TEDx, TechCrunch, Cunard, YPO
- Same treatment as client logos (grayscale, subtle)
- Dark background

**Step 8: Footer CTA section**

- Full-width gold (#B8860B) background
- Headline: "Ready to bring transformation to your stage?"
- "Check Availability" button (black background, white text — inverted on gold)
- Generous padding, centered text

**Step 9: Wire all sections into page.tsx**

Import and render all sections in order in `app/page.tsx`. Add "use client" directive if needed for interactive components, or keep sections as server components where possible and wrap interactive parts in client component boundaries.

**Step 10: Verify homepage renders**

```bash
npm run dev
```
Check localhost:3000. All 9 sections should render in order. Test mobile responsiveness. Check that video player works.

**Step 11: Commit**

```bash
git add app/page.tsx components/sections/
git commit -m "feat: build complete homepage with all 9 sections"
```

---

## Task 7: Keynotes Overview Page

**Files:**
- Create: `app/keynotes/page.tsx`

**Step 1: Build the keynotes overview page**

Route: `/keynotes`

Content (from v2.1 "PAGE 02 — SPEAKING" copy):
- Hero area: headline "One hour that changes the room." + subtitle
- Intro paragraph about Yossi's approach to keynotes
- Three full keynote sections (not just cards — full descriptions with takeaways)
  - Each section: title, subtitle, flagship badge if applicable, full description, key takeaways (3 bullets), "Best for" audience, "Learn More" link to individual page
  - Visual separator between sections
- Format & Logistics section: duration, format, languages, audience sizes, global reach
- Format Options section: Keynote, Keynote + Fireside Chat, Half-Day, Full-Day, Multi-Event Tour
- Testimonials: Francesco Prandoni + Dee Knopp quotes
- CTA: "Check Availability" button

**Step 2: Verify page renders**

Navigate to localhost:3000/keynotes. Full page should render with all content.

**Step 3: Commit**

```bash
git add app/keynotes/
git commit -m "feat: add keynotes overview page with full program descriptions"
```

---

## Task 8: Individual Keynote Pages

**Files:**
- Create: `app/keynotes/[slug]/page.tsx`

**Step 1: Build dynamic keynote page**

Route: `/keynotes/[slug]` where slug is one of: be-brave-in-a-new-world, surviving-the-jungle, laws-of-the-jungle

Since this is a static export, use `generateStaticParams()` to pre-render all 3 pages.

Each page:
- Hero section with keynote title, subtitle, flagship badge if applicable
- Background: keynote-appropriate imagery (use different stage photos per keynote)
- Full description (2-3 paragraphs from v2.1 + Bureau-Ready docs)
- Key Takeaways section (3 items, each with bold title + description)
- "Best For" audience section with relevant industries
- "Solves" section listing problems this keynote addresses
- Format options (keynote, workshop, etc.)
- Relevant testimonial (pick one per keynote from the curated list)
- CTA: "Book This Keynote" button linking to /book-yossi

```typescript
export function generateStaticParams() {
  return [
    { slug: "be-brave-in-a-new-world" },
    { slug: "surviving-the-jungle" },
    { slug: "laws-of-the-jungle" },
  ];
}
```

**Step 2: Verify all 3 pages render**

Navigate to:
- localhost:3000/keynotes/be-brave-in-a-new-world
- localhost:3000/keynotes/surviving-the-jungle
- localhost:3000/keynotes/laws-of-the-jungle

All should render with unique content.

**Step 3: Commit**

```bash
git add app/keynotes/
git commit -m "feat: add 3 individual keynote pages with SEO-optimized URLs"
```

---

## Task 9: Story Page

**Files:**
- Create: `app/story/page.tsx`

**Step 1: Build the Story page**

Route: `/story`

This is the cinematic narrative page. Use the v2.1 "PAGE 03 — STORY" copy verbatim.

Sections (each a distinct visual block):
1. **Hero:** "Three weeks alone in the Amazon. No food. No shelter. No rescue coming." — dramatic, dark background with overlay on adventure photo
2. **The Beginning** — narrative text, interspersed with the Bolivia canoe photo
3. **The Fracture** — narrative text
4. **Twenty-One Days** — narrative text, interspersed with rescue-1981.jpg photo
5. **The Transformation** — narrative text
6. **The Silicon Valley Chapter** — narrative text about Blinq/Headbox
7. **The Life After** — conservation, Chalalan, Madidi
8. **Closing** — credential summary, shared stages, "Be Brave" mantra
9. **CTA:** "Book Yossi to Speak" button

Design notes:
- Dark background throughout
- Large text for headlines (text-3xl md:text-5xl)
- Body text in Inter, text-lg, generous line-height (leading-relaxed)
- Photos break up the text — full-width or half-width with text wrapping
- Subtle section transitions (padding, slight color shifts)
- No bullet points anywhere — pure cinematic narrative
- Light section (#F7F6F2) for "The Transformation" to create visual contrast

**Step 2: Verify page renders**

Navigate to localhost:3000/story.

**Step 3: Commit**

```bash
git add app/story/
git commit -m "feat: add cinematic Story page with full narrative"
```

---

## Task 10: Book Yossi Page (Booking Form)

**Files:**
- Create: `app/book-yossi/page.tsx`
- Create: `components/sections/BookingForm.tsx`

**Step 1: Build BookingForm component**

Client component ("use client") with form state management.

Form fields (from the brief — budget dropdown, no transparent pricing):
- Your name * (text input)
- Your email * (email input)
- Organisation / Company * (text input)
- Phone (text input, optional)
- Event date * (date input)
- Event location * (text input)
- Audience size * (select dropdown: Under 100 / 100-500 / 500-1,000 / 1,000-5,000 / 5,000+)
- Format * (radio group: In-Person / Virtual / Hybrid)
- Budget range * (select dropdown: Under $20K / $20K-$35K / $35K-$50K / $50K+ / To be discussed)
- Which keynote interests you most? (select: Be Brave / Surviving the Jungle / Laws of the Jungle / Not sure yet)
- Tell us about your audience and goals (textarea)
- How did you hear about Yossi? (text input, optional)

Form behavior:
- Use `useState` for form state, `onSubmit` handler
- Submit via Formspree (POST to `https://formspree.io/f/{FORM_ID}`)
- For now use a placeholder form ID — will be configured before launch
- Show loading state during submission
- Show success message after submission: "Thank you! We'll be in touch within 24 hours."
- Show error state if submission fails
- Client-side validation: required fields, email format

Styling:
- Dark form inputs: `bg-brand-bg border border-brand-text-secondary/20 text-white`
- Focus state: `focus:border-brand-gold focus:ring-1 focus:ring-brand-gold`
- Labels in text-sm, text-brand-text-secondary
- Submit button: gold, full-width on mobile
- Form max-width: max-w-2xl, centered

**Step 2: Build the Book Yossi page**

Route: `/book-yossi`

Layout:
- Headline: "Let's talk about your audience."
- Subtitle: "Every engagement starts with a conversation. Tell us about your event and we'll be in touch within 24 hours."
- Full 3-minute demo reel above the form (VideoPlayer component, video ID: LCRjBVnQ5JM)
- BookingForm component
- Right sidebar (desktop) or below form (mobile): "What happens next" panel
  - Step 1: We review your enquiry and confirm availability
  - Step 2: A brief call with Yossi or his team
  - Step 3: A tailored proposal within 48 hours
  - Step 4: Pre-event briefing to customise the keynote
- Below form: Contact details
  - "Prefer to speak directly?"
  - Michael Arnot | Encore Speakers
  - michael@encorespeakers.com | +61 (0)422 002 685
- Testimonial: Regina Bedoya quote

**Step 3: Verify form renders and validates**

Navigate to localhost:3000/book-yossi. Fill in form, test validation, test submit (will fail without real Formspree ID — that's expected).

**Step 4: Commit**

```bash
git add app/book-yossi/ components/sections/BookingForm.tsx
git commit -m "feat: add booking page with qualifying inquiry form"
```

---

## Task 11: SEO & Meta Tags

**Files:**
- Modify: `app/layout.tsx` — global metadata
- Create: `app/sitemap.ts` — sitemap generator
- Create: `app/robots.ts` — robots.txt generator
- Modify: each `page.tsx` — page-specific metadata

**Step 1: Global metadata in layout.tsx**

Set default metadata using Next.js Metadata API:
```typescript
export const metadata: Metadata = {
  title: {
    default: "Yossi Ghinsberg | Transformation Keynote Speaker",
    template: "%s | Yossi Ghinsberg",
  },
  description: "Voted Most Unforgettable Speaker. Jungle survivor, AI visionary, bestselling author. Book Yossi for your next event.",
  keywords: ["keynote speaker", "transformation", "leadership", "AI", "resilience"],
  openGraph: {
    type: "website",
    siteName: "Yossi Ghinsberg",
    images: [{ url: "/images/headshots/yossi-headshot-1.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};
```

**Step 2: Page-specific metadata**

Add `export const metadata` to each page:
- `/keynotes` — "Keynote Programs | Yossi Ghinsberg" + description about 3 programs
- `/keynotes/[slug]` — Dynamic title per keynote + description with keynote focus
- `/story` — "The Story | Yossi Ghinsberg" + description about survival, AI, speaking
- `/book-yossi` — "Book Yossi | Yossi Ghinsberg" + description about booking

**Step 3: Create sitemap.ts**

```typescript
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yossighinsberg.com";
  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/keynotes`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/keynotes/be-brave-in-a-new-world`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/keynotes/surviving-the-jungle`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/keynotes/laws-of-the-jungle`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/story`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/book-yossi`, lastModified: new Date(), priority: 0.9 },
  ];
}
```

**Step 4: Create robots.ts**

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://yossighinsberg.com/sitemap.xml",
  };
}
```

**Step 5: Commit**

```bash
git add app/
git commit -m "feat: add SEO metadata, sitemap, and robots.txt"
```

---

## Task 12: Structured Data (Schema.org)

**Files:**
- Create: `components/StructuredData.tsx`
- Modify: `app/layout.tsx` — add structured data component

**Step 1: Create StructuredData component**

Renders a `<script type="application/ld+json">` tag with schema.org JSON-LD.

Include:
- `Person` schema for Yossi (name, url, image, jobTitle: "Transformation Keynote Speaker", description, sameAs for social profiles)
- `WebSite` schema
- On keynote pages: `Event` or custom schema with speaking engagement details

```typescript
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yossi Ghinsberg",
  url: "https://yossighinsberg.com",
  image: "https://yossighinsberg.com/images/headshots/yossi-headshot-1.jpg",
  jobTitle: "Transformation Keynote Speaker",
  description: "Voted Most Unforgettable Speaker. Jungle survivor, AI visionary, bestselling author.",
  sameAs: [
    "https://www.linkedin.com/in/yossighinsberg/",
    "https://www.youtube.com/@yossighinsberg"
  ],
};
```

**Step 2: Add to layout.tsx**

Render StructuredData in the `<head>` section of the root layout.

**Step 3: Commit**

```bash
git add components/StructuredData.tsx app/layout.tsx
git commit -m "feat: add schema.org structured data for Person and WebSite"
```

---

## Task 13: Mobile Optimization & Polish

**Files:**
- Modify: various component files for responsive fixes

**Step 1: Mobile navigation polish**

- Ensure hamburger menu works smoothly
- Mobile menu: full-screen overlay with dark background, large nav links, gold "Check Availability" CTA button
- Close on link click, close on escape key
- Body scroll lock when menu is open

**Step 2: Mobile CTA**

Add a sticky "Check Availability" button at the bottom of the screen on mobile (visible only on mobile, hidden on desktop). Fixed position, gold background, full-width, z-50.

**Step 3: Responsive image handling**

- Hero background: use `object-cover` and `object-center` for proper cropping
- Story page photos: full-width on mobile, side-by-side on desktop
- Headshots: proper aspect ratios maintained

**Step 4: Typography scale**

Verify all headings scale properly:
- Mobile: text-2xl to text-3xl for h1, text-xl for h2
- Desktop: text-5xl to text-6xl for h1, text-3xl for h2
- Body text: text-base on mobile, text-lg on desktop

**Step 5: Touch targets**

- All buttons: min-height 44px (Apple HIG)
- Links: adequate padding for finger taps
- Form inputs: large enough for mobile use

**Step 6: Build test**

```bash
npm run build
```
Expected: Static export succeeds with no errors. All pages pre-rendered.

**Step 7: Commit**

```bash
git add .
git commit -m "feat: mobile optimization pass — responsive layout, sticky CTA, touch targets"
```

---

## Task 14: Final Build & Verification

**Step 1: Full production build**

```bash
npm run build
```
Expected: Builds successfully to `out/` directory. All 9 routes pre-rendered as static HTML.

**Step 2: Serve static build locally**

```bash
npx serve out
```
Navigate to localhost:3000 (or whatever port serve uses). Verify:
- [ ] Homepage loads with all 9 sections
- [ ] Credential bar displays on desktop
- [ ] Navigation works — all links go to correct pages
- [ ] Video player shows thumbnail and plays on click
- [ ] Keynote cards link to individual pages
- [ ] All 3 keynote sub-pages render with unique content
- [ ] Story page renders full narrative with photos
- [ ] Booking form renders with all fields
- [ ] Form validation works (required fields)
- [ ] Mobile hamburger menu works
- [ ] Mobile sticky CTA visible
- [ ] Footer displays Encore Speakers info
- [ ] No console errors
- [ ] Page load feels fast (static HTML)

**Step 3: Commit final state**

```bash
git add .
git commit -m "chore: final build verification and polish"
```

---

## Summary

| Task | Description | Est. Time |
|------|-------------|-----------|
| 1 | Project scaffold | 5 min |
| 2 | Data layer | 15 min |
| 3 | Copy images | 5 min |
| 4 | Header + Footer | 20 min |
| 5 | UI components | 25 min |
| 6 | Homepage (9 sections) | 30 min |
| 7 | Keynotes overview | 15 min |
| 8 | Individual keynote pages | 15 min |
| 9 | Story page | 20 min |
| 10 | Booking form page | 20 min |
| 11 | SEO & meta tags | 10 min |
| 12 | Structured data | 5 min |
| 13 | Mobile polish | 15 min |
| 14 | Final build & verify | 10 min |
| **Total** | | **~3.5 hours** |
