import { Module } from 'vuex'
import { IRootState } from '../type'
import { ILoginState } from './type'
import { IAccount } from '@/service/login/type'

import { accountLoginRequest } from '@/service/login/login'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userinfo: {}
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      //1.实现登录逻辑
      const LoginResult = await accountLoginRequest(payload)
      const { id, token } = LoginResult.data
      commit('changeToken', token)
    }
  }
}

export default loginModule
