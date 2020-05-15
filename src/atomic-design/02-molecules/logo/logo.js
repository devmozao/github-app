import React from 'react'

import styled from 'styled-components'

import Typography from '../../01-atoms/typography'

const StyledLogo = styled.div`
  text-align: center
`

const Logo = () => {
  return (
    <StyledLogo>
      <Typography.Logo size='65px'>Github</Typography.Logo>
      <span style={{ padding: '10px' }} />
      <Typography.Italic size='65px'>Search</Typography.Italic>
    </StyledLogo>
  )
}

export default Logo
