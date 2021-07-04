import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'

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

import { Page, Navbar, Dialog } from '~/components'
import { APP_NAME } from '~/config'
import { userStore } from '~/store/user'
import { githubApi } from '~/services/github'
import GithubIcon from '~/assets/images/github-icon.png'
import classes from './home.module.scss'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [showErrorDialog, setShowErrorDialog] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [inputQuery, setInputQuery] = useState('')

  const history = useHistory()
  const setUser = userStore(state => state.setUser)
  const setRepos = userStore(state => state.setRepos)
  const setStarred = userStore(state => state.setStarred)

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
        history.push(`/user/${data.login}`)
      })
      .catch(err => {
        if (err?.response?.status === 404)
          setErrorMessage(
            `Nenhum perfil com o nome "${inputQuery}" foi encontrado 😯`
          )
        else
          setErrorMessage(
            `Ocorreu um erro inesperado ao fazer a busca pelo perfil com o nome "${inputQuery}" 🤔`
          )

        setShowErrorDialog(true)
        setLoading(false)
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
    setUser()
    setRepos()
    setStarred()
  }, [setRepos, setStarred, setUser])

  return (
    <Page title='Página inicial'>
      <Navbar title='Página inicial' />

      <Container className={classes['content-container']}>
        <Dialog
          show={showErrorDialog}
          onClose={() => setShowErrorDialog(false)}
          title='Ops...'
          content={errorMessage}
        />

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
