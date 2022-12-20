import AuthService from '@services/user'
import { GetServerSidePropsContext } from 'next'
import Cookies from './cookies'

export const checkIfIsLoggedIn = async (context: GetServerSidePropsContext) => {
  try {
    const token = Cookies.get('token', context)
    if (!token) throw new Error()

    const res = await AuthService.validate(token)
    if (res.error) throw new Error()

    return {
      token: token,
      user: res.user
    }
  } catch (error) {
    return {
      token: null,
      user: null
    }
  }
}
