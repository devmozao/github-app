import React, { memo } from 'react'

import styled from 'styled-components'

const StyledCentralizeBoth = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const CentralizeBoth = ({ children }) => {
  return (
    <StyledCentralizeBoth>
      {children}
    </StyledCentralizeBoth>
  )
}

export default memo(CentralizeBoth)
