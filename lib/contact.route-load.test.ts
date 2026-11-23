import { afterEach, describe, expect, it, vi } from "vitest";

// A build without RESEND_API_KEY (every Vercel preview) must still be able to
// load the route module: Next imports it while collecting page data.
describe("contact route without an email key", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it("loads without RESEND_API_KEY", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    vi.resetModules();
    await expect(import("@/app/api/contact/route")).resolves.toHaveProperty("POST");
  });

  it("answers a valid enquiry with 500 instead of crashing when the key is missing", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    vi.resetModules();
    const { POST } = await import("@/app/api/contact/route");
    const errorLog = vi.spyOn(console, "error").mockImplementation(() => {});
    const body = {
      name: "A", email: "a@b.co", organisation: "Org", eventLocation: "X", format: "Keynote", budget: "TBD",
    };
    const res = await POST(new Request("http://x/api/contact", { method: "POST", body: JSON.stringify(body) }) as never);
    expect(res.status).toBe(500);
    errorLog.mockRestore();
  });
});
