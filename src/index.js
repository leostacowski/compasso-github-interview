import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { APP_NAME } from '~/config'

document.title = APP_NAME

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
