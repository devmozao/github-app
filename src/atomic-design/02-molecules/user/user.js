import React, { memo } from 'react'

import styled from 'styled-components'

import Photo from '../../01-atoms/photo/photo'
import Typography from '../../01-atoms/typography'

const StyledUser = styled.div`
`
const StyledInfo = styled.div`
  max-width: 280px;
  padding-top: 12px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`
const StyledUserName = styled.div`
  max-height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const StyledUserLogin = styled.div`
  max-height: 25px;
  padding-top: 7px;
`

const User = ({ photoSrc = '', userName = '', userLogin = '' }) => {
  return (
    <StyledUser>
      <Photo
        src={photoSrc}
        alt={userName}
      />
      <StyledInfo>
        <StyledUserName title={userName}>
          <Typography.Light size='35px' children={userName} />
        </StyledUserName>
        <StyledUserLogin>
          <Typography.Muted size='20px'>{userLogin}</Typography.Muted>
        </StyledUserLogin>
      </StyledInfo>
    </StyledUser>

  )
}

export default memo(User)
