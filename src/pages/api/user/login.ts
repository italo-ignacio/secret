import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { getUserName } from 'services/lib/db'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  switch (method) {
    case 'POST':
      try {
        const { name: userName, password } = req.body

        const user = await getUserName(userName)

        if (!user) {
          return res
            .status(400)
            .json({ error: true, msg: 'Usuário não encontrado' })
        }

        if (password.toString() !== user.password) {
          return res.status(400).json({ error: true, msg: 'Senha inválida' })
        }

        const { id, name } = user
        const token = jwt.sign({ id, name }, process.env.TOKEN_SECRET || '', {
          expiresIn: process.env.TOKEN_EXPIRATION
        })

        res.status(200).json({ token, user: { id, name } })
      } catch (error) {
        res.status(400).json({ error: true, msg: 'Usuário não encontrado' })
      }
      break

    default:
      res.status(400).json({ error: true, msg: 'URL does not exist' })
      break
  }
}
