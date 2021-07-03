import { Container, Grid, Typography, Button, Icon } from '@material-ui/core'

import { Page, Navbar } from '~/components'

import NotFoundImage from '~/assets/images/404.png'
import classes from './not-found.module.scss'
import { useHistory } from 'react-router'

const Login = () => {
  const history = useHistory()

  return (
    <Page title='Página não encontrada'>
      <Navbar title='Página não encontrada' />

      <Container className={classes['content-container']}>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes['not-found-image']}
              alt='Ícone de erro 404.'
              src={NotFoundImage}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Grid container direction='column' alignItems='center' spacing={1}>
              <Grid item>
                <Typography variant='h4'>
                  <strong>Ops...</strong>
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6'>Esta página não existe 🕵️‍♂️</Typography>
              </Grid>

              <Grid item className={classes['not-found-button']}>
                <Button
                  onClick={() => history.push('/')}
                  endIcon={<Icon>home</Icon>}
                  size='large'
                  variant='contained'
                  color='secondary'
                >
                  Ir para página inicial
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
