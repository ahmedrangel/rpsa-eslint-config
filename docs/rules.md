# Rules

Rules enabled by each config, in the order they are defined in `src/configs/`. Every enabled rule uses the `error` severity.

- [javascript](#javascript)
- [typescript](#typescript)
- [imports](#imports)
- [stylistic](#stylistic)
- [html](#html)
- [suitescript](#suitescript)

## javascript

Always enabled. Applies to `.js`, `.mjs`, `.cjs` and `.jsx` files (and to TypeScript and HTML scripts when those options are on).

**Language options**

- `ecmaVersion: 2022`, `sourceType: "module"`, JSX enabled.
- Globals: `browser`, `es2021` and `node`, plus `document`, `navigator` and `window`.
- `reportUnusedDisableDirectives: true`.

**Enabled rules**

| Rule | Options | Description |
| --- | --- | --- |
| [`no-console`](https://eslint.org/docs/latest/rules/no-console) | allow `log`, `info`, `warn`, `error` | Disallows other `console` methods such as `console.debug`. |
| [`sort-imports`](https://eslint.org/docs/latest/rules/sort-imports) | `ignoreDeclarationSort: true` | Sorts the members inside an import (`{ a, b }`), not the import lines. |
| [`prefer-const`](https://eslint.org/docs/latest/rules/prefer-const) | | Requires `const` for variables that are never reassigned. |
| [`prefer-rest-params`](https://eslint.org/docs/latest/rules/prefer-rest-params) | | Requires rest parameters instead of `arguments`. |
| [`prefer-spread`](https://eslint.org/docs/latest/rules/prefer-spread) | | Requires spread instead of `.apply()`. |

**Disabled rules**

These rules are turned off because TypeScript already checks them:

`constructor-super`, `getter-return`, `no-const-assign`, `no-dupe-args`, `no-dupe-class-members`, `no-dupe-keys`, `no-func-assign`, `no-import-assign`, `no-new-symbol`, `no-obj-calls`, `no-redeclare`, `no-setter-return`, `no-this-before-super`, `no-undef`, `no-unreachable`, `no-unsafe-negation`, `valid-typeof`, `no-unused-vars`.

## typescript

Enabled with `typescript: true`. Applies to `.ts`, `.mts`, `.cts` and `.tsx` files. Uses the `typescript-eslint` parser.

| Rule | Options | Description |
| --- | --- | --- |
| [`@typescript-eslint/no-explicit-any`](https://typescript-eslint.io/rules/no-explicit-any) | | Disallows the `any` type. |
| [`@typescript-eslint/consistent-type-imports`](https://typescript-eslint.io/rules/consistent-type-imports) | `prefer: "type-imports"`, `disallowTypeAnnotations: false` | Requires `import type` for imports used only as types. |
| [`@typescript-eslint/no-unused-vars`](https://typescript-eslint.io/rules/no-unused-vars) | `vars: "all"`, `args: "after-used"`, `ignoreRestSiblings: true`, `varsIgnorePattern: "^_"`, `argsIgnorePattern: "^_"` | Disallows unused variables and arguments. Names starting with `_` are ignored. |
| [`@typescript-eslint/no-import-type-side-effects`](https://typescript-eslint.io/rules/no-import-type-side-effects) | | Disallows `import { type A }` with only inline type specifiers. Use `import type { A }`. |
| [`@typescript-eslint/no-empty-object-type`](https://typescript-eslint.io/rules/no-empty-object-type) | | Disallows the `{}` type. |

## imports

Enabled with `imports: true`. Uses `eslint-plugin-import-x`, registered under the `import` prefix.

| Rule | Options | Description |
| --- | --- | --- |
| [`import/first`](https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md) | | Requires imports before other statements. |
| [`import/no-duplicates`](https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md) | | Disallows importing the same module more than once. |
| [`import/no-mutable-exports`](https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md) | | Disallows exporting `let` or `var`. |
| [`import/no-named-default`](https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md) | | Disallows `import { default as x }`. |
| [`import/no-self-import`](https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md) | | Disallows a module importing itself. |
| [`import/order`](https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md) | | Enforces the order of import groups. |
| [`import/newline-after-import`](https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md) | `count: 1` | Requires one blank line after the last import. |

## stylistic

Enabled with `stylistic: true`. Uses `@stylistic/eslint-plugin`. The `indent` rule is patched to skip HTML documents, because `@html-eslint/indent` handles indentation there. Inside HTML, the other rules still apply to `<script>` blocks.

| Rule | Options | Description |
| --- | --- | --- |
| [`@stylistic/indent`](https://eslint.style/rules/indent) | `2`, `SwitchCase: 1` | Two-space indentation. `case` is indented inside `switch`. |
| [`@stylistic/linebreak-style`](https://eslint.style/rules/linebreak-style) | `windows` on Windows, `unix` elsewhere | Enforces CRLF or LF according to the platform. |
| [`@stylistic/quotes`](https://eslint.style/rules/quotes) | `double` | Double quotes. |
| [`@stylistic/semi`](https://eslint.style/rules/semi) | `always` | Requires semicolons. |
| [`@stylistic/no-extra-semi`](https://eslint.style/rules/no-extra-semi) | | Disallows unnecessary semicolons. |
| [`@stylistic/comma-dangle`](https://eslint.style/rules/comma-dangle) | `never` | Disallows trailing commas. |
| [`@stylistic/space-before-function-paren`](https://eslint.style/rules/space-before-function-paren) | `always` | Requires a space before function parentheses: `function foo () {}`. |
| [`@stylistic/multiline-ternary`](https://eslint.style/rules/multiline-ternary) | `never` | Disallows ternaries split across lines. |
| [`@stylistic/member-delimiter-style`](https://eslint.style/rules/member-delimiter-style) | multiline: `semi`, single line: `comma` | Delimiters in interfaces and type literals. |
| [`@stylistic/arrow-spacing`](https://eslint.style/rules/arrow-spacing) | `before: true`, `after: true` | Spaces around `=>`. |
| [`@stylistic/brace-style`](https://eslint.style/rules/brace-style) | `stroustrup`, `allowSingleLine: true` | `else` and `catch` go on a new line after `}`. Single-line blocks are allowed. |
| [`@stylistic/no-multi-spaces`](https://eslint.style/rules/no-multi-spaces) | | Disallows repeated spaces. |
| [`@stylistic/space-before-blocks`](https://eslint.style/rules/space-before-blocks) | | Requires a space before `{`. |
| [`@stylistic/no-trailing-spaces`](https://eslint.style/rules/no-trailing-spaces) | | Disallows trailing whitespace. |
| [`@stylistic/block-spacing`](https://eslint.style/rules/block-spacing) | `always` | Spaces inside single-line blocks: `{ return; }`. |
| [`@stylistic/comma-spacing`](https://eslint.style/rules/comma-spacing) | `before: false`, `after: true` | No space before a comma, one after. |
| [`@stylistic/comma-style`](https://eslint.style/rules/comma-style) | `last` | Commas at the end of the line. |
| [`@stylistic/key-spacing`](https://eslint.style/rules/key-spacing) | `beforeColon: false`, `afterColon: true` | `{ key: value }`. |
| [`@stylistic/keyword-spacing`](https://eslint.style/rules/keyword-spacing) | `before: true`, `after: true` | Spaces around keywords. |
| [`@stylistic/list-style`](https://eslint.style/rules/list-style) | single line: no spacing. `{}`: spacing. `()` and `<>`: off | No spaces inside `[ ]`, spaces inside `{ }`. Replaces the deprecated `array-bracket-spacing`, `object-curly-spacing`, `object-curly-newline` and `object-property-newline`. |
| [`@stylistic/space-in-parens`](https://eslint.style/rules/space-in-parens) | `never` | No spaces inside parentheses. |
| [`@stylistic/no-multiple-empty-lines`](https://eslint.style/rules/no-multiple-empty-lines) | `max: 1` | At most one blank line in a row. |
| [`@stylistic/quote-props`](https://eslint.style/rules/quote-props) | `consistent-as-needed` | Quote object keys only when needed, and consistently within an object. |
| [`@stylistic/arrow-parens`](https://eslint.style/rules/arrow-parens) | `as-needed`, `requireForBlockBody: true` | `x => x`, but `(x) => { ... }`. |
| [`@stylistic/function-call-spacing`](https://eslint.style/rules/function-call-spacing) | `never` | No space between a function name and its call parentheses. |
| [`@stylistic/space-infix-ops`](https://eslint.style/rules/space-infix-ops) | | Spaces around operators. |

## html

Enabled with `html: true`. Applies to `.html` files. Uses the `@html-eslint` parser. The `eslint-plugin-html` plugin is registered under `html`, but no rules from it are enabled.

| Rule | Options | Description |
| --- | --- | --- |
| [`@html-eslint/no-duplicate-class`](https://html-eslint.org/docs/rules/no-duplicate-class) | | Disallows repeated class names in one `class` attribute. |
| [`@html-eslint/quotes`](https://html-eslint.org/docs/rules/quotes) | `double` | Double quotes for attributes. |
| [`@html-eslint/class-spacing`](https://html-eslint.org/docs/rules/class-spacing) | | Disallows extra spaces in `class` values. |
| [`@html-eslint/css-no-empty-blocks`](https://html-eslint.org/docs/rules/css-no-empty-blocks) | | Disallows empty CSS blocks in `<style>`. |
| [`@html-eslint/indent`](https://html-eslint.org/docs/rules/indent) | `2`, `Attribute: 1`, no extra indent for children of `html`, `head` and `body` | Two-space indentation. |

## suitescript

Enabled with `suitescript: true`. Uses `eslint-plugin-suitescript`.

| Rule | Description |
| --- | --- |
| [`suitescript/script-type`](https://github.com/acdvs/eslint-plugin-suitescript/blob/master/docs/rules/script-type.md) | Enforces valid `@NScriptType` tag values. |
| [`suitescript/api-version`](https://github.com/acdvs/eslint-plugin-suitescript/blob/master/docs/rules/api-version.md) | Enforces valid `@NApiVersion` tag values. |
| [`suitescript/log-args`](https://github.com/acdvs/eslint-plugin-suitescript/blob/master/docs/rules/log-args.md) | Enforces correct `log` arguments. |
| [`suitescript/no-invalid-modules`](https://github.com/acdvs/eslint-plugin-suitescript/blob/master/docs/rules/no-invalid-modules.md) | Enforces valid SuiteScript modules in the `define` array. |
| [`suitescript/module-vars`](https://github.com/acdvs/eslint-plugin-suitescript/blob/master/docs/rules/module-vars.md) | Enforces correct module identifiers for each configured module. |
