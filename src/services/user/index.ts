import api from '..'
import * as dto from './dtoResponses'
import { destroyCookie } from 'nookies'

export default class AuthService {
  static async login(name: string, password: string) {
    const response = await api.post<dto.DtoLoginResponse>('/api/user/login', {
      name,
      password
    })
    return response.data
  }

  static async cadastrar(
    id: number,
    name: string,
    password: string,
    friend: string,
    img: string
  ) {
    const response = await api.post<dto.DtoCadastroResponse>('/api/user', {
      id,
      name,
      password,
      friend,
      img
    })
    return response.data
  }

  static async atualizar(
    id: number,
    friend: string,
    img: string,
    token: string
  ) {
    const response = await api.put<dto.DtoSuccessResponse>(
      `/api/user/${id}`,
      {
        friend,
        img
      },
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )
    return response.data
  }
  static async atualizarSenha(id: number, password: string, token: string) {
    const response = await api.put<dto.DtoSuccessResponse>(
      `/api/user/${id}`,
      {
        password
      },
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )
    return response.data
  }
  static async atualizarImg(
    id: number,
    token: string,
    img_perfil: string | undefined,
    img_fundo: string | undefined
  ) {
    const response = await api.put<dto.DtoSuccessResponse>(
      `/api/user/${id}`,
      {
        img_perfil,
        img_fundo
      },
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )
    return response.data
  }

  static async deletar(id: number, token: string) {
    const response = await api.delete<dto.DtoSuccessResponse>(
      `/api/user/${id}`,
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )
    return response.data
  }

  static async buscarUsuario(id: number, token: string) {
    const response = await api.get<dto.DtoUserResponse>(`/api/user/${id}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    return response.data
  }

  static async validate(token: string) {
    const response = await api.get<dto.DtoValidateResponse>(
      `${
        process.env.NODE_ENV === 'production'
          ? 'https://amigo-secreto-eosin.vercel.app/api/user/validate'
          : 'http://localhost:3000/api/user/validate'
      }`,
      {
        headers: { authorization: `Bearer ${token}` }
      }
    )
    return response.data
  }
}

export const logout = () => {
  destroyCookie(null, 'token')
}
