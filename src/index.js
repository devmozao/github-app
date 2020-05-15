import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { BaseCSS } from 'styled-bootstrap-grid'

import Routes from './routes/Routes'

ReactDOM.render(
  <StrictMode>
    <BaseCSS />
    <Routes />
  </StrictMode>,
  document.getElementById('root')
)
