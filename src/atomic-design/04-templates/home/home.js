import React, { memo } from 'react'

import SearchBar from '../../03-organisms/searchbar/searchbar'
import Centralizer from '../../utils/centralizer'

const TemplateHome = ({ history, handleSearch }) => {
  return (
    <Centralizer.Both>
      <SearchBar handleSearch={handleSearch} />
    </Centralizer.Both>
  )
}

export default memo(TemplateHome)
