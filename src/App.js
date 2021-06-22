import React from 'react'
import { Grid, CssBaseline } from '@material-ui/core'

import Navbar from '~/components/Navbar'
import RoutedContent from '~/routes'

const App = () => (
  <>
    <CssBaseline />
    <Navbar />
    <Grid container>
      <RoutedContent />
    </Grid>
  </>
)

export default App
