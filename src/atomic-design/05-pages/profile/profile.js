import React from 'react'

import Typography from '../../01-atoms/typography'

const { Bold, Italic, Regular, Muted, Light, Logo } = Typography

const Profile = () => {
  return (
    <>
      <Bold size={75}>Bold</Bold>
      <br />
      <Italic size={75}>Italic</Italic>
      <br />
      <Regular size={75}>Regular</Regular>
      <br />
      <Muted size={75}>Muted</Muted>
      <br />
      <Light size={75}>Light</Light>
      <br />
      <Logo size={75}>Logo</Logo>
      <br />
    </>
  )
}

export default Profile
