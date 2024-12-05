module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', {
      avoidEscape: false,
      allowTemplateLiterals: true
    }],
    'no-undef': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'no-unused-vars': 'off',
    'object-curly-spacing': ['error', 'always'],
    'space-infix-ops': 'error',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/space-infix-ops': 'error',
    'no-prototype-builtins': 'off',
    'react/no-unescaped-entities': 'off',
    'no-empty-pattern': 'off',
    'no-empty': 'off',
    'no-constant-condition': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}