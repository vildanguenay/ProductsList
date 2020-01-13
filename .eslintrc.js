module.exports = {
  extends: ['@xxxlgroup/eslint-config-hydra'],

  rules: {
    'no-unused-expressions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: `${__dirname}/webpack.ide.resolver.js`,
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  globals: {
    CONFIG: false,
  },
};
