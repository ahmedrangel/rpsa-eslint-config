import { composer } from "eslint-flat-config-utils";
import type { Awaitable, ConfigWithExtends, FlatConfigComposer } from "eslint-flat-config-utils";
import gitignore from "eslint-config-flat-gitignore";
import type { ConfigOptions } from "./types";
import { html, imports, javascript, stylistic, suitescript, typescript } from "./configs";
import { globs } from "./utils";

const scoped = async (config: Awaitable<ConfigWithExtends>, files: string[]): Promise<ConfigWithExtends> => ({ ...await config, files });

export const rpsa = (options?: ConfigOptions): FlatConfigComposer => {
  const c = composer();
  const scriptGlobs = [...globs.javascript, ...(options?.typescript ? globs.typescript : [])];

  if (options?.html) {
    scriptGlobs.push(...globs.html);
    c.append(scoped(html(), globs.html));
  }

  c.append(gitignore(), scoped(javascript(), scriptGlobs));

  if (options?.typescript) {
    c.append(scoped(typescript(), globs.typescript));
  }

  if (options?.imports) {
    c.append(scoped(imports(), scriptGlobs));
  }

  if (options?.stylistic) {
    c.append(scoped(stylistic(), scriptGlobs));
  }

  if (options?.suitescript) {
    c.append(scoped(suitescript(), scriptGlobs));
  }

  return c;
};
