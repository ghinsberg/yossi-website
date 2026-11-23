// Characterization of the LIVE English behaviour of POST /api/contact.
// The golden file was recorded by running these same cases against the
// route as it was BEFORE the Task 5 refactor (RECORD_GOLDEN=1). The route is
// exercised end to end with the Resend client mocked, so status, JSON body,
// from, to, replyTo, subject and html are all compared character for character.
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const sendMock = vi.fn();
vi.mock("resend", () => ({
  Resend: class {
    emails = { send: (...a: unknown[]) => sendMock(...a) };
  },
}));

const GOLDEN = fileURLToPath(new URL("./__fixtures__/contact-en-golden.json", import.meta.url));

const required = {
  name: "Dana Cohen",
  email: "dana@example.com",
  organisation: "Acme Ltd",
  eventLocation: "Tel Aviv",
  format: "Keynote",
  budget: "$10k-$20k",
};

const cases: Record<string, unknown> = {
  minimal: { ...required },
  full_with_utm: {
    ...required,
    phone: "+972 50 000 0000",
    eventDate: "2027-03-01",
    audienceSize: "200",
    keynote: "The Map Has Run Out",
    message: "Hello there",
    referral: "A friend",
    utm_source: "linkedin",
    utm_medium: "social",
    utm_campaign: "launch",
    utm_content: "variant-a",
    utm_term: "keynote",
    referrer: "https://www.linkedin.com/",
    landing_path: "/book-yossi",
  },
  utm_source_only: { ...required, utm_source: "google", message: "Hi" },
  raw_html_is_not_escaped_today: { ...required, name: "A <b>B</b> & C", message: "<i>x</i>" },
  site_en_explicit: { ...required, site: "en" },
  unknown_site_is_english: { ...required, site: "zz" },
  hebrew_fields_ignored_on_english: { ...required, agentTag: "gilat", agentEmail: "x@y.com", to: "z@y.com" },
};

async function post(rawBody: string) {
  const { POST } = await import("@/app/api/contact/route");
  const res = await POST(new NextRequest("http://localhost/api/contact", { method: "POST", body: rawBody }));
  return { status: res.status, json: await res.json() };
}

describe("English POST /api/contact (characterization)", () => {
  beforeEach(() => {
    sendMock.mockReset();
    sendMock.mockResolvedValue({ error: null });
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-11-23T10:00:00Z"));
    vi.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("matches the golden record for every accepted case", async () => {
    const out: Record<string, unknown> = {};
    for (const [k, body] of Object.entries(cases)) {
      sendMock.mockClear();
      const r = await post(JSON.stringify(body));
      out[k] = { ...r, sent: sendMock.mock.calls.map((c) => c[0]) };
    }
    if (process.env.RECORD_GOLDEN === "1") {
      writeFileSync(GOLDEN, JSON.stringify(out, null, 2) + "\n");
      return;
    }
    const golden = JSON.parse(readFileSync(GOLDEN, "utf8"));
    expect(out).toEqual(golden);
  });

  it("pins the literal envelope of an English send", async () => {
    await post(JSON.stringify(cases.full_with_utm));
    const arg = sendMock.mock.calls[0][0];
    expect(arg.from).toBe("Yossi Ghinsberg <hello@yossighinsberg.com>");
    expect(arg.to).toEqual(["ghinsberg@gmail.com"]);
    expect(arg.replyTo).toBe("dana@example.com");
    expect(arg.subject).toBe("[LINKEDIN] Booking Enquiry — Dana Cohen, Acme Ltd");
    expect(arg.html).toContain("New Booking Enquiry");
    expect(arg.html).toContain("Sent from yossighinsberg.com booking form");
    expect(arg.html).not.toContain('dir="rtl"');
  });

  it("no utm_source means no prefix and no attribution block", async () => {
    await post(JSON.stringify(cases.minimal));
    const arg = sendMock.mock.calls[0][0];
    expect(arg.subject).toBe("Booking Enquiry — Dana Cohen, Acme Ltd");
    expect(arg.html).not.toContain("Attribution (where they came from)");
  });

  it.each(["name", "email", "organisation", "eventLocation", "format", "budget"])(
    "missing %s gives 400 Missing required fields and sends nothing",
    async (field) => {
      const body = { ...required, [field]: "" };
      expect(await post(JSON.stringify(body))).toEqual({ status: 400, json: { error: "Missing required fields" } });
      expect(sendMock).not.toHaveBeenCalled();
    },
  );

  it("bad email gives 400 Invalid email address", async () => {
    expect(await post(JSON.stringify({ ...required, email: "nope" }))).toEqual({
      status: 400,
      json: { error: "Invalid email address" },
    });
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("phone is NOT required on the English form", async () => {
    expect((await post(JSON.stringify(required))).status).toBe(200);
  });

  it("a Resend error gives 500 Failed to send email", async () => {
    sendMock.mockResolvedValue({ error: { message: "boom" } });
    expect(await post(JSON.stringify(required))).toEqual({ status: 500, json: { error: "Failed to send email" } });
  });

  it("a thrown send gives 500 Failed to process enquiry", async () => {
    sendMock.mockRejectedValue(new Error("network"));
    expect(await post(JSON.stringify(required))).toEqual({ status: 500, json: { error: "Failed to process enquiry" } });
  });

  it("invalid JSON gives 500 Failed to process enquiry", async () => {
    expect(await post("{not json")).toEqual({ status: 500, json: { error: "Failed to process enquiry" } });
  });

  it("a JSON null body gives 500 Failed to process enquiry (destructuring throws today)", async () => {
    expect(await post("null")).toEqual({ status: 500, json: { error: "Failed to process enquiry" } });
  });

  it("JSON string, array and number bodies give 400 Missing required fields today", async () => {
    for (const raw of ['"abc"', "[]", "5"]) {
      expect(await post(raw)).toEqual({ status: 400, json: { error: "Missing required fields" } });
    }
  });

  it("a non-string utm_source throws inside the handler and gives 500 Failed to process enquiry", async () => {
    expect(await post(JSON.stringify({ ...required, utm_source: 5 }))).toEqual({
      status: 500,
      json: { error: "Failed to process enquiry" },
    });
  });
});
