import Layout from '../components/Layout'
import { productService } from '../services/product.service'
import Link from 'next/link'
import React from 'react'

function collections() {
      const collections = productService.getCollections()
      return (
            <Layout page='Collections'>
                  <h2 className='font-fuzzy text-3xl text-center pt-16 my-5 '>Collections</h2>
                  <ul className='grid gap-4 mx-10 mb-12 md:grid-cols-3 xl:grid-cols-4 md:mx-10 lg:mx-28 xl:mx-32'>
                        {collections.map(collection => (
                              <Link key={collection.id} href={`/products/${collection.category}`}>
                                    <li className='relative overflow-hidden cursor-pointer'>
                                          <img className='w-full transition min-h-[290px] min-w-[250px] object-cover duration-300 hover:scale-110' src={collection.img} alt={collection.title} />
                                          <h2 className='absolute-center uppercase text-3xl lg:text-4xl text-white tracking-wider text-center font-bold font-fuzzy'>{collection.title}</h2>
                                    </li>
                              </Link>
                        ))}
                  </ul>
            </Layout>
      )
}

export default collections