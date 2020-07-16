import React, { memo } from 'react'

import styled from 'styled-components'

import Monaco from '../../assets/fonts/Monaco.woff'

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
`

const TextBold = ({
  size = '',
  width = '',
  height = '',
  color = '',
  children
}) => {
  return (
    <StyledTextLogo
      style={{
        fontSize: size,
        width: width,
        height: height,
        color: color
      }}
    >
      {children}
    </StyledTextLogo>
  )
}

export default memo(TextBold)
