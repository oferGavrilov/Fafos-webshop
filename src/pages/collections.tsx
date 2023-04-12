import Layout from '@/components/Layout'
import { productService } from '@/services/product.service'
import Link from 'next/link'
import React from 'react'

function collections() {
      const collections = productService.getCollections()
      return (
            <Layout page='Collections'>
                  <h2 className='font-fuzzy text-3xl text-center pt-16 my-5 '>Collections</h2>
                  <ul className='grid gap-2 mx-10 mb-12 md:grid-cols-3'>
                        {collections.map(collection => (
                              <Link key={collection.id}  href={`/products?category=${collection.category}`}>
                                    <li  className='relative overflow-hidden cursor-pointer'>
                                          <img className='w-full transition duration-300 hover:scale-110' src={collection.img} alt={collection.title} />
                                          <h2 className='absolute-center uppercase text-3xl text-white tracking-wider text-center font-bold font-fuzzy'>{collection.title}</h2>
                                    </li>
                              </Link>
                        ))}
                  </ul>
            </Layout>
      )
}

export default collections