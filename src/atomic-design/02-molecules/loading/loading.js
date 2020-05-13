import React, { memo } from 'react'

import Container from '../../01-atoms/container-center/container'
import Spinner from '../../01-atoms/spinner/spinner'

const Loading = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  )
}

export default memo(Loading)
