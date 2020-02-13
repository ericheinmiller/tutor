const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    publicPath: './',
  },
  plugins: [
    new Dotenv({
      path: './.env.production',
    }),
  ],
};
