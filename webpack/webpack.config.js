const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: "/",
        filename: 'main.js'
    },
    resolve: {
        extensions: [
            '.js', '.jsx', '.json', '.png', '.svg'
        ],
        modules: [
            'node_modules'
        ]
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
          })
    ],
    devServer: {
        port: 3165
    }
};