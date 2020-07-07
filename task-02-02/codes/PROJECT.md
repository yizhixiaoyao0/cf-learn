# 项目说明

1. 项目构建
   
   项目分为生产环境和开发环境， 根据这个我们将开发构建也分为两部分， 也就是我们常见的 yarn server 和 yarn  build


   ### 公共基础配置： webpack.common.js

      1. 我们先基础配置打包入口文件， 以及输出目录配置， 这里我们将模式设置为none， 具体的模式到相应环境配置文件中修改

          * 我们将输出文件设置为hash模式，注意，contenthash和chunkhash都只能在生产环境使用， 且hash模式需要配置，HotModuleReplacementPlugin，这里我们将在dev模式下设置；
        
            ```
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
            ```
      2. 配置不同类型模块相对应的loader；

         * js : babel-loader, 下载相应的依赖模块 @babel/core, @babel/preset-env

         ```
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
         ```

         * css/less: postcss-loader、css-loader、vue-style-loader,
         less比css 多配置less-loader,由于loader是从后往前执行， 因此我们需要整理好编译顺序，MiniCssExtractPlugin.loader是用于提取css文件的，这个插件我们只在生产环境用到，因此使用三元运算符做判断

         ```
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
         ```

         * vue文件 加载使用vue-loader

          ```
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
                },
              }
            }
          ]
          },
          ```

          *  图片我们使用 ur-loader和file-loader配合加载， 注意 新版file-loader默认esModule为true, 因此我们需要手动设置为false;

          ```
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
          ```
        
      3. 配置插件
        
          1. 必须配置VueLoaderPlugin, 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。

            ```
            const VueLoaderPlugin = require('vue-loader/lib/plugin');
            plugins: [
              new VueLoaderPlugin(),
            ]
            ```
          2. ProgressBarPlugin: 显示进度条

              ```
              const ProgressBarPlugin = require('progress-bar-webpack-plugin');

              plugins: [
                  new ProgressBarPlugin(),
                ]
              ```
          3. HtmlWebpackPlugin： 设置html模板,我们需要将BASE_URL设置为htmlWebpackPlugin.options.url

             ```
             const HtmlWebpackPlugin = require('html-webpack-plugin');

              new HtmlWebpackPlugin({
                url: '/',
                inject: true,
                template: path.resolve(__dirname, './public/index.html'),
              }),
             ```
          4. DefinePlugin： 设置一个全局的变量

             ```
             const {DefinePlugin} = require('webpack');

              new DefinePlugin({
                'process.env': {
                  BASE_URL: '"/"',
                  NODE_ENV: '"none"'
                }
              })
             ```

  ### 开发模式webpack.dev.js:
      > 这里我们使用webpack-merge插件来合并配置

      设置开发模式、输出文件以及source-map类型，开启开发服务器，开启热更新,
      
      ```
      mode: 'development',
      devtool: 'cheap-module-eval-source-map',
      devServer: {
        hotOnly: true,
        contentBase: ['./public'],
        port: 8085,
      },
      plugins: [
        new HotModuleReplacementPlugin(),
      ]

      ```
  ### 生产模式webpack.prod.js

              
              
  1. 我们设置生产模式，将source-map设置为none， 输出文件hash类型改为contenthash

    ```
    mode: 'production',
    devtool: 'none',
    output: {
      filename: `[name]-[contenthash:8].bundle.js`,
      path: path.join(__dirname, 'dist'),
    },
    ```

  2. 设置css和js的压缩, 虽然js压缩默认开启，但是由于设置css压缩，js压缩也需要重新设置

    ```
      optimization: {
        minimizer: [
          new OptimizeCssAssetsWebpackPlugin(),
          new TerserWebpackPlugin(),
        ]
      },
    ```
  3. 配置插件
     
     * CleanWebpackPlugin： 由于每次打包我们都需要删除之前打包的结果，因此生产环境打包配置引入该插件

     * MiniCssExtractPlugin： 将css文件抽取出来

     * 将静态资源copy到打包目录中

     ```
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
     ```
2. eslint

    我们使用eslint-plugin-vue插件，继承检测规则，设置vue插件


    1. 初始化

     ```
     yarn add eslint --dev
     yarn eslint --init
     // 选择vue以及esm模式
     ```
     2. package.json配置yarn eslint src/**/*.js

     3. 打包之前必须执行yarn lint

          

             








      


   

    
   
