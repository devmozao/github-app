import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { Reset } from 'styled-reset'

import Routes from './routes/Routes'

import { Container, BackgroundWrapper } from './utils/container/container'

ReactDOM.render(
  <StrictMode>
    <Reset />
    <BackgroundWrapper>
      <Container>
        <Routes />
      </Container>
    </BackgroundWrapper>
  </StrictMode>,
  document.getElementById('root')
)
