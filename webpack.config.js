const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const webpack = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const DEV_URL = dotenv.parsed.REACT_APP_DEV_URL;

const isDevelopment = dotenv.parsed.NODE_ENV != 'production';

module.exports = {
   mode: isDevelopment ? 'development' : 'production',
   devtool: 'source-map',
   context: __dirname,
   entry: './src/index.js',
   output: {
      filename: '[name].js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, './build')
   },
   devServer: {
      compress: true,
      proxy: {
         '/api/': {
            target: DEV_URL,
            changeOrigin: true,
            pathRewrite: {
               ['^/api']: ''
            }
         }
      },
      port: 3000,
      open: true,
      historyApiFallback: true,
      client: {
         logging: 'error',
         overlay: true
      }
   },
   watch: true,
   target: 'web',
   resolve: {
      extensions: ['.js', '.jsx']
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
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
         },
         {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader',
            options: { limit: 100000, esModule: false }
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
      new CompressionPlugin({
         algorithm: 'gzip',
         test: /.js$|.css$/
      }),
      new webpack.HotModuleReplacementPlugin(),
      new FaviconsWebpackPlugin({
         logo: './public/ihospital.png',
         mode: 'auto',
         manifest: './public/manifest.json',
         publicPath: './public/'
      }),
      isDevelopment && new ReactRefreshPlugin(),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, './public/index.html'),
         filename: 'index.html',
         inject: 'head',
         favicon: './public/favicon.ico'
      }),
      new webpack.IgnorePlugin({
         resourceRegExp: /^\.\/locale$/,
         contextRegExp: /moment$/
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
