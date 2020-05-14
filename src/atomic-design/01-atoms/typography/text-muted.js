import React, { memo } from 'react'

import styled from 'styled-components'

import RalewayRegular from '../../../assets/fonts/Raleway-Regular.woff'

const StyledTextMuted = styled.span`
  @font-face {
    font-family: RalewayRegular;
    src: url(${RalewayRegular}) format('woff');
  }
  font-family: RalewayRegular;
  color: #5c5c5c;
`

const TextMuted = ({ children }) => {
  return (
    <StyledTextMuted>{children}</StyledTextMuted>
  )
}

export default memo(TextMuted)
