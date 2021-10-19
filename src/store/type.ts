import { ILoginState } from './login/type'
export interface IRootState {
  name: string
  password: any
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
