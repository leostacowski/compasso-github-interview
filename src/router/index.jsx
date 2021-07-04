import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom'

import NotFound from '~/pages/NotFound'
import Home from '~/pages/Home'

export const RoutedContent = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />

      <Route path='/not-found' exact component={NotFound} />
      <Redirect to='/not-found' />
    </Switch>
  </BrowserRouter>
)

export const useHistoryPush = () => {
  const history = useHistory()
  return history
}
