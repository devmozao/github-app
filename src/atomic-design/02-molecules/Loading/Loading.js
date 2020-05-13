import React, { memo } from 'react'

import styled from 'styled-components'

import Container from '../../01-atoms/Container/Container'

const Spinner = styled.div`
/* */
`

const Loading = () => {
  return (
    <Container>
      Loading...
    </Container>
  )
}

export default memo(Loading)
