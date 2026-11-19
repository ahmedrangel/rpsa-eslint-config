import { describe, expect, it } from "vitest";
import { rpsa } from "../src";
import { lintFixture } from "./utils";

describe("javascript", () => {
  it("reports prefer-const", async () => {
    expect(await lintFixture({}, "javascript/prefer-const.js")).toContain("prefer-const");
  });

  it("works without options", async () => {
    expect((await rpsa().toConfigs()).length).toBeGreaterThan(0);
  });
});
