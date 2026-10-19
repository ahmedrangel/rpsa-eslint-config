import type { ConfigWithExtends } from "eslint-flat-config-utils";

export const html = async (): Promise<ConfigWithExtends> => {
  const [
    { default: htmlParser },
    { default: htmlPlugin },
    { default: htmlPluginHtml }
  ] = await Promise.all([
    import("@html-eslint/parser"),
    import("@html-eslint/eslint-plugin"),
    import("eslint-plugin-html")
  ]);
  const config: ConfigWithExtends = {
    plugins: {
      "@html-eslint": htmlPlugin,
      "html": htmlPluginHtml
    },
    languageOptions: {
      parser: htmlParser
    },
    rules: {
      "@html-eslint/no-duplicate-class": "error",
      "@html-eslint/quotes": ["error", "double"],
      "@html-eslint/class-spacing": "error",
      "@html-eslint/css-no-empty-blocks": "error",
      "@html-eslint/indent": ["error", 2, {
        Attribute: 1,
        tagChildrenIndent: {
          html: 0,
          body: 0,
          head: 0
        }
      }]
    }
  };

  return config;
};