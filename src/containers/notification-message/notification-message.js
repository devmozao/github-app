import React, { memo } from 'react'

import styled from 'styled-components'

import Typography from '../../components/typography'
import Button from '../../components/button'
import colors from '../../utils/colors'

const StyledTitle = styled.h1`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`
const StyledDiv = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NotificationMessage = ({ children, history, handleRedirect, showRedirect }) => {
  return (
    <StyledTitle>
      <Typography.Regular
        size='40px'
        color={colors.font.title}
      >
        {children}
      </Typography.Regular>

      {showRedirect && (
        <StyledDiv>
          <Button.Default
            bgColor={colors.button.default}
            onClick={handleRedirect}
          >
            <Typography.Italic
              size='20px'
              color={colors.font.reverse}
            >
              Home
            </Typography.Italic>
          </Button.Default>
        </StyledDiv>
      )}

    </StyledTitle>
  )
}

export default memo(NotificationMessage)
