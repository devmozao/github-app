import React, { memo } from 'react'

import Logo from '../../02-molecules/logo/logo'
import Search from '../../02-molecules/search/search'

const SearchBar = ({ children, handleSearch }) => {
  return (
    <form action='#' method='search' onSubmit={handleSearch}>
      <Logo />
      <Search />
    </form>
  )
}

export default memo(SearchBar)
