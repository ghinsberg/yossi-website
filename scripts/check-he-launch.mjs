// Launch gate for the Hebrew site. Exits non-zero while any of these exist:
//  a. a call to ph( or draft( under data/he, app/(he), components/he
//  b. a <Placeholder under app/(he) or components/he
//  c. a Hebrew string literal in a data/he .ts or .tsx file (any depth) that is
//     not the direct argument of ph(, draft( or ok(
//  d. any Hebrew character in components/he or app/(he) (comments included)
//  e. any Hebrew character in a .json, .md, .mdx, .css or .js file under the
//     three directories
// "Hebrew" includes the presentation forms (U+FB1D-FB4F) and \uXXXX or
// \u{...} escapes that spell a Hebrew code point.
// Pure detection lives in findLaunchBlockers and collect so both can be unit tested.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const HEBREW = new RegExp(
  [
    "[\\u0590-\\u05FF\\uFB1D-\\uFB4F]",
    "\\\\u05[9A-F][0-9A-F]",
    "\\\\uFB(?:1[D-F]|[23][0-9A-F]|4[0-9A-F])",
    "\\\\u\\{0*(?:5[9A-F][0-9A-F]|FB(?:1[D-F]|[23][0-9A-F]|4[0-9A-F]))\\}",
  ].join("|"),
  "i",
);
// Working notes in Hebrew, not shipped: the only file the gate skips on purpose.
const EXCLUDED = new Set(["data/he/glossary.md"]);
const DIRS = ["data/he", "app/(he)", "components/he"];
const CODE_EXT = /\.(ts|tsx)$/;
const OTHER_EXT = /\.(json|md|mdx|css|js)$/;
const WRAPPERS = new Set(["ph", "draft", "ok"]);

/** Splits source into string tokens and comment-free code (same length and
 *  line layout as the input; comments become spaces). */
function scan(text) {
  const strings = [];
  let code = "";
  let i = 0;
  const n = text.length;
  while (i < n) {
    const c = text[i];
    const d = text[i + 1];
    if (c === "/" && d === "/") {
      while (i < n && text[i] !== "\n") { code += " "; i++; }
    } else if (c === "/" && d === "*") {
      while (i < n && !(text[i] === "*" && text[i + 1] === "/")) {
        code += text[i] === "\n" ? "\n" : " ";
        i++;
      }
      if (i < n) { code += "  "; i += 2; }
    } else if (c === '"' || c === "'" || c === "`") {
      const start = i;
      i++;
      while (i < n && text[i] !== c) {
        if (text[i] === "\\") { i++; }
        i++;
      }
      i++;
      const end = Math.min(i, n);
      strings.push({ start, end, value: text.slice(start, end) });
      code += text.slice(start, end); // keep strings in code so offsets line up
    } else {
      code += c;
      i++;
    }
  }
  return { code, strings };
}

const lineOf = (text, idx) => text.slice(0, idx).split("\n").length;

export function findLaunchBlockers(files) {
  const out = [];
  for (const { path: raw, text } of files) {
    const path = raw.split(sep).join("/");
    if (/\.test\.tsx?$/.test(path) || EXCLUDED.has(path)) continue;
    if (!DIRS.some((d) => path.startsWith(`${d}/`))) continue;
    // e. Hebrew in any non-code file under the three directories
    if (OTHER_EXT.test(path)) {
      text.split("\n").forEach((l, k) => {
        if (HEBREW.test(l)) out.push({ path, line: k + 1, reason: "Hebrew text in a non-code file" });
      });
      continue;
    }
    if (!CODE_EXT.test(path)) continue;
    const isData = path.startsWith("data/he/");
    const isUi = !isData;
    const { code, strings } = scan(text);

    // d. Hebrew anywhere in UI code
    if (isUi) {
      text.split("\n").forEach((l, k) => {
        if (HEBREW.test(l)) out.push({ path, line: k + 1, reason: "Hebrew text in a component or app file (move it to data/he)" });
      });
    }
    // b. placeholders
    if (isUi) {
      for (const m of code.matchAll(/<Placeholder\b/g)) {
        out.push({ path, line: lineOf(text, m.index), reason: "<Placeholder> still present" });
      }
    }
    // a. draft calls (definitions excluded)
    for (const m of code.matchAll(/(?<![A-Za-z0-9_$.])(ph|draft)\s*\(/g)) {
      const before = code.slice(0, m.index);
      if (/function\s+$/.test(before)) continue;
      out.push({ path, line: lineOf(text, m.index), reason: `${m[1]}( draft text still present` });
    }
    // c. bare Hebrew literals in data
    if (isData) {
      for (const s of strings) {
        if (!HEBREW.test(s.value)) continue;
        const before = code.slice(0, s.start);
        // The stamp itself, defined once in data/he/site.ts. A constant of the
        // same name anywhere else gets no pass.
        if (path === "data/he/site.ts" && /\bexport\s+const\s+PLACEHOLDER_MARK\s*=\s*$/.test(before)) continue;
        const call = before.match(/(?<![A-Za-z0-9_$.])([A-Za-z_$][A-Za-z0-9_$]*)\s*\(\s*$/);
        const after = code.slice(s.end).match(/^\s*([,)])/);
        if (call && WRAPPERS.has(call[1]) && after) continue;
        out.push({ path, line: lineOf(text, s.start), reason: "Hebrew literal not wrapped in ph(, draft( or ok(" });
      }
    }
  }
  return out.sort((x, y) => x.path.localeCompare(y.path) || x.line - y.line);
}

function walk(root, rel, acc) {
  const abs = join(root, rel);
  let st;
  try { st = statSync(abs); } catch { return; }
  if (st.isDirectory()) {
    for (const e of readdirSync(abs)) walk(root, join(rel, e), acc);
  } else if (CODE_EXT.test(rel) || OTHER_EXT.test(rel)) {
    acc.push({ path: rel.split(sep).join("/"), text: readFileSync(abs, "utf8") });
  }
}

/** Reads every file the gate checks under root's three Hebrew directories. */
export function collect(root) {
  const files = [];
  for (const d of DIRS) walk(root, d, files);
  return files;
}

function main() {
  const root = join(fileURLToPath(import.meta.url), "..", "..");
  const blockers = findLaunchBlockers(collect(root));
  if (blockers.length) {
    console.log("Hebrew site is NOT launch-ready. Blockers:");
    for (const b of blockers) console.log(`${relative("", b.path)}:${b.line}: ${b.reason}`);
    console.log(`\nCount: ${blockers.length}`);
    process.exit(1);
  }
  console.log("No launch blockers found under data/he, app/(he), components/he.");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
