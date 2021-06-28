module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'object-shorthand': 'off',
    'no-bitwise': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-mixed-operators': 'off',
    'prefer-destructuring': 'off',
  },
};
