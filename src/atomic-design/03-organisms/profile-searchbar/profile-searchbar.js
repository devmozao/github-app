import React, { memo } from 'react'

import { Col } from 'styled-bootstrap-grid'

import Logo from '../../02-molecules/logo/logo'
import Search from '../../02-molecules/search/search'

const ProfileSearchbar = () => {
  return (
    <>
      <Col col={4}>
        <Logo size='40px' textAlign='start' />
      </Col>
      <Col col={8}>
        <Search />
      </Col>
    </>
  )
}

export default memo(ProfileSearchbar)
