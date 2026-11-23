/**
 * Canonical link for a Hebrew page. Callers pass the page's clean path, never
 * a query such as ?a=rafi, so tagged URLs all point at the untagged address. Emitted only
 * once the Hebrew canonical host is known, because next/metadata needs
 * metadataBase to resolve a path; without it Next would invent a host.
 */
export function hebrewAlternates(path: string, canonicalHost = process.env.HE_CANONICAL_HOST) {
  return canonicalHost ? { canonical: path } : undefined;
}
