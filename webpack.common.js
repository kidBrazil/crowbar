// MDEV Digital - Webpack Boilerplate[VueJS]
// Webpack 4 Configuration file
// -----------------------------------------
// PRODUCTION ENVIRONMENT
// ----------------------------------------

// Required Imports
const path = require('path')
const webpack = require('webpack')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

const setPath = function(folderName) {
  return path.join(__dirname, folderName);
}

// Module Exports
module.exports = {
  // Asset Splitting [ Vendor | Build ]
  entry: {
    build: './index.js',
  },
  // Output Files
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app/[name][hash].js'
  },
  // Find Node Modules
  resolveLoader: {
    modules: [setPath('/node_modules')]
  },
  // Module Rules & Loaders
  module: {
    rules: [
      // CSS & SCSS Processing
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // Load common SCSS [ Vars & Mixins ]
              resources: './src/assets/styles/component-lean-main.scss',
            },
          }
        ],
      }
    ]
  },
  // Plugins & Post Processing
  plugins: [
    // Auto Prefix & Linting
    new StyleLintPlugin({
      syntax: 'scss',
      files: ['**/*.vue']
    }),
    // CSS Output
    new MiniCssExtractPlugin({
      filename: "compiled/styles-[hash].css"
    })
  ],
  performance: {
    hints: 'warning'
  }
}
