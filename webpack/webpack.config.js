const path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
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
    devServer: {
        port: 3165
    }
};