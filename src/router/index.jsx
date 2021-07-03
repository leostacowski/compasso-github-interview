import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from '~/pages/Home'
import Login from '~/pages/Login'

import { authStore } from '~/store/auth'

export const RoutedContent = () => {
  const loggedIn = authStore(state => state.logged)

  return (
    <BrowserRouter>
      {loggedIn ? (
        <Switch>
          <Route path='/' exact component={Home} />
          <Redirect to='/' />
        </Switch>
      ) : (
        <Switch>
          <Redirect from='/' to='/auth/login' exact />
          <Route path='/auth/login' exact component={Login} />
        </Switch>
      )}
    </BrowserRouter>
  )
}
