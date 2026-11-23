/**
 * Agent tag capture for the Hebrew site. Mirrors lib/utm.ts.
 *
 * A visitor arrives on /?a=gilat, browses, then books on /hazmana. The tag is
 * kept in sessionStorage so the booking page still knows it. Only a tag that
 * matches a known agent is ever stored; anything else is ignored.
 */
import { agents, normaliseTag } from "@/data/he/agents";

const STORAGE_KEY = "he_agent";

const isKnown = (t: string) => t !== "" && agents.some((a) => a.tag === t);

/**
 * Reads `?a=` from the current URL, stores it when it names a known agent,
 * and returns the stored tag ("" when there is none). Safe on the server and
 * when sessionStorage throws (privacy mode): returns "" and never throws.
 */
export function captureAgentTag(): string {
  if (typeof window === "undefined") return "";
  try {
    const fromUrl = normaliseTag(new URLSearchParams(window.location.search).get("a"));
    if (isKnown(fromUrl)) window.sessionStorage.setItem(STORAGE_KEY, fromUrl);
  } catch {
    // storage unavailable: fall through to the read, which also fails safe
  }
  try {
    const stored = normaliseTag(window.sessionStorage.getItem(STORAGE_KEY));
    return isKnown(stored) ? stored : "";
  } catch {
    return "";
  }
}
