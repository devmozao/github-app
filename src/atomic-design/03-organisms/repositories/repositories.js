import React, { memo } from 'react'

import Repository from '../../02-molecules/repository/repository'

const Repositories = ({ repositories = [] }) => {
  return (
    <>
      {repositories.map((item, index) => {
        const {
          repositoryName,
          repositoryLink,
          description,
          stars
        } = item

        return (
          <Repository
            key={index}
            repositoryName={repositoryName}
            repositoryLink={repositoryLink}
            description={description}
            stars={stars}
          />
        )
      })}
    </>
  )
}

export default memo(Repositories)
