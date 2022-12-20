import jwt from 'jsonwebtoken'
import { verifyUser } from './db'

interface TokenPayload {
  id: number
  name: string
  iat: number
  exp: number
}

export default async function validateUser(authorization: string) {
  try {
    const [, token] = authorization.split(' ')
    const TOKEN_SECRET = process.env.TOKEN_SECRET || ''
    const data = jwt.verify(token, TOKEN_SECRET)

    if (!data) throw new Error('error')

    const { id, name } = data as TokenPayload

    const user = await verifyUser(id, name)

    if (!user) throw new Error('error')

    return user
  } catch (error) {
    return null
  }
}
