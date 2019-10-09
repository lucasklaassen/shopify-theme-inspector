const CopyPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  plugins: [
    new CopyPlugin([
      {from: 'src/manifest.json'},
      {from: 'src/images', to: 'images'},
    ]),
  ],
});
