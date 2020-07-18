import React, { memo, useEffect, useState } from 'react'

import Header from '../../containers/searchbar/searchbar'
import ProfileInfo from '../../containers/profile-info/profile-info'
import Repositories from '../../containers/repositories/repositories'
import NotificationMessage from '../../containers/notification-message/notification-message'

import * as api from '../../services/api'

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

  async function getAccountInfo ({ username }) {
    try {
      const response = await api.getUserFromGithub(username)

      const {
        avatar_url,
        name,
        login,
        company,
        location,
        public_repos,
        followers
      } = response.data

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
      setUserInfo({})
      setUserStars(undefined)
      setRepositories([])
    }
  }

  async function getRepositories ({ username }) {
    try {
      const response = await api.getRepositoriesFromUser(username)
      const { data } = { ...response }
      console.log('repo', response)
      const formattedResponse = []
      let countRepoStars = 0

      data.map((item) => {
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
      setUserInfo({})
      setUserStars(undefined)
      setRepositories([])
    }
  }

  function handleSearch (event) {
    event.preventDefault()
    const username = event.nativeEvent.target[0].value
    console.log('u', username)
    setUsername(username)
  }

  function handleRedirect () {
    history.push('/')
  }

  function shouldRenderContent (userData = {}, repositoryData = []) {
    if (userData && repositoryData) {
      const {
        photoSrc,
        userName,
        userLogin,
        organization,
        localization,
        repos,
        followers
      } = userData

      return (
        <>
          <ProfileInfo
            photoSrc={photoSrc}
            userName={userName}
            userLogin={userLogin}
            organization={organization}
            localization={localization}
            stars={userStars}
            repositories={repos}
            followers={followers}
          />

          <Repositories
            repositories={repositories}
          />
        </>
      )
    } else {
      return (
        <NotificationMessage showRedirect={false}>
          Something went wrong. :(
        </NotificationMessage>
      )
    }
  }

  return (
    <>
      <Header handleSearch={handleSearch} handleRedirectFunction={handleRedirect} isCondensed />
      {shouldRenderContent(userInfo, repositories)}
    </>
  )
}

export default memo(Profile)
