# RPSA's eslint-config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

RPSA's ESLint flat configuration preset.

## Installation

```sh
pnpm add -D eslint rpsa-eslint-config
```

## Usage

Create `eslint.config.mjs` in your project root:

```js
import { rpsa } from 'rpsa-eslint-config'

export default rpsa()
```

### Configuration

Pass an options object to `rpsa()` to enable rules for specific technologies:

```js
import { rpsa } from 'rpsa-eslint-config'

export default rpsa({
  typescript: true,
  imports: true,
  stylistic: true,
  html: true,
  suitescript: true
})
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/rpsa-eslint-config.svg?style=flat
[npm-version-href]: https://npmjs.com/package/rpsa-eslint-config

[npm-downloads-src]: https://img.shields.io/npm/dm/rpsa-eslint-config.svg?style=flat
[npm-downloads-href]: https://npmjs.com/package/rpsa-eslint-config