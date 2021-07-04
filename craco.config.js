const path = require('path')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV || 'production'
const APP_NAME = 'GIT Search'

module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(NODE_ENV),
          APP_NAME: JSON.stringify(APP_NAME),
        },
      }),
    ],
  },
  eslint: {
    enable: false,
  },
}
