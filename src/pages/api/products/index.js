import clientPromise from "../../../../lib/mongodb"

export default async function handler (req, res) {
      try {
            const { category } = req.query
            const client = await clientPromise
            const db = await client.db("fafos")
            const products = await db
                  .collection("product")
                  .find(getCriteria(category))
                  .limit(20)
                  .toArray()
            res.json(products)
      } catch (err) {
            console.error(err)
            throw new Error(err).message
      }
}

function getCriteria (category) {
      if (category === 'all-swimwear' || !category) {
            return {}
      }
      return { "category": { $regex: category, $options: 'i' } }
}
