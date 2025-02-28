// eslint-disable-next-line @typescript-eslint/no-var-requires
const readPkgUp = require("read-pkg-up");

let hasPrettier = false;
let hasJestDom = false;
let hasTestingLibrary = false;
let hasEmotion = false;
let hasCypress = false;

try {
  const { packageJson } = readPkgUp.sync({ normalize: true });
  const allDeps = Object.keys({
    ...packageJson.peerDependencies,
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  });

  hasPrettier = allDeps.includes("prettier");
  hasJestDom = allDeps.includes("@testing-library/jest-dom");
  hasTestingLibrary =
    allDeps.includes("@testing-library/react") ||
    allDeps.includes("@testing-library/react-hooks");
  hasEmotion =
    allDeps.includes("@emotion/react") ||
    allDeps.includes("@emotion/styled") ||
    allDeps.includes("@emotion/css");
  hasCypress = allDeps.includes("cypress");
} catch (error) {
  // ignore error
}

/**
 * custom rules -> personal preference
 */
const customRule = {
  "import/prefer-default-export": "off",
};

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  plugins: [
    "@typescript-eslint",
    "promise",
    "jest",
    hasJestDom && "jest-dom",
    hasTestingLibrary && "testing-library",
    hasEmotion && "@emotion",
    hasCypress && "cypress",
  ].filter(Boolean),
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:promise/recommended",
    "plugin:compat/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    hasJestDom && "plugin:jest-dom/recommended",
    hasTestingLibrary && "plugin:testing-library/react",
    hasPrettier && "prettier",
    hasCypress && "plugin:cypress/recommended",
  ].filter(Boolean),
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    "jest/globals": true,
    ...(hasCypress ? { "cypress/globals": true } : null),
  },
  rules: {
    ...customRule,
    "no-use-before-define": "off",
    "no-shadow": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", "jsx", ".ts", ".tsx"],
      },
    ],
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { ignoreTypeReferences: true },
    ],
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    ...(hasEmotion
      ? {
          "@emotion/pkg-renaming": "error",
        }
      : null),
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "enum",
        format: null,
        custom: {
          // enum should be uppercase and snakecase and allow double underscore
          regex: "^[A-Z][A-Z0-9]*(__?[A-Z0-9]+)*$",
          match: true,
        },
      },
    ],
  },
};
