const path = require('path')

module.exports = {
  baseUrl: '/vue-resize/',
  outputDir: '../docs',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: path.join(__dirname, '..', 'docs'),
  },
}
