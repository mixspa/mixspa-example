const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  // optimization: {
  //   minimize: false,
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'react-nav-app.vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // }
});
