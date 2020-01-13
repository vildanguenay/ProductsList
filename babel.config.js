// eslint-disable-next-line func-names
module.exports = function(api) {
  api.cache.forever();

  const isTest = process.env.NODE_ENV === 'test';

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 3% in alt-EU', 'IE 11'],
        },
        useBuiltIns: 'entry',
        modules: isTest ? 'auto' : false,
      },
    ],
    '@babel/preset-react',
  ];

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@babel/plugin-transform-runtime',
  ];

  return {
    presets,
    plugins,
  };
};
