import { Container, Grid, Typography, Button, Icon } from '@material-ui/core'

import { Page, Navbar } from '~/components'
import GithubLogo from '~/assets/images/github-octocat.png'
import { APP_NAME } from '~/config'

import classes from './login.module.scss'

const Login = () => {
  return (
    <Page title='Login'>
      <Navbar title='Login' />

      <Container className={classes['content-container']}>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes['github-logo']}
              alt='Githb logo on Login Page.'
              src={GithubLogo}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Grid container direction='column' alignItems='center' spacing={1}>
              <Grid item>
                <Typography variant='h4'>
                  <strong>Bem vindo(a)!</strong>
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6'>O {APP_NAME} te aguarda 😉</Typography>
              </Grid>

              <Grid item className={classes['login-button']}>
                <Button
                  endIcon={<Icon>open_in_new</Icon>}
                  size='large'
                  variant='contained'
                  color='secondary'
                >
                  Fazer login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

export default Login
