import { describe, it, expect } from "vitest";
import { contrastRatio, blend, AA_TEXT, AA_UI } from "./contrast";

// Brand tokens from app/(en)/globals.css.
const BG = "#0A0A0A";
const GOLD = "#B8860B";
const GOLD_LIGHT = "#D4A843";
const SECONDARY = "#CDCCCA";
const SURFACE = "#1B3A2D";

describe("contrastRatio", () => {
  it("is 21 for black on white and 1 for identical colours", () => {
    expect(contrastRatio("#000000", "#FFFFFF")).toBeCloseTo(21, 5);
    expect(contrastRatio("#123456", "#123456")).toBeCloseTo(1, 5);
  });
  it("is symmetric", () => {
    expect(contrastRatio(GOLD, BG)).toBeCloseTo(contrastRatio(BG, GOLD), 10);
  });
  it("accepts 3-digit hex", () => {
    expect(contrastRatio("#000", "#fff")).toBeCloseTo(21, 5);
  });
});

describe("blend", () => {
  it("returns the foreground at full opacity and the background at zero", () => {
    expect(blend("#FFFFFF", "#000000", 1)).toBe("#ffffff");
    expect(blend("#FFFFFF", "#000000", 0)).toBe("#000000");
  });
});

describe("Hebrew site colour pairs (WCAG AA)", () => {
  const pairs: [string, string, string, number][] = [
    ["gold text on bg", GOLD, BG, AA_TEXT],
    ["gold-light text on bg", GOLD_LIGHT, BG, AA_TEXT],
    ["black label on gold button", "#000000", GOLD, AA_TEXT],
    ["black label on gold-light hover", "#000000", GOLD_LIGHT, AA_TEXT],
    ["secondary text on bg", SECONDARY, BG, AA_TEXT],
    ["secondary text on surface/30 section", SECONDARY, blend(SURFACE, BG, 0.3), AA_TEXT],
    ["gold text on Placeholder tint (gold/10 on bg)", GOLD, blend(GOLD, BG, 0.1), AA_TEXT],
    ["input placeholder (secondary/70) on input fill (white/5)", blend(SECONDARY, BG, 0.7), blend("#FFFFFF", BG, 0.05), AA_TEXT],
    ["focus outline (gold-light) on bg", GOLD_LIGHT, BG, AA_UI],
    ["focus ring (gold-light) on input fill", GOLD_LIGHT, blend("#FFFFFF", BG, 0.05), AA_UI],
    ["focus outline (black) on gold CTA bar", "#000000", GOLD, AA_UI],
    ["error red-400 on bg", "#f87171", BG, AA_TEXT],
  ];
  for (const [name, fg, bg, min] of pairs) {
    it(`${name} is at least ${min}:1`, () => {
      expect(contrastRatio(fg, bg)).toBeGreaterThanOrEqual(min);
    });
  }
  it("pins the thresholds", () => {
    expect(AA_TEXT).toBe(4.5);
    expect(AA_UI).toBe(3);
  });
  it("documents the failing pair: placeholder at /50 opacity is below 4.5", () => {
    expect(contrastRatio(blend(SECONDARY, BG, 0.5), blend("#FFFFFF", BG, 0.05))).toBeLessThan(AA_TEXT);
  });
});
