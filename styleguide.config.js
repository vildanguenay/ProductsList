const path = require('path');
const webpack = require('./webpack.config');

const { rail, country, serverEnv } = process.env;
const serverPort = parseInt(process.env.devPort, 10) || 6060;
const project = 'packages/frontend';

module.exports = {
  serverPort,
  webpackConfig: webpack({
    production: false,
    serverEnv,
    country,
    rail,
    project,
  }),
  styleguideComponents: {
    Wrapper: path.join(__dirname, `${project}/src/common/styleguide/Wrapper`),
  },
  components: path.resolve(__dirname, `${project}/src/common/**/[A-Z]*.js`),
  skipComponentsWithoutExample: true,
  template: {
    body: {
      raw: '<div id="root"></div>',
    },
  },
};
