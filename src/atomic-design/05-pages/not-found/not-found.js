import React, { memo } from 'react'

import TemplateNotFound from '../../04-templates/not-found/not-found'

function NotFound ({ history }) {
  console.log('h', history)

  function handleRedirect () {
    console.log('history', history)
    history.push('/')
  }
  return (
    <TemplateNotFound handleRedirect={handleRedirect} />
  )
}

export default memo(NotFound)
