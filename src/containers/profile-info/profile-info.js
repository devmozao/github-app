import React from 'react'

import styled from 'styled-components'

import Photo from '../../components/photo/photo'
import Typography from '../../components/typography'
import Icons from '../../components/icons'

const {
  Organization,
  Localization,
  Star,
  Repository,
  Follower
} = Icons

const StyledProfile = styled.aside`
  padding-bottom: 2rem;
`
const StyledUser = styled.div`
`
const UserWrapper = styled.div`
  max-width: 280px;
  padding-top: 12px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`
const StyledUserName = styled.div`
  max-height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const StyledUserLogin = styled.div`
  max-height: 25px;
  padding-top: 7px;
`
const InfoWrapper = styled.div`
  max-width: 280px;
  padding-top: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`
const StyledDiv = styled.div`
  padding-top: 15px;
  font-size: 20px;
  font-weight: 300;
  display: flex;
  align-content: center;
`
const StyledSpan = styled.span`
  margin-left: 7px;
`

const ProfileInfo = ({
  photoSrc = '',
  userName = '--',
  userLogin = '--',
  organization = '--',
  localization = '--',
  stars = '--',
  repositories = '--',
  followers = '--'
}) => {
  const User = ({ photoSrc = '', userName = '', userLogin = '' }) => {
    return (
      <StyledUser>
        <Photo
          src={photoSrc}
          alt={userName}
        />
        <UserWrapper>
          <StyledUserName title={userName}>
            <Typography.Light size='35px' children={userName} />
          </StyledUserName>
          <StyledUserLogin>
            <Typography.Muted size='20px'>{userLogin}</Typography.Muted>
          </StyledUserLogin>
        </UserWrapper>
      </StyledUser>

    )
  }

  const Info = ({
    organization = '',
    localization = '',
    stars = '',
    repositories = '',
    followers = ''
  }) => {
    return (
      <InfoWrapper>
        <StyledDiv>
          <Organization />
          <StyledSpan>
            <Typography.Muted children={organization} />
          </StyledSpan>
        </StyledDiv>
        <StyledDiv>
          <Localization />
          <StyledSpan>
            <Typography.Muted children={localization} />
          </StyledSpan>
        </StyledDiv>
        <StyledDiv>
          <Star />
          <StyledSpan>
            <Typography.Muted children={stars} />
          </StyledSpan>
        </StyledDiv>
        <StyledDiv>
          <Repository />
          <StyledSpan>
            <Typography.Muted children={repositories} />
          </StyledSpan>
        </StyledDiv>
        <StyledDiv>
          <Follower />
          <StyledSpan>
            <Typography.Muted children={followers} />
          </StyledSpan>
        </StyledDiv>
      </InfoWrapper>
    )
  }

  return (
    <StyledProfile>
      <User
        photoSrc={photoSrc}
        userName={userName}
        userLogin={userLogin}
      />
      <Info
        organization={organization}
        localization={localization}
        stars={stars}
        repositories={repositories}
        followers={followers}
      />
    </StyledProfile>

  )
}

export default ProfileInfo
