import { describe, it, expect } from "vitest";
// @ts-expect-error plain .mjs without types
import { findLaunchBlockers } from "./check-he-launch.mjs";

type B = { path: string; line: number; reason: string };
const run = (files: { path: string; text: string }[]): B[] => findLaunchBlockers(files);
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
  it("lets function definitions and the marker constant pass", () => {
    const text = [
      'export const PLACEHOLDER_MARK = "⟦טיוטה⟧";',
      "export function ph(text: string): string { return text; }",
      "export function draft(text: string): string { return text; }",
      "export function ok(text: string): string { return text; }",
    ].join("\n");
    expect(data(text)).toEqual([]);
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
