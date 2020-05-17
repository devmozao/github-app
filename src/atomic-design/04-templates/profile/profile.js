import React, { memo } from 'react'

import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { Choose } from 'react-extras'

import ProfileSearchbar from '../../03-organisms/profile-searchbar/profile-searchbar'
import Profile from '../../03-organisms/profile/profile'
import Repositories from '../../03-organisms/repositories/repositories'

const StyledProfileSearchBar = styled.header`
  padding-top: 35px;
  padding-bottom: 50px;
`

const TemplateProfile = ({
  userInfo = {},
  userStars = '',
  repositories = [],
  history
}) => {
  const {
    photoSrc,
    userName,
    userLogin,
    organization,
    localization,
    repos,
    followers
  } = userInfo

  return (
    <Container>
      <StyledProfileSearchBar>
        <Row>
          <ProfileSearchbar history={history} />
        </Row>
      </StyledProfileSearchBar>

      <Row>
        <Choose>
          <Choose.When condition={Object.entries(userInfo).length > 0}>
            <Col col={4}>
              <Profile
                photoSrc={photoSrc}
                userName={userName}
                userLogin={userLogin}
                organization={organization}
                localization={localization}
                stars={userStars}
                repositories={repos}
                followers={followers}
              />
            </Col>
          </Choose.When>

          <Choose.When condition={repositories.length > 0}>
            <Col col={8}>
              <Repositories
                repositories={repositories}
              />
            </Col>
          </Choose.When>

          <Choose.Otherwise>
            <p>Something went wrong</p>
          </Choose.Otherwise>
        </Choose>
      </Row>

    </Container >
  )
}

export default memo(TemplateProfile)
