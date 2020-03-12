const webpack = require('webpack');
const { resolve } = require('path');
const { baseConfig, rules, plugins } = require('./base');

const webpackConfig = {
  ...baseConfig,
  mode: 'development',
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js',
    path: resolve(__dirname, 'dev'),
  },
  module: {
    rules: [...rules],
  },
  plugins: [
    ...plugins,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  devServer: {
    port: 8888,
    publicPath: '/',
    historyApiFallback: {
      index: '/index.html',
    },
    inline: true,
    hot: true,
  },
};

module.exports = webpackConfig;
