const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: './index.js',
  output: {
    filename: 'binance-balance.2m.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new webpack.BannerPlugin({ banner: '#!/usr/bin/env /usr/local/bin/node', raw: true }),
  ],
};
