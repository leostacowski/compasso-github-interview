import { AppBar, Toolbar, Button, Grid } from '@material-ui/core'

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Grid container>
          <h2 style={{ flexGrow: 1 }}>Entrevista Compasso Github API</h2>
          <Button color='inherit'>Login</Button>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
