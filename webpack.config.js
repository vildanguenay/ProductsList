const path = require('path');

const webpackConfig = require('@xxxlgroup/hydra-ready-webpack');

module.exports = webpackConfig(path.resolve(__dirname));
