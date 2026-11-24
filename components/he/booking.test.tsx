import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import HeAgentCard from "./HeAgentCard";
import HeBookingForm, { ErrorSummary, FieldError, errorSummaryText, validateHeForm } from "./HeBookingForm";
import BookingPage, { metadata } from "@/app/(he)/he/hazmana/page";
import { agents, resolveAgent } from "@/data/he/agents";
import { heBooking } from "@/data/he/booking";

describe("HeAgentCard", () => {
  it("shows each agent's Hebrew name and nothing of the other", () => {
    const [rafi, gilat] = agents;
    const r = renderToStaticMarkup(<HeAgentCard agent={rafi} />);
    const g = renderToStaticMarkup(<HeAgentCard agent={gilat} />);
    expect(r).toContain(rafi.nameHe);
    expect(r).not.toContain(gilat.nameHe);
    expect(g).toContain(gilat.nameHe);
    expect(g).not.toContain(rafi.nameHe);
  });
  it("renders no phone or email while they are null", () => {
    const html = renderToStaticMarkup(<HeAgentCard agent={agents[0]} />);
    expect(html).not.toContain("tel:");
    expect(html).not.toContain("@");
    expect(html).not.toContain(heBooking.agentCard.phoneLabel);
    expect(html).not.toContain(heBooking.agentCard.emailLabel);
  });
  it("renders phone and email once they are set", () => {
    const html = renderToStaticMarkup(<HeAgentCard agent={{ ...agents[0], phone: "050-111", email: "a@b.co" }} />);
    expect(html).toContain("050-111");
    expect(html).toContain("a@b.co");
  });
  it("never shows a raw tag: hostile input resolves to a known agent first", () => {
    const html = renderToStaticMarkup(<HeAgentCard agent={resolveAgent("<script>alert(1)</script>")} />);
    expect(html).not.toContain("script");
    expect(html).toContain(agents[0].nameHe);
  });
});

describe("HeBookingForm (server render)", () => {
  const html = renderToStaticMarkup(<HeBookingForm />);
  it("renders no agent on the server (the tag is only known in the browser)", () => {
    expect(html).not.toContain("data-agent-card");
    for (const a of agents) expect(html).not.toContain(a.nameHe);
  });
  it("has the eight fields and no budget field", () => {
    for (const n of ["name", "organisation", "phone", "email", "eventDate", "eventLocation", "audienceSize", "message"]) {
      expect(html).toContain(`id="${n}"`);
      expect(html).toContain(`for="${n}"`);
    }
    expect(html).not.toMatch(/budget/i);
  });
  it("marks exactly name, organisation, phone as required", () => {
    expect(html.split(" required=").length - 1).toBe(3);
    expect(html.split('aria-required="true"').length - 1).toBe(3);
  });
  it("phone and email are ltr and end-aligned", () => {
    for (const n of ["phone", "email"]) {
      const tag = html.match(new RegExp(`<input[^>]*id="${n}"[^>]*>`))![0];
      expect(tag).toContain('dir="ltr"');
      expect(tag).toContain("text-end");
    }
  });
  it("has a honeypot: off-screen with a logical inset, out of tab order, hidden from assistive tech", () => {
    const wrap = html.match(/<div[^>]*data-honeypot[^>]*>/)![0];
    expect(wrap).toContain('aria-hidden="true"');
    expect(wrap).toMatch(/-start-\[10000px\]/);
    // Not display:none (the "hidden" utility) and no inline style hiding it.
    const classes = wrap.match(/class="([^"]*)"/)![1].split(/\s+/);
    expect(classes).not.toContain("hidden");
    expect(wrap).not.toMatch(/display:\s*none/);
    const input = html.match(/<input[^>]*name="website"[^>]*>/)![0];
    expect(input).toContain('tabindex="-1"');
    expect(input).toContain('autoComplete="off"');
    expect(input).not.toContain("required");
  });
  it("submit is enabled before sending and has no error alert yet", () => {
    expect(html).not.toContain('disabled=');
    expect(html).not.toContain('role="alert"');
  });
});

describe("error summary", () => {
  it("one line with the count, from data, announced once as an alert", () => {
    expect(errorSummaryText(1)).toBe(heBooking.form.errors.summaryOne);
    expect(errorSummaryText(3)).toBe(heBooking.form.errors.summaryMany.replace("{count}", "3"));
    const s = renderToStaticMarkup(<ErrorSummary count={3} />);
    expect(s.match(/role="alert"/g)).toHaveLength(1);
    expect(s).toContain("3");
  });
  it("field messages carry an id for aria-describedby and are not alerts of their own", () => {
    const e = renderToStaticMarkup(<FieldError id="name-error">x</FieldError>);
    expect(e).toContain('id="name-error"');
    expect(e).not.toContain("role=");
  });
  it("the form wires each field to its message by aria-describedby, and the old per-field alert is gone", () => {
    const src = readFileSync("components/he/HeBookingForm.tsx", "utf8");
    expect(src).toContain('"aria-describedby": err ? errId : undefined');
    expect(src.match(/<p\b[^>]*role="alert"/g)).toHaveLength(2); // the summary and the send-failure line
  });
});

describe("validateHeForm", () => {
  const base = { name: "a", organisation: "b", phone: "1", email: "", eventDate: "", eventLocation: "", audienceSize: "", message: "" };
  it("passes with the three required fields", () => expect(validateHeForm(base)).toEqual({}));
  it("flags each missing required field with the Hebrew message from data", () => {
    const e = validateHeForm({ ...base, name: " ", organisation: "", phone: "" });
    expect(Object.keys(e).sort()).toEqual(["name", "organisation", "phone"]);
    expect(e.name).toBe(heBooking.form.errors.required);
  });
  it("validates email only when present", () => {
    expect(validateHeForm({ ...base, email: "x" }).email).toBe(heBooking.form.errors.invalidEmail);
    expect(validateHeForm({ ...base, email: "x@y.co" }).email).toBeUndefined();
  });
});

describe("booking page", () => {
  it("has one h1 and the form", () => {
    const html = renderToStaticMarkup(<BookingPage />);
    expect(html.split("<h1").length - 1).toBe(1);
    expect(html).toContain("<form");
  });
  it("metadata never puts a query in the canonical", () => {
    const c = metadata.alternates?.canonical;
    if (c !== undefined) expect(String(c)).not.toContain("?");
  });
});

describe("source hygiene for the new Hebrew UI files", () => {
  const files = [
    "components/he/HeBookingForm.tsx",
    "components/he/HeAgentCard.tsx",
    "components/he/AgentTagCapture.tsx",
    "app/(he)/he/hazmana/page.tsx",
    "lib/contact.ts",
    "lib/he/agentTag.ts",
    "lib/he/canonical.ts",
    "app/api/contact/route.ts",
  ];
  for (const f of files) {
    const src = readFileSync(f, "utf8");
    it(`${f}: no Hebrew characters`, () => expect(src).not.toMatch(/[֐-׿]/));
    if (f.startsWith("components/he") || f.startsWith("app/(he)")) {
      it(`${f}: logical utilities only, no tracking`, () => {
        expect(src).not.toMatch(/(^|[\s"'`:])(ml-|mr-|pl-|pr-|left-|right-|text-left|text-right|tracking-)/);
      });
    }
  }
});
