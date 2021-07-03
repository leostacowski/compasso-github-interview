import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom'

import NotFound from '~/pages/NotFound'
import Login from '~/pages/Login'
import Home from '~/pages/Home'

import { authStore } from '~/store/auth'

export const RoutedContent = () => {
  const loggedIn = authStore(state => state.logged)

  return (
    <BrowserRouter>
      {loggedIn ? (
        <Switch>
          <Route path='/' exact component={Home} />

          <Route path='/not-found' exact component={NotFound} />
          <Redirect to='/not-found' />
        </Switch>
      ) : (
        <Switch>
          <Redirect from='/' to='/auth/login' exact />
          <Route path='/auth/login' exact component={Login} />

          <Route path='/not-found' exact component={NotFound} />
          <Redirect to='/not-found' />
        </Switch>
      )}
    </BrowserRouter>
  )
}

export const useHistoryPush = () => {
  const history = useHistory()
  return history
}
