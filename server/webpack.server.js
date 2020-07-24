const merge = require('webpack-merge')
const config = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')
const { resolve } = require('path')

const serverConfig = {
    target: 'node',
    externals: [webpackNodeExternals()],
    entry: resolve(__dirname, 'bin/www'),
    output: {
        filename: 'index.js',
        path: resolve(__dirname, 'server-dist')
    }
}
module.exports = merge(config, serverConfig)