const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const packageConfig = require('./package.json');

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'uikit.js',
        library: packageConfig.name,
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.handlebars$/,
                use: ['handlebars-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/,
                exclude: path.resolve(__dirname, './node_modules'),
                use: 'ts-loader',
            },
            {
                test: /\.(jpg|jpeg|png|svg|ico)$/,
                loader: 'file-loader',
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'uikit.css'
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: true,
    },
}
