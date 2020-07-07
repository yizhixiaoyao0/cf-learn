const { merge }  = require('webpack-merge');
const common = require('./webpack.common.js');
const {DefinePlugin, HotModuleReplacementPlugin} = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hotOnly: true,
    contentBase: ['./public'],
    port: 8085,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new DefinePlugin({
      'process.env': {
        BASE_URL: '"/"',
        NODE_ENV: '"development"'
      }
    })
  ]
})