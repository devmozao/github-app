import React, { memo } from 'react'

import TemplateNotFound from '../../04-templates/not-found/not-found'

function NotFound ({ history }) {
  function handleRedirect () {
    history.push('/')
  }
  return (
    <TemplateNotFound handleRedirect={handleRedirect} />
  )
}

export default memo(NotFound)
