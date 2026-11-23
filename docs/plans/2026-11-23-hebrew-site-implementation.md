# Hebrew Site for Israel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A standalone right-to-left Hebrew site, served from this project on its own Israeli domain, hidden from the public until Yossi approves launch, with booking enquiries routed to the Israeli agent whose link the visitor used.

**Architecture:** Two root layouts via Next.js route groups: `app/(en)/` holds every existing English page unchanged, `app/(he)/he/` holds the Hebrew site. `middleware.ts` rewrites requests on a Hebrew host to `/he/...` and blocks `/he/...` on every other host. All host and routing decisions are pure functions in `lib/` with unit tests; the middleware and API route are thin wrappers.

**Tech Stack:** Next.js 16.2.1 App Router, React 19, TypeScript, Tailwind CSS v4, Resend, Vercel. Adds Vitest (dev only) for unit tests.

**Spec:** `docs/plans/2026-11-23-hebrew-site-design.md` (approved 2026-11-23). Read it first. Where this plan and the spec differ, the difference is listed under "Deviations from the spec".

## Global Constraints

- English public URLs must not change. Verified by route list diff in Task 1 and again before every merge to `main`.
- Do not touch `siteUrl` in `data/siteConfig.ts` or `API_URL` in `components/ui/ChatbotMount.tsx`.
- Work in a git worktree on branch `hebrew-site` cut from `origin/main`. The main checkout has uncommitted work that is not ours (a keynote rename and five deleted images still referenced by `components/sections/Hero.tsx`, `DemoReel.tsx`, `app/yossi/page.tsx`, `app/layout.tsx:107`). Do not commit, stash, or revert it.
- Push after every commit (`git push origin hebrew-site`). Never push to `main` without Yossi's yes for that merge.
- No Hebrew string inside a component. All Hebrew lives in `data/he/`.
- Hebrew copy written by the builder is a draft. Every draft string is wrapped with the `PLACEHOLDER` marker (Task 3) until Yossi approves it. Nothing invented: no client names, endorsements, numbers or claims that are not in the spec or approved by Yossi.
- No em dashes in copy. Never use: transformative, innovative, world-class, leverage, or Hebrew equivalents of "one of the top speakers". Never "comeback".
- Spacing and alignment use logical utilities only in Hebrew components: `ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`, `text-start`, `text-end`. No `ml-`, `mr-`, `pl-`, `pr-`, `left-`, `right-`, `text-left`, `text-right` under `components/he/` or `app/(he)/`.
- Images are chosen by viewing them, never by filename.
- No Preloader, MeteorCursor, ChatbotMount, MetaPixel or Contentsquare in the Hebrew layout.
- Agent emails and phones come only from the agent's own confirmation, recorded in `data/he/agents.ts`. Until confirmed they are `null`.

## Deviations from the spec

- **No link helper.** The spec proposed a helper so Hebrew links work on preview hosts. Instead the Hebrew site is only ever served on a Hebrew host, including in preview and local dev (see `HE_HOSTS` below), so Hebrew links are always clean (`/hartzaot`). Simpler, and one less thing to get wrong.
- **`middleware.ts` keeps its name.** Migration to `proxy.ts` is out of scope.

## Environment variables

| Name | Meaning | Production today | Preview for branch `hebrew-site` | Local dev |
|---|---|---|---|---|
| `HE_HOSTS` | Comma list of hosts that serve Hebrew. `*` means every host. | unset | `*` | `he.localhost:3000` |
| `HE_LIVE` | `1` once launched. Controls indexing and the .com `/he` redirect. | unset | unset | unset |
| `HE_CANONICAL_HOST` | The Hebrew domain, once bought. | unset | unset | unset |
| `HE_PLAUSIBLE_DOMAIN` | Plausible site for Hebrew. | unset | unset | unset |

## Review Focus

1. A visitor on the .com requests `/he/anything` before launch: they get the English 404, never Hebrew. (Task 2)
2. A Hebrew-host request for a shared file (`/images/...`, `/api/contact`, `/_next/...`, `/sitemap.xml`): served as is, not rewritten to `/he/...`. (Task 2)
3. A booking link with an unknown, empty, mixed-case or hostile agent tag (`?a=RAFI`, `?a=`, `?a=<script>`): falls back to Rafi, never errors, never echoes the raw tag. (Task 5)
4. An English enquiry submitted after the contact route changes: same validation, same recipient, same subject as today. (Task 5)
5. Hebrew text with Latin fragments (company names, an email address, a phone number) and form input containing `<`, `&` or quotes: renders in the right order on the page and is escaped in the notification email. (Tasks 3 and 5)

---

### Task 1: Move English pages into a route group, URLs unchanged

**Files:**
- Create: `scripts/list-routes.sh`, `app/(en)/[...notFound]/page.tsx`
- Move: every directory and file under `app/` except `api/`, `sitemap.ts`, `icon.svg` into `app/(en)/` using `git mv` (includes `layout.tsx`, `page.tsx`, `globals.css`, `not-found.tsx`)

**Interfaces:**
- Produces: `scripts/list-routes.sh` prints the sorted route table of the last `next build` (the lines beginning `○`, `●` or `ƒ`, path column only). `app/(en)/layout.tsx` is the English root layout. `app/(en)/globals.css` is imported by both layouts.

- [ ] **Step 1:** Create the worktree and branch from `origin/main`. Run `npm ci`.
- [ ] **Step 2:** Write `scripts/list-routes.sh`. Run `npm run build && scripts/list-routes.sh > /tmp/routes-before.txt`. Expected: non-empty list including `/`, `/keynotes/[slug]`, `/keynote-speaker/[city]`, `/sitemap.xml`.
- [ ] **Step 3:** `git mv` the pages into `app/(en)/`. Fix the `globals.css` import path if needed.
- [ ] **Step 4:** Add `app/(en)/[...notFound]/page.tsx`, a page whose only job is to call `notFound()`, so unknown addresses render `app/(en)/not-found.tsx` inside the English layout.
- [ ] **Step 5:** Run `npm run build && scripts/list-routes.sh > /tmp/routes-after.txt && diff /tmp/routes-before.txt /tmp/routes-after.txt`. Expected: the only difference is one added line for `/[...notFound]`.
- [ ] **Step 6:** Start the app, request `/`, `/keynotes`, `/keynote-speaker-insurance`, `/blog`, `/sitemap.xml`, `/icon.svg`, and `/no-such-page`. Expected: 200 for the first six, 404 with the text "Lost in the jungle?" for the last. Compare the HTML `<head>` of `/` and `/story` against production (`curl https://yossighinsberg.com/...`): title, description, canonical and Open Graph tags identical.
- [ ] **Step 7:** Commit and push. Message: `Move English pages into (en) route group, URLs unchanged`.

### Task 2: Host routing

**Files:**
- Create: `lib/site.ts`, `lib/site.test.ts`, `vitest.config.ts`
- Modify: `middleware.ts`, `package.json` (add `vitest` dev dependency and `"test": "vitest run"`)

**Interfaces:**
- Produces, in `lib/site.ts`:
  - `type RouteDecision = { action: "next" } | { action: "redirect"; host: string; pathname: string } | { action: "rewrite"; pathname: string } | { action: "notFound" }`
  - `type SiteEnv = { heHosts?: string; heLive?: string; heCanonicalHost?: string }`
  - `isHebrewHost(host: string, env: SiteEnv): boolean`
  - `isSharedPath(pathname: string): boolean`
  - `decideRoute(host: string, pathname: string, env: SiteEnv): RouteDecision`
  - `readSiteEnv(): SiteEnv` (reads the four `HE_*` variables from `process.env`)

- [ ] **Step 1: Write failing tests** in `lib/site.test.ts`, one `it` per row:

| host | pathname | env | expected |
|---|---|---|---|
| `www.yossighinsberg.com` | `/story` | `{}` | redirect to host `yossighinsberg.com`, same path |
| `yossi-website.vercel.app` | `/` | `{}` | redirect to host `yossighinsberg.com` |
| `yossighinsberg.com` | `/story` | `{}` | next |
| `yossighinsberg.com` | `/he` | `{}` | notFound |
| `yossighinsberg.com` | `/he/hartzaot` | `{}` | notFound |
| `yossighinsberg.com` | `/hello` | `{}` | next (only `/he` and `/he/...` are blocked) |
| `yossighinsberg.com` | `/he/hartzaot` | `{heLive:"1", heCanonicalHost:"x.co.il"}` | redirect to host `x.co.il`, pathname `/hartzaot` |
| `x.co.il` | `/` | `{heHosts:"x.co.il"}` | rewrite to `/he` |
| `x.co.il` | `/hartzaot` | `{heHosts:"x.co.il"}` | rewrite to `/he/hartzaot` |
| `X.CO.IL` | `/hartzaot` | `{heHosts:"x.co.il"}` | rewrite to `/he/hartzaot` |
| `www.x.co.il` | `/hartzaot` | `{heHosts:"x.co.il", heCanonicalHost:"x.co.il"}` | redirect to host `x.co.il`, same path |
| `x.co.il` | `/he/hartzaot` | `{heHosts:"x.co.il"}` | redirect to same host, pathname `/hartzaot` |
| `x.co.il` | `/images/a.jpg` | `{heHosts:"x.co.il"}` | next |
| `x.co.il` | `/api/contact` | `{heHosts:"x.co.il"}` | next |
| `x.co.il` | `/sitemap.xml` | `{heHosts:"x.co.il"}` | next |
| `x.co.il` | `/robots.txt` | `{heHosts:"x.co.il"}` | next |
| `anything.vercel.app` | `/hartzaot` | `{heHosts:"*"}` | rewrite to `/he/hartzaot` |
| `yossi-website.vercel.app` | `/` | `{heHosts:"*"}` | rewrite to `/he` (wildcard wins over the duplicate-host redirect) |

  `isSharedPath` is true for paths beginning `/api/`, `/_next/`, `/images/`, `/videos/`, `/audio/`, and for `/icon.svg`, `/sitemap.xml`, `/robots.txt`, `/favicon.ico`, and any path ending in a file extension that exists at the top of `public/`. Test each.

- [ ] **Step 2:** Run `npm test`. Expected: FAIL, module not found.
- [ ] **Step 3:** Implement `lib/site.ts`. The English canonical host and duplicate hosts move here from `middleware.ts` unchanged.
- [ ] **Step 4:** Run `npm test`. Expected: PASS.
- [ ] **Step 5:** Rewrite `middleware.ts` as a wrapper: call `decideRoute(host, pathname, readSiteEnv())` and map the decision to `NextResponse.next()`, `.redirect(url, 308)`, `.rewrite(url)`, or for `notFound` a rewrite to `/__blocked` (a path no route matches except the English catch-all, so the English 404 renders with status 404). Keep the existing `matcher`.
- [ ] **Step 6:** Run `npm run build && scripts/list-routes.sh | diff - /tmp/routes-after.txt`. Expected: no difference. Start the app and confirm `/he` returns the English 404.
- [ ] **Step 7:** Commit and push. Message: `Host routing for a second site, Hebrew blocked until launch`.

### Task 3: Hebrew foundations and home page

**Files:**
- Create: `app/(he)/he/layout.tsx`, `app/(he)/he/page.tsx`, `app/(he)/he/not-found.tsx`, `app/(he)/he/[...notFound]/page.tsx`, `components/he/HeHeader.tsx`, `components/he/HeFooter.tsx`, `components/he/HeMobileCTA.tsx`, `components/he/Placeholder.tsx`, `data/he/site.ts`, `data/he/home.ts`, `data/he/glossary.md`, `data/he/site.test.ts`, `scripts/check-he-launch.sh`
- Modify: `.claude/launch.json` (add a config that runs dev with `HE_HOSTS=he.localhost:3000`)

**Interfaces:**
- Produces:
  - `data/he/site.ts`: `heSite = { name: string; nav: { label: string; href: string }[]; bookingHref: "/hazmana"; englishSiteLabel: string; englishSiteUrl: "https://yossighinsberg.com" }`
  - Page slugs, used by every later task: `/` home, `/hasipur` story, `/hartzaot` keynotes, `/video` videos, `/hamlatzot` endorsements, `/tikshoret` media, `/sheelot` FAQ, `/hazmana` booking, `/toda` thank you, `/negishut` accessibility, `/pratiyut` privacy.
  - `PLACEHOLDER` convention: `ph(text: string): string` exported from `data/he/site.ts` prefixes a string with `⟦טיוטה⟧ `. `<Placeholder>` renders a visibly marked block for missing media. `scripts/check-he-launch.sh` exits non-zero and lists file and line for every `ph(` call and every `<Placeholder` under `data/he/`, `app/(he)/`, `components/he/`.

- [ ] **Step 1: Write failing test** `data/he/site.test.ts`: every `heSite.nav[].href` and `heSite.bookingHref` has a matching directory under `app/(he)/he/` (home maps to `page.tsx`); no nav label contains a Latin letter; `ph("x")` starts with `⟦טיוטה⟧`.
- [ ] **Step 2:** Run `npm test`. Expected: FAIL.
- [ ] **Step 3:** Write `data/he/site.ts`, and `data/he/home.ts` holding the home page strings. The hero line is the spec's direction line, wrapped in `ph()`. Write `data/he/glossary.md` with the recurring terms chosen so far.
- [ ] **Step 4:** Write `app/(he)/he/layout.tsx`: `<html lang="he" dir="rtl">`, imports `@/app/(en)/globals.css`, Hebrew fonts via `next/font/google` with `subsets: ["hebrew", "latin"]` bound to the same CSS variables `--font-heading` and `--font-body`, body classes as the English layout, renders `HeHeader`, `children`, `HeMobileCTA`, `HeFooter`. Metadata: Hebrew title template, `openGraph.locale: "he_IL"`, `robots: { index: false, follow: false }` unless `HE_LIVE` is `1`. Start with Heebo for both; show Yossi the alternatives in preview.
- [ ] **Step 5:** Write `HeHeader`, `HeFooter` (includes the one link to the English site), `HeMobileCTA`, `Placeholder`. Reuse `components/ui/Button.tsx`; if it contains a directional class, replace it with the logical equivalent and re-check an English page.
- [ ] **Step 6:** Write the home page sections from `data/he/home.ts`: hero with a `<Placeholder>` for Hebrew footage, proof strip (`<Placeholder>` until clients are approved), what-came-after teaser, keynotes teaser, booking call. Write the Hebrew 404 and its catch-all.
- [ ] **Step 7:** Run `npm test`. Expected: PASS. Run `grep -rnE "\b(ml|mr|pl|pr)-[0-9]|\b(left|right)-[0-9]|text-(left|right)" components/he "app/(he)"`. Expected: no matches.
- [ ] **Step 8:** Verify in the browser at `http://he.localhost:3000/`: `document.documentElement.dir === "rtl"`, `lang === "he"`; at 375px wide `document.documentElement.scrollWidth <= window.innerWidth`; a test string mixing Hebrew with "Google", an email and a phone number reads in the right order; `/no-such` shows the Hebrew 404; `http://localhost:3000/` is still the English home and `http://localhost:3000/he` is the English 404. Screenshot desktop and mobile.
- [ ] **Step 9:** Run `scripts/check-he-launch.sh`. Expected: non-zero exit listing the placeholders.
- [ ] **Step 10:** Commit and push. Message: `Hebrew site foundations and draft home page`.

### Task 4: Remaining page shells

**Files:**
- Create: `app/(he)/he/{hasipur,hartzaot,video,hamlatzot,tikshoret,sheelot,toda}/page.tsx`, `data/he/{story,keynotes,videos,endorsements,media,faq}.ts`

**Interfaces:**
- Consumes: `heSite`, `ph`, `<Placeholder>`, slugs from Task 3.
- Produces: typed, empty-by-default content lists: `heKeynotes: { slug: string; title: string; forWhom: string; takeaway: string }[]`, `heVideos: { youtubeId: string; title: string; language: "he" | "en"; context: string }[]`, `heEndorsements: { quote: string; name: string; role: string; organization: string; consentOnRecord: true }[]`, `heMedia: { outlet: string; title: string; url: string; year?: number }[]`, `heFaq: { q: string; a: string }[]`.

- [ ] **Step 1: Write failing test:** each list type-checks; `heEndorsements` is empty (nothing unapproved ships); a page given an empty list renders a `<Placeholder>` and not an empty section.
- [ ] **Step 2:** Build each page to render its list, Hebrew items before English ones on the videos page. Each page exports Hebrew metadata. The story page structure follows the spec: the book in one paragraph, then the years since. Draft text in `ph()`.
- [ ] **Step 3:** Run `npm test` and the Task 3 Step 7 grep. Verify each page at `he.localhost:3000` at desktop and 375px. Run the Task 1 route diff for English routes: no change.
- [ ] **Step 4:** Commit and push. Message: `Hebrew page shells awaiting approved content`.

### Task 5: Agents, booking form, contact route

**Files:**
- Create: `data/he/agents.ts`, `data/he/agents.test.ts`, `lib/contact.ts`, `lib/contact.test.ts`, `lib/he/agentTag.ts`, `components/he/HeBookingForm.tsx`, `components/he/HeAgentCard.tsx`, `app/(he)/he/hazmana/page.tsx`, `data/he/booking.ts`
- Modify: `app/api/contact/route.ts`

**Interfaces:**
- Produces:
  - `data/he/agents.ts`: `type Agent = { tag: string; name: string; nameHe: string; agency: string | null; email: string | null; phone: string | null }`; `agents: Agent[]` with tags `rafi` (Rafi Agiv) and `gilat` (Gilat Aviv), contact fields `null`; `DEFAULT_AGENT_TAG = "rafi"`; `resolveAgent(tag: unknown): Agent`.
  - `lib/contact.ts`: `validateEnquiry(body: unknown): { ok: true; site: "en" | "he"; data: Enquiry } | { ok: false; error: string }`; `recipientsFor(site: "en" | "he", agent: Agent | null): string[]`; `subjectFor(site, data, agent): string`; `escapeHtml(s: string): string`.
  - `lib/he/agentTag.ts`: `captureAgentTag(): string` reads `?a=` from the URL, stores it in `sessionStorage` under `he_agent`, returns the stored tag or `""`. Mirrors `lib/utm.ts`.

- [ ] **Step 1: Write characterization tests first** in `lib/contact.test.ts`, pinning today's English behaviour from `app/api/contact/route.ts`: missing any of `name`, `email`, `organisation`, `eventLocation`, `format`, `budget` gives `{ ok: false, error: "Missing required fields" }`; bad email gives `"Invalid email address"`; `eventDate` is optional; `recipientsFor("en", null)` equals `["ghinsberg@gmail.com"]`; subject is `Booking Enquiry — {name}, {organisation}` with the `[SOURCE] ` prefix when `utm_source` is set.
- [ ] **Step 2: Write Hebrew tests:** with `site: "he"`, required fields are `name`, `organisation`, `phone`; `email` optional but validated when present; no `budget`. `recipientsFor("he", agent)` is `["ghinsberg@gmail.com"]` plus `agent.email` when not null. `subjectFor` starts `[IL] [RAFI] ` or `[IL] [GILAT] `. `escapeHtml('<b a="1">&')` equals `&lt;b a=&quot;1&quot;&gt;&amp;`.
- [ ] **Step 3: Write agent tests:** `resolveAgent("gilat").tag === "gilat"`; `"RAFI"`, `" rafi "` resolve to rafi; `""`, `undefined`, `null`, `42`, `"<script>"`, `"nobody"` all resolve to rafi.
- [ ] **Step 4:** Run `npm test`. Expected: FAIL.
- [ ] **Step 5:** Implement `data/he/agents.ts` and `lib/contact.ts`. Refactor `app/api/contact/route.ts` to use them. For `site: "he"` the server resolves the agent from the submitted tag with `resolveAgent`; it never reads an email address for routing from the request body. Every interpolated value in the Hebrew email is passed through `escapeHtml`; the Hebrew email body is `dir="rtl"`. `replyTo` is set only when an email was given. The English email HTML is left as it is today.
- [ ] **Step 6:** Run `npm test`. Expected: PASS.
- [ ] **Step 7:** Build `HeBookingForm` (labels, errors and confirmations from `data/he/booking.ts`; posts `site: "he"` and the tag from `captureAgentTag()`; on success goes to `/toda`) and `HeAgentCard` (shows the resolved agent's Hebrew name, and phone and email only when not null). The home page and booking page call `captureAgentTag()` on load so the tag survives navigation. Tagged pages declare the untagged address as canonical.
- [ ] **Step 8:** Verify on preview with `RESEND_API_KEY` unset or a test key: open `/?a=gilat`, navigate to `/hazmana`, the card shows Gilat; open in a fresh session with no tag, the card shows Rafi; `?a=<script>` shows Rafi and nothing unescaped. Submit the English form on the same preview and confirm a 200 and the unchanged subject line in the server log.
- [ ] **Step 9:** Commit and push. Message: `Hebrew booking form with per-agent links`.

### Task 6: Search, sharing, analytics

**Files:**
- Create: `app/robots.ts`, `lib/seo.ts`, `lib/seo.test.ts`, `components/he/HeStructuredData.tsx`
- Modify: `app/sitemap.ts`, `app/(en)/page.tsx`, `app/(he)/he/page.tsx`, `app/(he)/he/layout.tsx`
- Delete: `public/robots.txt`

**Interfaces:**
- Consumes: `isHebrewHost`, `readSiteEnv` from Task 2; slugs from Task 3.
- Produces: `sitemapFor(site: "en" | "he", base: string): MetadataRoute.Sitemap`; `robotsFor(site, base, heLive: boolean): MetadataRoute.Robots`; `homeAlternates(env: SiteEnv): Record<string, string> | undefined`.

- [ ] **Step 1: Write failing tests:** `sitemapFor("en", "https://yossighinsberg.com")` returns exactly the URLs today's `app/sitemap.ts` returns (snapshot taken before changing it); `sitemapFor("he", base)` returns the eleven Hebrew slugs and no English path; `robotsFor("en", ...)` allows `/` and names `https://yossighinsberg.com/sitemap.xml`; `robotsFor("he", base, false)` disallows `/`; `robotsFor("he", base, true)` allows `/`; `homeAlternates({})` is `undefined`; with `heLive: "1"` and `heCanonicalHost` set it returns `en`, `he` and `x-default` entries.
- [ ] **Step 2:** Run `npm test`. Expected: FAIL.
- [ ] **Step 3:** Implement. `app/sitemap.ts` and `app/robots.ts` read the request host with `headers()` and delegate. Add `alternates.languages` to the two home pages only, from `homeAlternates`. Add Hebrew Person structured data with the Hebrew book title `בחזרה מטואיצ'י`. Add the Plausible script to the Hebrew layout only when `HE_PLAUSIBLE_DOMAIN` is set.
- [ ] **Step 4:** Run `npm test`. Expected: PASS. Then compare `curl localhost:3000/robots.txt` and `/sitemap.xml` against production: same rules and the same URL set. Check `curl -H "Host: he.localhost:3000" localhost:3000/robots.txt` disallows everything.
- [ ] **Step 5:** Run the Task 1 route diff. Expected: `/robots.txt` added, nothing else changed.
- [ ] **Step 6:** Commit and push. Message: `Host-aware sitemap, robots and language alternates`.

### Task 7: Accessibility and legal pages

**Files:**
- Create: `app/(he)/he/negishut/page.tsx`, `app/(he)/he/pratiyut/page.tsx`, `data/he/legal.ts`

- [ ] **Step 1:** Build both pages from `data/he/legal.ts`. All text in `ph()`, with a comment that counsel must confirm it. Link both from `HeFooter`.
- [ ] **Step 2:** Accessibility pass over every Hebrew page: keyboard reach and visible focus on all controls, one `h1` per page, form fields with associated labels and error text announced, colour contrast of gold on near-black at body size at least 4.5:1 (if not, use `brand-gold-light` for text), every image with Hebrew alt text from `data/he/`, a skip link to main content.
- [ ] **Step 3:** Run Lighthouse accessibility on the home and booking pages at `he.localhost:3000`. Expected: 95 or higher. Record the scores in the commit message.
- [ ] **Step 4:** Commit and push. Message: `Hebrew accessibility pass, statement and privacy pages`.

### Task 8: Preview for Yossi, then launch (each step needs his explicit yes)

No code. Stop and ask at each step.

- [ ] **Step 1:** In Vercel, set `HE_HOSTS=*` for the Preview environment of branch `hebrew-site` only. Confirm the branch preview shows the Hebrew home and that production still returns the English 404 for `/he`. Send Yossi the link.
- [ ] **Step 2:** Content rounds: as Lucienne's finds arrive (`shared-mind/commons/…_lucienne-to-vandam_hebrew-site-assets.md`), view each asset, propose placement, and replace placeholders only with items and wording Yossi approved. Agents review the preview.
- [ ] **Step 3:** Merge to `main` in the task order above, after the route diff passes and Yossi says yes to that merge. Production stays English only because `HE_HOSTS` is unset there.
- [ ] **Step 4:** Launch gate: `scripts/check-he-launch.sh` exits zero; agent contacts confirmed by each agent; counsel has confirmed the legal pages; Yossi has approved every page.
- [ ] **Step 5:** Yossi buys the domain. Attach it and its `www` to the Vercel project. Set production `HE_HOSTS`, `HE_CANONICAL_HOST`, `HE_PLAUSIBLE_DOMAIN`. Verify the site on the real domain while `HE_LIVE` is still unset (noindex).
- [ ] **Step 6:** On Yossi's yes to launch: set `HE_LIVE=1`, redeploy, verify on the live domain: Hebrew home loads, `yossighinsberg.com/he/hartzaot` redirects to the Hebrew domain, robots allows indexing, a real test enquiry through each agent's link arrives at the right inbox. Report in the first line that it is live and where.
- [ ] **Step 7:** Update `CLAUDE.md`: hosting is Vercel, the Hebrew site exists, where its content lives. Log in `shared-mind/commons/LOG.md`.
