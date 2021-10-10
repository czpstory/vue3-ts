import { Module } from 'vuex'
import { IRootState } from '../type'
import { ILoginState } from './type'
import { IAccount } from '@/service/login/type'

import LocalCache from '@/utils/cache'
import router from '@/router'

import {
  accountLoginRequest,
  RequestUserInfoById,
  RequestUserMenusByRoleId
} from '@/service/login/login'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenus: any[]) {
      state.userMenus = userMenus
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      //1.实现登录逻辑 获取用户id 以及token
      const LoginResult = await accountLoginRequest(payload)
      const { id, token } = LoginResult.data
      commit('changeToken', token)
      LocalCache.setCache('token', token)
      //2.通过id获取用户信息
      const UserInfoResult = await RequestUserInfoById(id)
      const userInfo = UserInfoResult.data
      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)
      //3.通过id获取用户菜单树
      const userMenuResult = await RequestUserMenusByRoleId(id)
      const userMenus = userMenuResult.data
      commit('changeUserMenu', userMenus)
      LocalCache.setCache('userMenus', userMenus)
      //4.跳转到主页
      router.push('/main')
    },
    //解决vuex刷新就没有数据的函数
    LoadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = LocalCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = LocalCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenu', userMenus)
      }
    }
  }
}

export default loginModule
