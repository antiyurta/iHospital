const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (_env, argv) => {
   const isDevelopment = argv.mode !== 'production';
   return {
      mode: isDevelopment,
      // devtool: isDevelopment ? 'eval' : 'source-map',
      context: __dirname,
      entry: './src/index.js',
      output: {
         filename: '[name].js',
         chunkFilename: '[name].bundle.js',
         path: path.resolve(__dirname, '..', 'dist'),
         publicPath: '/'
      },
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
      target: 'web',
      resolve: {
         extensions: ['.js', '.jsx']
      },
      module: {
         rules: [
            {
               test: /\.(js|jsx)?$/,
               exclude: /node_modules/,
               use: {
                  loader: require.resolve('babel-loader'),
                  options: {
                     presets: [['@babel/preset-env', { targets: 'defaults' }], ['@babel/preset-react']],
                     plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean)
                  }
               }
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
               test: /\.(jpg|jpeg|png|svg|gif)$/,
               type: 'asset/resource'
            }
         ]
      },
      optimization: {
         minimize: true,
         minimizer: [new TerserPlugin()]
      },
      plugins: [
         new ReactRefreshPlugin({
            overlay: false
         }),
         new CompressionPlugin({
            algorithm: 'gzip',
            test: /.js$|.css$/
         }),
         new webpack.HotModuleReplacementPlugin(),
         new FaviconsWebpackPlugin({
            logo: './public/ihospital.png',
            mode: 'webapp',
            manifest: './public/manifest.json',
            publicPath: './public/'
         }),
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
      ].filter(Boolean),
      externals: {
         React: 'react'
      }
   };
};
