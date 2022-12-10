const path = require('path');
<<<<<<< HEAD
const src = path.join(__dirname, '../src');
const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

=======
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
>>>>>>> origin/master

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

    return config;
  },
}
