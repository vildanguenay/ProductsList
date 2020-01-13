/**
 * To get a description of all available commands run:
 *
 * yarn cli --help
 *
 */

module.exports = {
  // brands/rails that can get used
  brands: [],
  /**
  * available by default: "development", "production", "webpackBundleAnalyzer", "styleguide"
  * Modules can be overwritten or extended with a custom command  eg.
  development: {
      command: 'dev [rail] [country] [serverEnv]',
      description: 'Start development setup',
      action(rail, country, serverEnv) {
        console.log(rail);
        console.log(country);
      },
    },
   * */
  modules: {},

  serverEnvironments: ['l', 'p'],
};
