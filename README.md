# wml-coding-std
A module for keeping consistent JS coding standards at WML

## Installation
First install the package:
```bash
npm i wml-coding-std
```
Then setup appropriate `.eslintrc` file(s) in your project. The [`eslint-config-walmart`](https://github.com/walmartlabs/eslint-config-walmart) package has several options available.

You'll also want to extend `eslint-config-prettier` and `eslint-plugin-react` after extending `eslint-config-walmart` (all included in this package) to make it Prettier-compatible:
```js
{
  "extends": [
    "walmart",
    "prettier",
    "prettier/react"
  ]
}
```

## Rationale
Given that we are rapidly adopting prettier to do pure style formatting, we need a new approach to keeping a consistent coding standard.  The solution proposed is to create a new module `wml-coding-std`, that does this:
- includes eslint, eslint-config-walmart, prettier eslint config overrides
- includes prettier
- includes npm postinstall scripts to:
  1. setup npm tasks for prettier
  1. setup git hooks for prettier
- includes a task that user can invoke manually to format all `js,jsx` code under all directories except the usual suspects like `node_modules`, `dist`, `coverage`
