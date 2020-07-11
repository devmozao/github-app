import React, { memo } from 'react'

import Logo from '../../molecules/logo/logo'
import Search from '../../molecules/search/search'

const SearchBar = ({ children, handleSearch }) => {
  return (
    <form action='#' method='search' onSubmit={handleSearch}>
      <Logo />
      <Search />
    </form>
  )
}

export default memo(SearchBar)
