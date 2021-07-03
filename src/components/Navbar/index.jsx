import { AppBar, Toolbar, Grid, Hidden, Typography } from '@material-ui/core'

import { APP_NAME } from '~/config'

const Navbar = ({ children, leftContent, title }) => {
  return (
    <AppBar>
      <Toolbar>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
        >
          <Grid item>
            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='center'
              spacing={3}
            >
              {leftContent && <Grid item>{leftContent}</Grid>}

              <Grid item>
                <Hidden xsDown>
                  <Typography variant='h6'>{`${APP_NAME}${
                    title ? ` - ${title}` : ''
                  }`}</Typography>
                </Hidden>

                <Hidden smUp>
                  <Typography variant='h6'>{title || ''}</Typography>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>

          {children && (
            <Grid item>
              <Grid
                container
                direction='row'
                justify='flex-end'
                alignItems='center'
              >
                <Grid item>{children}</Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
