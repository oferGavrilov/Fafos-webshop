import Link from 'next/link'
import React from 'react'

function AboveHeader () {
      return (
            <Link
                  className='bg-[#333333] gap-x-2 flex text-white content-center justify-center text-xs p-2 cursor-pointer hover:text-gray-200'
                  href="/collections"
                  aria-label='Move to collection page'>
                  <p>Free shipping on orders over 600₪</p>
                  <p className='pr-1 underline'>For all products</p>
            </Link>
      )
}

export default AboveHeader