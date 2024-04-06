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
   resolve: {
      alias: {
         '@ApiServices': path.resolve(__dirname, 'src/services'),
         '@Comman': path.resolve(__dirname, 'src/components'),
         '@Pages': path.resolve(__dirname, 'src/components/pages'),
         '@Features': path.resolve(__dirname, 'src/features'),
         '@Assets': path.resolve(__dirname, 'src/assets'),
         '@Utils': path.resolve(__dirname, 'src/utils')
      },
      extensions: ['.js', '.jsx']
   },
   watch: true,
   target: 'web'
});
