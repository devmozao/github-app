import React, { memo } from 'react'

// import styled from 'styled-components'

import NotificationMessage from '../../molecules/notification-message/notification-message'

const ErrorMessage = ({ handleRedirect, showRedirect, children }) => {
  return (
    <NotificationMessage
      handleRedirect={handleRedirect}
      showRedirect={showRedirect}
    >
      {children}
    </NotificationMessage>
  )
}

export default memo(ErrorMessage)
