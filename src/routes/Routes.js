import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loading from '../atomic-design/02-molecules/loading/loading'

const Home = lazy(() => import('../atomic-design/05-pages/home/home'))
const NotFound = lazy(() => import('../atomic-design/05-pages/not-found/not-found'))

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
