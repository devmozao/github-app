import React from 'react'

import styled from 'styled-components'

import colors from '../../utils/colors'

const StyledButton = styled.button`
width: 100px;
height: 50px;
border-radius: 2px;
`

const DefaultButton = ({
  icon = '',
  bgColor = '',
  children
}) => {
  const Icon = icon

  return (
    <StyledButton style={{ backgroundColor: bgColor }}>
      {icon && (<Icon />)}
      {children}
    </StyledButton>
  )
}

export default DefaultButton
