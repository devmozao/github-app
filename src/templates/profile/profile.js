import React, { memo } from 'react'

import styled from 'styled-components'

import ProfileSearchbar from '../../organisms/profile-searchbar/profile-searchbar'
import Profile from '../../organisms/profile/profile'
import Repositories from '../../organisms/repositories/repositories'
import ErrorMessage from '../../organisms/error-message/error-message'

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
  function shouldRenderContent (userData = {}, repositoryData = []) {
    if (userData && repositoryData) {
      const {
        photoSrc,
        userName,
        userLogin,
        organization,
        localization,
        repos,
        followers
      } = userData

      return (
        <>
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

          <Repositories
            repositories={repositories}
          />
        </>
      )
    } else {
      return (
        <ErrorMessage showRedirect={false}>
          Something went wrong. :(
        </ErrorMessage>
      )
    }
  }

  return (
    <>
      <StyledProfileSearchBar>
        <ProfileSearchbar history={history} handleSearch={handleSearch} />
      </StyledProfileSearchBar>
      {shouldRenderContent(userInfo, repositories)}
    </>
  )
}

export default memo(TemplateProfile)
