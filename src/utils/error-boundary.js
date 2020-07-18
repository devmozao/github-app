import React, { Component, memo } from 'react'

import styled from 'styled-components'

import Typography from '../components/typography'
import colors from '../utils/colors'

const StyledTitle = styled.h1`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    if (error) {
      return { hasError: true }
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log('Something went wrong.', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyledTitle>
          <Typography.Regular
            size='40px'
            color={colors.font.title}
          >
            Something went wrong. Try again later.
          </Typography.Regular>
        </StyledTitle>
      )
    }

    return this.props.children
  }
}

export default memo(ErrorBoundary)
