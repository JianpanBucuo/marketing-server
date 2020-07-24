const { resolve } = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')
const clientConfig = {
    entry: resolve(__dirname, './src/client/client.render.js'),
    output: {
        filename: 'index.js',
        path: resolve(__dirname, 'client-dist')
    }
}

module.exports = merge(config, clientConfig)