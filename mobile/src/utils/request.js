import axios from 'axios'
import env from '../environment'

const backendUrl = env.BASE_URL
export const domain = backendUrl.endsWith('/') ? backendUrl.substr(0, backendUrl.length - 1) : backendUrl

//  Add Base URL and change snake_case to camelCase
const baseAxios = axios.create({
    baseURL: `${domain}/api/`,
})

export default baseAxios
