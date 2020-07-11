import React, { memo } from 'react'

import TemplateNotFound from '../../templates/not-found/not-found'

function NotFound({ history }) {
  function handleRedirect() {
    history.push('/')
  }
  return (
    <TemplateNotFound handleRedirect={handleRedirect} />
  )
}

export default memo(NotFound)
