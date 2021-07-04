import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import NotFound from '~/pages/NotFound'
import Home from '~/pages/Home'
import User from '~/pages/User'

export const RoutedContent = () => (
  <BrowserRouter>
    <Switch>
      {/* Home */}
      <Route path='/' exact component={Home} />

      {/* Details */}
      <Route path='/user/:login' exact component={User} />

      <Route path='/nao-encontrada' exact component={NotFound} />
      <Redirect to='/nao-encontrada' />
    </Switch>
  </BrowserRouter>
)
