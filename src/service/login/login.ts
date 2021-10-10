import hyRequest from '../index'

enum LoginAPI {
  AccountLogin = '/login',
  UserLogin = '/users/',
  UserMenus = '/role/'
}
import { IAccount, IDataType, ILoginResult } from './type'

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function RequestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserLogin + id,
    showLoading: false
  })
}

export function RequestUserMenusByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
