import React, { memo } from 'react'

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
  onClick,
  children
}) => {
  const Icon = icon

  return (
    <StyledButton
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
    >
      {icon && (<Icon />)}
      {children}
    </StyledButton>
  )
}

export default memo(DefaultButton)
