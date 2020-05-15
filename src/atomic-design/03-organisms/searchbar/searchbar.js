import React, { memo } from 'react'

import styled from 'styled-components'

import Logo from '../../02-molecules/logo/logo'
import Search from '../../02-molecules/search/search'

const StyledSearchBar = styled.span`
`

const SearchBar = ({ children, handleSearch }) => {
  return (
    <StyledSearchBar>
      <form action='#' method='search' onSubmit={handleSearch}>
        <Logo />
        <Search />
      </form>
    </StyledSearchBar>
  )
}

export default memo(SearchBar)
