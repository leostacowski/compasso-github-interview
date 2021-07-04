import axios from 'axios'

import { GITHUB_BASE_URL } from '~/config'

export const githubApi = axios.create({
  baseURL: GITHUB_BASE_URL,
})
