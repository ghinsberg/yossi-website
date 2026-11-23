// WCAG 2.x contrast helpers, used by tests to pin the colour pairs the
// Hebrew site relies on. Pure functions, no DOM.

/** Minimum ratio for normal-size text (WCAG 1.4.3). */
export const AA_TEXT = 4.5;
/** Minimum ratio for UI components and focus indicators (WCAG 1.4.11). */
export const AA_UI = 3;

function parse(hex: string): [number, number, number] {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function luminance(hex: string): number {
  const [r, g, b] = parse(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(a: string, b: string): number {
  const x = luminance(a);
  const y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

/** `fg` at `opacity` (0..1) over an opaque `bg`, as a lowercase hex colour. */
export function blend(fg: string, bg: string, opacity: number): string {
  const f = parse(fg);
  const g = parse(bg);
  return (
    "#" +
    f.map((v, i) => Math.round(v * opacity + g[i] * (1 - opacity)).toString(16).padStart(2, "0")).join("")
  );
}
