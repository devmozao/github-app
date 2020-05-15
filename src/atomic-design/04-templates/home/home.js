import React from 'react'

import styled from 'styled-components'

import SearchBar from '../../03-organisms/searchbar/searchbar'
import Centralizer from '../../utils/centralizer'

const StyledTemplateHome = styled.main`
`

const TemplateHome = ({ history, handleSearch }) => {
  return (
    <StyledTemplateHome>
      <Centralizer.Both>
        <SearchBar handleSearch={handleSearch} />
      </Centralizer.Both>
    </StyledTemplateHome>
  )
}

export default TemplateHome
