import { describe, expect, it } from "vitest";
import { stylistic } from "../src/configs";
import { lintFixture } from "./utils";

const options = { stylistic: true };

describe("stylistic", () => {
  it("reports quotes, semicolons and spacing", async () => {
    expect(await lintFixture(options, "stylistic/invalid.js")).toEqual(expect.arrayContaining([
      "@stylistic/quotes",
      "@stylistic/semi",
      "@stylistic/space-before-function-paren",
      "@stylistic/indent",
      "@stylistic/list-style"
    ]));
  });

  it("rejects 1tbs brace style", async () => {
    expect(await lintFixture(options, "stylistic/brace-1tbs.js")).toContain("@stylistic/brace-style");
  });

  it("accepts stroustrup brace style", async () => {
    expect(await lintFixture(options, "stylistic/brace-stroustrup.js")).not.toContain("@stylistic/brace-style");
  });

  it("accepts clean code", async () => {
    expect(await lintFixture(options, "stylistic/valid.js")).toEqual([]);
  });

  it("applies to <script> in html but skips indent", async () => {
    const rules = await lintFixture({ html: true, stylistic: true }, "stylistic/document.html");
    expect(rules).toContain("@stylistic/quotes");
    expect(rules).not.toContain("@stylistic/indent");
  });

  it("uses unix linebreaks outside windows", async () => {
    const platform = Object.getOwnPropertyDescriptor(process, "platform")!;
    Object.defineProperty(process, "platform", { value: "linux" });
    try {
      const config = await stylistic();
      expect(config.rules?.["@stylistic/linebreak-style"]).toEqual(["error", "unix"]);
    }
    finally {
      Object.defineProperty(process, "platform", platform);
    }
  });
});
