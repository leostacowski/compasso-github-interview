import { useEffect } from 'react'
import { useHistory } from 'react-router'
import {
  IconButton,
  Icon,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core'

import { Page, Navbar } from '~/components'
import { userStore } from '~/store/user'

const User = () => {
  const user = userStore(state => state.user)
  const history = useHistory()

  useEffect(() => {
    if (!user) history.push('/')
  }, [user, history])

  return (
    <Page title='Detalhes'>
      <Navbar
        title='Detalhes'
        leftContent={
          <IconButton>
            <Icon style={{ color: 'white' }}>arrow_back</Icon>
          </IconButton>
        }
      />

      <Container>
        <Grid container justify='center'>
          <Grid item xs={12}>
            <Card>
              <CardMedia image='' title='Contemplative Reptile' />

              <CardContent>Hello</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

export default User
