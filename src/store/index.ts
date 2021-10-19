import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'

import { IRootState, IStoreType } from './type'

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

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
