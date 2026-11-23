import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { createHash } from "node:crypto";

// Self-hosted fonts: the CSS, the preload links and public/fonts must agree,
// and nothing may fetch fonts from Google at build or run time.
const css = {
  en: readFileSync("app/fonts-en.css", "utf8"),
  he: readFileSync("app/fonts-he.css", "utf8"),
};
const layouts = {
  en: readFileSync("app/(en)/layout.tsx", "utf8"),
  he: readFileSync("app/(he)/he/layout.tsx", "utf8"),
};
const files = readdirSync("public/fonts").filter((f) => f.endsWith(".woff2"));
const urlsIn = (s: string) => [...s.matchAll(/url\("\/fonts\/([^"]+)"\)/g)].map((m) => m[1]);
// Preloaded files, from the font names listed in the layout's preload loop.
const preloadsIn = (s: string) => {
  const list = s.match(/(?:FONT_PRELOADS = |const f of )\[([^\]]*)\]/)?.[1] ?? "";
  return [...list.matchAll(/"([^"]+)"/g)].map((m) => `${m[1]}.woff2`);
};

describe("self-hosted fonts", () => {
  it("every url in the fonts CSS exists in public/fonts", () => {
    for (const f of [...urlsIn(css.en), ...urlsIn(css.he)]) expect(files).toContain(f);
  });
  it("every file in public/fonts is referenced by the fonts CSS", () => {
    const used = new Set([...urlsIn(css.en), ...urlsIn(css.he)]);
    for (const f of files) expect(used.has(f)).toBe(true);
  });
  it("the CSS has no remote sources", () => {
    for (const s of Object.values(css)) expect(s).not.toMatch(/https?:|fonts\.(googleapis|gstatic)/);
  });
  it("each family stays on its own site's CSS", () => {
    expect(css.en).not.toContain("Heebo");
    expect(css.he).not.toMatch(/DM Sans|Inter/);
  });
  it("binds the font variables per site, with the fallback faces", () => {
    expect(css.en).toMatch(/html\[lang="en"\] \{\s*--font-heading: "DM Sans", "DM Sans Fallback";\s*--font-body: "Inter", "Inter Fallback";/);
    expect(css.he).toMatch(/html\[lang="he"\] \{\s*--font-heading: "Heebo", "Heebo Fallback";\s*--font-body: "Heebo", "Heebo Fallback";/);
    for (const fb of ["DM Sans Fallback", "Inter Fallback"]) expect(css.en).toContain(`font-family: "${fb}";`);
    expect(css.he).toContain('font-family: "Heebo Fallback";');
  });
  it("layouts no longer use the Google font loader and import their fonts CSS", () => {
    for (const s of Object.values(layouts)) expect(s).not.toContain("next/" + "font");
    expect(layouts.en).toContain('import "@/app/fonts-en.css";');
    expect(layouts.he).toContain('import "@/app/fonts-he.css";');
  });
  it("preloads only each site's above-the-fold files, all of which exist", () => {
    expect(preloadsIn(layouts.en)).toEqual(["dm-sans-latin.woff2", "inter-latin.woff2"]);
    expect(preloadsIn(layouts.he)).toEqual(["heebo-latin.woff2", "heebo-hebrew.woff2"]);
    for (const f of [...preloadsIn(layouts.en), ...preloadsIn(layouts.he)]) expect(files).toContain(f);
  });
  // /fonts/* is cached as immutable for a year, so a file must never change in place.
  it("every font file matches its SHA-256 row in public/fonts/README.md, and has one", () => {
    const readme = readFileSync("public/fonts/README.md", "utf8");
    const rows = new Map(
      [...readme.matchAll(/^\| `([^`]+\.woff2)` \|.*\| `([0-9a-f]{64})` \|$/gm)].map((m) => [m[1], m[2]]),
    );
    expect([...rows.keys()].sort()).toEqual([...files].sort());
    for (const f of files) {
      const sha = createHash("sha256").update(readFileSync(`public/fonts/${f}`)).digest("hex");
      expect(sha, f).toBe(rows.get(f));
    }
  });
  it("ships the OFL 1.1 text with the three copyright lines, referenced from the README", () => {
    const ofl = readFileSync("public/fonts/OFL.txt", "utf8");
    for (const who of ["DM Sans", "Inter", "Heebo"]) expect(ofl).toMatch(new RegExp(`^Copyright \\d{4} The ${who} Project Authors`, "m"));
    expect(ofl).toContain("SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007");
    expect(readFileSync("public/fonts/README.md", "utf8")).toContain("(OFL.txt)");
  });
});
