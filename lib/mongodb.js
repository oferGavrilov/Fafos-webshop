/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
import { MongoClient } from 'mongodb'

const url = process.env.NODE_ENV === 'production' ? 'mongodb+srv://ofergavri:oferiko@cluster0.7kn9tmd.mongodb.net/' : 'mongodb://localhost:27017'

const options = {}

let client
// eslint-disable-next-line import/no-mutable-exports
let clientPromise

if (process.env.NODE_ENV === 'production') {
      if (!global._mongoClientPromise) {
            client = new MongoClient(url, options)
            global._mongoClientPromise = client.connect()
      }
      clientPromise = global._mongoClientPromise
} else {
      client = new MongoClient(url, options)
      clientPromise = client.connect()
}

export default clientPromise
