const path = require('path');
const {DefinePlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'none',
  entry: {
    app: [
      './src/main.js'
    ]
  },
  output: {
    filename: `[name]-[hash:8].bundle.js`,
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.vue', '.jsx', 'less', '.html'],
  },
  devtool: 'none',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        loaders: [isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            options: {
              sourceMap: false,
              shadowMode: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  esModule: false,
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      url: '/',
      inject: true,
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new DefinePlugin({
      'process.env': {
        BASE_URL: '"/"',
        NODE_ENV: '"none"'
      }
    })
  ]
}