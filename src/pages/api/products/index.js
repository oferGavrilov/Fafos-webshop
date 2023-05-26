import clientPromise from "../../../../lib/mongodb"

export default async function handler (req, res) {
      const client = await clientPromise
      const db = await client.db("fafos")
      const { category } = req.query
      const products = await db
            .collection("product")
            .find(criteria(category))
            .limit(20)
            .toArray()

      res.json(products)
}

function criteria (category) {
      if (category === 'all-swimwear') {
            return {}
      }
      return { "category": { $regex: category, $options: 'i' } }
}
