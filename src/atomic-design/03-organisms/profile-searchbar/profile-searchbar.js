import React, { memo } from 'react'

import { Col } from 'styled-bootstrap-grid'
import styled from 'styled-components'

import Logo from '../../02-molecules/logo/logo'
import Search from '../../02-molecules/search/search'

const StyledLink = styled.a`
  cursor: pointer;
`

const ProfileSearchbar = ({ history }) => {
  function handleRedirect () {
    history.push('/')
  }

  return (
    <>
      <Col col={4}>
        <StyledLink onClick={handleRedirect}>
          <Logo size='40px' textAlign='start' />
        </StyledLink>
      </Col>
      <Col col={8}>
        <Search />
      </Col>
    </>
  )
}

export default memo(ProfileSearchbar)
