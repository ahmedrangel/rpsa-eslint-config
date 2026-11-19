# RPSA's eslint-config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

RPSA's ESLint flat configuration preset. Enable only the rule sets your project needs.

## Features

- ESLint flat config, built on [`eslint-flat-config-utils`](https://github.com/antfu/eslint-flat-config-utils).
- Opt-in rule sets for TypeScript, imports, stylistic, HTML and SuiteScript.
- Respects your `.gitignore` automatically.
- Returns a composer, so you can append or override configs with a chainable API.

## Installation

```sh
pnpm add -D eslint rpsa-eslint-config
```

Requires ESLint `^9.10.0` or `^10.0.0`.

## Usage

Create `eslint.config.mjs` in your project root:

```js
import { rpsa } from "rpsa-eslint-config";

export default rpsa();
```

Without options, only the core JavaScript rules are enabled.

### Options

Pass an options object to `rpsa()` to enable rules for specific technologies:

```js
import { rpsa } from "rpsa-eslint-config";

export default rpsa({
  typescript: true,
  imports: true,
  stylistic: true,
  html: true,
  suitescript: true,
  ignores: ["dist", "**/generated/**"]
});
```

| Option | Default | Applies to | Description |
| --- | --- | --- | --- |
| `javascript` | `true` | `.js`, `.mjs`, `.cjs`, `.jsx` | Core JavaScript rules. Cannot be disabled. |
| `typescript` | `false` | `.ts`, `.mts`, `.cts`, `.tsx` | [`typescript-eslint`](https://typescript-eslint.io) rules and parser. Also extends the other enabled rule sets to TypeScript files. |
| `imports` | `false` | JavaScript, TypeScript and HTML scripts | [`eslint-plugin-import-x`](https://github.com/un-ts/eslint-plugin-import-x) rules such as `no-duplicates`, `order` and `newline-after-import`. |
| `stylistic` | `false` | JavaScript, TypeScript and HTML scripts | Formatting rules from [`@stylistic/eslint-plugin`](https://eslint.style). |
| `html` | `false` | `.html` | [`@html-eslint`](https://html-eslint.org) rules. Also lints the `<script>` blocks in HTML files. |
| `suitescript` | `false` | JavaScript, TypeScript and HTML scripts | [`eslint-plugin-suitescript`](https://github.com/acdvs/eslint-plugin-suitescript) rules for NetSuite scripts. |
| `ignores` | `[]` | All files | Glob patterns to skip. |

### Extending the config

`rpsa()` returns a [`FlatConfigComposer`](https://github.com/antfu/eslint-flat-config-utils#composer), so you can add or change configs by chaining:

```js
import { rpsa } from "rpsa-eslint-config";

export default rpsa({ typescript: true })
  .append({
    files: ["**/*.test.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off"
    }
  });
```

## Rules

See [docs/rules.md](./docs/rules.md) for every rule each config enables.

## Development

```sh
pnpm lint        # lint the repository
pnpm test        # run the tests with coverage
pnpm test:types  # type-check
pnpm build       # build to dist
```

## License

[MIT](./LICENSE.md)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/rpsa-eslint-config.svg?style=flat
[npm-version-href]: https://npmjs.com/package/rpsa-eslint-config

[npm-downloads-src]: https://img.shields.io/npm/dm/rpsa-eslint-config.svg?style=flat
[npm-downloads-href]: https://npmjs.com/package/rpsa-eslint-config
