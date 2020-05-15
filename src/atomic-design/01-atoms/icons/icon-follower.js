import React, { memo } from 'react'

import styled from 'styled-components'

import icon from '../../../assets/icons/follower.svg'

const StyledIconFollower = styled.img`

`

const IconFollower = () => {
  return (
    <StyledIconFollower src={icon} alt='Teste' />
  )
}

export default memo(IconFollower)
