// https://webpack.js.org/
// webpack v2 官网
// https://webpack.js.org/configuration/
// webpack v2 配置文件详解
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
  entry: {
    vendor: ['react', 'react-dom'],
    index: [path.resolve(__dirname, 'app/index.js')]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[chunkhash].[name].js',
    publicPath: ''
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      use: ['babel-loader']
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app/index.html')
    }),
    new webpack.NamedModulesPlugin()
    // prints more readable module names in the browser console on HMR updates
  ]
}

if(process.env.NODE_ENV === 'development') {
  config.plugins = [...config.plugins, new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin({'process.env.NODE_DEV': 'development'})]
}


module.exports = config