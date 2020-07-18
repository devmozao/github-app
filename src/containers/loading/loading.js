import React, { memo } from 'react'

import Spinner from '../../components/spinner/spinner'

const Loading = () => {
  return (
    <Spinner />
  )
}

export default memo(Loading)
