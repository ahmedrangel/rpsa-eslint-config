import { describe, expect, it } from "vitest";
import { lintFixture } from "./utils";

describe("html", () => {
  it("reports duplicate classes", async () => {
    const rules = await lintFixture({ html: true }, "html/duplicate-class.html");
    expect(rules.length).toBeGreaterThan(0);
  });
});