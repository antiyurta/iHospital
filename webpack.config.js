const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');
module.exports = {
   devtool: 'inline-source-map',
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, './build'),
      filename: 'index_bundle.js',
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
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, './public/index.html'),
         filename: 'index.html',
         favicon: './public/Rfavicon.png'
      }),
      new Dotenv({
         path: './.env',
         systemvars: true
      }),
      new webpack.HotModuleReplacementPlugin()
   ],
   externals: {
      React: 'react'
   }
};
