import React, { memo } from 'react'

import Searchbar from '../../containers/searchbar/searchbar'

function Home ({ history }) {
  function handleSearch (event) {
    event.preventDefault()
    const username = event.nativeEvent.target[0].value
    history.push(`/profile/${username}`)
  }

  return (
    <Searchbar handleSearch={handleSearch} />
  )
}

export default memo(Home)
