const path = require('path')
const webpack = require('webpack')

const APP_NAME = 'GIT Search'
const CLIENT_ID = 'bfd5bd9e77a0636353c1'
const CLIENT_ID_SECRET = '42d1c96ed2cc5903e13b3628ec4614787541e09c'

module.exports = {
  webpack: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          APP_NAME: JSON.stringify(APP_NAME),
          CLIENT_ID: JSON.stringify(CLIENT_ID),
          CLIENT_ID_SECRET: JSON.stringify(CLIENT_ID_SECRET),
        },
      }),
    ],
  },
}
