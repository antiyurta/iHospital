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
   console.log('isDevelopment', isDevelopment);
   return {
      mode: isDevelopment,
      devtool: isDevelopment ? 'eval' : 'source-map',
      context: __dirname,
      entry: './src/index.js',
      output: {
         filename: '[name].js',
         chunkFilename: '[name].bundle.js',
         path: path.resolve(__dirname, './build'),
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
               use: ['style-loader', 'css-loader', 'postcss-loader']
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
         minimizer: [new TerserPlugin()],
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
         new ReactRefreshPlugin({
            overlay: false
         }),
         new CompressionPlugin({
            algorithm: 'gzip',
            test: /.js$|.css$/
         }),
         new webpack.HotModuleReplacementPlugin(),
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
      ].filter(Boolean),
      externals: {
         React: 'react'
      }
   };
};
