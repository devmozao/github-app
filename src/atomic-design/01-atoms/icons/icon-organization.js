import React, { memo } from 'react'

import styled from 'styled-components'

import icon from '../../../assets/icons/organization.svg'

const StyledIconOrganization = styled.img`

`

const IconOrganization = () => {
  return (
    <StyledIconOrganization src={icon} alt='Teste' />
  )
}

export default memo(IconOrganization)
