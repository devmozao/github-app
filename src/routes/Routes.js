import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loading from '../atomic-design/02-molecules/Loading/Loading'

const Home = lazy(() => import('../atomic-design/05-pages/Home/Home'))
const NotFound = lazy(() => import('../atomic-design/05-pages/NotFound/NotFound'))

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default Routes
