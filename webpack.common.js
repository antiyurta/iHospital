const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackBar = require('webpackbar');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env) => {
   const isDevelopment = env.mode !== 'production';
   console.log('TT', isDevelopment);
   return {
      context: __dirname,
      entry: './src/index.js',
      output: {
         filename: '[name].js',
         chunkFilename: '[name].bundle.js',
         path: path.resolve(__dirname, '../build'),
         publicPath: '/',
         clean: true
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
               use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
               test: /\.less$/,
               use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
               test: /\.(ico|png|jpg|jpeg|gif|svg|json)$/,
               type: 'asset/resource'
            }
         ]
      },
      optimization: {
         runtimeChunk: 'single',
         minimize: !isDevelopment,
         minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
         splitChunks: {
            cacheGroups: {
               vendor: {
                  test: /[\\/]node_modules[\\/]/,
                  name: 'vendors',
                  chunks: 'all'
               }
            }
         }
      },
      plugins: [
         new webpack.ProgressPlugin(),
         new WebpackBar({
            name: 'Уншиж байна ...',
            color: '#00FF00',
            reporters: ['basic', 'fancy', 'profile', 'stats'],
            profile: true
         }),
         new ReactRefreshPlugin({
            overlay: false
         }),
         new CompressionPlugin({
            algorithm: 'gzip',
            test: /.js$|.css$/
         }),
         new FaviconsWebpackPlugin({
            logo: './public/favicon-32x32.png',
            mode: 'webapp',
            manifest: './public/manifest.json',
            publicPath: '/'
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
      ],
      externals: {
         React: 'react'
      }
   };
};
