const RULES = {
  OFF: "off",
  ERROR: "error",
  WARN: "warn",
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": RULES.OFF,
    "react/no-unknown-property": RULES.OFF,
    "react/react-in-jsx-scope": RULES.OFF,
    "no-unused-vars": RULES.WARN,
    camelcase: RULES.OFF,
  },
}
