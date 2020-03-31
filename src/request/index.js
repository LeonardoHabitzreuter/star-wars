import Axios from 'axios'

const BASE_API_URL = process.env.API_URL || 'https://swapi.co/api'

const api = () => {
  const axiosInstance = Axios.create({
    baseURL: BASE_API_URL,
    timeout: 180000,
    headers: { 'Content-Type': 'application/json' }
  })

  return {
    get: (url, params) => axiosInstance.get(`/${url}`, { params }),
    post: (url, data) => axiosInstance.post(`/${url}`, data),
    delete: url => axiosInstance.delete(`/${url}`),
    put: (url, data) => axiosInstance.put(`/${url}`, data),
    patch: (url, data) => axiosInstance.patch(`/${url}`, data)
  }
}

export { default as urls } from './urls'
export default api()
