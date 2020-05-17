import React, { memo, useEffect, useState } from 'react'

import TemplateProfile from '../../04-templates/profile/profile'

import { api, request } from '../../utils/handleRequests'

const Profile = ({ match, history }) => {
  const [username, setUsername] = useState(match.params.username)
  const [userInfo, setUserInfo] = useState({})
  const [userStars, setUserStars] = useState(undefined)
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    if (username) {
      getAccountInfo({ username })
      getRepositories({ username })
    }
  }, [username])

  async function getAccountInfo({ username }) {
    try {
      const response = await request(api.getUserFromGithub(username))
      const {
        avatar_url,
        name,
        login,
        company,
        location,
        public_repos,
        followers
      } = response

      const formattedResponse = {
        photoSrc: avatar_url,
        userName: name,
        userLogin: login,
        organization: company,
        localization: location,
        repos: public_repos,
        followers: followers
      }
      setUserInfo(formattedResponse)
    } catch (error) {
      console.log('Error on getUserFromGithub. ', error)
    }
  }

  async function getRepositories({ username }) {
    try {
      const response = await request(api.getRepositoriesFromUser(username))
      const formattedResponse = []
      let countRepoStars = 0

      response.map((item) => {
        const { name, description, html_url, stargazers_count } = item
        countRepoStars += stargazers_count
        return formattedResponse.push({
          repositoryName: name,
          repositoryLink: html_url,
          description: description,
          stars: stargazers_count
        })
      })

      formattedResponse.sort((a, b) => b.stars - a.stars)

      setRepositories(formattedResponse)
      setUserStars(countRepoStars)
    } catch (error) {
      console.log('Error on getRepositoriesFromUser. ', error)
    }
  }

  function handleSearch(event) {
    event.preventDefault()
    const username = event.nativeEvent.target[0].value
    console.log('u', username)
    setUsername(username)
  }

  return (
    <TemplateProfile
      userInfo={userInfo}
      userStars={userStars}
      repositories={repositories}
      history={history}
      handleSearch={handleSearch}
    />
  )
}

export default memo(Profile)
