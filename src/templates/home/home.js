import React, { memo } from 'react'

import SearchBar from '../../organisms/searchbar/searchbar'

const TemplateHome = ({ history, handleSearch }) => {
  return (
    <SearchBar handleSearch={handleSearch} />
  )
}

export default memo(TemplateHome)
