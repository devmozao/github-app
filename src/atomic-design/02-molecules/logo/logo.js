import React, { memo } from 'react'

import styled from 'styled-components'

import Typography from '../../01-atoms/typography'

const StyledLogo = styled.div`
  text-align: center;
  user-select: none;
`

const StyledSpan = styled.span`
  padding: 1%;
`

const Logo = ({ size = '65px', textAlign = 'center' }) => {
  return (
    <StyledLogo style={{ textAlign: textAlign }}>
      <Typography.Logo size={size}>Github</Typography.Logo>
      <StyledSpan />
      <Typography.Italic size={size}>Search</Typography.Italic>
    </StyledLogo>
  )
}

export default memo(Logo)
