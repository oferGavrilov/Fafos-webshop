import { productService } from '@/services/product.service'
import React from 'react'

function HotCategories() {
      const hotCategories = productService.getCategoriesData()

      return (
            <ul className='flex gap-[20px] flex-col sm:flex-row sm:mx-14'>{hotCategories.map(category => (
                  <li className='flex-1 overflow-hidden relative'>
                        <img
                              className='max-h-[700px] w-[100%] h-[100%] transition duration-300 object-cover hover:scale-110'
                              src={category.img}
                              alt={category.title} />
                        <h2 className='teaser-name underline underline-offset-4'>{category.title}</h2>
                  </li>
            ))}</ul>
      )
}

export default HotCategories