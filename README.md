# <em><b>ESLINT-CONFIG-JERRY</b></em>

ESlint configuration for my personal [React](https://reactjs.org) projects, which integrates [TypeScript](https://www.typescriptlang.org) and [many awesome features](#whats-inside).

## Installation

This package is distributed via [npm](https://www.npmjs.com/package/eslint-config-jerry). It requires [eslint](https://github.com/eslint/eslint) and [typescript](https://github.com/microsoft/TypeScript).

Install the correct version of each package, which are listed by the command:

```sh
npm info "eslint-config-jerry@latest" peerDependencies
```

If using **npm 5+**, use this shortcut:

```sh
npx install-peerdeps --dev eslint-config-jerry
```

Or install each package by yourself:

```sh
npm install --save-dev eslint-config-jerry eslint@^x.x.x typescript@^x.x.x
# or
yarn add --dev eslint-config-jerry eslint@^x.x.x typescript@^x.x.x
```

## Usage

Add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: "jerry",
  rules: {
    // your overrides
  },
};
```

## Eliminate Prettier Conflicts for You

[Prettier](https://prettier.io) is a great code formatter, I highly recommend you guys give it a try. This package built-ins the [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) for you, all you need to do is setup the [Prettier CLI](https://prettier.io/docs/en/cli.html) to use it.

```json
// package.json

"format": "prettier --check ."
// or
"format": "prettier --write ."
```

## What's Inside?

This configuration contains the following cool packages.

| Package                                                                                                       | Description                                                                                                         | Auto Enabled |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------ |
| [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)                                   | Monorepo for all the tooling which enables ESLint to support [TypeScript](https://github.com/microsoft/TypeScript). |              |
| [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)        | This package provides Airbnb's .eslintrc as an extensible shared config.                                            |              |
| [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)                                       | React specific linting rules for ESLint.                                                                            |              |
| [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) | This ESLint plugin enforces the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html).                        |              |
| [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)                                     | ESLint plugin with rules that help validate proper imports.                                                         |              |
| [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)                                   | Static AST checker for a11y rules on JSX elements.                                                                  |              |
| [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)                                    | Enforce best practices for JavaScript promises.                                                                     |              |
| [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)                                     | Lint the browser compatibility of your code.                                                                        |              |
| [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)                                    | ESLint plugin for [Jest](https://jestjs.io).                                                                        |              |
| [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)                           | ESLint rules for use with [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom).                          | ✅           |
| [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)             | ESLint plugin for [Testing Library](https://testing-library.com/docs/react-testing-library/intro).                  | ✅           |
| [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)                                  | Turns off all rules that are unnecessary or might conflict with Prettier.                                           | ✅           |
| [@emotion/eslint-plugin](https://github.com/emotion-js/emotion/blob/master/packages/eslint-plugin/README.md)  | ESLint rules for [emotion](https://emotion.sh).                                                                     | ✅           |

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Publish To NPM

- https://www.section.io/engineering-education/npm-packages/

## Refs

- https://github.com/wellyshen/eslint-config-welly
