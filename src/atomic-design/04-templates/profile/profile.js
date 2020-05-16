import React, { memo } from 'react'

import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import ProfileSearchbar from '../../03-organisms/profile-searchbar/profile-searchbar'
import Profile from '../../03-organisms/profile/profile'
import Repositories from '../../03-organisms/repositories/repositories'

const StyledProfileSearchBar = styled.header`
  padding-top: 35px;
  padding-bottom: 50px;
`

const TemplateProfile = ({ history }) => {
  return (
    <Container>
      <StyledProfileSearchBar>
        <Row>
          <ProfileSearchbar />
        </Row>
      </StyledProfileSearchBar>

      <Row>
        <Col col={4}>
          <Profile />
        </Col>
        <Col col={8}>
          <Repositories />
        </Col>
      </Row>
    </Container>
  )
}

export default memo(TemplateProfile)
