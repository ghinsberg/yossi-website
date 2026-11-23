import { afterAll, describe, it, expect } from "vitest";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { collect, findLaunchBlockers, type LaunchFile } from "./check-he-launch.mjs";

const run = (files: LaunchFile[]) => findLaunchBlockers(files);
const data = (text: string) => run([{ path: "data/he/x.ts", text }]);

describe("findLaunchBlockers", () => {
  it("flags a bare Hebrew literal in a data file", () => {
    const r = data('export const a = { t: "שלום" };');
    expect(r).toHaveLength(1);
    expect(r[0]).toMatchObject({ path: "data/he/x.ts", line: 1 });
  });
  it("does not flag the same literal inside ok()", () => {
    expect(data('export const a = { t: ok("שלום") };')).toEqual([]);
  });
  it("flags ph() and draft() calls as drafts", () => {
    expect(data('const a = ph("שלום");')).toHaveLength(1);
    expect(data('const a = draft("שלום");')).toHaveLength(1);
  });
  it("flags ph with a space before the paren", () => {
    expect(data('const a = ph ("שלום");')).toHaveLength(1);
  });
  it("ignores ph( in line and block comments", () => {
    expect(data("// goes through ph(). also draft(\nconst a = 1;")).toEqual([]);
    expect(data("/* wrap in ph() or\n draft( */\nconst a = 1;")).toEqual([]);
  });
  it("does not treat // inside a string as a comment", () => {
    expect(data('const u = "https://x.com"; const a = ph("x");')).toHaveLength(1);
  });
  it("flags a multi-line bare literal with the right line", () => {
    const r = data('const a = 1;\nconst b = {\n  t: `שלום`,\n};');
    expect(r).toHaveLength(1);
    expect(r[0].line).toBe(3);
  });
  it("flags a Hebrew character in a component, comments included", () => {
    expect(run([{ path: "components/he/A.tsx", text: "export default () => <p>שלום</p>;" }])).toHaveLength(1);
    expect(run([{ path: "app/(he)/he/page.tsx", text: "// שלום\nconst a = 1;" }])).toHaveLength(1);
  });
  it("flags <Placeholder in components and app", () => {
    expect(run([{ path: "app/(he)/he/page.tsx", text: "<Placeholder>x</Placeholder>" }])).toHaveLength(1);
  });
  it("flags the draft banner in the layout, and nowhere outside the Hebrew directories", () => {
    const r = run([{ path: "app/(he)/he/layout.tsx", text: "<body>\n<HeDraftBanner />\n</body>" }]);
    expect(r).toEqual([{ path: "app/(he)/he/layout.tsx", line: 2, reason: "<HeDraftBanner> still present" }]);
    expect(run([{ path: "components/he/X.tsx", text: "<HeDraftBanner/>" }])).toHaveLength(1);
    expect(run([{ path: "components/other/X.tsx", text: "<HeDraftBanner />" }])).toEqual([]);
  });
  it("does not flag a component whose name only starts like the banner's", () => {
    expect(run([{ path: "components/he/X.tsx", text: "<HeDraftBannerNote />" }])).toEqual([]);
  });
  it("lets function definitions and the marker constant in data/he/site.ts pass", () => {
    const text = [
      'export const PLACEHOLDER_MARK = "⟦טיוטה⟧";',
      "export function ph(text: string): string { return text; }",
      "export function draft(text: string): string { return text; }",
      "export function ok(text: string): string { return text; }",
    ].join("\n");
    expect(run([{ path: "data/he/site.ts", text }])).toEqual([]);
  });
  it("gives a constant named PLACEHOLDER_MARK no pass outside data/he/site.ts", () => {
    expect(data('export const PLACEHOLDER_MARK = "שלום";')).toHaveLength(1);
    expect(run([{ path: "data/he/site.ts", text: 'const PLACEHOLDER_MARK = "שלום";' }])).toHaveLength(1);
  });
  it("checks .tsx files and subfolders under data/he", () => {
    expect(run([{ path: "data/he/a.tsx", text: 'const a = "שלום";' }])).toHaveLength(1);
    expect(run([{ path: "data/he/sub/a.ts", text: 'const a = "שלום";' }])).toHaveLength(1);
    expect(run([{ path: "data/he/sub/a.ts", text: 'const a = ph("שלום");' }])).toHaveLength(1);
  });
  it.each(["x.json", "x.md", "x.mdx", "x.css", "x.js"])("flags Hebrew in %s under each directory", (f) => {
    for (const d of ["data/he", "app/(he)/he", "components/he"]) {
      expect(run([{ path: `${d}/${f}`, text: "a\nשלום" }])).toEqual([
        { path: `${d}/${f}`, line: 2, reason: "Hebrew text in a non-code file" },
      ]);
    }
  });
  it("passes non-code files without Hebrew", () => {
    expect(run([{ path: "components/he/x.css", text: ".a { color: red; }" }])).toEqual([]);
  });
  it("excludes data/he/glossary.md by exact path only", () => {
    expect(run([{ path: "data/he/glossary.md", text: "שלום" }])).toEqual([]);
    expect(run([{ path: "data/he/sub/glossary.md", text: "שלום" }])).toHaveLength(1);
  });
  it("treats \\u escapes of Hebrew code points as Hebrew", () => {
    expect(run([{ path: "components/he/A.tsx", text: 'const a = "\\u05D0";' }])).toHaveLength(1);
    expect(run([{ path: "components/he/A.tsx", text: 'const a = "\\u{5d0}";' }])).toHaveLength(1);
    expect(data('const a = "\\u05e9";')).toHaveLength(1);
    expect(run([{ path: "components/he/A.tsx", text: 'const a = "\\u0041";' }])).toEqual([]);
  });
  it("treats presentation forms U+FB1D-FB4F as Hebrew", () => {
    expect(run([{ path: "components/he/A.tsx", text: "const a = '\uFB2A';" }])).toHaveLength(1);
    expect(run([{ path: "components/he/A.tsx", text: "const a = '\uFB4F';" }])).toHaveLength(1);
  });
  it("yields zero blockers for an all-ok() data file and clean components", () => {
    expect(
      run([
        { path: "data/he/x.ts", text: 'export const a = { t: ok("שלום"), u: ok("עולם") };' },
        { path: "components/he/A.tsx", text: "export default () => <p>{a.t}</p>;" },
      ]),
    ).toEqual([]);
  });
  it("ignores test files", () => {
    expect(run([{ path: "data/he/x.test.ts", text: 'ph("שלום")' }])).toEqual([]);
  });
});

describe("collect", () => {
  const here = dirname(fileURLToPath(import.meta.url));
  const root = join(here, "..", ".superpowers", "sdd", "2026-11-23-hebrew-site-implementation", "collect-fixture");
  const put = (rel: string, text: string) => {
    mkdirSync(dirname(join(root, rel)), { recursive: true });
    writeFileSync(join(root, rel), text);
  };
  afterAll(() => rmSync(root, { recursive: true, force: true }));

  it("walks the three directories and subfolders, reads the right extensions", () => {
    rmSync(root, { recursive: true, force: true });
    put("data/he/a.ts", 'export const a = ok("x");');
    put("data/he/sub/b.tsx", 'export const b = "שלום";');
    put("data/he/glossary.md", "שלום");
    put("app/(he)/he/page.tsx", "export default 1;");
    put("app/(he)/he/x.json", '{"a":"שלום"}');
    put("components/he/x.css", "/* שלום */");
    put("components/he/x.png", "שלום");
    put("components/en/y.ts", 'const y = "שלום";');
    const files = collect(root);
    expect(files.map((f) => f.path).sort()).toEqual([
      "app/(he)/he/page.tsx",
      "app/(he)/he/x.json",
      "components/he/x.css",
      "data/he/a.ts",
      "data/he/glossary.md",
      "data/he/sub/b.tsx",
    ]);
    expect(findLaunchBlockers(files).map((b) => b.path)).toEqual([
      "app/(he)/he/x.json",
      "components/he/x.css",
      "data/he/sub/b.tsx",
    ]);
  });
});
