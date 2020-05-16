import React, { memo } from 'react'

import styled from 'styled-components'

import Icons from '../../01-atoms/icons'
import Typography from '../../01-atoms/typography'

const {
  Organization,
  Localization,
  Star,
  Repository,
  Follower
} = Icons

const StyledInfo = styled.div`
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

const Info = ({
  organization = '',
  localization = '',
  stars = '',
  repositories = '',
  followers = ''
}) => {
  return (
    <StyledInfo>
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
    </StyledInfo>
  )
}

export default memo(Info)
