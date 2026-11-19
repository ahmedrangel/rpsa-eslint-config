import { describe, expect, it } from "vitest";
import { lintFixture } from "./utils";

describe("imports", () => {
  it("reports duplicate imports", async () => {
    expect(await lintFixture({ imports: true }, "imports/duplicates.js")).toContain("import/no-duplicates");
  });
});