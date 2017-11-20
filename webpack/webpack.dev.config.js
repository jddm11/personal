const path = require('path')
const webpack = require('webpack')

const analyze = !!process.env.ANALYZE_ENV
const env = process.env.NODE_ENV || 'production'
var parentDir = path.join(__dirname, '../');

const webpackConfig = {
  name: 'client',
  target: 'web',

  entry: {
    app: path.join(parentDir, 'index.js')
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
    }],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],

  output: {
      path: parentDir + '/',
      filename: 'bundle.js'
  },
  devServer: {
      contentBase: parentDir,
      historyApiFallback: true
  },
}

if (env === 'production') {
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
    })
  )
}

module.exports = webpackConfig
