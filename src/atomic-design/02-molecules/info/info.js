import React, { memo } from 'react'

import styled from 'styled-components'

import Icons from '../../01-atoms/icons'
import Typography from '../../01-atoms/typography'

const StyledInfo = styled.div`
  max-width: 280px;
  padding-top: 28px;
`

const Info = ({
  organization = '',
  location = '',
  stars = '',
  repositories = '',
  followers = ''
}) => {
  return (
    <StyledInfo>
      INfo
    </StyledInfo>
  )
}

export default memo(Info)
