import * as home from "@/data/he/home";
import * as story from "@/data/he/story";
import * as keynotes from "@/data/he/keynotes";
import * as videos from "@/data/he/videos";
import * as endorsements from "@/data/he/endorsements";
import * as media from "@/data/he/media";
import * as faq from "@/data/he/faq";
import * as booking from "@/data/he/booking";
import * as thanks from "@/data/he/thanks";
import * as site from "@/data/he/site";
import * as legal from "@/data/he/legal";
import * as seo from "@/data/he/seo";
import * as agents from "@/data/he/agents";
import { writeFileSync } from "node:fs";

const files: [string, string, string, Record<string, unknown>][] = [
  ["home", "H", "עמוד הבית", home],
  ["story", "S", "הסיפור", story],
  ["keynotes", "K", "הרצאות", keynotes],
  ["videos", "V", "סרטונים", videos],
  ["endorsements", "E", "המלצות", endorsements],
  ["media", "M", "בתקשורת", media],
  ["faq", "Q", "שאלות ותשובות", faq],
  ["booking", "B", "הזמנת הרצאה (טופס)", booking],
  ["thanks", "T", "עמוד תודה", thanks],
  ["site", "G", "תפריט, כותרת תחתונה, עמוד 404, באנר", site],
  ["legal", "L", "נגישות ופרטיות (טיוטה לעורך דין)", legal],
  ["seo", "O", "תיאורים לגוגל", seo],
  ["agents", "A", "סוכנים", agents],
];
const HE = /[֐-׿]/;
const MARK = "⟦טיוטה⟧ ";
type Row = { id: string; file: string; path: string; text: string; stamped: boolean };
const rows: Row[] = [];
const seen = new Map<string, string>();
for (const [file, prefix, , mod] of files) {
  let n = 0;
  const walk = (v: unknown, path: string) => {
    if (typeof v === "string") {
      if (!HE.test(v)) return;
      const stamped = v.startsWith(MARK);
      const text = stamped ? v.slice(MARK.length) : v;
      n += 1;
      rows.push({ id: `${prefix}${String(n).padStart(2, "0")}`, file, path, text, stamped });
    } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i}]`));
    else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) walk(x, path ? `${path}.${k}` : k);
  };
  for (const [name, value] of Object.entries(mod)) {
    if (typeof value === "function") continue;
    walk(value, name);
  }
}
// The same string object may be re-exported from two modules; keep the first.
const out = rows.filter((r) => {
  const key = r.text;
  const where = `${r.file}:${r.path}`;
  if (r.file === "site" && seen.has(key)) return false;
  if (!seen.has(key)) seen.set(key, where);
  return true;
});
writeFileSync(process.argv[2], JSON.stringify({ sections: files.map(([f, p, t]) => ({ file: f, prefix: p, title: t })), rows: out }, null, 1));
console.log(out.length, "rows;", out.filter((r) => r.stamped).length, "stamped");
for (const [f] of files) console.log(f, out.filter((r) => r.file === f).length);
