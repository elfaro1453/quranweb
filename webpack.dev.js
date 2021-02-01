const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true,
    watchOptions: {
      poll: true,
      ignored: ['/node_modules/']
    },
    https: false,
    proxy: {
      '/surah': {
        target: 'https://quranapi.idn.sch.id',
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    pathinfo: false,
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
})
