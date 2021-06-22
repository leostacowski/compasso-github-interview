import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from '~/pages/Home'

const RoutedContent = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>

      <Redirect to='/' exact />
    </Switch>
  </BrowserRouter>
)

export default RoutedContent
