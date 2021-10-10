import { createStore } from 'vuex'
import login from './login/login'

import { IRootState } from './type'

const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      password: ''
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

//解决登录刷新 让vuex里面的数据长期保存
export function setupStore() {
  store.dispatch('login/LoadLocalLogin')
}

export default store
