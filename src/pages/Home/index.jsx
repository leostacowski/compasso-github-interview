import { useState, useEffect } from 'react'

import {
  Container,
  Grid,
  CircularProgress,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Icon,
} from '@material-ui/core'

import { Page, Navbar } from '~/components'
import { APP_NAME } from '~/config'
import { userStore } from '~/store/user'
import { githubApi } from '~/services/github'
import GithubIcon from '~/assets/images/github-icon.png'
import classes from './home.module.scss'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [inputQuery, setInputQuery] = useState('')

  const setUser = userStore(state => state.setUser)
  const setRepos = userStore(state => state.setRepos)
  const setStarred = userStore(state => state.setStarred)

  const clearUserStorage = () => {
    setUser(undefined)
    setRepos(undefined)
    setStarred(undefined)
  }

  const clearStates = () => {
    setLoading(false)
    setInputQuery('')
  }

  const submitQuery = e => {
    e.preventDefault()
    setLoading(true)

    githubApi
      .get(`/users/${inputQuery}`)
      .then(response => {
        const { data } = response
        setUser(data)

        clearStates()
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
      })
  }

  const getInputAdornment = () => {
    if (loading) return <CircularProgress />

    return inputQuery ? (
      <IconButton onClick={() => setInputQuery('')}>
        <Icon color='secondary'>close</Icon>
      </IconButton>
    ) : (
      <></>
    )
  }

  useEffect(() => {
    clearUserStorage()
  }, [])

  return (
    <Page title='Página inicial'>
      <Navbar title='Página inicial' />

      <Container className={classes['content-container']}>
        <Grid container justify='center' alignItems='center' spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes['home-image']}
              alt='Ícone de busca na página inicial.'
              src={GithubIcon}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Grid
              container
              direction='column'
              alignItems='center'
              justify='center'
              spacing={1}
            >
              <Grid item>
                <Typography variant='h4'>
                  <strong>{APP_NAME}</strong>
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6'>
                  Faça uma busca por perfil 👇
                </Typography>
              </Grid>

              <Grid item className={classes['input-container']}>
                <form onSubmit={submitQuery}>
                  <Grid container direction='column' spacing={2}>
                    <Grid item>
                      <TextField
                        color='secondary'
                        required
                        label='Insira um nome de perfil...'
                        type='text'
                        variant='outlined'
                        className={classes.input}
                        disabled={loading}
                        value={inputQuery}
                        onChange={e => setInputQuery(e.target.value)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='end'>
                              {getInputAdornment()}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid item>
                      <Button
                        type='submit'
                        variant='contained'
                        color='secondary'
                        className={classes.button}
                        disabled={!inputQuery || loading}
                        endIcon={<Icon>search</Icon>}
                      >
                        {loading ? 'Buscando...' : 'Buscar'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

export default Home
