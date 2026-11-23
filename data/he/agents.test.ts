import { describe, it, expect } from "vitest";
import { agents, resolveAgent, DEFAULT_AGENT_TAG } from "./agents";

describe("agents", () => {
  it("has exactly two agents, rafi and gilat, in that order", () => {
    expect(agents.map((a) => a.tag)).toEqual(["rafi", "gilat"]);
    expect(agents.map((a) => a.name)).toEqual(["Rafi Agiv", "Gilat Aviv"]);
  });

  it("has a Hebrew name for each, and no confirmed contact details", () => {
    for (const a of agents) {
      expect(a.nameHe).toMatch(/[֐-׿]/);
      expect(a.agency).toBeNull();
      expect(a.email).toBeNull();
      expect(a.phone).toBeNull();
    }
  });

  it("default tag is rafi", () => {
    expect(DEFAULT_AGENT_TAG).toBe("rafi");
  });

  it("resolves known tags, ignoring case and surrounding space", () => {
    expect(resolveAgent("gilat").tag).toBe("gilat");
    expect(resolveAgent("rafi").tag).toBe("rafi");
    expect(resolveAgent("RAFI").tag).toBe("rafi");
    expect(resolveAgent(" rafi ").tag).toBe("rafi");
    expect(resolveAgent("  GiLaT\n").tag).toBe("gilat");
  });

  it.each<unknown>(["", undefined, null, 42, "<script>", "nobody", { tag: "gilat" }, ["gilat"]])(
    "resolves %j to rafi",
    (input) => {
      expect(resolveAgent(input).tag).toBe("rafi");
    },
  );
});
