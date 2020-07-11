import React, { memo } from 'react'

import styled from 'styled-components'

import Input from '../../atoms/input'
import Button from '../../atoms/button'
import Icon from '../../atoms/icons'

import colors from '../../utils/colors'

const StyledSearch = styled.span`
  display: flex;
  align-self: auto;
`

const Search = () => {
  return (
    <StyledSearch>
      <Input.Search />
      <Button.Default
        bgColor={colors.button.default}
        icon={Icon.Search}
      />
    </StyledSearch>
  )
}

export default memo(Search)
