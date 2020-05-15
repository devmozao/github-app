import React, { memo } from 'react'

import styled from 'styled-components'

import Typography from '../../01-atoms/typography'

const StyledLogo = styled.div`
  text-align: center
`

const StyledSpan = styled.span`
  padding: 10px;
`

const Logo = () => {
  return (
    <StyledLogo>
      <Typography.Logo size='65px'>Github</Typography.Logo>
      <StyledSpan />
      <Typography.Italic size='65px'>Search</Typography.Italic>
    </StyledLogo>
  )
}

export default memo(Logo)
