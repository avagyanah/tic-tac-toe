const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const packagejson = require('../package.json');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const parts = require('./webpack.parts.config');

const paths = {
  base: path.resolve('src'),
  app: path.resolve('src/app.ts'),
  dist: path.resolve('dist'),
  template: path.resolve('index.html'),
  devTsConfig: path.resolve('tsconfig.dev.json'),
};

const commonConfig = merge([
  {
    target: 'web',
    context: paths.base,
    entry: paths.app,
    output: {
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
      publicPath: '',
      path: paths.dist,
    },
    resolve: {
      extensions: ['.js', '.ts'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.template,
        title: packagejson.name,
        version: packagejson.version,
      }),
      new CopyWebpackPlugin([
        {
          from: '../assets',
          to: 'assets',
        },
      ]),
    ],
  },
]);

const developmentConfig = merge([
  parts.sourceMaps('cheap-module-source-map'),

  parts.devServer({ host: process.env.HOST, port: process.env.PORT }),

  { plugins: [new webpack.NamedModulesPlugin()] },

  parts.envVar('development'),

  parts.loadJs({
    options: {
      configFile: paths.devTsConfig,
    },
  }),
]);

const productionConfig = merge([
  parts.sourceMaps('source-map'),

  parts.cleanup([paths.dist]),

  parts.envVar('production'),

  {
    performance: {
      maxEntrypointSize: 2000000,
      maxAssetSize: 1100000,
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            keep_fnames: true,
            compress: {
              drop_console: true,
            },
            output: {
              comments: false,
              beautify: false,
            },
          },
        }),
      ],
    },
  },
  parts.loadJs({}),
]);

const analyzeConfig = merge([parts.analyze()]);

module.exports = env => {
  const config = merge(
    commonConfig,
    env === 'production' ? productionConfig : developmentConfig,
  );

  if (process.env.npm_config_analyze) {
    return merge(config, analyzeConfig);
  }

  return config;
};
