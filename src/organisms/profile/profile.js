import React, { memo } from 'react'

import styled from 'styled-components'

import User from '../../molecules/user/user'
import Info from '../../molecules/info/info'

const StyledProfile = styled.aside`
`

const Profile = ({
  photoSrc = '',
  userName = '--',
  userLogin = '--',
  organization = '--',
  localization = '--',
  stars = '--',
  repositories = '--',
  followers = '--'
}) => {
  return (
    <StyledProfile>
      <User
        photoSrc={photoSrc}
        userName={userName}
        userLogin={userLogin}
      />
      <Info
        organization={organization}
        localization={localization}
        stars={stars}
        repositories={repositories}
        followers={followers}
      />
    </StyledProfile>

  )
}

export default memo(Profile)
