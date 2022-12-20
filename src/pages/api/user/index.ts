import type { NextApiRequest, NextApiResponse } from 'next'
import { createUser, getAllUsers } from 'services/lib/db'
import bcrypt from 'bcrypt'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req
  const { id, name, password, friend, img } = req.body

  switch (method) {
    case 'GET':
      try {
        const data = await getAllUsers()

        res.status(200).json(data)
      } catch (error) {
        res.status(400).json({ error: true, msg: error })
      }
      break

    case 'POST':
      try {
        await createUser({ id, name, password, friend, img })
        res.status(200).json({ error: false, msg: 'Cadastrado' })
      } catch (error) {
        res.status(400).json({
          error: true,
          msg: error
        })
      }
      break

    default:
      res.status(400).json({ error: true, msg: 'URL does not exist' })
      break
  }
}
