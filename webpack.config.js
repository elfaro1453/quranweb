const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: ['./src/scripts/polyfills.js', './src/views/index.js'],
    detail: ['./src/scripts/polyfills.js', './src/views/detail.js']
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/images'),
          to: path.resolve(__dirname, 'dist/images')
        }
      ]
    }),
    new HtmlWebpackPlugin({
      title: 'Quran Web',
      favicon: path.resolve(__dirname, 'src/favicon.ico'),
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Detail Surah',
      favicon: path.resolve(__dirname, 'src/favicon.ico'),
      chunks: ['detail'],
      filename: 'detail.html'
    })
  ]
}
