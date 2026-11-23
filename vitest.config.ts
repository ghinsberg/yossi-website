import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL(".", import.meta.url)) },
  },
  // Tests only: compile JSX with the automatic runtime (tsconfig says preserve for Next).
  esbuild: { jsx: "automatic" },
  test: {
    environment: "node",
    include: ["lib/**/*.test.ts", "data/**/*.test.ts", "scripts/**/*.test.ts", "components/he/**/*.test.tsx"],
  },
});
