const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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

    const tsPaths = new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicons'),
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: path.resolve(__dirname, 'src/assets/icons'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    });
    config.resolve.plugins = [
      tsPaths, 
    ];

    // config.resolve.plugins
    //   ? config.resolve.plugins.push(tsPaths)
    //   : (config.resolve.plugins = [tsPaths]);

    return config;
  },
}
