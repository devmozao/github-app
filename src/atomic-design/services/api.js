import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/users/',
  timeout: 10000
})

export function getUserFromGithub (username) {
  return api
    .get(`/${username}`)
    .then(result => result.data)
}

export function getRepositoriesFromUser (username) {
  return api
    .get(`/${username}/repos`)
    .then(result => result.data)
}
