import React from 'react'
import { render } from '@testing-library/react'

import Home from '..//pages/home/home'

/* eslint-env mocha */
describe('<Home />', () => {
  it('should render without errors', () => {
    render(<Home />)
  })
})
