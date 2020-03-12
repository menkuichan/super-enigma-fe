const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const dir = {
  source: resolve(__dirname, '..', 'src'),
  modules: resolve(__dirname, '..', 'node_modules'),
};

const baseConfig = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      dir.modules,
      dir.source,
    ],
  },
};

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: dir.modules,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.(jpg|png)$/,
    use: {
      loader: 'url-loader',
    },
  }];

const plugins = [
  new HTMLWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
  }),
];

module.exports = {
  dir,
  baseConfig,
  rules,
  plugins,
};
