import { User } from '@shared/interfaces'

export interface DtoValidateResponse {
  error: boolean
  msg?: string
  user: User
}

export interface DtoLoginResponse {
  token: string
  user: {
    id: number
    name: string
    email: string
  }
}

export interface DtoCadastroResponse {
  msg: string
  error: boolean
  data: {
    name: string
    email: string
    password_hash: string
  }
}

export interface DtoErrorResponse {
  error: boolean
  msg: string
}

export interface DtoErrorCadastroResponse {
  response: {
    data: { error: boolean; name: string; email: string }
  }
}

export interface DtoErrorLoginResponse {
  response: {
    data: { error: boolean; msg: string }
  }
}

export interface DtoSuccessResponse {
  msg: string
  error: boolean
}

export interface DtoUserResponse {
  id: number
  name: string
  email: string
  img_perfil: string
  img_fundo: string
}
