import React, { memo } from 'react'

import styled from 'styled-components'

import defaultImage from '../../assets/images/default-image.png'

const StyledPhoto = styled.img`
  border-radius: 2px;
  box-shadow: 0 0 4px
`

const Photo = ({ src = '', alt = '', width = '280px', height = '280px' }) => {
  const handleOnError = (event) => {
    event.target.src = defaultImage
  }

  return (
    <StyledPhoto
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={handleOnError}
    />
  )
}

export default memo(Photo)
