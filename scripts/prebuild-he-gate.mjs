// prebuild: runs the Hebrew launch gate only for a Production build that
// serves a Hebrew host (VERCEL_ENV=production and HE_HOSTS set). Then a gate
// failure fails the build. Every other build exits 0 at once, silently.
import { spawnSync } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

/** @param {Record<string, string | undefined>} env */
export function shouldGate(env) {
  return env.VERCEL_ENV === "production" && (env.HE_HOSTS ?? "").trim() !== "";
}

function main() {
  if (!shouldGate(process.env)) return;
  const gate = join(fileURLToPath(import.meta.url), "..", "check-he-launch.mjs");
  const r = spawnSync(process.execPath, [gate], { stdio: "inherit" });
  process.exit(r.status ?? 1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
