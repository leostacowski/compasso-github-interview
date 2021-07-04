import axios from 'axios'

import { isDEV } from '~/utilities'
import { GITHUB_BASE_URL } from '~/config'

const startURL = isDEV() ? 'https://cors-anywhere.herokuapp.com/' : ''

export default axios.create({
  baseURL: `${startURL}${GITHUB_BASE_URL}`,
})
