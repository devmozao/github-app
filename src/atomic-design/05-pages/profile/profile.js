import React, { useState, useEffect } from 'react'

import TemplateProfile from '../../04-templates/profile/profile'

const Profile = ({ match, history }) => {
  const { username } = match.params
  console.log('username', username)

  // const [state, setState] = useState('')
  // const { username } = match.params

  return (
    <>
      <TemplateProfile />
    </>
  )
}

export default Profile
