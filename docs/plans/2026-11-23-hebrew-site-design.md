# Hebrew Site for Israel — Design

**Date:** 2026-11-23
**Status:** APPROVED by Yossi 2026-11-23. Nothing is built yet.
**Project:** ~/New Website With Claude (repo `ghinsberg/yossi-website`, hosted on Vercel)

## Intent and why

Israel knows Yossi as the young man from the book (בחזרה מטואיצ'י, a cult book there). It does not know the forty years since: a working keynote speaker on stages around the world, and a life of ventures after the jungle. His Israeli speaking agents have no Hebrew site to send to clients, and say Israelis do not like to read English.

The Hebrew site is a **reintroduction**. It starts where the book ends. Its reader is an Israeli event organizer who received the link from one of Yossi's agents and needs to decide, quickly, that he is a current, serious speaker for their people and not a nostalgia act.

Yossi's words: "they associate me with my story and don't know that I am one of the top speakers in the world and that I have done so many other things."

## Goals

1. A fully standalone Hebrew site on its own Israeli domain. No English on it. Right-to-left throughout.
2. Written in Hebrew, not translated. Terms and phrasing adapted for Israelis.
3. Something the Israeli agents can send a client today and be proud of.
4. Proof by showing: Hebrew keynote footage, Hebrew endorsements, named Israeli clients, international stages and logos.
5. Booking enquiries reach the Israeli agents.

## Non-goals

- Translating the English site. The 18 English search landing pages, the blog, and the city pages stay English only.
- A language-switch button. (One quiet footer link to the international site is allowed, see Calls.)
- The social media relaunch. That is a separate project, after the site.
- Published prices.
- The Digital Twin chatbot at launch. It speaks English with an English system prompt.

## Anti-goals (it fails if any of these are true, even if it works)

- It reads like a translation.
- It presents Yossi as the man from the book and stops there.
- It brags. "One of the top speakers in the world" is never written. The evidence says it.
- Any English leaks into the interface, or any layout is visibly left-to-right.
- It claims anything not verified. The Real Story Rule in CLAUDE.md applies in Hebrew exactly as in English.
- It changes or breaks a single URL on the English site.

## Constraints

- English URLs must stay byte-for-byte the same. The English site is live and indexed.
- Do not touch `siteUrl` in `data/siteConfig.ts` or `API_URL` in `ChatbotMount.tsx`.
- Preview deployment before production, always. Yossi approves the preview.
- Every line of Hebrew copy is approved by Yossi before it is public. Vandam drafts, Yossi rewrites or approves. The agents see the preview before launch.
- Every endorsement, client name, and clip is approved by Yossi item by item, and endorsements need consent on record.
- Images are chosen by looking at them, never by filename.
- The working tree currently has uncommitted changes on `main`. This work happens on its own branch and must not sweep them in.
- CLAUDE.md says the deployment target is Cloudflare Pages. The live site is on Vercel (confirmed from response headers and `.vercel/`). This design assumes Vercel. CLAUDE.md should be corrected.

## Approaches considered

1. **Browser auto-translation.** Rejected. Machine Hebrew on a left-to-right layout, triggered by browser language and only if the visitor accepts. No Hebrew search presence. Not Yossi's voice.
2. **Hebrew section at yossighinsberg.com/he.** Cheapest and inherits search standing, but always reads as a branch of the English site. Yossi asked for standalone.
3. **Own domain, same project. CHOSEN by Yossi 2026-11-23.** A separate Israeli address serving a self-contained Hebrew site, built from this repo so images, video and fixes are shared and one deploy covers both. Cost: a new domain starts with no search standing, so early traffic comes from the agents' links.
4. **Completely separate project.** Rejected. Two codebases drift, every fix is done twice, no benefit over 3.

## How it is built

### Domain

`yossighinsberg.co.il` (and `ghinsberg.co.il`) appeared unregistered in whois on 2026-11-23. Yossi decides the name and makes the purchase. Until a domain is attached, the Hebrew site is reviewed on a Vercel preview URL and is marked noindex.

### Two sites in one project

Next.js allows two separate root layouts using route groups. Structure:

```
app/
  (en)/            every existing English page, moved here unchanged
    layout.tsx     the current root layout (lang="en")
    page.tsx, keynotes/, story/, ...
  (he)/
    he/
      layout.tsx   Hebrew root layout (lang="he", dir="rtl")
      page.tsx, ...
  api/             unchanged
```

Route groups do not appear in URLs, so English addresses do not change (checked against the code by a reviewer; no build was run). `icon.svg`, `sitemap.ts` and `api/` stay at the `app/` root. `globals.css` moves with the English layout and is imported by both. This move is the riskiest step and gets its own verification: list every public page address from a build before and after, and the two lists must match exactly.

**404 pages.** With two root layouts the single `app/not-found.tsx` has no layout to render in. Requirement: an unknown address on the .com shows the English 404 exactly as today, and on the Hebrew domain shows a Hebrew one. How (a catch-all in each group, or Next's global not-found reading the host) is the builder's call. A catch-all added for this purpose does not count as a route change.

**Host handling** (in `middleware.ts`, or `proxy.ts` if the builder migrates to the Next 16 name):
- The set of Hebrew hosts comes from an environment variable, so a Vercel preview host can be treated as Hebrew for review and the real domain is added at launch.
- A request on a Hebrew host is rewritten internally to `/he/...`, so the visitor sees clean addresses (`/hartzaot`, not `/he/hartzaot`). Shared paths are excluded from the rewrite by an explicit list: `/api`, `/images`, `/videos`, `/audio`, `/icon.svg`, `/_next`, and any other static folder under `public/`. Without that list the form post and every shared image break.
- On the .com, `/he/...` returns 404 in production until launch, controlled by a flag. This lets Hebrew code merge to `main` in small steps without unapproved Hebrew copy being publicly reachable. At launch the flag flips and `/he/...` on the .com redirects to the Hebrew domain.
- Internal links on the Hebrew site go through one helper so they are correct on the Hebrew domain and on a preview host.

The existing duplicate-host redirect stays as is.

**Review access.** The agents open a Vercel preview link. If deployment protection blocks outside viewers, use a Vercel share link for that deployment. No staging domain.

### Hebrew layout and design

- Same visual identity: near-black, jungle green, gold. Same photography. It should feel like the same man, at home.
- Fonts: Hebrew typefaces loaded through `next/font` with the Hebrew subset. Builder's call between Heebo, Assistant and Rubik, judged on screen at heading and body sizes, shown to Yossi in the preview.
- Right-to-left is done with logical spacing and alignment (start/end, not left/right) so nothing is mirrored by hand. Latin fragments inside Hebrew text (company names, "TEDx") must render in the right order.
- The Hebrew site gets its own Header, Footer and mobile booking bar under `components/he/`, with Hebrew navigation. Direction-neutral pieces (video player, YouTube embed, buttons, logo wall) are reused, and fixed where they assume left-to-right.
- Hebrew content lives in `data/he/` (site config, keynotes, endorsements, clients, videos, FAQ). No Hebrew strings inside components.
- No Preloader, Meteor cursor or chatbot unless Yossi asks for them after seeing the preview.

### Pages

Addresses use Latin letters, because Hebrew addresses turn into percent-encoded strings when pasted into WhatsApp or email, which is how agents will share them. Final slugs are the builder's call.

| Page | What it has to prove |
|---|---|
| Home | "You know the story. Now meet what came after." Hebrew footage up top, Israeli and international proof, one clear route to booking. |
| What came after (story) | The book in a paragraph, then the forty years: the speaking career, Chalalán, the ventures, told straight including the ones that did not work. |
| Keynotes | The talks Yossi gives in Hebrew, each with who it is for and what an audience leaves with. |
| Videos | Hebrew talks and interviews first. International stage footage after, framed in Hebrew. |
| Endorsements | Hebrew endorsements from Israelis, named, with role and organization. |
| Media | Israeli press and TV, then international. |
| FAQ | The questions an Israeli organizer asks: language, length, formats, travel, technical needs. |
| Book a keynote | Short Hebrew form, plus the agents' names and direct contact. |
| Thank you | Confirmation after the form. |
| Accessibility statement | Israeli sites are expected to carry one (הצהרת נגישות). The site also gets an accessibility pass: keyboard use, contrast, alt text in Hebrew, captions on video. Exact legal duty to be confirmed with counsel. |
| Privacy notice | The form collects personal data. Short and plain. Wording confirmed with counsel. |

Direction line for the home page, a sketch and not copy: **מכירים את הסיפור. עכשיו תכירו את מה שבא אחריו.**

"Comeback" is not used. He never left the stage. He was on stages elsewhere.

### Booking

The Hebrew form posts to `/api/contact` with a marker that it came from the Hebrew site. That route is shared with the live English booking flow and must change to support this: today it rejects any post without `budget`, `organisation`, `eventLocation` and `format`, sends to one hard-coded address, and builds the subject tag only from `utm_source`. The change: when the Hebrew marker is present, required fields follow the Hebrew form, the subject is tagged `[IL]`, and recipients are Yossi plus the Israeli agents. Without the marker the route behaves exactly as today, and that is tested before merge with a real English submission on preview. The form has no budget brackets in dollars. Fields, labels and validation messages are in Hebrew.

### Search and sharing

- `lang="he"`, Open Graph locale `he_IL`, Hebrew titles and descriptions, a Hebrew share image.
- Its own sitemap and robots rules on the Hebrew domain. Today `public/robots.txt` is one static file pointing at the .com sitemap and `app/sitemap.ts` uses one base address, so both become host-aware. The .com versions must come out identical to today's.
- Home pages of the two sites reference each other as language alternates (hreflang). These are set on the two home pages themselves, not in a layout, because layout-level alternates are inherited by every page. Other pages have no English twin and declare none.
- Person structured data in Hebrew, including the Hebrew book title.
- Plausible analytics as a separate site entry for the Hebrew domain. No Meta Pixel or Contentsquare at launch.

### Content pipeline

1. Lucienne locates Hebrew footage, endorsements, Israeli clients, press, and the agents' details. Request filed 2026-11-23: `shared-mind/commons/2026-11-23_vandam-to-lucienne_hebrew-site-assets-wanted.md`.
2. Vandam views every asset and proposes what goes where.
3. Yossi approves each item.
4. Vandam drafts Hebrew copy page by page from verified facts. Yossi rewrites or approves.
5. A short Hebrew glossary is kept in `data/he/` notes for recurring terms (keynote, resilience, the names of talks), so wording stays consistent.

The structure, layout and booking flow can be built with placeholder blocks clearly marked as placeholders while the content is gathered. Nothing with placeholder copy is ever attached to the public domain.

## Order of work

0. `main` must be clean first. On 2026-11-23 it has uncommitted edits to `app/page.tsx`, `app/faq/page.tsx`, `app/keynotes/[slug]/page.tsx` and others, plus deleted images, one of which (`public/images/stage/carousel_bkk_for_website.jpg`) is still preloaded at `app/layout.tsx:107`. Yossi decides whether those are committed or discarded before step 1, since step 1 moves the same files.
1. Branch. Move English pages into the `(en)` group. Verify public addresses are identical. Preview. This ships on its own and changes nothing visible.
2. Hebrew layout, fonts, header, footer, right-to-left foundations, with one real page (Home) in draft copy.
3. Remaining pages as content is approved.
4. Booking form and email routing.
5. Search, sharing, analytics.
6. Yossi and the agents review the preview.
7. Domain purchase, attach, go live. Yossi approves the launch as its own closed question.

## Calls made by Vandam (correct any of these)

- Latin-letter page addresses, not Hebrew ones.
- One quiet footer link to the international English site, as proof of the wider career. No switch in the header.
- No chatbot, preloader, cursor effect, Meta Pixel or Contentsquare on the Hebrew site at launch.
- Hebrew components are separate for layout pieces and shared for neutral pieces.
- Design doc lives in `docs/plans/` to match this project, not in a new specs folder.
- The Laws of the Jungle page is left out until it is known whether that material exists in Hebrew.
- Hebrew code merges to `main` as it is built, hidden behind the launch flag, instead of living on a long branch.
- An accessibility statement and a privacy notice are added to the page list.
- Agents review on a Vercel preview or share link, not a staging domain.

## Reviewer check (2026-11-23)

A fresh reviewer read this design against the code. Its findings are folded in above: the 404 handling, the rewrite exclusion list, the shared contact route, host-aware sitemap and robots, the link helper, hreflang placement, and the uncommitted changes on `main`.

## Open, only Yossi can answer

1. ANSWERED 2026-11-23: booking leads go to **Rafi Agiv**. Yossi has a second Israeli agent in the same territory and chose Rafi if only one can be named. Still open: the address Rafi wants enquiries sent to (Yossi's mailbox shows a personal Gmail and an agency domain, rafiagiv.co.il; do not pick one by guessing), his phone for the booking page, and whether Yossi is copied on every enquiry.
   - DECIDED by Yossi 2026-11-23: each agent gets their own link to the site (a short tag on the address). Enquiries from a tagged visit go to that agent and the booking page shows that agent's contact. Untagged visits go to Rafi. Neither agent's name appears on the other's version.
   - Build notes: agents live in `data/he/` as a small list (tag, name, agency, email, phone); the tag is remembered for the visit so it survives moving between pages; the server looks the recipient up from the tag and never takes an email address from the browser; an unknown tag falls back to Rafi; tagged addresses declare the untagged address as canonical so search engines see one site. The second agent is **Gilat Aviv** (named by Yossi 2026-11-23). For both agents, the public email and phone to use are confirmed with the agent, not taken from Yossi's mailbox.
   - Leads for Israeli client names, from calendar invitations in Yossi's mailbox, each to be verified with Yossi as delivered and nameable before any use: Elta (Ashdod, scheduled 30 Nov 2026), Bank Mizrahi (March 2026, marked postponed), Talpiot (Jerusalem, Aug 2026, marked as an option). The Elta talk is also a chance to film Hebrew stage footage, subject to the agent's and client's permission.
2. Which domain, and the go-ahead to buy it.
3. Which keynotes does he offer in Israel, and what are they called in Hebrew?
4. Should the booking form ask about budget at all?
5. Is the film (Jungle, 2017) worth a place on the Hebrew site, or is it part of the story Israel already knows?
6. The uncommitted changes sitting on `main`: keep and commit, or discard?
7. Who is the lawyer to confirm the accessibility and privacy wording for Israel?

## Left to the builder

Font choice, exact slugs, component boundaries, how the route check is scripted, Hebrew form validation details, placeholder styling.
