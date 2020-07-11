import React, { memo } from 'react'

import styled from 'styled-components'

import RalewayLight from '../../assets/fonts/Raleway-Light.woff'

const StyledTextLight = styled.span`
  @font-face {
    font-family: RalewayLight;
    src: url(${RalewayLight}) format('woff');
  }
  font-family: RalewayLight;
`

const TextLight = ({
  size = '',
  width = '',
  height = '',
  color = '',
  children
}) => {
  return (
    <StyledTextLight
      style={{
        fontSize: size,
        width: width,
        height: height,
        color: color
      }}
    >
      {children}
    </StyledTextLight>
  )
}

export default memo(TextLight)
