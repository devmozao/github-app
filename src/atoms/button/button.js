import React, { memo } from 'react'

import styled from 'styled-components'

import ColorLuminance from '../../utils/color-luminance'

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  border: 2px;
  &:hover {
    cursor: pointer;
  }
  img {
    user-drag: none;
  }
`
const DefaultButton = ({
  icon = '',
  bgColor = '',
  bgColorHover = '',
  onClick,
  children
}) => {
  const Icon = icon

  return (
    <StyledButton
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
      onMouseEnter={(e) => { e.target.style.backgroundColor = ColorLuminance(bgColor, -0.2) }}
      onMouseLeave={(e) => { e.target.style.backgroundColor = bgColor }}
    >
      {icon && (
        <Icon
          onMouseEnter={(e) => { e.target.style.backgroundColor = ColorLuminance(bgColor, -0.2) }}
          onMouseLeave={(e) => { e.target.style.backgroundColor = bgColor }}
        />
      )}
      {children}
    </StyledButton>
  )
}

export default memo(DefaultButton)
