import React, { memo } from 'react'

import styled from 'styled-components'

import icon from '../../../assets/icons/repository.svg'

const StyledIconRepository = styled.img`
`

const IconRepository = () => {
  return (
    <StyledIconRepository src={icon} alt='Teste' />
  )
}

export default memo(IconRepository)
