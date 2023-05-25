import clientPromise from "../../../../lib/mongodb"


export default async function handler(req, res) {
      console.log(process.env.NODE_ENV)
      const client = await clientPromise
      const db = await client.db("fafos")

      const products = await db
            .collection("product")
            .find({})
            .limit(20)
            .toArray()

      res.json(products)
}