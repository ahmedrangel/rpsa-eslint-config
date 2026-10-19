import type { ConfigWithExtends } from "eslint-flat-config-utils";

export const suitescript = async (): Promise<ConfigWithExtends> => {
  const { default: pluginImport } = await import("eslint-plugin-suitescript");

  const config: ConfigWithExtends = {
    plugins: {
      suitescript: pluginImport
    },
    rules: {
      "suitescript/script-type": "error",
      "suitescript/api-version": "error",
      "suitescript/log-args": "error",
      "suitescript/no-invalid-modules": "error",
      "suitescript/module-vars": "error"
    }
  };

  return config;
};