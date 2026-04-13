# CLAUDE.md — yossighinsberg.com New Vercel Build

## What This Is
The new Next.js website for Yossi Ghinsberg. Replaces the current Wix site at yossighinsberg.com. Built with Next.js 16, TypeScript, Tailwind CSS v4. Deploying to Cloudflare Pages.

## Project Location
~/New Website With Claude/

## Tech Stack
- Framework: Next.js 16.2.1 App Router
- Language: TypeScript
- Styling: Tailwind CSS v4
- React: 19.2.4
- Deployment target: Cloudflare Pages

## Run Locally
cd ~/New\ Website\ With\ Claude && npm run dev
Opens at http://localhost:3000

## Structure
app/ — pages (homepage, book-yossi, endorsements, keynotes, media, story, videos, api)
components/layout/ — Header, Footer, CredentialBar, MobileCTA
components/sections/ — Hero, BookingForm, ClientLogos, DemoReel, etc.
components/ui/ — Button, ChatbotMount, VideoPlayer, KeynoteCard, etc.
data/ — siteConfig.ts, keynotes.ts, testimonials.ts, clients.ts
docs/plans/ — design and implementation plans, read before building

## Digital Twin Widget
File: components/ui/ChatbotMount.tsx
API: https://yossi-ai-production.up.railway.app
Env var: NEXT_PUBLIC_YOSSI_AI_URL
Features: text chat, voice input via Web Speech API, ElevenLabs TTS
Has keyword filtering for availability and off-topic questions
System prompt injected on every call, responses capped at 150 words
Floating gold button bottom-right
Needs improvement: response quality, topic coverage, UI polish

## Site Config
File: data/siteConfig.ts
Edit this for navigation, contacts, social links, credential bar, speaker reel YouTube ID

## Brand
- Warm, direct, specific. No corporate language.
- Short sentences. Specific over vague.
- 23 years in the Amazon beats decades of experience
- Never use: transformative, innovative, world-class, leverage
- No em dashes. Use a comma or a new sentence.
- Primary brand color: brand-gold
- Human and warm, not cold corporate

## Site Title Note
Current: Yossi Ghinsberg | Transformation Keynote Speaker
Transformation is a corporate buzzword. Flag for Yossi to reconsider.

## Speaker Bureau Contacts
- Michelle Carter, North America, Michelle@carterglobalspeakers.com, +1 703 819 2511
- Michael Arnot, Europe and Australasia, michael@encorespeakers.com, +61 (0)422 002 685
- Smart Speakers, Latin America, Juanita Cortes Cleves (not yet in siteConfig)

## Do Not Touch
- node_modules
- API_URL in ChatbotMount.tsx without confirming Railway is live
- siteUrl in siteConfig.ts until domain migration is complete

## Deployment
Target: Cloudflare Pages
Current live site: yossighinsberg.com on A2 via Wix
New build replaces Wix once ready
Domain migration is the final step after full QA

## Known Issues
- ChatbotMount needs UI and response quality improvements
- Smart Speakers contact missing from siteConfig.ts
- Confirm NEXT_PUBLIC_YOSSI_AI_URL is set in .env.local
- Read docs/plans/ before building anything

## Mario Supreme Protocol
Mario is the lead agent on this site. Before any changes:
1. Run full audit — Lighthouse, UX, SEO, GEO
2. Read docs/plans/ for existing design decisions
3. Propose a plan before executing
4. Deploy to preview URL before touching production
