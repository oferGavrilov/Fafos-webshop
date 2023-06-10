import clientPromise from "../../../../lib/mongodb"

export default async (req, res) => {
      console.log('carousel')

      if (req.method === 'GET') {
            try {
                  const client = await clientPromise
                  const db = client.db('fafos')
                  const data = await db.collection('carousel').find({}).toArray()
                  res.json(data)
            } catch (err) {
                  console.error(err)
                  throw new Error(err).message
            }
      } else if (req.method === 'POST') {
            try {
                  console.log(req.body)
                  // const client = await clientPromise
                  // const db = client.db('fafos')
                  // const data = await db.collection('carousel').insertOne(req.body)
                  // res.json(data)

            } catch (err) {
                  console.error(err)
                  throw new Error(err).message
            }
      }

}