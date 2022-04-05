import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from './databaseManager'

type loginResponse = {
  status: boolean
  data: object
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<loginResponse>
) {
  const { db } = await connectToDatabase()
  const { username } = req.body
  console.log(db);

  const users = await db.collection('user').find({ username }).toArray()
  console.log(users)
  if (users) res.status(200).json({ status: true, data: users[0] })
  else res.status(200).json({ status: false, data: {} })
}
