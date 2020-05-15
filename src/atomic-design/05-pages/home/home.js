import React, { memo } from 'react'

import TemplateHome from '../../04-templates/home/home'

function Home({ history }) {
  function handleSearch(event) {
    event.preventDefault()
    const username = event.nativeEvent.target[0].value
    history.push(`/profile/${username}`)
  }

  return (
    <TemplateHome handleSearch={handleSearch} />
  )
}

export default memo(Home)
