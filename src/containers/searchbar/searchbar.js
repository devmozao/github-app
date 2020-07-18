import React, { memo } from 'react'

import styled from 'styled-components'

import Typography from '../../components/typography'
import Input from '../../components/input'
import Button from '../../components/button'
import Icon from '../../components/icons'

import colors from '../../utils/colors'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 35px;
  padding-bottom: 50px;
`
const Link = styled.a`
  cursor: ${({ renderPointer }) => renderPointer ? 'pointer' : ''} ;
`
const AlignCenter = styled.div`
  text-align: center;
  user-select: none;
`
const StyledSpan = styled.span`
  padding: 1%;
`
const StyledSearch = styled.form`
  display: flex;
  align-self: auto;
`

const SearchBar = ({ isCondensed = false, handleSearch, handleRedirectFunction }) => {
  const renderLogo = ({ size = '' }) => {
    return (
      <AlignCenter>
        <Typography.Logo size={size}>Github</Typography.Logo>
        <StyledSpan />
        <Typography.Italic size={size}>Search</Typography.Italic>
      </AlignCenter>
    )
  }

  const FullLogo = () => renderLogo({ size: '65px' })

  const CondensedLogo = () => {
    return (
      <Link onClick={handleRedirectFunction} renderPointer={handleRedirectFunction}>
        {renderLogo({ size: '40px' })}
      </Link>
    )
  }

  const Logo = () => isCondensed ? <CondensedLogo /> : <FullLogo />

  const Search = ({ handleSearchFunction }) => {
    return (
      <StyledSearch action='#' method='search' onSubmit={handleSearchFunction}>
        <Input.Search />
        <Button.Default
          bgColor={colors.button.default}
          icon={Icon.Search}
        />
      </StyledSearch>
    )
  }

  function Teste ({ shouldCondense }) {
    if (shouldCondense) {
      return (
        <HeaderWrapper>

          {/* <span style={{ paddingRight: '10px;' }}> */}
          <Logo />
          {/* </span> */}
          <Search handleSearchFunction={handleSearch} />
        </HeaderWrapper>
      )
    } else {
      return (
        <>
          <Logo />
          <Search handleSearchFunction={handleSearch} />
        </>
      )
    }
  }

  return (
    <Teste shouldCondense={isCondensed} />
  )
}

export default memo(SearchBar)
