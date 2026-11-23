import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { heSite, ph, draft, ok } from "./site";

const root = join(__dirname, "..", "..", "app", "(he)", "he");

function routeExists(href: string): boolean {
  if (href === "/") return existsSync(join(root, "page.tsx"));
  return existsSync(join(root, href.replace(/^\//, ""), "page.tsx"));
}

describe("heSite", () => {
  it("every nav href has a page under app/(he)/he", () => {
    for (const item of heSite.nav) expect(routeExists(item.href), item.href).toBe(true);
  });
  it("booking href has a page", () => {
    expect(heSite.bookingHref).toBe("/hazmana");
    expect(routeExists(heSite.bookingHref)).toBe(true);
  });
  it("no nav label contains a Latin letter", () => {
    for (const item of heSite.nav) expect(item.label).not.toMatch(/[A-Za-z]/);
  });
  it("ph() prefixes the draft marker", () => {
    expect(ph("x").startsWith("⟦טיוטה⟧")).toBe(true);
  });
});

describe("wrappers", () => {
  it("draft() and ok() return the text unchanged", () => {
    expect(draft("x")).toBe("x");
    expect(ok("x")).toBe("x");
  });
});
