import React, { memo } from 'react'

import styled from 'styled-components'

import colors from '../../utils/colors'

const StyledInput = styled.input`
  width: 650px;
  height: 50px;
  padding: 0 15px;
  border: 1px solid black;
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

export default memo(InputSearch)
