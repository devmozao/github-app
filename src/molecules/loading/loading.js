import React, { memo } from 'react'

import Spinner from '../../atoms/spinner/spinner'

const Loading = () => {
  return (
    <Spinner />
  )
}

export default memo(Loading)
