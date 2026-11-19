import { describe, expect, it } from "vitest";
import { lintFixture } from "./utils";

describe("suitescript", () => {
  it("reports log.debug with a single argument", async () => {
    const rules = await lintFixture({ suitescript: true }, "suitescript/log-debug.js");
    expect(rules.some(r => r?.startsWith("suitescript/"))).toBe(true);
  });

  it("rejects an invalid @NApiVersion", async () => {
    expect(await lintFixture({ suitescript: true }, "suitescript/invalid-api-version.js")).toContain("suitescript/api-version");
  });

  describe("SuiteScript 1.0", () => {
    const options = { suitescript: true };
    const suitescriptRules = (rules: (string | null)[]) => rules.filter(r => r?.startsWith("suitescript/"));

    it("accepts a script without a define call", async () => {
      expect(suitescriptRules(await lintFixture(options, "suitescript/v1-user-event.js"))).toEqual([]);
    });
  });
});
