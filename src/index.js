import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import Routes from './routes/Routes'

ReactDOM.render(
  <StrictMode>
    <Routes />
  </StrictMode>,
  document.getElementById('root')
)
