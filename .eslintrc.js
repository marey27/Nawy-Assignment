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
    "indent": ["error", 2] // Force 2-space indentation
    'no-console': 'warn',   // Corrected syntax
    semi: ['error', 'always']  // Enforce semicolons
  }
};
