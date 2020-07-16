import React, { memo } from 'react'

import styled from 'styled-components'

import Typography from '../../components/typography'
import Input from '../../components/input'
import Button from '../../components/button'
import Icon from '../../components/icons'

import colors from '../../utils/colors'

const StyledLogo = styled.div`
  text-align: center;
  user-select: none;
`
const StyledSpan = styled.span`
  padding: 1%;
`
const StyledSearch = styled.span`
  display: flex;
  align-self: auto;
`

const SearchBar = ({ handleSearch }) => {
  const Logo = () => {
    const size = '65px'

    return (
      <StyledLogo>
        <Typography.Logo size={size}>Github</Typography.Logo>
        <StyledSpan />
        <Typography.Italic size={size}>Search</Typography.Italic>
      </StyledLogo>
    )
  }

  const Search = ({ handleSearchFunction }) => {
    return (
      <form action='#' method='search' onSubmit={handleSearchFunction}>
        <StyledSearch>
          <Input.Search />
          <Button.Default
            bgColor={colors.button.default}
            icon={Icon.Search}
          />
        </StyledSearch>
      </form>

    )
  }

  return (
    <>
      <Logo />
      <Search handleSearchFunction={handleSearch} />
    </>
  )
}

export default memo(SearchBar)
