const webpack = require('webpack');

module.exports = {
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react', { 'plugins': ['@babel/plugin-proposal-class-properties'] }]
                }
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false),
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: '1+1',
            'typeof window': JSON.stringify('object'),
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                BASE_URL: JSON.stringify('https://jsonplaceholder.typicode.com')
            },
        })
    ]
}