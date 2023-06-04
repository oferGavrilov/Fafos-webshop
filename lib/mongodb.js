/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
import { MongoClient } from 'mongodb'

const url = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_MONGODB_ATLAS_KEY : process.env.NEXT_PUBLIC_MONGODB_LOCAL_KEY

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
