import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from './databaseManager'

type categoryResponse = {
  status: boolean
  data: []
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<categoryResponse>
) {
  const { db } = await connectToDatabase()

  const category = await db.collection('category').find({}).toArray()
  console.log(category)
  res.status(200).json({ status: true, data: category })
}
