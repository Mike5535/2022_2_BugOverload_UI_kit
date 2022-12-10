const path = require('path');

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
    config.resolve.alias['@default'] = path.resolve(__dirname, '../src/assets/default')
    config.module.rules.push({
      test: /\.handlebars$/,
      use: ['handlebars-loader'],
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.(jpg|jpeg|png|svg|ico|webp)$/,
      type: 'asset/resource',
    },
    );

    return config;
  },
}
