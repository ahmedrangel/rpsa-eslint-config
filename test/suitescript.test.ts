import { describe, expect, it } from "vitest";
import { lintFixture } from "./utils";

describe("suitescript", () => {
  it("reports log.debug with a single argument", async () => {
    const rules = await lintFixture({ suitescript: true }, "suitescript/log-debug.js");
    expect(rules.some(r => r?.startsWith("suitescript/"))).toBe(true);
  });
});