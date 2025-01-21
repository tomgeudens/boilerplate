// const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    devMiddleware: {
      publicPath: '/assets/'
    }
  },
  module: {
    rules: [{
      test: /\.js$/, // look for all files that end in .js
      exclude: /node_modules|dist/, // except when it's in the node_modules or dist folder
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },{
      test: /\.css$/, // look for all files that end in .css
      exclude: /node_modules|dist/, // except when it's in the node_modules or dist folder
      use: ['style-loader','css-loader'] // order is important     
    }]
  }
};
