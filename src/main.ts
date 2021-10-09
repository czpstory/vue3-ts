import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.less'

import { globalRegister } from '@/global'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import hyRequest from './service'

import router from './router'
import store from './store'

const app = createApp(App)
app.use(globalRegister)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)
// interface IDatatype {
//   data: any
//   returnCode: string
//   success: boolean
// }
// hyRequest
//   .request<IDatatype>({
//     url: 'http://coderczp',
//     showLoading: true
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
