import { describe, expect, it } from "vitest";
import { lintFixture } from "./utils";

describe("javascript", () => {
  it("reports prefer-const", async () => {
    expect(await lintFixture({}, "javascript/prefer-const.js")).toContain("prefer-const");
  });
});