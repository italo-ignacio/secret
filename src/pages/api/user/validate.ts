import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import validateUser from 'services/lib/validate'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { authorization } = req.headers
    if (!authorization) throw new Error('error')

    const user = await validateUser(authorization)
    if (!user) throw new Error('error')

    return res.status(200).json({ error: false, user })
  } catch (error) {
    return res.status(401).json({ error: true, msg: 'Faça o login' })
  }
}
