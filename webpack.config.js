var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'binance-balance.2m.js',
    path: path.resolve(__dirname, 'dist')
  }
};
