const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
module.exports = {
   devtool: 'inline-source-map',
   context: __dirname,
   target: ['web', 'es5'],
   entry: './src/index.js',
   output: {
      filename: '[name].js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, './build')
      // filename: 'index_bundle.js'
      // chunkFilename: 'vendor-react.js'
   },
   devServer: {
      port: 3000,
      hot: true,
      open: true,
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
         },
         {
            test: /\.(sa|sc|c)ss$/, // styles files
            use: ['style-loader', 'css-loader', 'postcss-loader']
         },
         {
            test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, // to import images and fonts
            loader: 'url-loader',
            options: { limit: false, esModule: false }
         }
      ]
   },
   optimization: {
      runtimeChunk: 'single',
      splitChunks: {
         cacheGroups: {
            reactVender: {
               test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
               name: 'vendor-react',
               chunks: 'all'
            },
            corejsVendor: {
               test: /[\\/]node_modules[\\/](core-js)[\\/]/,
               name: 'vendor-corejs',
               chunks: 'all'
            }
         }
      }
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, './public/index.html'),
         filename: 'index.html',
         favicon: './public/Rfavicon.png'
      }),
      new Dotenv({
         path: './.env',
         systemvars: true
      })
   ],
   externals: {
      React: 'react'
   }
};
