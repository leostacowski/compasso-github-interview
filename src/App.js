import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

import { RoutedContent } from '~/router'
import CustomTheme from '~/theme'

const App = () => (
  <>
    <CssBaseline />
    <ThemeProvider theme={CustomTheme}>
      <RoutedContent />
    </ThemeProvider>
  </>
)

export default App
