import { composer } from "eslint-flat-config-utils";
import type { Awaitable, ConfigWithExtends, FlatConfigComposer } from "eslint-flat-config-utils";
import gitignore from "eslint-config-flat-gitignore";
import type { ConfigOptions } from "./types";
import { html, imports, javascript, stylistic, suitescript, typescript } from "./configs";
import { globs } from "./utils";

const scoped = async (config: Awaitable<ConfigWithExtends>, files: string[]): Promise<ConfigWithExtends> => ({ ...await config, files });

export const rpsa = (options: ConfigOptions = {}): FlatConfigComposer => {
  const { ignores, ...flags } = options;
  const scriptGlobs = [
    ...globs.javascript,
    ...(flags.typescript ? globs.typescript : []),
    ...(flags.html ? globs.html : [])
  ];

  // Order matters: later configs override earlier ones.
  const presets: { enabled?: boolean, config: () => Awaitable<ConfigWithExtends>, files: string[] }[] = [
    { enabled: flags.html, config: html, files: globs.html },
    { enabled: true, config: javascript, files: scriptGlobs },
    { enabled: flags.typescript, config: typescript, files: globs.typescript },
    { enabled: flags.imports, config: imports, files: scriptGlobs },
    { enabled: flags.stylistic, config: stylistic, files: scriptGlobs },
    { enabled: flags.suitescript, config: suitescript, files: scriptGlobs }
  ];

  const c = composer(gitignore());
  if (ignores) {
    c.append({ ignores });
  }
  for (const { enabled, config, files } of presets) {
    if (enabled) {
      c.append(scoped(config(), files));
    }
  }
  return c;
};
