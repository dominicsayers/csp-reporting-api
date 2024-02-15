module.exports = {
  env: {
    es2021: true
  },
  extends: "standard-with-typescript",
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        ".eslintrc.js",
        "babel.config.js",
        "commitlint.config.js",
        "jest.config.ts"
      ],
      parserOptions: {
        sourceType: "script",
        project: "./tsconfig.eslint.json"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  ignorePatterns: ["coverage/", "out/"],
  rules: {
    quotes: "off",
    semi: "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/semi": "off"
  }
};
