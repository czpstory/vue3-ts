import hyRequest from '../index'

enum LoginAPI {
  AccountLogin = '/login'
}
import { IAccount, IDataType, ILoginResult } from './type'

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
