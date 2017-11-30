// import webpack from 'webpack';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new extractTextPlugin('css/[name]-css.css');
const extractLESS = new extractTextPlugin('css/[name]-less.css');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: extractCSS.extract([
                    // { loader: "style-loader" },//style-loader不能和插件一起使用
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    { loader: "postcss-loader" }
                ])
            },
             {
                test: /\.less$/,
                use: extractLESS.extract([
                    // { loader: "style-loader" },
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    { loader: "postcss-loader" },
                    { loader: "less-loader" }
                ])
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [{
                    loader: 'url-loader?limit=100000'
                }, ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#inline-source-map',
    plugins:[
        extractCSS,
        extractLESS,
        new HtmlWebpackPlugin({
            title:'my-app',
            template:'index.ejs'
        })
    ]
}