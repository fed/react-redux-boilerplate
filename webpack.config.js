var webpack = require('webpack');
var path = require('path');

// Post CSS modules
var values = require('postcss-modules-values');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

// Webpack plugins
var StyleLintPlugin = require('stylelint-webpack-plugin');
var VersionFile = require('webpack-version-file');
var FlowtypePlugin = require('flowtype-loader/plugin');

// Environment
var environment = process.env.NODE_ENV || 'development';

module.exports = {
  // Entry point
  entry: './src',

  // Output file
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/'
  },

  // Webpack development server
  devServer: {
    inline: true,
    publicPath: '/build/',
    historyApiFallback: true
  },
  module: {
    preLoaders: [
      {
        // Lint all JS files
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        // Flowtype
        test: /\.js$/,
        loader: 'flowtype',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        // Load and transpile ES6/JSX files using Babel
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        // Load CSS files and run them through Post CSS
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      },
      {
        // Load SVG files
        test: /\.svg$/,
        loader: 'url-loader?limit=100000&mimetype=image/svg+xml'
      },
      {
        // Load PNG files
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png'
      }
    ]
  },

  // Post CSS modules
  postcss: [
    values,
    precss,
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ]
    })
  ],

  // eslint configuration
  eslint: {
    failOnWarning: false,
    failOnError: true
  },

  // Easy imports, no need to write whole relative route: import X from 'components/X';
  resolve: {
    root: [
      path.resolve('./src/')
    ]
  },

  plugins: [
    // Make process.env.NODE_ENV available throughout the application
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    }),

    // Flow loader for Webpack
    new FlowtypePlugin(),

    // Lint all CSS files
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '{,**/}*.css',
      failOnError: false,
      quiet: false
    }),

    // Generate a version.txt file with some build details
    new VersionFile({
      output: './build/version.txt',
      templateString: '<%= name %>@<%= version %>\nBuild date: <%= buildDate %>\nEnvironment: <%= env %>',
      data: {
        env: environment
      }
    })
  ]
};
