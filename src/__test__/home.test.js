import React from 'react'
import { render } from '@testing-library/react'

import Home from '../atomic-design/05-pages/home/home'

/* eslint-env mocha */
describe('<Home />', () => {
  it('should render without errors', () => {
    render(<Home />)
  })
})
