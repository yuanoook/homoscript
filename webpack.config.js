const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    background: path.join(__dirname, 'src/extension', 'background.js'),
    options: path.join(__dirname, 'src/extension', 'options.js'),
    content: path.join(__dirname, 'src/extension', 'content.js'),
    popup: path.join(__dirname, 'src/extension/popup', 'index.js'),
  },
  devtool: false,
  output: {
    path: path.join(__dirname, 'extension'),
    filename: '[name]/index.js',
    library: 'Homo',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
      }),
    ],
  },
};
