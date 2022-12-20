import { prisma } from './prisma'

export interface DataType {
  id?: number
  name: string
  password: string
  friend: string
  img: string
}

export async function getAllUsers() {
  const allUsers = await prisma.data.findMany()
  return allUsers
}

export async function getUser(id: number) {
  const data = await prisma.data.findFirst({
    where: {
      id
    }
  })
  return data
}

export async function verifyUser(id: number, name: string) {
  const data = await prisma.data.findFirst({
    where: {
      id,
      name
    }
  })
  return data
}

export async function getUserName(name: string) {
  const data = await prisma.data.findFirst({
    where: {
      name
    }
  })
  return data
}

export async function createUser(data: DataType) {
  await prisma.data.create({
    data
  })
}

export interface DataType2 {
  name?: string
  password?: string
  friend?: string
}

export async function updateUser(id: number, data: DataType2) {
  await prisma.data.update({
    where: {
      id
    },
    data
  })
}
