import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import { getUser, updateUser } from '@services/lib/db'
import validateUser from '@services/lib/validate'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    case 'GET':
      try {
        const dados = await getUser(Number(id))
        res.status(200).json(dados)
      } catch (error) {
        res.status(400).json({ error: true, msg: error })
      }
      break
    case 'PUT':
      try {
        const { name, friend, password } = req.body

        const data = {
          name,
          password,
          friend
        }
        await updateUser(Number(id), data)

        res.status(200).json({ msg: 'Boa! atualizou', error: false })
      } catch (error) {
        res.status(400).json({ error: true, msg: error })
      }
      break
    default:
      res.status(400).json({ error: true, msg: 'URL does not exist' })
      break
  }
}

export function validate(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const {
      query: { id },
      method
    } = req

    switch (method) {
      case 'GET' || 'PUT':
        try {
          const { authorization } = req.headers
          if (!authorization) throw new Error('error')

          const user = await validateUser(authorization)
          if (!user) throw new Error('error')

          if (user.id.toString() != id?.toString()) throw new Error('error')

          await handler(req, res)
        } catch (error) {
          return res.status(401).json({ error: true, msg: 'Não pode' })
        }
        break
      default:
        await handler(req, res)
    }
  }
}

export default validate(handler)
