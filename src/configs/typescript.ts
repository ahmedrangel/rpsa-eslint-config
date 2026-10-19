import type { ConfigWithExtends } from "eslint-flat-config-utils";

export const typescript = async (): Promise<ConfigWithExtends> => {
  const [
    parserTypescript,
    pluginTypescript
  ] = await Promise.all([
    (await import("typescript-eslint")).parser,
    (await import("typescript-eslint")).plugin
  ]);

  const config: ConfigWithExtends = {
    plugins: {
      "@typescript-eslint": pluginTypescript
    },
    languageOptions: {
      parser: parserTypescript
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": ["error", {
        disallowTypeAnnotations: false,
        prefer: "type-imports"
      }],
      "@typescript-eslint/no-unused-vars": ["error", {
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
        vars: "all",
        varsIgnorePattern: "^_"
      }],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-empty-object-type": "error"
    }
  };

  return config;
};