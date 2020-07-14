import React, { memo } from 'react'

import styled from 'styled-components'

import ErrorMessage from '../../organisms/error-message/error-message'

const StyledTemplateNotFound = styled.main`
`

const TemplateNotFound = ({ handleRedirect }) => {
  return (
    <StyledTemplateNotFound>
      <ErrorMessage
        handleRedirect={handleRedirect}
        showRedirect
      >
        Something went wrong. Please try again.
      </ErrorMessage>
    </StyledTemplateNotFound>
  )
}

export default memo(TemplateNotFound)
