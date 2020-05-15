import React from 'react'

import styled from 'styled-components'

import colors from '../../utils/colors'

const StyledInput = styled.input`
  width: 650px;
  height: 50px;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${colors.font.muted};
`

const InputSearch = () => {
  return (
    <StyledInput type='search' />
  )
}

export default InputSearch
