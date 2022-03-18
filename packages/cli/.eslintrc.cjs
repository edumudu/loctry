module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'always',
      mjs: 'always',
    }],
  },
};
