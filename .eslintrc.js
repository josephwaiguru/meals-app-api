module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "prettier/prettier": ["error", { "endOfLine": "off" }],
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/interface-name-prefix': ['warn', 'always'],
    '@typescript-eslint/explicit-function-return-type': ['error', {
      'allowExpressions': true,
      'allowTypedFunctionExpressions': true,
      'allowHigherOrderFunctions': true
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/indent': ['error', 2]
  },
};
