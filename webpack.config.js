const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'src/index.js'),
        compress: true,
        port: 8080,
        host: "127.0.0.1",
        open: true
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin([{
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        }])
    ],
}