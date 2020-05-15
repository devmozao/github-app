import React from 'react'

import styled from 'styled-components'

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 2px;
  border: 2px;
`

const DefaultButton = ({
  icon = '',
  bgColor = '',
  onSubmit,
  children
}) => {
  const Icon = icon

  return (
    <StyledButton
      onSubmit={onSubmit}
      style={{ backgroundColor: bgColor }}
    >
      {icon && (<Icon />)}
      {children}
    </StyledButton>
  )
}

export default DefaultButton
