const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const EasySeo = require('webpack-easy-seo');

const seoInst = new EasySeo({
   title: 'i-Hospital',
   description: 'Эмнэлэгийн цахим систем',
   publicUrl: 'https://ihospital.mn',
   imagePath: './public/ihospital.png'
});

module.exports = {
   devtool: 'inline-source-map',
   context: __dirname,
   entry: './src/index.js',
   output: {
      filename: '[name].js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, './build')
   },
   devServer: {
      port: 3000,
      hot: true,
      open: true,
      historyApiFallback: true
   },
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
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, './public/index.html'),
         title: seoInst.getTitle(),
         meta: seoInst.getMetaTags(),
         filename: 'index.html',
         inject: true,
         favicon: './public/favicon.ico',
         manifest: './public/manifest.json'
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
