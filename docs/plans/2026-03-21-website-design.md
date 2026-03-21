# Yossi Ghinsberg Website — Design Document

**Date:** 2026-03-21
**Project:** yossighinsberg.com rebuild
**Location:** ~/New Website With Claude

## Goal

Build a premium keynote speaker website that signals $35K-$50K within 5 seconds of an event planner landing on the page. Replace the existing Wix site (rated 6/10) with a custom-built 9/10 site.

## Decisions Made

- **Source of truth:** V2.1 website copy document (from Google Drive), with pricing removed from booking page
- **Hero headline:** "Survival Wisdom for the AI Age"
- **Tech stack:** Next.js 15 (App Router, static export) + Tailwind CSS v4 + TypeScript
- **Form handling:** Formspree (zero backend)
- **Deployment:** Vercel (static)
- **Chatbot (yossi.ai):** Phase 2 — mount point built into Phase 1
- **Scope:** 6 pages + 3 keynote sub-pages (9 routes total)

## Route Structure

```
/                                    → Homepage (CRITICAL)
/keynotes                            → Speaking overview with 3 keynote cards
/keynotes/be-brave-in-a-new-world    → Flagship keynote (dedicated page)
/keynotes/surviving-the-jungle       → Classic keynote (dedicated page)
/keynotes/laws-of-the-jungle         → Leadership keynote (dedicated page)
/story                               → Yossi's story / bio
/book-yossi                          → Booking inquiry form
```

## Design System

### Colors

| Role             | Hex       | Usage                                      |
|------------------|-----------|----------------------------------------------|
| Background       | #0A0A0A   | Primary dark background (near-black)         |
| Surface          | #1B3A2D   | Deep jungle green — accent sections          |
| Accent Primary   | #B8860B   | Gold — CTAs, wordmark, credential bar        |
| Accent Secondary | #01696F   | Teal — links, secondary CTAs                 |
| Text Primary     | #FFFFFF   | Headings on dark                             |
| Text Secondary   | #CDCCCA   | Body text on dark                            |
| Light Section BG | #F7F6F2   | Contrast sections for readability            |

### Typography

- **Headlines:** DM Sans Bold (Google Fonts)
- **Body:** Inter (Google Fonts)
- **Wordmark:** "GHINSBERG" in bold gold (#B8860B), custom letter-spacing

### Photography

- Hero: stage photos from available collection (YPO Edge, Gartner ICC, Jeunesse)
- Headshots: Maayan Krisi golden-hour series (9 professional shots available)
- Adventure: Bolivia canoe shot, rescue photo (1981)
- No stock photography under any circumstances

## Page Designs

### Homepage — Scroll Sections (top to bottom)

1. **Credential Bar** — Slim gold strip: credentials in one line
2. **Hero** — Full-bleed stage photo, "GHINSBERG" wordmark, headline, two CTAs
3. **Demo Reel** — Large cinematic YouTube player (90-second reel)
4. **Three Keynote Cards** — "Be Brave" with FLAGSHIP badge listed first
5. **Client Logo Wall** — Google, Apple, IBM, Microsoft, Coca-Cola, BMW, AmEx, MDRT, YPO, TEDx
6. **Lead Testimonial** — Rachel McVinish quote
7. **The Difference** — Bio teaser: "Before resilience was a keynote topic..."
8. **Media Logos** — Discovery Channel, Larry King, TEDx, TechCrunch
9. **Footer CTA** — Full-width gold banner with "Check Availability"

### Keynotes Overview (/keynotes)

- Page headline: "One hour that changes the room."
- Intro paragraph from v2.1
- Three full keynote sections with descriptions, takeaways, audience fit
- Format & logistics section
- Testimonials (Francesco Prandoni, Dee Knopp)
- CTA: "Check Availability"

### Individual Keynote Pages (/keynotes/[slug])

- Hero with keynote-specific imagery
- Full description from v2.1 copy
- Key takeaways (3 bullets each)
- Best for / audience section
- Format options
- Relevant testimonial
- CTA: "Book This Keynote"

### Story (/story)

- Cinematic narrative from v2.1 (The Beginning → The Fracture → Twenty-One Days → The Transformation → Silicon Valley → The Life After)
- No bullet points — pure narrative
- Photos interspersed (rescue photo, Bolivia canoe, headshots)
- Credential stack at bottom
- CTA: "Book Yossi to Speak"

### Book Yossi (/book-yossi)

- Page headline: "Let's talk about your audience."
- 3-minute full reel embedded above form
- Qualifying form fields (from brief — budget dropdown, no transparent pricing)
- Booking agent info: Michael Arnot, Encore Speakers
- "What happens next" reassurance panel
- Regina Bedoya testimonial

## Component Architecture

```
components/
  layout/
    Header.tsx           → Sticky nav, gold wordmark, "Check Availability" CTA
    Footer.tsx           → Encore Speakers, social links, page links
    CredentialBar.tsx     → Slim gold bar at top
  ui/
    Button.tsx           → Gold primary / teal secondary / outline variants
    VideoPlayer.tsx      → Cinematic YouTube embed with custom overlay
    KeynoteCard.tsx      → Card for keynote programs
    TestimonialCard.tsx  → Quote + attribution
    LogoWall.tsx         → Client logo grid
    ChatbotMount.tsx     → Phase 2 yossi.ai mount point
  sections/
    Hero.tsx             → Full-bleed hero
    DemoReel.tsx         → Large video player section
    BookingForm.tsx      → Qualifying inquiry form
```

## Data Layer

```
data/
  keynotes.ts       → 3 keynote objects (slug, title, description, takeaways, audience, testimonial)
  testimonials.ts   → Curated top 10 with tier/usage assignments
  clients.ts        → Logo wall companies
  siteConfig.ts     → Brand colors, contact info, social links, meta
```

## Content Sources

- **Primary:** V2.1 website copy (Google Drive: NEW WEBSITE AND BRAND POSITIONING PROJECT/07 - Website Copy)
- **Testimonials:** Curated Top 10 document (04 - Testimonials)
- **Bio:** Bio Versions v2 (02 - Bios)
- **Keynotes:** Three Keynote Topics Bureau-Ready (03 - Keynote Topics)
- **Brand voice:** Brand Positioning Lock v3 (01 - Positioning)
- **Images:** ~/Downloads/yossi on stage/ + ~/Downloads/*.jpg

## SEO & AI Discoverability

- Structured data (schema.org) for Person, SpeakingEngagement
- Each keynote has its own URL-optimized page
- Meta descriptions with "keynote speaker," "AI leadership," "transformation"
- OpenGraph + Twitter card meta tags
- sitemap.xml + robots.txt
- Semantic HTML throughout

## Mobile-First Requirements

- Mobile-first responsive design
- Page load under 3 seconds (static export guarantees this)
- Video plays smoothly on mobile
- Sticky "Check Availability" CTA on mobile
- Hamburger menu with prominent CTA

## Phase 2 (Future)

- yossi.ai chatbot (knowledge base from Master Library, brand voice system prompt)
- Videos gallery page
- Books & Media page
- Purpose page (conservation, Madidi, Uchupiamona)
- Blog/articles section
- Newsletter signup
- Press kit PDF download
- CMS integration (Sanity or Contentful)

## Language Rules (from Brand Positioning Lock v3)

- ALWAYS: "transformation keynote" or "leadership keynote"
- ALWAYS: Lead with "Be Brave in a New World" — maps to #1 market demand
- NEVER: "motivational speaker"
- NEVER: "jungle adventure speaker" or "survival speaker" as primary positioning
- NEVER: stock photography
- TONE: Epic but grounded. Earned. Confident without arrogance. Never corporate. Never cliche.
