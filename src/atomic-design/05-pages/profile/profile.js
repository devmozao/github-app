import React, { memo } from 'react'

import TemplateProfile from '../../04-templates/profile/profile'

const Profile = ({ match, history }) => {
  const { username } = match.params; console.log('username', username)

  return (
    <TemplateProfile />
  )
}

export default memo(Profile)
