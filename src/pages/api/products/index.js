import clientPromise from '../../../../lib/mongodb'


export default async(req, res) =>  {
      try {
            const client = await clientPromise
            const db = client.db('fafos')
            const data = await db.collection('product').find({}).toArray()
            res.json(data)
      } catch (err) {
            console.error(err)
            throw new Error(err).message
      }
}

