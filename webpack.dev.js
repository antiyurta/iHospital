const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
   mode: 'development',
   devtool: 'eval',
   devServer: {
      compress: true,
      port: 3000,
      open: true,
      historyApiFallback: true,
      client: {
         logging: 'error',
         overlay: false
      }
   },

   watch: true,
   target: 'web'
});
