const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const packageConfig = require('./package.json');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
    mode: "development",
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'index.js',
        library: packageConfig.name,
        libraryTarget: 'umd',
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.json', '.ts'],
        plugins: [new TsconfigPathsPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.handlebars$/,
                use: ['handlebars-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/,
                exclude: path.resolve(__dirname, './node_modules'),
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|svg|ico|webp)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
    },
}
