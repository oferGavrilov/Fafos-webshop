import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import teaser from '../../constants/teaser.json'

function Teaser () {
  return (
    <ul className='sm:mx-12  z-10 flex flex-col md:flex-row gap-5 xl:gap-[30px] my-6 md:my-[85px] font-pangolin'>
      {teaser.map(item => (
        <li key={item.id} className='flex-1 relative overflow-hidden shadow-gray-400 shadow-2xl'>
          <Link href={`/products/?category=${item.category}`}>
            {/* <img className='teaser-img ' src={item.imgUrl} alt={item.name} /> */}
            <Image loading='lazy' width={0} height={0} sizes='100%' src={`/${item.imgUrl}`} alt={item.name} className='teaser-img shadow-gray-300 shadow-xl' />
            <h2 className='teaser-name '>{item.name}</h2>
          </Link>
        </li>
      ))}
      {/* <li className='flex-1 relative overflow-hidden shadow-gray-400 shadow-2xl'>
        <Link href="/products/?category=bottoms">
          <img className='teaser-img' src="imgs/home/teaser2.jpg" alt="teaser" />
          <h2 className='teaser-name'>Bottoms</h2>
        </Link>
      </li>
      <li className='flex-1 relative overflow-hidden shadow-gray-400 shadow-2xl'>
        <Link href="/products/?category=tops">
          <img className='teaser-img' src="imgs/home/teaser3.jpg" alt="teaser" />
          <h2 className='teaser-name'>Tops</h2>
        </Link>
      </li> */}
    </ul>
  )
}

export default Teaser