import React from 'react'
import Link from 'next/link'
import collectionsData from '../constants/collections.json' 

function collections () {
      return (
            <>
                  <h2 className='font-pangolin font-bold text-3xl text-center pt-12 my-5 '>Collections</h2>
                  <ul className='grid gap-4 mx-10 mb-12 md:grid-cols-3 xl:grid-cols-4 md:mx-10 lg:mx-28 xl:mx-32'>
                        {collectionsData.map(collection => (
                              <Link key={collection.id} href={`/products/?category=${collection.category}`}>
                                    <li className='relative overflow-hidden cursor-pointer'>
                                          <img className='w-full transition min-h-[290px] min-w-[250px] object-cover duration-300 hover:scale-110' src={collection.img} alt={collection.title} />
                                          <h2 className='absolute-center uppercase text-3xl lg:text-4xl text-white tracking-wider text-center font-marker drop-shadow-xl'>{collection.title}</h2>
                                    </li>
                              </Link>
                        ))}
                  </ul>
            </>
      )
}

export default collections
