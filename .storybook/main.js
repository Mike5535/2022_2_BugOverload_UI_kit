const path = require('path');
const src = path.join(__dirname, '../src');
const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  stories: [
    "../src/**/*.stories.ts"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/preset-scss"
  ],
  core: {
    builder: "webpack5"
  },
  "webpackFinal": async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components')
    config.resolve.alias['@icons'] = path.resolve(__dirname, '../src/assets/icons')
    config.resolve.alias['@fonts'] = path.resolve(__dirname, '../src/assets/fonts')
    config.module.rules.push({
      test: /\.handlebars$/,
      use: ['handlebars-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // config.plugins = [
    //   new CopyWebpackPlugin({
    //     patterns: [
    //         {
    //             from: path.resolve(__dirname, 'src/assets/icons'),
    //             to: path.resolve(__dirname, 'dist'),
    //         },
    //     ],
    //   }),
    // ]

    return config;
  },
}
