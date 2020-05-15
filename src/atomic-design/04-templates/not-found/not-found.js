import React, { memo } from 'react'

import styled from 'styled-components'

import ErrorMessage from '../../03-organisms/error-message/error-message'
import Centralizer from '../../utils/centralizer'

const StyledTemplateNotFound = styled.main`
`

const TemplateNotFound = ({ handleRedirect }) => {
  return (
    <StyledTemplateNotFound>
      <Centralizer.Both>
        <ErrorMessage handleRedirect={handleRedirect} />
      </Centralizer.Both>
    </StyledTemplateNotFound>
  )
}

export default memo(TemplateNotFound)
