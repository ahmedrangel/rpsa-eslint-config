import { readFileSync } from "node:fs";
import { EOL } from "node:os";
import { resolve } from "node:path";
import { ESLint } from "eslint";
import { rpsa } from "../src";
import type { ConfigOptions } from "../src/types";

const fixturesDir = resolve(import.meta.dirname, "fixtures");

/** Lints a file from `test/fixtures` and returns the rule ids reported. */
export const lintFixture = async (options: ConfigOptions, fixture: string) => {
  const filePath = resolve(fixturesDir, fixture);
  const code = readFileSync(filePath, "utf8").replace(/\r?\n/g, EOL);
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: await rpsa(options).toConfigs(),
    cwd: process.cwd()
  });
  const [result] = await eslint.lintText(code, { filePath, warnIgnored: false });
  return result?.messages.map(m => m.ruleId) ?? [];
};