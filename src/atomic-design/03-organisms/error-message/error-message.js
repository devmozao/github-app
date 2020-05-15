import React, { memo } from 'react'

import styled from 'styled-components'

import NotificationMessage from '../../02-molecules/notification-message/notification-message'

const StyledErrorMessage = styled.main`
`

const ErrorMessage = ({ handleRedirect }) => {
  return (
    <StyledErrorMessage>
      <NotificationMessage handleRedirect={handleRedirect}>
        Page not found :(
      </NotificationMessage>
    </StyledErrorMessage>
  )
}

export default memo(ErrorMessage)
