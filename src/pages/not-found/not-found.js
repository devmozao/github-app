import React, { memo } from 'react'

// import TemplateNotFound from '../../templates/not-found/not-found'
import ErrorMessage from '../../organisms/error-message/error-message'

function NotFound ({ history }) {
  function handleRedirect () {
    history.push('/')
  }
  return (
    <ErrorMessage
      handleRedirect={handleRedirect}
      showRedirect
    >
      Something went wrong. Please try again.
    </ErrorMessage>
    // <TemplateNotFound handleRedirect={handleRedirect} />
  )
}

export default memo(NotFound)
