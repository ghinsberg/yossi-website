// Hebrew behaviour of POST /api/contact, with Resend mocked. No email is sent.
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";

const sendMock = vi.fn();
vi.mock("resend", () => ({
  Resend: class {
    emails = { send: (...a: unknown[]) => sendMock(...a) };
  },
}));

const he = { site: "he", name: "דנה כהן", organisation: "אקמה", phone: "050-1234567" };

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
});
