import HyRequest from './request'
import { BASE_URL, BASE_TIME } from './request/config'
const hyRequest = new HyRequest({
  baseURL: BASE_URL,
  timeout: BASE_TIME,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    }
  },
  showLoading: true
})

export default hyRequest
