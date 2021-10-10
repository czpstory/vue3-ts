import HyRequest from './request'
import { BASE_URL, BASE_TIME } from './request/config'
import LocalCache from '@/utils/cache'
const hyRequest = new HyRequest({
  baseURL: BASE_URL,
  timeout: BASE_TIME,
  interceptors: {
    requestInterceptor: (config: any) => {
      const token = LocalCache.getCache('token')
      config.headers.Authorization = `Bearer ${token}`
      return config
    }
  },
  showLoading: true
})

export default hyRequest
