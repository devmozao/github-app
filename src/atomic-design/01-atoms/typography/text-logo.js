import React, { memo } from 'react'

import styled from 'styled-components'

import Monaco from '../../../assets/fonts/Monaco.woff'

const StyledTextLogo = styled.span`
  @font-face {
    font-family: Monaco;
    src: url(${Monaco}) format('woff');
  }
  font-family: Monaco;
  font-size: 35px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  /* color: */
`

const TextBold = ({ children }) => {
  return (
    <StyledTextLogo>{children}</StyledTextLogo>
  )
}

export default memo(TextBold)
