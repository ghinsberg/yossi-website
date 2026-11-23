import { describe, it, expect, afterEach, vi } from "vitest";
import { captureAgentTag } from "./agentTag";
import { hebrewAlternates } from "./canonical";

function fakeWindow(search: string, store: Record<string, string> = {}, throwing = false) {
  const storage = {
    getItem: (k: string) => {
      if (throwing) throw new Error("denied");
      return k in store ? store[k] : null;
    },
    setItem: (k: string, v: string) => {
      if (throwing) throw new Error("denied");
      store[k] = v;
    },
  };
  vi.stubGlobal("window", { location: { search }, sessionStorage: storage });
  return store;
}

afterEach(() => vi.unstubAllGlobals());

describe("captureAgentTag", () => {
  it("returns '' on the server (no window)", () => {
    expect(captureAgentTag()).toBe("");
  });
  it("stores and returns a known tag", () => {
    const s = fakeWindow("?a=gilat");
    expect(captureAgentTag()).toBe("gilat");
    expect(s.he_agent).toBe("gilat");
  });
  it("normalises case and whitespace", () => {
    const s = fakeWindow("?a=%20RaFi%20");
    expect(captureAgentTag()).toBe("rafi");
    expect(s.he_agent).toBe("rafi");
  });
  it("ignores unknown tags and stores nothing", () => {
    for (const q of ["?a=<script>", "?a=nobody", "?a=", "?a=%00", "?b=gilat", ""]) {
      const s = fakeWindow(q);
      expect(captureAgentTag()).toBe("");
      expect(s.he_agent).toBeUndefined();
    }
  });
  it("keeps a stored tag across pages without ?a=", () => {
    fakeWindow("", { he_agent: "gilat" });
    expect(captureAgentTag()).toBe("gilat");
  });
  it("an unknown tag does not overwrite a stored good one", () => {
    const s = fakeWindow("?a=nobody", { he_agent: "gilat" });
    expect(captureAgentTag()).toBe("gilat");
    expect(s.he_agent).toBe("gilat");
  });
  it("a tampered stored value is not returned", () => {
    fakeWindow("", { he_agent: "<script>" });
    expect(captureAgentTag()).toBe("");
  });
  it("is safe when sessionStorage throws", () => {
    fakeWindow("?a=gilat", {}, true);
    expect(captureAgentTag()).toBe("");
  });
});

describe("hebrewAlternates", () => {
  it("is undefined until the canonical host is known", () => {
    expect(hebrewAlternates("/hazmana", undefined)).toBeUndefined();
  });
  it("is the clean path, never a query", () => {
    expect(hebrewAlternates("/hazmana?a=gilat", "he.example")).toEqual({ canonical: "/hazmana" });
    expect(hebrewAlternates("/", "he.example")).toEqual({ canonical: "/" });
  });
});
