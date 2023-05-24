import clientPromise from '../../../lib/mongodb'

export const mongoService = {
      query,
      getProductById
}

async function query (req, res) {
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

async function getProductById (req, res) {
      try {
            const client = await clientPromise
            const db = client.db('fafos')
            const data = await db.collection('product').findOne({ _id: req.query.id })
            res.json(data)
      } catch (err) {
            console.error(err)
            throw new Error(err).message
      }
}