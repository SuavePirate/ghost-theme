var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./assets/css/main.scss'],
  output: {
    filename: 'assets/built/[name].bundle.css'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
        filename: 'assets/built/[name].bundle.css',
        allChunks: true,
      }),
  ]
};