// Launch gate for the Hebrew site. Exits non-zero while any of these exist:
//  a. a call to ph( or draft( under data/he, app/(he), components/he
//  b. a <Placeholder under app/(he) or components/he
//  c. a Hebrew string literal in data/he/*.ts that is not the direct argument
//     of ph(, draft( or ok(
//  d. any Hebrew character in components/he or app/(he) (comments included)
// Pure detection lives in findLaunchBlockers so it can be unit tested.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const HEBREW = /[֐-׿]/;
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
    if (/\.test\.tsx?$/.test(path)) continue;
    const isData = /^data\/he\/[^/]+\.ts$/.test(path);
    const isUi = path.startsWith("components/he/") || path.startsWith("app/(he)/");
    if (!isData && !isUi) continue;
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
        if (/\bPLACEHOLDER_MARK\s*=\s*$/.test(before)) continue;
        const call = before.match(/(?<![A-Za-z0-9_$.])([A-Za-z_$][A-Za-z0-9_$]*)\s*\(\s*$/);
        const after = code.slice(s.end).match(/^\s*([,)])/);
        if (call && WRAPPERS.has(call[1]) && after) continue;
        out.push({ path, line: lineOf(text, s.start), reason: "Hebrew literal not wrapped in ph(, draft( or ok(" });
      }
    }
  }
  return out.sort((x, y) => x.path.localeCompare(y.path) || x.line - y.line);
}

function collect(root, rel, acc) {
  const abs = join(root, rel);
  let st;
  try { st = statSync(abs); } catch { return; }
  if (st.isDirectory()) {
    for (const e of readdirSync(abs)) collect(root, join(rel, e), acc);
  } else if (/\.(ts|tsx)$/.test(rel)) {
    acc.push({ path: rel, text: readFileSync(abs, "utf8") });
  }
}

function main() {
  const root = join(fileURLToPath(import.meta.url), "..", "..");
  const files = [];
  for (const d of ["data/he", "app/(he)", "components/he"]) collect(root, d, files);
  const blockers = findLaunchBlockers(files);
  if (blockers.length) {
    console.log("Hebrew site is NOT launch-ready. Blockers:");
    for (const b of blockers) console.log(`${relative("", b.path)}:${b.line}: ${b.reason}`);
    console.log(`\nCount: ${blockers.length}`);
    process.exit(1);
  }
  console.log("No launch blockers found under data/he, app/(he), components/he.");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
