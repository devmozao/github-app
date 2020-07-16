import React, { memo } from 'react'

import styled from 'styled-components'

import icon from '../../assets/icons/star.svg'

const StyledIconStar = styled.img`
`

const IconStar = () => {
  return (
    <StyledIconStar src={icon} alt='Teste' />
  )
}

export default memo(IconStar)
