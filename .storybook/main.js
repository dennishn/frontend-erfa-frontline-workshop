const {FrontlineScssConfigWebpackPlugin} = require("@akqa-frontline/scss-config-webpack-plugin");
const {FrontlineJsConfigWebpackPlugin} = require("@akqa-frontline/js-config-webpack-plugin");

module.exports = {
    stories: ['../src/**/*.stories.js'],
    addons: ['@storybook/addon-knobs/register'],
    webpackFinal: async (config) => {

        config.plugins.push(new FrontlineScssConfigWebpackPlugin({browserslistEnv: 'modern'}));
        config.plugins.push(new FrontlineJsConfigWebpackPlugin({browserslistEnv: 'modern'}));

        return config;
    }
}
