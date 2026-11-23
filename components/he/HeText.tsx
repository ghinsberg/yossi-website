import { Fragment } from "react";

// Hebrew copy can carry Latin fragments (company names, titles). Each Latin
// run is isolated in <bdi> so it keeps its own direction inside the
// right-to-left line. A run starts with a Latin letter and may hold spaces,
// digits and . , ' & / : - between Latin letters or digits.
const LATIN_RUN = /[A-Za-z][A-Za-z0-9 .,'’&/:-]*[A-Za-z0-9]|[A-Za-z]/g;

export function splitLatin(text: string): { text: string; latin: boolean }[] {
  const out: { text: string; latin: boolean }[] = [];
  let last = 0;
  for (const m of text.matchAll(LATIN_RUN)) {
    if (m.index > last) out.push({ text: text.slice(last, m.index), latin: false });
    out.push({ text: m[0], latin: true });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push({ text: text.slice(last), latin: false });
  return out;
}

export default function HeText({ children }: { children: string }) {
  return (
    <>
      {splitLatin(children).map((p, i) =>
        p.latin ? <bdi key={i}>{p.text}</bdi> : <Fragment key={i}>{p.text}</Fragment>,
      )}
    </>
  );
}
