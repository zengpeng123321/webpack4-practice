const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config.js')

const HtmlWebpackPlugin = require('html-webpack-plugin') // 自动生成html文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin') // 打包编译前清理dist目录
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //压缩打包出来的js文件

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: 'js/[name].[chunkhash:8].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: false
      },
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
     
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      cacheGroups: {
        framework: {
          test: "framework",
          name: "framework",
          enforce: true
        },
        vendors: {
          priority: -10,
          test: /node_modules/,
          name: "vendor",
          enforce: true,
        },
      }
    }
  },
})