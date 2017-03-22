const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config.js')

const port = '3002'
const host = '127.0.0.1'

config.entry.index.unshift(`webpack-dev-server/client?http://${host}:${port}/`, `webpack/hot/dev-server`)

const compiler = Webpack(config)

const server = new WebpackDevServer(compiler, {
  hot: true,
  inline: true,
  stats: {
    colors: true
  }
})

server.listen(port)

console.log(`Open http://${host}:${port}`)