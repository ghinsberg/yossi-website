import { draft } from "./site";

export type Agent = {
  /** Lowercase tag used in the ?a= link. */
  tag: string;
  /** Latin spelling, used in the owner-facing subject line. */
  name: string;
  /** Hebrew spelling, shown on the page. */
  nameHe: string;
  agency: string | null;
  email: string | null;
  phone: string | null;
};

// Contact details stay null until each agent confirms what may be published.
export const agents: Agent[] = [
  { tag: "rafi", name: "Rafi Agiv", nameHe: draft("רפי אגיב"), agency: null, email: null, phone: null },
  { tag: "gilat", name: "Gilat Aviv", nameHe: draft("גילת אביב"), agency: null, email: null, phone: null },
];

export const DEFAULT_AGENT_TAG = "rafi";

/** Normalises a tag (trim, lowercase). Returns "" for anything that is not a string. */
export function normaliseTag(tag: unknown): string {
  return typeof tag === "string" ? tag.trim().toLowerCase() : "";
}

/** The agent for a tag. Anything unknown, malformed or missing gets the default agent. */
export function resolveAgent(tag: unknown): Agent {
  const t = normaliseTag(tag);
  return agents.find((a) => a.tag === t) ?? agents.find((a) => a.tag === DEFAULT_AGENT_TAG)!;
}
