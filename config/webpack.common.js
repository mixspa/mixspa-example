const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: {
    'main': './src/index.js',
    'react-apps/react-home-app': './react-apps/home-app/index.js',
    'react-apps/react-nav-app': './react-apps/nav-app/index.js',
    'react-apps/react-app-one': './react-apps/app-one/index.js',
    'react-apps/react-app-two': './react-apps/app-two/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { modules: true, localIdentName: '[name]__[local]-[hash:base64:5]' } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({ browsers: ['> 0.01%'] })
              ]
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].bundle.css' }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      excludeChunks: [
        'react-apps/react-home-app',
        'react-apps/react-nav-app',
        'react-apps/react-app-one',
        'react-apps/react-app-two'
      ]
    })
  ]
};
