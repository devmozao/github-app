import React, { memo } from 'react'

import styled from 'styled-components'

import RalewayRegular from '../../assets/fonts/Raleway-Regular.woff'
import colors from '../../utils/colors'

const StyledTextMuted = styled.span`
  @font-face {
    font-family: RalewayRegular;
    src: url(${RalewayRegular}) format('woff');
  }
  font-family: RalewayRegular;
  color: ${colors.font.muted};
`

const TextMuted = ({
  size = '',
  width = '',
  height = '',
  color = '',
  children
}) => {
  return (
    <StyledTextMuted
      style={{
        fontSize: size,
        width: width,
        height: height,
        color: color
      }}
    >
      {children}
    </StyledTextMuted>
  )
}

export default memo(TextMuted)
