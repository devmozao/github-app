import React from 'react'
import { render } from '@testing-library/react'

import App from '../App'

/* eslint-env mocha */
describe('<App />', () => {
  it('should render without errors', () => {
    render(<App />)
  })
})
