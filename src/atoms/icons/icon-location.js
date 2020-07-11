import React, { memo } from 'react'

import styled from 'styled-components'

import icon from '../../assets/icons/location.svg'

const StyledIconLocation = styled.img`
`

const IconLocation = () => {
  return (
    <StyledIconLocation src={icon} alt='Teste' />
  )
}

export default memo(IconLocation)
