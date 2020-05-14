import React, { memo } from 'react'

import styled from 'styled-components'

import RalewayExtraLightItalic from '../../../assets/fonts/Raleway-ExtraLightItalic.woff'

const StyledTextItalic = styled.span`
  @font-face {
    font-family: RalewayExtraLightItalic;
    src: url(${RalewayExtraLightItalic}) format('woff');
  }
  font-family: RalewayExtraLightItalic;
`

const TextItalic = ({ children }) => {
  return (
    <StyledTextItalic>{children}</StyledTextItalic>
  )
}

export default memo(TextItalic)
