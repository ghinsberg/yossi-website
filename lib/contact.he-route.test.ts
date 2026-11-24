// Hebrew behaviour of POST /api/contact, with Resend mocked. No email is sent.
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";

const sendMock = vi.fn();
vi.mock("resend", () => ({
  Resend: class {
    emails = { send: (...a: unknown[]) => sendMock(...a) };
  },
}));

// A real person: the hidden field is empty and the form took 4 seconds.
const he = { site: "he", name: "דנה כהן", organisation: "אקמה", phone: "050-1234567", hp_x: "", formRenderedAt: 1_000_000, formSubmittedAt: 1_004_000 };

async function post(body: unknown) {
  const { POST } = await import("@/app/api/contact/route");
  const res = await POST(new NextRequest("http://localhost/api/contact", { method: "POST", body: JSON.stringify(body) }));
  return { status: res.status, json: await res.json() };
}

describe("Hebrew POST /api/contact", () => {
  beforeEach(() => {
    sendMock.mockReset();
    sendMock.mockResolvedValue({ error: null });
    vi.spyOn(console, "error").mockImplementation(() => {});
  });
  afterEach(() => vi.restoreAllMocks());

  it("sends to the owner only, with the [IL] [GILAT] subject and an rtl body", async () => {
    expect(await post({ ...he, agentTag: "gilat" })).toEqual({ status: 200, json: { success: true } });
    const arg = sendMock.mock.calls[0][0];
    expect(arg.to).toEqual(["ghinsberg@gmail.com"]);
    expect(arg.from).toBe("Yossi Ghinsberg <hello@yossighinsberg.com>");
    expect(arg.subject).toMatch(/^\[IL\] \[GILAT\] /);
    expect(arg.html).toContain('dir="rtl"');
  });

  it("no tag or an unknown tag goes to Rafi", async () => {
    for (const tag of [undefined, "", "nobody", "<script>"]) {
      sendMock.mockClear();
      await post({ ...he, agentTag: tag });
      expect(sendMock.mock.calls[0][0].subject).toMatch(/^\[IL\] \[RAFI\] /);
    }
  });

  it("replyTo is set only when an email was given", async () => {
    await post(he);
    expect(sendMock.mock.calls[0][0]).not.toHaveProperty("replyTo");
    sendMock.mockClear();
    await post({ ...he, email: "d@example.com" });
    expect(sendMock.mock.calls[0][0].replyTo).toBe("d@example.com");
  });

  it("ignores any recipient the request tries to supply", async () => {
    await post({ ...he, agentTag: "gilat", agentEmail: "evil@x.com", to: ["evil@x.com"], recipient: "evil@x.com", cc: "evil@x.com", bcc: "evil@x.com" });
    const arg = sendMock.mock.calls[0][0];
    expect(arg.to).toEqual(["ghinsberg@gmail.com"]);
    expect(JSON.stringify(arg)).not.toContain("evil@x.com");
  });

  it("validation: phone required, budget not, bad email rejected, nothing sent", async () => {
    expect(await post({ ...he, phone: "" })).toEqual({ status: 400, json: { error: "Missing required fields" } });
    expect(await post({ ...he, email: "nope" })).toEqual({ status: 400, json: { error: "Invalid email address" } });
    expect(sendMock).not.toHaveBeenCalled();
    expect((await post({ ...he })).status).toBe(200);
  });

  it("escapes markup in the email body", async () => {
    await post({ ...he, name: "<script>x</script>", message: "<img src=x>" });
    const html = sendMock.mock.calls[0][0].html as string;
    expect(html).not.toContain("<script>");
    expect(html).not.toContain("<img");
  });

  it("a Resend error is a 500 Failed to send email", async () => {
    sendMock.mockResolvedValue({ error: { message: "x" } });
    expect(await post(he)).toEqual({ status: 500, json: { error: "Failed to send email" } });
  });

  describe("spam protection (Hebrew path only)", () => {
    it("a filled honeypot gets 200 success and no email", async () => {
      expect(await post({ ...he, hp_x: "http://spam.example" })).toEqual({ status: 200, json: { success: true } });
      expect(sendMock).not.toHaveBeenCalled();
    });
    it("a submission under 3 seconds after render gets 200 success and no email", async () => {
      expect(await post({ ...he, formSubmittedAt: he.formRenderedAt + 2999 })).toEqual({ status: 200, json: { success: true } });
      expect(sendMock).not.toHaveBeenCalled();
    });
    it("a missing or malformed timestamp counts as too fast: 200 success and no email", async () => {
      for (const body of [
        { ...he, formRenderedAt: undefined },
        { ...he, formSubmittedAt: undefined },
        { ...he, formRenderedAt: "1000", formSubmittedAt: "9000" },
        { ...he, formSubmittedAt: Number.NaN },
      ]) {
        expect(await post(body)).toEqual({ status: 200, json: { success: true } });
      }
      expect(sendMock).not.toHaveBeenCalled();
    });
    it("a spam submission learns nothing, even with invalid fields", async () => {
      expect(await post({ ...he, phone: "", hp_x: "x" })).toEqual({ status: 200, json: { success: true } });
      expect(sendMock).not.toHaveBeenCalled();
    });
    it("a normal submission at exactly 3 seconds sends one email, without the anti-spam fields", async () => {
      expect(await post({ ...he, formSubmittedAt: he.formRenderedAt + 3000 })).toEqual({ status: 200, json: { success: true } });
      expect(sendMock).toHaveBeenCalledTimes(1);
      const html = sendMock.mock.calls[0][0].html as string;
      expect(html).not.toContain("formRenderedAt");
      expect(html).not.toContain(String(he.formRenderedAt));
    });
  });
});
