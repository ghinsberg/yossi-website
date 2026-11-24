import { describe, it, expect } from "vitest";
import {
  validateEnquiry,
  recipientsFor,
  subjectFor,
  HE_SUBJECT_MAX,
  escapeHtml,
  buildHebrewEmailHtml,
  buildEnglishEmailHtml,
  type Enquiry,
} from "./contact";
import { agents, resolveAgent, type Agent } from "@/data/he/agents";
import { heBooking } from "@/data/he/booking";

const enReq = {
  name: "Dana Cohen",
  email: "dana@example.com",
  organisation: "Acme Ltd",
  eventLocation: "Tel Aviv",
  format: "Keynote",
  budget: "$10k",
};
const heReq = { site: "he", name: "דנה כהן", organisation: "אקמה", phone: "050-0000000" };

function ok(body: unknown) {
  const r = validateEnquiry(body);
  if (!r.ok) throw new Error("expected ok, got " + r.error);
  return r;
}

describe("validateEnquiry, English (pins today's route.ts)", () => {
  it("accepts the six required fields; eventDate and phone are optional", () => {
    const r = ok(enReq);
    expect(r.site).toBe("en");
    expect(r.data.name).toBe("Dana Cohen");
  });

  it.each(["name", "email", "organisation", "eventLocation", "format", "budget"])("missing %s", (f) => {
    expect(validateEnquiry({ ...enReq, [f]: "" })).toEqual({ ok: false, error: "Missing required fields", status: 400 });
    const { [f]: _omit, ...rest } = enReq as Record<string, string>;
    void _omit;
    expect(validateEnquiry(rest)).toEqual({ ok: false, error: "Missing required fields", status: 400 });
  });

  it("bad email", () => {
    expect(validateEnquiry({ ...enReq, email: "nope" })).toEqual({ ok: false, error: "Invalid email address", status: 400 });
    expect(validateEnquiry({ ...enReq, email: "a@b" })).toMatchObject({ ok: false, error: "Invalid email address" });
  });

  it("an unknown site value is treated as English", () => {
    expect(ok({ ...enReq, site: "zz" }).site).toBe("en");
    expect(ok({ ...enReq, site: "HE" }).site).toBe("en");
    expect(ok({ ...enReq, site: ["he"] }).site).toBe("en");
  });

  it("English does not require phone and does not strip fields", () => {
    const r = ok({ ...enReq, budget: "x", extra: "kept" });
    expect((r.data as Record<string, unknown>).extra).toBe("kept");
  });

  it("null and undefined: ok false, no throw (the route answers 500 as it does today)", () => {
    expect(validateEnquiry(null)).toEqual({ ok: false, error: "Failed to process enquiry", status: 500 });
    expect(validateEnquiry(undefined)).toEqual({ ok: false, error: "Failed to process enquiry", status: 500 });
  });

  it("string, array, number, {}: ok false, no throw", () => {
    for (const b of ["abc", [], [1, 2], 5, {}]) {
      expect(validateEnquiry(b)).toEqual({ ok: false, error: "Missing required fields", status: 400 });
    }
  });
});

describe("recipientsFor and subjectFor, English", () => {
  it("recipient is the single existing address", () => {
    expect(recipientsFor("en", null)).toEqual(["ghinsberg@gmail.com"]);
  });
  it("subject format with and without utm_source", () => {
    expect(subjectFor("en", enReq as Enquiry, null)).toBe("Booking Enquiry — Dana Cohen, Acme Ltd");
    expect(subjectFor("en", { ...enReq, utm_source: "linkedin" } as Enquiry, null)).toBe(
      "[LINKEDIN] Booking Enquiry — Dana Cohen, Acme Ltd",
    );
  });
  it("a non-string utm_source still throws, as it does today", () => {
    expect(() => subjectFor("en", { ...enReq, utm_source: 5 } as unknown as Enquiry, null)).toThrow();
  });
});

describe("validateEnquiry, Hebrew", () => {
  it("accepts name, organisation, phone only", () => {
    const r = ok(heReq);
    expect(r.site).toBe("he");
  });

  it.each(["name", "organisation", "phone"])("missing %s", (f) => {
    expect(validateEnquiry({ ...heReq, [f]: "" })).toEqual({ ok: false, error: "Missing required fields", status: 400 });
    expect(validateEnquiry({ ...heReq, [f]: "   " })).toMatchObject({ ok: false, error: "Missing required fields" });
    expect(validateEnquiry({ ...heReq, [f]: 7 })).toMatchObject({ ok: false, error: "Missing required fields" });
  });

  it("email, eventLocation, format and budget are not required", () => {
    expect(validateEnquiry(heReq).ok).toBe(true);
  });

  it("email is optional but validated when present", () => {
    expect(ok({ ...heReq, email: "" }).data.email).toBe("");
    expect(ok({ ...heReq, email: "a@b.co" }).data.email).toBe("a@b.co");
    expect(validateEnquiry({ ...heReq, email: "nope" })).toEqual({ ok: false, error: "Invalid email address", status: 400 });
  });

  it("budget is neither required nor carried", () => {
    expect((ok({ ...heReq, budget: "1000" }).data as Record<string, unknown>).budget).toBeUndefined();
  });

  it("ignores agentEmail, to, recipient: recipients come only from resolveAgent", () => {
    const r = ok({ ...heReq, agentTag: "gilat", agentEmail: "evil@x.com", to: "evil@x.com", recipient: "evil@x.com", cc: "e@x.com" });
    expect(Object.keys(r.data)).not.toContain("agentEmail");
    expect(Object.keys(r.data)).not.toContain("to");
    expect(Object.keys(r.data)).not.toContain("recipient");
    const agent = resolveAgent(r.data.agentTag);
    expect(agent.tag).toBe("gilat");
    expect(recipientsFor("he", agent)).toEqual(["ghinsberg@gmail.com"]);
  });

  it("null, string, array, {} give ok false without throwing", () => {
    for (const b of [null, "x", [], {}, 7]) {
      const r = validateEnquiry(b);
      expect(r.ok).toBe(false);
    }
  });

  it("an unknown agent tag is carried but resolves to rafi", () => {
    expect(resolveAgent(ok({ ...heReq, agentTag: "<script>" }).data.agentTag).tag).toBe("rafi");
  });

  it("hebrew, quotes, < and & in name and organisation pass validation", () => {
    const r = ok({ ...heReq, name: 'דנה "ד" <b>&', organisation: "בע\"מ <i>" });
    expect(r.data.name).toBe('דנה "ד" <b>&');
  });
});

describe("recipientsFor, Hebrew", () => {
  const withEmail: Agent = { ...agents[0], email: "agent@example.com" };
  it("owner only while agent email is null", () => {
    for (const a of agents) expect(recipientsFor("he", a)).toEqual(["ghinsberg@gmail.com"]);
    expect(recipientsFor("he", null)).toEqual(["ghinsberg@gmail.com"]);
  });
  it("owner plus agent email when set", () => {
    expect(recipientsFor("he", withEmail)).toEqual(["ghinsberg@gmail.com", "agent@example.com"]);
  });
  it("returns a fresh array each call", () => {
    const a = recipientsFor("he", null);
    a.push("x");
    expect(recipientsFor("he", null)).toEqual(["ghinsberg@gmail.com"]);
  });
});

describe("subjectFor, Hebrew", () => {
  it("starts [IL] [RAFI] or [IL] [GILAT]", () => {
    const d = ok(heReq).data;
    expect(subjectFor("he", d, resolveAgent("rafi"))).toMatch(/^\[IL\] \[RAFI\] /);
    expect(subjectFor("he", d, resolveAgent("gilat"))).toMatch(/^\[IL\] \[GILAT\] /);
  });
  it("never contains a raw tag other than RAFI or GILAT", () => {
    for (const raw of ["<script>", "nobody", "x\r\nBcc: e@x.com", 42, null]) {
      const d = ok({ ...heReq, agentTag: raw }).data;
      const s = subjectFor("he", d, resolveAgent(d.agentTag));
      expect(s).toMatch(/^\[IL\] \[RAFI\] /);
      expect(s).not.toMatch(/script|nobody|Bcc/i);
    }
  });
  it("cannot carry line breaks even from name, organisation and utm_source", () => {
    const d = ok({ ...heReq, name: "a\r\nBcc: x@y.com", organisation: "b\nc", utm_source: "li\r\nx" }).data;
    expect(subjectFor("he", d, resolveAgent("rafi"))).not.toMatch(/[\r\n]/);
  });
  it("adds the channel prefix after the agent prefix when utm_source is set", () => {
    const d = ok({ ...heReq, utm_source: "linkedin" }).data;
    expect(subjectFor("he", d, resolveAgent("gilat"))).toMatch(/^\[IL\] \[GILAT\] \[LINKEDIN\] /);
  });
  it("separates label and sender with \" | \", no em dash", () => {
    const s = subjectFor("he", ok(heReq).data, resolveAgent("rafi"));
    expect(s).toBe(`[IL] [RAFI] ${heBooking.email.subjectLabel} | דנה כהן, אקמה`);
    expect(s).not.toContain("\u2014");
  });
  it("is capped at 200 characters", () => {
    expect(HE_SUBJECT_MAX).toBe(200);
    const d = ok({ ...heReq, name: "א".repeat(300), organisation: "ב".repeat(300) }).data;
    const s = subjectFor("he", d, resolveAgent("gilat"));
    expect(Array.from(s)).toHaveLength(200);
    expect(s).toMatch(/^\[IL\] \[GILAT\] /);
  });
});

describe("escapeHtml", () => {
  it("escapes the five characters", () => {
    expect(escapeHtml('<b a="1">&')).toBe("&lt;b a=&quot;1&quot;&gt;&amp;");
    expect(escapeHtml("it's")).toBe("it&#39;s");
  });
  it("escapes & first, so entities are not double-decoded", () => {
    expect(escapeHtml("&lt;")).toBe("&amp;lt;");
  });
  it("leaves Hebrew alone", () => {
    expect(escapeHtml("שלום")).toBe("שלום");
  });
});

describe("Hebrew email html", () => {
  const now = new Date("2026-11-23T10:00:00Z");
  const nasty = { ...heReq, name: 'דנה "ד" <script>alert(1)</script> &', organisation: 'בע"מ <img src=x onerror=1>', message: "<b>hi</b>", eventLocation: "<i>x</i>", email: "a@b.co" };

  it("is dir=rtl and escapes every interpolated value", () => {
    const d = ok(nasty).data;
    const html = buildHebrewEmailHtml(d, resolveAgent("gilat"), now);
    expect(html).toContain('dir="rtl"');
    expect(html).not.toContain("<script>");
    expect(html).not.toContain("<img");
    expect(html).not.toContain("<b>hi");
    expect(html).toContain("&lt;script&gt;alert(1)&lt;/script&gt; &amp;");
    expect(html).toContain("דנה &quot;ד&quot;");
  });

  it("escapes attribution fields", () => {
    const d = ok({ ...heReq, utm_source: "<x>", utm_medium: "m&m", referrer: '"><a>', landing_path: "/p?<q>" }).data;
    const html = buildHebrewEmailHtml(d, resolveAgent("rafi"), now);
    expect(html).not.toMatch(/<x>|<a>|<q>/);
    expect(html).toContain("&lt;x&gt;");
  });

  it("uses the Hebrew labels from data/he/booking.ts and the resolved agent's Hebrew name", () => {
    const html = buildHebrewEmailHtml(ok(heReq).data, resolveAgent("gilat"), now);
    expect(html).toContain(heBooking.email.labels.name);
    expect(html).toContain(heBooking.email.labels.phone);
    expect(html).toContain(resolveAgent("gilat").nameHe);
    expect(html).not.toContain(resolveAgent("rafi").nameHe);
  });

  it("omits the email row's mailto link when no email was given", () => {
    const html = buildHebrewEmailHtml(ok(heReq).data, resolveAgent("rafi"), now);
    expect(html).not.toContain("mailto:");
  });
});

describe("English email html builder", () => {
  it("exists and is used by the route (byte identity is pinned in contact.route.test.ts)", () => {
    expect(typeof buildEnglishEmailHtml).toBe("function");
  });
});

describe("isHebrewSpam", () => {
  const ok = { site: "he", hp_x: "", formRenderedAt: 0, formSubmittedAt: 3000 };
  it("is false for every non-Hebrew body, whatever it holds", async () => {
    const { isHebrewSpam } = await import("./contact");
    for (const b of [null, undefined, "x", 1, [], {}, { site: "en", hp_x: "spam" }, { site: "zz", formRenderedAt: 0, formSubmittedAt: 1 }, { hp_x: "spam" }]) {
      expect(isHebrewSpam(b)).toBe(false);
    }
  });
  it("Hebrew: a person passes; a filled trap, under 3 s, or a missing time fails", async () => {
    const { isHebrewSpam } = await import("./contact");
    expect(isHebrewSpam(ok)).toBe(false);
    expect(isHebrewSpam({ ...ok, hp_x: " x " })).toBe(true);
    expect(isHebrewSpam({ ...ok, formSubmittedAt: 2999 })).toBe(true);
    expect(isHebrewSpam({ ...ok, formRenderedAt: null })).toBe(true);
    expect(isHebrewSpam({ ...ok, formSubmittedAt: Infinity })).toBe(true);
  });
  it("the hidden field is hp_x, a name no autofill recognises; the old name website is no longer a trap", async () => {
    const { isHebrewSpam, HE_HONEYPOT_FIELD } = await import("./contact");
    expect(HE_HONEYPOT_FIELD).toBe("hp_x");
    expect(isHebrewSpam({ ...ok, website: "https://example.com" })).toBe(false);
  });
});
