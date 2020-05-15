import React, { memo } from 'react'

import styled from 'styled-components'

import RalewayBold from '../../../assets/fonts/Raleway-Bold.woff'

const StyledTextBold = styled.span`
  @font-face {
    font-family: RalewayBold;
    src: url(${RalewayBold}) format('woff');
  }
  font-family: RalewayBold;
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
    <StyledTextBold
      style={{
        fontSize: size,
        width: width,
        height: height,
        color: color
      }}
    >
      {children}
    </StyledTextBold>
  )
}

export default memo(TextBold)
