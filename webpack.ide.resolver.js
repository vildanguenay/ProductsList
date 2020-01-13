const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    modules: [
  		path.resolve(__dirname, './packages/frontend/src/les'),
			path.resolve(__dirname, './packages/frontend/src/lz'),
			path.resolve(__dirname, './packages/frontend/src/mmx'),
			path.resolve(__dirname, './packages/frontend/src/mbx'),
			path.resolve(__dirname, './packages/frontend/src/common'),
			path.resolve(__dirname, './packages/frontend/src'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
};
