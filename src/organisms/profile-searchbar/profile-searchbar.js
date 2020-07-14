import React, { memo } from 'react'

import styled from 'styled-components'

import Logo from '../../molecules/logo/logo'
import Search from '../../molecules/search/search'

const StyledLink = styled.a`
  cursor: pointer;
`

const ProfileSearchbar = ({ history, handleSearch }) => {
  function handleRedirect () {
    history.push('/')
  }

  return (
    <>
      <StyledLink onClick={handleRedirect}>
        <Logo size='40px' textAlign='start' />
      </StyledLink>
      <form action='#' method='search' onSubmit={handleSearch}>
        <Search />
      </form>
    </>
  )
}

export default memo(ProfileSearchbar)
