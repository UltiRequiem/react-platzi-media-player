module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    es6: true
  },
  ignorePatterns: ['node_modules'],
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:security/recommended',
    'plugin:node/recommended',
    'eslint:recommended',
    'plugin:import/react',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  settings: {
    'import/resolver': 'webpack'
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  parserOptions: {
    ecmaVersion: 2021,
    jsx: true,
    sourceType: 'module'
  },
  rules: {
    quotes: ['warn', 'single', 'avoid-escape'],
    'no-plusplus': 'off',
    'on-var': 'off',
    'max-classes-per-file': 'off',
    'node/no-missing-import': 'off',
    'no-console': 'off',
    'node/no-unpublished-import': 'off',
    'import/no-extraneous-dependencies': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
