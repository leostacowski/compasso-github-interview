const path = require('path')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV || 'production'
const APP_NAME = 'GIT Search'
const DEV_URL = 'http://localhost:3000/'
const PRD_URL = 'https://compasso-github-interview.vercel.app/'
const GITHUB_BASE_URL = 'https://github.com'
const CLIENT_ID_PRD = 'bfd5bd9e77a0636353c1'
const CLIENT_ID_SECRET_PRD = '42d1c96ed2cc5903e13b3628ec4614787541e09c'
const CLIENT_ID_DEV = '77da122acc0f159db92a'
const CLIENT_ID_SECRET_DEV = '000fcc01e510e287e915eab6f94b12bec5f7ac0e'

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
          DEV_URL: JSON.stringify(DEV_URL),
          PRD_URL: JSON.stringify(PRD_URL),
          GITHUB_BASE_URL: JSON.stringify(GITHUB_BASE_URL),
          CLIENT_ID_PRD: JSON.stringify(CLIENT_ID_PRD),
          CLIENT_ID_SECRET_PRD: JSON.stringify(CLIENT_ID_SECRET_PRD),
          CLIENT_ID_DEV: JSON.stringify(CLIENT_ID_DEV),
          CLIENT_ID_SECRET_DEV: JSON.stringify(CLIENT_ID_SECRET_DEV),
        },
      }),
    ],
  },
  eslint: {
    enable: false,
  },
}
