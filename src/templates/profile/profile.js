import React, { memo } from 'react'

import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { Choose } from 'react-extras'

import ProfileSearchbar from '../../organisms/profile-searchbar/profile-searchbar'
import Profile from '../../organisms/profile/profile'
import Repositories from '../../organisms/repositories/repositories'
import ErrorMessage from '../../organisms/error-message/error-message'
import Centralizer from '../../utils/centralizer'

const StyledProfileSearchBar = styled.header`
  padding-top: 35px;
  padding-bottom: 50px;
`

const TemplateProfile = ({
  userInfo = {},
  userStars = '',
  repositories = [],
  history,
  handleSearch
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

  const shouldRenderContent = Object.entries(userInfo).length > 0 && repositories.length > 0

  return (
    <Container>
      <StyledProfileSearchBar>
        <Row>
          <ProfileSearchbar history={history} handleSearch={handleSearch} />
        </Row>
      </StyledProfileSearchBar>

      <Row>
        <Choose>
          <Choose.When condition={shouldRenderContent}>
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

            <Col col={8}>
              <Repositories
                repositories={repositories}
              />
            </Col>
          </Choose.When>

          <Choose.Otherwise>
            <Centralizer.Both>
              <ErrorMessage showRedirect={false}>
                Something went wrong. :(
              </ErrorMessage>
            </Centralizer.Both>
          </Choose.Otherwise>
        </Choose>
      </Row>

    </Container>
  )
}

export default memo(TemplateProfile)
