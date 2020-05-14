import React, { memo } from 'react'

import Centralizer from '../../01-atoms/centralizer'
import Spinner from '../../01-atoms/spinner/spinner'

const Loading = () => {
  return (
    <Centralizer.Both>
      <Spinner />
    </Centralizer.Both>
  )
}

export default memo(Loading)
