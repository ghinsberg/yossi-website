// Contact enquiry logic shared by the English and Hebrew booking forms.
// Pure functions only (no network, no env), so every rule is unit tested.
// The English path mirrors what app/api/contact/route.ts did before Task 5,
// character for character (pinned by lib/contact.route.test.ts).
import { resolveAgent, type Agent } from "@/data/he/agents";
import { heBooking } from "@/data/he/booking";

export const OWNER_EMAIL = "ghinsberg@gmail.com";
export const EMAIL_FROM = "Yossi Ghinsberg <hello@yossighinsberg.com>";

export type Site = "en" | "he";

/** Fields of an enquiry. English passes the body through untouched; Hebrew
 *  keeps only the whitelisted fields below. */
export type Enquiry = {
  name?: string;
  email?: string;
  organisation?: string;
  phone?: string;
  eventDate?: string;
  eventLocation?: string;
  audienceSize?: string;
  format?: string;
  budget?: string;
  keynote?: string;
  message?: string;
  referral?: string;
  /** Hebrew form only. Untrusted: always pass through resolveAgent. */
  agentTag?: unknown;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  landing_path?: string;
};

export type EnquiryResult =
  | { ok: true; site: Site; data: Enquiry }
  | { ok: false; error: string; status: 400 | 500 };

/** Shared by the server checks below and the Hebrew form's client check. */
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const HE_TEXT_FIELDS = [
  "name", "email", "organisation", "phone", "eventDate", "eventLocation", "audienceSize", "message",
  "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "referrer", "landing_path",
] as const;
const HE_MAX = 5000;

export function validateEnquiry(body: unknown): EnquiryResult {
  // Today's route destructures the body, which throws on null/undefined and
  // surfaces as a 500 from its catch. Strings, arrays and numbers destructure
  // to undefined fields and end up as "Missing required fields".
  if (body === null || body === undefined) {
    return { ok: false, error: "Failed to process enquiry", status: 500 };
  }
  const b = body as Record<string, unknown>;

  if (b.site === "he") return validateHebrew(b);

  // English: identical checks, in the same order, as the route had.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { name, email, organisation, eventLocation, format, budget } = b as Record<string, any>;
  if (!name || !email || !organisation || !eventLocation || !format || !budget) {
    return { ok: false, error: "Missing required fields", status: 400 };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Invalid email address", status: 400 };
  }
  return { ok: true, site: "en", data: b as Enquiry };
}

function validateHebrew(b: Record<string, unknown>): EnquiryResult {
  const data: Record<string, unknown> = {};
  for (const k of HE_TEXT_FIELDS) {
    const v = b[k];
    data[k] = typeof v === "string" ? v.trim().slice(0, HE_MAX) : "";
  }
  data.agentTag = typeof b.agentTag === "string" ? b.agentTag.slice(0, 64) : "";

  if (!data.name || !data.organisation || !data.phone) {
    return { ok: false, error: "Missing required fields", status: 400 };
  }
  if (data.email && !EMAIL_RE.test(data.email as string)) {
    return { ok: false, error: "Invalid email address", status: 400 };
  }
  return { ok: true, site: "he", data: data as Enquiry };
}

export function recipientsFor(site: Site, agent: Agent | null): string[] {
  const to = [OWNER_EMAIL];
  if (site === "he" && agent && agent.email) to.push(agent.email);
  return to;
}

const oneLine = (s: unknown) => String(s ?? "").replace(/[\r\n]+/g, " ").trim();

/** Longest Hebrew subject line, in characters. */
export const HE_SUBJECT_MAX = 200;

export function subjectFor(site: Site, data: Enquiry, agent: Agent | null): string {
  if (site === "he") {
    // Only a resolved agent's own tag reaches the subject, never the raw input.
    const who = resolveAgent(agent?.tag).tag.toUpperCase();
    const channel = data.utm_source ? `[${oneLine(data.utm_source).toUpperCase()}] ` : "";
    const subject = `[IL] [${who}] ${channel}${heBooking.email.subjectLabel} | ${oneLine(data.name)}, ${oneLine(data.organisation)}`;
    // Capped by code point, so a long name cannot split a character.
    return Array.from(subject).slice(0, HE_SUBJECT_MAX).join("");
  }
  const { utm_source, name, organisation } = data;
  const channelTag = utm_source ? `[${(utm_source as string).toUpperCase()}] ` : "";
  return `${channelTag}Booking Enquiry — ${name}, ${organisation}`;
}

export function escapeHtml(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** The English notification email. Template copied unchanged from the route
 *  (only the clock is injected): values are interpolated raw, a known
 *  weakness deliberately not touched here. */
export function buildEnglishEmailHtml(data: Enquiry, now: Date = new Date()): string {
  const {
    name, email, organisation, phone,
    eventDate, eventLocation, audienceSize,
    format, budget, keynote, message, referral,
    utm_source, utm_medium, utm_campaign, utm_content, utm_term,
    referrer, landing_path,
  } = data;

  const utmBlock = utm_source
    ? `
  <table style="width:100%; border-collapse: collapse; margin-top: 20px; background: #fff8e1; padding: 8px;">
    <tr><td colspan="2" style="padding: 8px; color: #B8860B; font-weight: 600; border-bottom: 1px solid #f0e0a0;">📍 Attribution (where they came from)</td></tr>
    <tr><td style="padding: 8px 0 8px 12px; width: 40%; color: #666;">Source</td><td style="padding: 8px 0; font-weight: 600;">${utm_source}</td></tr>
    ${utm_medium ? `<tr><td style="padding: 8px 0 8px 12px; color: #666;">Medium</td><td style="padding: 8px 0;">${utm_medium}</td></tr>` : ""}
    ${utm_campaign ? `<tr><td style="padding: 8px 0 8px 12px; color: #666;">Campaign</td><td style="padding: 8px 0;">${utm_campaign}</td></tr>` : ""}
    ${utm_content ? `<tr><td style="padding: 8px 0 8px 12px; color: #666;">Content variant</td><td style="padding: 8px 0;">${utm_content}</td></tr>` : ""}
    ${utm_term ? `<tr><td style="padding: 8px 0 8px 12px; color: #666;">Term</td><td style="padding: 8px 0;">${utm_term}</td></tr>` : ""}
    ${referrer ? `<tr><td style="padding: 8px 0 8px 12px; color: #666;">Referrer</td><td style="padding: 8px 0; font-size: 12px; color: #888;">${referrer}</td></tr>` : ""}
    ${landing_path ? `<tr><td style="padding: 8px 0 8px 12px; color: #666;">Landed on</td><td style="padding: 8px 0; font-size: 12px;">${landing_path}</td></tr>` : ""}
  </table>`
    : "";

  return `
<div style="font-family: sans-serif; max-width: 600px; color: #222;">
  <h2 style="color: #B8860B; margin-bottom: 4px;">New Booking Enquiry</h2>
  <p style="color: #888; margin-top: 0; font-size: 13px;">${now.toUTCString()}</p>

  <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; width: 40%; color: #666;">Name</td><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600;">${name}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Email</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Organisation</td><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 600;">${organisation}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Phone</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone || "—"}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Event Date</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${eventDate}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Location</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${eventLocation}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Audience Size</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${audienceSize || "—"}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Format</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${format}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Budget</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${budget}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Keynote Interest</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${keynote || "—"}</td></tr>
    <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;">Referral (self-reported)</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${referral || "—"}</td></tr>
  </table>

  ${utmBlock}

  ${message ? `<div style="margin-top: 20px;"><p style="color: #666; margin-bottom: 6px;">Message</p><p style="background: #f9f9f9; padding: 12px; border-radius: 6px; margin: 0;">${message}</p></div>` : ""}

  <p style="margin-top: 28px; font-size: 12px; color: #aaa;">Sent from yossighinsberg.com booking form</p>
</div>`;
}

/** The Hebrew notification email: right to left, every value escaped. */
export function buildHebrewEmailHtml(data: Enquiry, agent: Agent, now: Date = new Date()): string {
  const L = heBooking.email.labels;
  const e = (v: unknown) => escapeHtml(String(v ?? ""));
  const dash = "—";
  const cell = "padding: 8px 0; border-bottom: 1px solid #eee;";
  const row = (label: string, value: string) =>
    `<tr><td style="${cell} width: 40%; color: #666;">${label}</td><td style="${cell}">${value}</td></tr>`;
  const opt = (v: unknown) => (v ? e(v) : dash);

  const attribution: [string, unknown][] = [
    [L.source, data.utm_source],
    [L.medium, data.utm_medium],
    [L.campaign, data.utm_campaign],
    [L.content, data.utm_content],
    [L.term, data.utm_term],
    [L.referrer, data.referrer],
    [L.landed, data.landing_path],
  ];
  const attributionBlock = data.utm_source
    ? `<h3 style="color: #B8860B; margin-top: 24px;">${heBooking.email.attributionTitle}</h3>
  <table style="width:100%; border-collapse: collapse;">
    ${attribution.filter(([, v]) => v).map(([l, v]) => row(l, e(v))).join("\n    ")}
  </table>`
    : "";

  return `
<div dir="rtl" style="font-family: sans-serif; max-width: 600px; color: #222; text-align: right;">
  <h2 style="color: #B8860B; margin-bottom: 4px;">${heBooking.email.title}</h2>
  <p style="color: #888; margin-top: 0; font-size: 13px;" dir="ltr">${now.toUTCString()}</p>

  <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
    ${row(heBooking.email.agentLabel, e(agent.nameHe))}
    ${row(L.name, e(data.name))}
    ${row(L.organisation, e(data.organisation))}
    ${row(L.phone, `<bdi dir="ltr">${e(data.phone)}</bdi>`)}
    ${row(L.email, data.email ? `<a href="mailto:${e(data.email)}"><bdi dir="ltr">${e(data.email)}</bdi></a>` : dash)}
    ${row(L.eventDate, opt(data.eventDate))}
    ${row(L.eventLocation, opt(data.eventLocation))}
    ${row(L.audienceSize, opt(data.audienceSize))}
  </table>

  ${attributionBlock}

  ${data.message ? `<div style="margin-top: 20px;"><p style="color: #666; margin-bottom: 6px;">${L.message}</p><p style="background: #f9f9f9; padding: 12px; border-radius: 6px; margin: 0; white-space: pre-wrap;">${e(data.message)}</p></div>` : ""}

  <p style="margin-top: 28px; font-size: 12px; color: #aaa;">${heBooking.email.footer}</p>
</div>`;
}
