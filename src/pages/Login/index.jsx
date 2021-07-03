import { Grid } from '@material-ui/core'
import { Page, Navbar } from '~/components'

const Login = () => {
  return (
    <Page title='Login'>
      <Navbar title='Login' />
      <Grid container>
        <Grid item xs={12}></Grid>
      </Grid>
    </Page>
  )
}

export default Login
