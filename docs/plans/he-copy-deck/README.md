# Hebrew copy deck (for Yossi's edit)

Yossi edits the Hebrew site copy in a Google Doc, not in code.

- **Doc:** https://docs.google.com/document/d/1BRNVS7wIkA7vedef8Q0NdSQfAxXQ-HnHc6JrpEfK3Us/edit (in his Drive, created 2026-11-24).
- **Map:** `2026-11-24-rows.json` holds every row exactly as exported: `id` (the code shown in the doc, for example `H02`), `file` (`data/he/<file>.ts`), `path` (export name and key path), `text`, and `stamped` (true when the site shows a ⟦טיוטה⟧ stamp: a claim or proposal).
- **Export script:** `scripts/export-he-copy.ts`. Bundle and run:
  `npx esbuild scripts/export-he-copy.ts --bundle --platform=node --format=cjs --alias:@=. --outfile=<scratch>/export.cjs && node <scratch>/export.cjs <out.json>`

## Applying his edits

1. Read the doc (Drive `read_file_content`). Each table row is `text | code`.
2. For each code, compare the doc's text with `text` in the map. A difference is his edit.
3. Apply the edit at `file` + `path` in `data/he/`. His wording goes in verbatim. Text he edited is approved by him: wrap it in `ok()`. Text he did not touch stays a draft.
4. An emptied row means remove that text from the site. Text written under a table is an addition: ask where it goes if it is not obvious.
5. The same Hebrew string can appear under several codes (a button label used on three pages). If he changes one and not the others, apply only that one and tell him.
6. Re-export, and never regenerate the doc over his edits: a regenerated doc would be a new file and would lose his work.
