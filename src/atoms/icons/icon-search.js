import React, { memo } from 'react'

import styled from 'styled-components'

import icon from '../../assets/icons/search.svg'

const StyledIconSearch = styled.img`
  width: 35px;
  height: 35px;
`

const IconSearch = () => {
  return (
    <StyledIconSearch src={icon} alt='Icon Search' />
  )
}

export default memo(IconSearch)
