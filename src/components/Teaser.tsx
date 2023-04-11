import React from 'react'

function Teaser() {
  return (
    <ul className='text-black  z-10 flex flex-col md:flex-row md:px-10 gap-[5%] my-[85px]'>
      <li className='flex-1 relative overflow-hidden'>
        <img className='teaser-img' src="imgs/home/teaser1.jpg" alt="teaser" />
        <h2 className='teaser-name'>One piece</h2>
      </li>
      <li className='flex-1 relative overflow-hidden'>
        <img className='teaser-img' src="imgs/home/teaser2.jpg" alt="teaser" />
        <h2 className='teaser-name'>Bottoms</h2>
      </li>
      <li className='flex-1 relative overflow-hidden'>
        <img className='teaser-img' src="imgs/home/teaser3.jpg" alt="teaser" />
        <h2 className='teaser-name'>Tops</h2>
      </li>
    </ul>
  )
}

export default Teaser