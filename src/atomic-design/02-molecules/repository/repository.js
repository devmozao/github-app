import React, { memo } from 'react'

import styled from 'styled-components'

import Icons from '../../01-atoms/icons'
import Typography from '../../01-atoms/typography'
import colors from '../../utils/colors'

const StyledRepository = styled.div`
  width: 750px;
  padding-left: 5px;
`
const StyledRepoName = styled.div`
  height: 40px;
  font-size: 35px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`
const StyledDescription = styled.div`
  padding-top: 2px;
  height: 25px;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`
const StyledStars = styled.span`
  padding-top: 12px;
  margin-bottom: 30px;
  display: flex;
  align-content: center;
`
const StyledSpan = styled.span`
  margin-left: 10px;
  height: 22px;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`

const StyledLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Repository = ({
  repositoryName = '--',
  repositoryLink = '--',
  description = '--',
  stars = '--'
}) => {
  return (
    <StyledRepository>

      <StyledRepoName>
        <StyledLink
          href={repositoryLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Typography.Regular
            color={colors.font.title}
            children={repositoryName}
          />
        </StyledLink>
      </StyledRepoName>

      <StyledDescription>
        <Typography.Regular children={description} />
      </StyledDescription>

      <StyledStars>
        <Icons.Star />
        <StyledSpan>
          <Typography.Muted children={stars} />
        </StyledSpan>
      </StyledStars>

    </StyledRepository>
  )
}

export default memo(Repository)
