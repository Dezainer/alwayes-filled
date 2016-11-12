var webpack = require('webpack');
 
module.exports = {
  entry: [
          './core/alloc.js',
          './components/terminal.js',
          './actions/actions.js'
  ],
  output: { path: __dirname, filename: './public/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}