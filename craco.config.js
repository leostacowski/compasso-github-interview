const path = require('path')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV || 'production'
const APP_NAME = 'GIT Search'
const GITHUB_BASE_URL = 'https://api.github.com'

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
          GITHUB_BASE_URL: JSON.stringify(GITHUB_BASE_URL),
        },
      }),
    ],
  },
  eslint: {
    enable: false,
  },
}
