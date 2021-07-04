import { useEffect } from 'react'
import { Container, Grid, Typography, Button, Icon } from '@material-ui/core'

import { Page, Navbar } from '~/components'
import LoginImage from '~/assets/images/login.png'
import { APP_NAME, GITHUB_BASE_URL } from '~/config'
import { getGithubClientKeys } from '~/utilities'
import { authStore } from '~/store/auth'
import githubApi from '~/services/github'

import classes from './login.module.scss'

const Login = ({ location }) => {
  const loginCode = authStore(state => state.loginCode)
  const setLoginCode = authStore(state => state.setLoginCode)
  const logged = authStore(state => state.logged)

  const onLoginAction = () => {
    const { client_id, client_id_secret } = getGithubClientKeys()

    const baseUrl = `${GITHUB_BASE_URL}/login/oauth/authorize`
    const params = [
      `client_id=${client_id}`,
      `client_id_secret=${client_id_secret}`,
    ].join('&')

    window.open(`${baseUrl}?${params}`, 'Login pelo Github', 'menuBar=false')
  }

  useEffect(() => {
    if (loginCode && !logged) {
      const { client_id, client_id_secret } = getGithubClientKeys()

      githubApi
        .post(`/login/oauth/access_token`, {
          client_id,
          client_secret: client_id_secret,
          code: loginCode,
        })
        .then(response => {
          console.log(response)
        })
    }
  }, [logged, loginCode])

  useEffect(() => {
    const loginTokenParam = new URLSearchParams(location.search).get('code')

    if (!loginCode && loginTokenParam) {
      setLoginCode(loginTokenParam)
      window.close()
    }
  })

  return (
    <Page title='Login'>
      <Navbar title='Login' />

      <Container className={classes['content-container']}>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes['login-image']}
              alt='Ícone de login.'
              src={LoginImage}
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
                  onClick={onLoginAction}
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
