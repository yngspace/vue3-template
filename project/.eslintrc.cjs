/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    // 'eslint:recommended',
    '@vue/eslint-config-typescript',
    'airbnb-base',
  ],
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    JSX: true,
  },
  rules: {
    semi: ['error', 'never'],
    'no-param-reassign': 'off',
    'no-void': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',
    'linebreak-style': 0, // ignore linebreak-style
    'no-plusplus': 0,
    'max-len': ['error', 255],
    'vue/component-tags-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { ignoreTypeReferences: true }],
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'new-cap': ['error', { newIsCap: false }],
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    // 'prefer-promise-reject-errors': 'off',

    quotes: ['warn', 'single', { avoidEscape: true }],

    // this rule, if on, would require explicit return type on the `render` function
    '@typescript-eslint/explicit-function-return-type': 'off',

    // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
    '@typescript-eslint/no-var-requires': 'off',

    // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
    // does not work with type definitions
    'no-unused-vars': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
      multilineDetection: 'brackets',
    }],
  },
}
