import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loading from '../atomic-design/02-molecules/loading/loading'

const Home = lazy(() => import('../atomic-design/05-pages/home/home'))
const NotFound = lazy(() => import('../atomic-design/05-pages/not-found/not-found'))
const Profile = lazy(() => import('../atomic-design/05-pages/profile/profile'))
const ErrorBoundary = lazy(() => import('../atomic-design/utils/error-boundary'))

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route path='/profile/:username' component={Profile} />
            <Route path='/profile/' component={Profile} />
            <Route path='/' component={Home} exact />
            <Route path='*' component={NotFound} />
          </Switch>
        </Router>
      </ErrorBoundary>
    </Suspense>
  )
}

export default Routes
