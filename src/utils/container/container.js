import React from 'react'

import styled from 'styled-components'

import colors from '../colors'

const BackgroundWrapper = styled.div`
  background-color: ${colors.dark};
`

const Container = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background-color: ${colors.light};
  color: ${colors.font.default};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export { BackgroundWrapper, Container }
