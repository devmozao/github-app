import React, { memo } from 'react'

import styled from 'styled-components'

import RalewayRegular from '../../../assets/fonts/Raleway-Regular.woff'

const StyledTextRegular = styled.span`
  @font-face {
    font-family: RalewayRegular;
    src: url(${RalewayRegular}) format('woff');
  }
  font-family: RalewayRegular;

`

const TextRegular = ({ children }) => {
  return (
    <StyledTextRegular>{children}</StyledTextRegular>
  )
}

export default memo(TextRegular)
