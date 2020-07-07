const { merge }  = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  output: {
    filename: `[name]-[contenthash:8].bundle.js`,
    path: path.join(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin(),
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.env': {
        BASE_URL: '"/"',
        NODE_ENV: '"production"'
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash:8].css',
      chunkFilename: 'css/[id]-[contenthash:8].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, './public'),
          to: path.join(__dirname, './dist'),
          toType: 'dir'
        }
      ]
    })
  ]
})