import React, { memo } from 'react'

import styled from 'styled-components'

import User from '../../02-molecules/user/user'
import Info from '../../02-molecules/info/info'

const StyledProfile = styled.aside`
`

const Profile = () => {
  return (
    <StyledProfile>
      <User
        photoSrc='https://avatars1.githubusercontent.com/u/15485768?v=4'
        userName='Diogo Fonseca'
        userLogin='devMozao'
      />
      <Info

      />
    </StyledProfile>

  )
}

export default memo(Profile)
