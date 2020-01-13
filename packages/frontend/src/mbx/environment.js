// used for defining a basePath for the webpack-dev-server proxy.

const environment = {
  l: {
    at: {
      baseUrl: "localhost:3000"
    }
  },
  p: {
    at: {
      baseUrl: "https://www.xxxlutz.at"
    }
  }
};
module.exports = environment;

