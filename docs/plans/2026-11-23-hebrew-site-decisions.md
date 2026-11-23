# Hebrew Site — Decisions Vandam Made During the Build

**Date:** 2026-11-23. **Branch:** `hebrew-site`. **Status:** built, reviewed, not merged, not launched.
Each line is a call made without asking Yossi, in the order made, with what it costs if wrong. Correct any of them.

## Calls that change what you see or how launch works

1. **Every Hebrew string is marked draft or approved, menu labels included.** Body copy shows a visible ⟦טיוטה⟧ stamp. Short labels are drafts without a stamp. Nothing is marked approved yet. *If wrong:* more approving for you than you wanted.
2. **The build refuses to deploy a Hebrew site to the real domain while any draft remains.** *If wrong:* you cannot look at drafts on the .co.il address, only on a preview link.
3. **The FAQ is empty** instead of five questions with identical "answer pending" lines. The five draft questions are kept in the build notes. *If wrong:* one page looks emptier in preview.
4. **Hebrew videos use YouTube's privacy-friendlier player**, and the draft privacy notice says video pages embed YouTube. The English site's player is unchanged.
5. **Tablets held upright (768 to 1023 px) get the hamburger menu and the bottom booking bar**, because the full menu did not fit. A design call for you.
6. **"More than forty years"** replaced "about forty years" in the drafts. 1981 to 2026 is 45.
7. **"Talks in Hebrew" is treated as a confirmed fact** (you said so on 2026-11-23). The browser tab title "הרצאות לארגונים ולכנסים" stands as a draft.
8. **Page descriptions for Google are neutral** ("המלצות על יוסי גינסברג") and claim nothing about coverage or clients until you approve claims.
9. **The thank-you page is left out of the Hebrew sitemap** so it is not indexed.
10. **Chalalán is written צ'לאלן** as a draft. Confirm the spelling.

## Calls about the English site

11. **The English "Lost in the jungle?" page now assembles in the browser** instead of arriving finished from the server. Same look, same 404 status. *If wrong:* a visitor with JavaScript off sees a blank 404. The alternative was an experimental Next.js setting on the live site.
12. **A web address that is malformed at the encoding level now gets a plain "not found"** on both sites. Vercel already rejects these before they reach the site.
13. **The English contact route was reorganized but its behaviour was pinned first** with recorded before/after comparisons. The English email's unescaped HTML (a pre-existing weakness) was left exactly as it is and is now pinned by a test.
14. **CLAUDE.md was corrected**: pages live in `app/(en)/` and `app/(he)/he/`, and hosting is Vercel. Line 4 still says the build "replaces the current Wix site"; that is your document and was left.

## Technical calls

15. Route lists for the before/after proof are read from Next's build output files, not the console.
16. Local checks ran on port 3100 so they could not collide with the main project.
17. Stub pages were created early so each step's tests passed, then replaced.
18. No real email was sent at any point; every test run used a dummy key. Delivery is unverified until launch.
19. Hebrew test fixtures are allowed in test files; the "no Hebrew outside `data/he/`" rule covers production code.
20. Draft strings inside a visibly marked placeholder block do not need their own stamp.
21. The setting that reads the site's Hebrew configuration covers three variables; the visit-counter setting is read where it is used.
22. The no-link-helper deviation from the design stands: the Hebrew site is only ever served on a Hebrew host, including in preview.
23. **One fix was made by Vandam directly, without an independent review:** the build gate now also triggers when only the canonical Hebrew host is set, and an English host can never be configured as the Hebrew one. Tests cover both. This closed a hole the last reviewer found after the single allowed fix pass.

## Known and deliberately left for the launch stage

- Spam protection on the booking form. Add it at the same moment the agents' real addresses go in.
- A Hebrew share image for WhatsApp previews. Needs your pick.
- The launch check does not look for Hebrew written as page markup inside a data file. No such file exists and the convention forbids it.
- Confirm Vercel's build command is `npm run build`, or the build gate is skipped.
- A summary line for form errors, and behaviour tests for the mobile menu.
- Every `HE_*` setting change needs a fresh build, and the domain is attached only after the settings exist. The plan's launch steps should be corrected to say so before they are followed.
