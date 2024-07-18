// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// }

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:functional/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'functional',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'no-console': 0,
    'jsx-a11y/no-autofocus': 0,
    'react/react-in-jsx-scope': 0,
    'functional/no-conditional-statement': 0,
    'functional/no-conditional-statements': 0,
    'functional/no-expression-statements': 0,
    'functional/immutable-data': 0,
    'functional/functional-parameters': 0,
    'functional/no-try-statement': 0,
    'functional/no-throw-statement': 0,
    'functional/no-return-void': 0,
    'functional/prefer-immutable-types': 0,
    'no-underscore-dangle': [2, { allow: ['__filename', '__dirname'] }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'testing-library/no-debug': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 0,
    'consistent-return': 0,
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
};
