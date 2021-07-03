import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

import { RoutedContent } from '~/router'
import CustomTheme from '~/theme'

const App = () => (
  <>
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />
      <RoutedContent />
    </ThemeProvider>
  </>
)

export default App
