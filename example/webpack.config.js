/**
 * @fileoverview webapck
 * @author burning (www.cafeinit.com)
 * @version 2017.07.16
 */

const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    'main': './src/main.js'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // 'ci-ui-base': './src/ci-ui-base/ci-ui-base.amd.js'
      'ci-ui-base': path.resolve(__dirname, '../dist/ci-ui-base.amd.js')
    }
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: './dist',
    // host: config.host,
    // port: config.port
  },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true
    // })
  ]
}
