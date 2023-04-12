import Layout from '@/components/Layout'
import { productService } from '@/services/product.service'
import React from 'react'

function collections() {
      const collections = productService.getCollections()
      return (
            <Layout page='Collections'>
                  <h2 className='font-fuzzy text-3xl text-center pt-16 my-5 '>Collections</h2>
                  <ul className='grid gap-2 mx-10 mb-12 md:grid-cols-3'>
                        {collections.map(collection => (
                              <li key={collection.id} className='relative overflow-hidden cursor-pointer'>
                                    <img className='w-full transition duration-300 hover:scale-110' src={collection.img} alt={collection.title}/>
                                    <h2 className='absolute-center text-3xl text-white tracking-wider text-center font-bold font-fuzzy'>{collection.title}</h2>
                              </li>
                        ))}
                  </ul>
            </Layout>
      )
}

export default collections