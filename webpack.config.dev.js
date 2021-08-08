/* eslint-disable node/no-unpublished-require */

const { join, resolve } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

/** @param {string} dir */
const joiner = (dir) => join(__dirname, dir);
/** @param {string} dir */
const resolver = (dir) => resolve(__dirname, dir);

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/frontend/index.js',
  output: {
    path: resolver('dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@styles': joiner('src/frontend/assets/styles/'),
      '@components': joiner('src/frontend/components/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }]
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]'
            }
          }
        ]
      }
    ]
  },

  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    })
  ]
};
