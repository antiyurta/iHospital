const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(
   common({
      isDevelopment: false
   }),
   {
      mode: 'production',
      devtool: 'source-map',
      watch: false
   }
);
