import { describe, expect, it } from "vitest";
import { shouldGate } from "./prebuild-he-gate.mjs";

describe("shouldGate", () => {
  it("gates a Production build that serves a Hebrew host", () => {
    expect(shouldGate({ VERCEL_ENV: "production", HE_HOSTS: "x.co.il" })).toBe(true);
  });
  it.each([
    [{}],
    [{ VERCEL_ENV: "production" }],
    [{ VERCEL_ENV: "production", HE_HOSTS: "" }],
    [{ VERCEL_ENV: "production", HE_HOSTS: "  " }],
    [{ VERCEL_ENV: "preview", HE_HOSTS: "*" }],
    [{ VERCEL_ENV: "development", HE_HOSTS: "x.co.il" }],
    [{ HE_HOSTS: "x.co.il" }],
  ])("does not gate %o", (env) => {
    expect(shouldGate(env)).toBe(false);
  });
});
