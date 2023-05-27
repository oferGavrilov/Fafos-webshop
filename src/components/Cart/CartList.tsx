import React from 'react'
import { Cart } from '../../models/products.model'
import CartPreview from './CartPreview'

interface Props {
      cartItems: Cart[]
}

export default function CartList ({ cartItems }: Props) {
      return (
            <div className='flex flex-col mt-6'>
                  <ul className='flex flex-col gap-y-2 text-sm md:main-text'>
                        {cartItems.map((item) => (
                              <CartPreview item={item} key={item.id + item.size + item.color} />
                        ))}
                  </ul>
            </div>
      )
}
