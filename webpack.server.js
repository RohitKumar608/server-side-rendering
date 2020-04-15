var path = require("path");
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
var nodeExternals = require('webpack-node-externals');

process.env.NODE_ENV = 'development';

const config = {
    mode: 'development',
    target: "node",
    entry: "./src/server.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    externals: [nodeExternals()],
};

module.exports = merge(baseConfig, config);