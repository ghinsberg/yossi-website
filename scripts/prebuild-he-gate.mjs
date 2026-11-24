// prebuild: runs the Hebrew launch gate only for a Production build that
// serves a Hebrew host (VERCEL_ENV=production and HE_HOSTS or
// HE_CANONICAL_HOST set: either one makes a host Hebrew). Then a gate
// failure fails the build. Every other build exits 0 at once, silently.
//
// The gate keys on Vercel's VERCEL_ENV: the site is hosted on Vercel. Another
// host would need its own condition here, or this gate never runs there.
import { spawnSync } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const set = (v) => (v ?? "").trim() !== "";

/** @param {Record<string, string | undefined>} env */
export function shouldGate(env) {
  return env.VERCEL_ENV === "production" && (set(env.HE_HOSTS) || set(env.HE_CANONICAL_HOST));
}

/**
 * A Production build that serves Hebrew hosts (HE_HOSTS) but has no
 * HE_CANONICAL_HOST: the share image and the canonical URLs would point at the
 * wrong host, so the build fails before the launch gate runs.
 * @param {Record<string, string | undefined>} env
 */
export function missingCanonical(env) {
  return env.VERCEL_ENV === "production" && set(env.HE_HOSTS) && !set(env.HE_CANONICAL_HOST);
}

function main() {
  if (missingCanonical(process.env)) {
    console.error(
      "prebuild-he-gate: HE_HOSTS is set for a Production build but HE_CANONICAL_HOST is not. " +
        "Set HE_CANONICAL_HOST to the Hebrew host, or the share image and canonical URLs point at the wrong host.",
    );
    process.exit(1);
  }
  if (!shouldGate(process.env)) return;
  const gate = join(fileURLToPath(import.meta.url), "..", "check-he-launch.mjs");
  const r = spawnSync(process.execPath, [gate], { stdio: "inherit" });
  process.exit(r.status ?? 1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
