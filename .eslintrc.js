module.exports = {
  "env": {
    "browser": true,   // if you're targeting the browser
    "es2021": true,
    "node": true        // Add Node.js environment
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "no-console": "warn",  // Downgrade to warning for console statements
    "semi": ["error", "always"],  // Enforce semicolons
    "no-undef": "off"  // Optionally, turn off no-undef if you'd rather disable this rule
  }
};

