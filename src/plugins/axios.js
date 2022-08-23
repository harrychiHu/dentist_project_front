import axios from 'axios'
import { useUserStore } from '../stores/user'
import router from '@/router'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API
})

export const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API
})

apiAuth.interceptors.request.use(config => {
  const user = useUserStore()
  config.headers.authorization = `Bearer ${user.token}`
  return config
})

apiAuth.interceptors.response.use(res => {
  return res
}, error => {
  const user = useUserStore()
  if (error.response) {
    if (error.response.status === 401) {
      if (error.config.url !== '/users/extend' && error.config.url !== '/users/logout') {
        return apiAuth.post('/users/extend',{}).then(({ data }) => {
          const originalRequest = error.config
          user.token = data.result
          originalRequest.headers.authorization = `Bearer ${user.token}`
          return axios(originalRequest)
        }).catch(error => {
          user.logout()
          return Promise.reject(error)
        })
      }
    }
  } 
  return Promise.reject(error)
})