import Link from 'next/link'
import React from 'react'

function Teaser() {
  return (
    <ul className='sm:mx-12  z-10 flex flex-col md:flex-row md:px-10 gap-[20px] my-6 md:my-[85px]'>
      <li className='flex-1 relative overflow-hidden'>
        <Link href="/products/one-piece">
          <img className='teaser-img' src="imgs/home/teaser1.jpg" alt="teaser" />
          <h2 className='teaser-name'>One piece</h2>
        </Link>
      </li>
      <li className='flex-1 relative overflow-hidden'>
        <Link href={`/products/bottoms`}>
          <img className='teaser-img' src="imgs/home/teaser2.jpg" alt="teaser" />
          <h2 className='teaser-name'>Bottoms</h2>
        </Link>
      </li>
      <li className='flex-1 relative overflow-hidden'>
        <Link href="/products/tops">
          <img className='teaser-img' src="imgs/home/teaser3.jpg" alt="teaser" />
          <h2 className='teaser-name'>Tops</h2>
        </Link>
      </li>
    </ul>
  )
}

export default Teaser