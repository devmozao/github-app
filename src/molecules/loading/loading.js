import React, { memo } from 'react'

import Spinner from '../../atoms/spinner/spinner'
import Centralizer from '../../utils/centralizer/'

const Loading = () => {
  return (
    <Centralizer.Both>
      <Spinner />
    </Centralizer.Both>
  )
}

export default memo(Loading)
