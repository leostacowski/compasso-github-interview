import { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { APP_NAME } from '~/config'

const Page = ({ children, title }) => {
  useEffect(() => {
    document.title = `${APP_NAME}${title ? ` - ${title}` : ''}`
  })

  return (
    <Grid container>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Page
