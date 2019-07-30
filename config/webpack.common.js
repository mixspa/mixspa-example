const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const entry = require('./webpack.entry.js');

module.exports = {
  mode: 'production',
  entry: entry,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        include: [
          path.resolve(__dirname, '../vue-apps'),
        ],
        use: [
          { loader: MiniCssExtractPlugin.loader },
          // { loader: 'vue-style-loader' },
          { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.s?css$/,
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../react-apps'),
        ],
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { modules: true, importLoaders: 2 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-preset-env')({ stage: 0 })
              ]
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].bundle.css' }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunks: ['main', 'vendors']
    })
  ]
};
