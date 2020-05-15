import React, { memo } from 'react'

import styled from 'styled-components'

import icon from '../../../assets/icons/search.svg'

const StyledIconSearch = styled.img`

`

const IconSearch = () => {
  return (
    <StyledIconSearch src={icon} alt='Teste' />
  )
}

export default memo(IconSearch)
