import { describe, expect, it } from "vitest";
import { spawnSync } from "node:child_process";
import { missingCanonical, shouldGate } from "./prebuild-he-gate.mjs";

describe("shouldGate", () => {
  it("gates a Production build that serves a Hebrew host", () => {
    expect(shouldGate({ VERCEL_ENV: "production", HE_HOSTS: "x.co.il" })).toBe(true);
  });
  it("gates a Production build with only the canonical Hebrew host set", () => {
    expect(shouldGate({ VERCEL_ENV: "production", HE_CANONICAL_HOST: "x.co.il" })).toBe(true);
  });
  it.each([
    [{}],
    [{ VERCEL_ENV: "production", HE_CANONICAL_HOST: " " }],
    [{ VERCEL_ENV: "preview", HE_CANONICAL_HOST: "x.co.il" }],
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

describe("missingCanonical", () => {
  it.each([
    [{ VERCEL_ENV: "production", HE_HOSTS: "x.co.il" }],
    [{ VERCEL_ENV: "production", HE_HOSTS: "x.co.il", HE_CANONICAL_HOST: "" }],
    [{ VERCEL_ENV: "production", HE_HOSTS: "x.co.il", HE_CANONICAL_HOST: "  " }],
  ])("fails a Production build that serves Hebrew hosts without a canonical host: %o", (env) => {
    expect(missingCanonical(env)).toBe(true);
  });
  it.each([
    [{}],
    [{ VERCEL_ENV: "production", HE_HOSTS: "x.co.il", HE_CANONICAL_HOST: "x.co.il" }],
    [{ VERCEL_ENV: "production", HE_CANONICAL_HOST: "x.co.il" }],
    [{ VERCEL_ENV: "production" }],
    [{ VERCEL_ENV: "production", HE_HOSTS: " " }],
    [{ VERCEL_ENV: "preview", HE_HOSTS: "x.co.il" }],
    [{ HE_HOSTS: "x.co.il" }],
  ])("does not fail %o", (env) => {
    expect(missingCanonical(env)).toBe(false);
  });
});

describe("the script", () => {
  const run = (env: Record<string, string>) => {
    const clean = Object.fromEntries(
      Object.entries(process.env).filter(([k]) => !["VERCEL_ENV", "HE_HOSTS", "HE_CANONICAL_HOST"].includes(k)),
    ) as Record<string, string>;
    return spawnSync(process.execPath, ["scripts/prebuild-he-gate.mjs"], { env: { ...clean, ...env } as NodeJS.ProcessEnv, encoding: "utf8" });
  };
  it("is silent and exits 0 for an ordinary build", () => {
    const r = run({});
    expect(r.status).toBe(0);
    expect(r.stdout + r.stderr).toBe("");
  });
  it("fails a Production build with HE_HOSTS and no HE_CANONICAL_HOST, naming the missing variable", () => {
    const r = run({ VERCEL_ENV: "production", HE_HOSTS: "x.co.il" });
    expect(r.status).not.toBe(0);
    expect(r.stderr).toContain("HE_CANONICAL_HOST");
  });
});
