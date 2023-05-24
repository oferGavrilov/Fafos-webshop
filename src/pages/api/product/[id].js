import clientPromise from "../../../../lib/mongodb"


export default async(req, res) => {
      try {
            const client = await clientPromise
            const db = client.db('fafos')
            console.log('req.query',req.query.id)
            const data = await db.collection('product').findOne({ _id: req.query.id })
            res.json(data)
      } catch (err) {
            console.error(err)
            throw new Error(err).message
      }
}