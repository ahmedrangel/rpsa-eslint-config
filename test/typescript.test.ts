import { describe, expect, it } from "vitest";
import { lintFixture } from "./utils";

describe("typescript", () => {
  it("reports unused vars and any", async () => {
    const rules = await lintFixture({ typescript: true }, "typescript/invalid.ts");
    expect(rules).toContain("@typescript-eslint/no-unused-vars");
    expect(rules).toContain("@typescript-eslint/no-explicit-any");
  });
});