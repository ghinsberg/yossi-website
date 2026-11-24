#!/usr/bin/env python3
"""Build the Google Docs requests that bring Yossi's copy-deck doc in line with data/he.

Usage: sync-he-copy-deck.py READ_DOC.json ROWS_NOW.json [--write-map]

READ_DOC.json  a saved `read_doc` result for the deck document.
ROWS_NOW.json  a fresh export from scripts/export-he-copy.ts.
Prints update_doc arguments (requests + writeControl) as JSON on stdout and a
summary on stderr. Row codes are fixed: existing rows keep their code (matched
by file + path), new strings get the next free code in their section and are
appended as new table rows. A string that no longer exists, or is empty, is
cleared in the doc and keeps its row. With --write-map the map file is updated.

It refuses to run if a doc row no longer matches the map (the owner has started
editing): his edits must be applied to the site first, never overwritten.
"""
import json, sys, re

MAP = "docs/plans/he-copy-deck/2026-11-24-rows.json"
doc_path, now_path = sys.argv[1], sys.argv[2]
write_map = "--write-map" in sys.argv

d = json.load(open(doc_path)); c = d.get("content", d)
tab = c["tabs"][0]; tab_id = tab["tabProperties"]["tabId"]; rev = c["revisionId"]
body = tab["documentTab"]["body"]["content"]
deck = json.load(open(MAP)); now = json.load(open(now_path))["rows"]

def cell(cellobj):
    text, start, end = "", None, None
    for el in cellobj["content"]:
        p = el.get("paragraph")
        if not p: continue
        for e in p["elements"]:
            if start is None: start = e["startIndex"]
            end = e["endIndex"]; text += e.get("textRun", {}).get("content", "")
    return text.rstrip("\n"), start, end

tables = []  # per table: start index, end of last row, rows {code: (text, start, end)}
for el in body:
    t = el.get("table")
    if not t: continue
    rows = {}
    for r in t["tableRows"]:
        txt, s, e = cell(r["tableCells"][0]); code, _, _ = cell(r["tableCells"][1])
        rows[code.replace("⚑", "").strip()] = (txt, s, e)
    tables.append({"start": el["startIndex"], "end": t["tableRows"][-1]["endIndex"], "nrows": len(t["tableRows"]), "rows": rows})

prefix_table = {}
for i, t in enumerate(tables):
    for code in t["rows"]:
        m = re.match(r"^([A-Z])\d+$", code)
        if m: prefix_table[m.group(1)] = i

by_path_now = {(r["file"], r["path"]): r for r in now}
known = {(r["file"], r["path"]) for r in deck["rows"]}
prefix_of = {s["file"]: s["prefix"] for s in deck["sections"]}

# 1. the doc must still equal the map (no owner edits yet)
drift = []
for r in deck["rows"]:
    t = tables[prefix_table[r["id"][0]]]["rows"].get(r["id"])
    if t is None or t[0] != r["text"]: drift.append(r["id"])
if drift:
    sys.exit("REFUSING: doc rows differ from the map (owner edits?): " + ", ".join(drift[:20]))

# 2. changes to existing rows
edits = []  # (index_start, index_end_excl_newline, new_text)
changed = cleared = 0
for r in deck["rows"]:
    cur = by_path_now.get((r["file"], r["path"]))
    new_text = cur["text"] if cur else ""
    if new_text != r["text"]:
        _, s, e = tables[prefix_table[r["id"][0]]]["rows"][r["id"]]
        edits.append((prefix_table[r["id"][0]], s, e - 1, new_text))
        if new_text: changed += 1
        else: cleared += 1
        r["text"] = new_text
    if cur: r["stamped"] = bool(r.get("flag")) or r["stamped"]

# 3. new rows
maxnum = {}
for r in deck["rows"]:
    p, n = r["id"][0], int(r["id"][1:]); maxnum[p] = max(maxnum.get(p, 0), n)
added = {}
for r in now:
    k = (r["file"], r["path"])
    if k in known or not r["text"]: continue
    p = prefix_of[r["file"]]; maxnum[p] = maxnum.get(p, 0) + 1
    row = {"id": f"{p}{maxnum[p]:02d}", "file": r["file"], "path": r["path"], "text": r["text"], "stamped": True, "added": "2026-11-24"}
    deck["rows"].append(row); added.setdefault(prefix_table[p], []).append(row)

# 4. requests, bottom of the document first so earlier indexes stay valid
reqs = []
for ti in sorted(range(len(tables)), reverse=True):
    t = tables[ti]; new = added.get(ti, [])
    for j in range(len(new)):
        reqs.append({"insertTableRow": {"tableCellLocation": {"tableStartLocation": {"index": t["start"], "tabId": tab_id}, "rowIndex": t["nrows"] - 1 + j, "columnIndex": 0}, "insertBelow": True}})
    # an empty 2-cell row occupies 5 indexes: row(1) + 2 x (cell(1) + newline(1))
    for j in reversed(range(len(new))):
        row_start = t["end"] + 5 * j
        reqs.append({"insertText": {"location": {"index": row_start + 4, "tabId": tab_id}, "text": new[j]["id"] + " ⚑"}})
        reqs.append({"insertText": {"location": {"index": row_start + 2, "tabId": tab_id}, "text": new[j]["text"]}})
    for (_, s, e, text) in sorted([x for x in edits if x[0] == ti], key=lambda x: -x[1]):
        if e > s: reqs.append({"deleteContentRange": {"range": {"startIndex": s, "endIndex": e, "tabId": tab_id}}})
        if text: reqs.append({"insertText": {"location": {"index": s, "tabId": tab_id}, "text": text}})

deck["note"] = "Row ids are fixed. Texts are refreshed by file+path. An empty text means the string was cleared on the site. Rows with 'added' were appended after the first export."
if write_map: json.dump(deck, open(MAP, "w"), ensure_ascii=False, indent=1)
print(json.dumps({"requests": reqs, "writeControl": {"requiredRevisionId": rev}}, ensure_ascii=False))
print(f"changed {changed}, cleared {cleared}, added {sum(len(v) for v in added.values())}, requests {len(reqs)}", file=sys.stderr)
