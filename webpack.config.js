var webpack = require('webpack');
var values = require('postcss-modules-values');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var path = require('path');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var VersionFile = require('webpack-version-file');

module.exports = {
  entry: './src',
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    publicPath: '/build/',
    historyApiFallback: true
  },
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=100000&mimetype=image/svg+xml'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png'
      }
    ]
  },
  postcss: function () {
    return [values, autoprefixer, precss];
  },
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  resolve: {
    root: [path.resolve('./src/')]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '{,**/}*.css',
      failOnError: false,
      quiet: false
    }),
    new VersionFile({
      output: './build/version.txt',
      templateString: '<%= name %>@<%= version %>\nBuild date: <%= buildDate %>\nEnvironment: <%= env %>',
      data: {
        env: process.env.NODE_ENV || 'development'
      }
    })
  ]
};
