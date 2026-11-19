import { describe, expect, it } from "vitest";
import { lintFixture } from "./utils";

describe("ignores", () => {
  it("skips files matching the ignores option", async () => {
    const options = { stylistic: true, ignores: ["**/ignored/**"] };
    expect(await lintFixture(options, "ignores/ignored/skipped.js")).toEqual([]);
  });
});