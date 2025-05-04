module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "no-console": "off",  // Example: Disable console.log warnings
    "indent": ["error", 2] // Force 2-space indentation
  }
};
