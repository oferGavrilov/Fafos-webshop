import React from 'react'
import { Cart } from '@models/products.model'
import { useShoppingCart } from '../../context/ShoppingCart'
import formatCurrency from '../../helpers/formatCurrency'

interface Props {
      cartItems: Cart[]
}

export default function CartInfo ({ cartItems }: Props) {
      const { clearCart } = useShoppingCart()

      return (
            <div className='bg-tertiary shadow-secondary shadow-xl mx-2 md:mx-14 py-6 px-1 md:px-8 mb-8 flex flex-wrap gap-y-4 flex-col justify-between rounded-lg  md:text-xl'>
                  <div className='flex justify-around md:justify-between text-xl md:text-2xl'>
                        <div className='flex gap-1 md:gap-2 '>
                              <span className='text-dark-gray'>Total Items: </span>
                              <span>{cartItems.length - 1}</span>
                        </div>
                        <div className='flex gap-1 md:gap-2'>
                              <span className='text-dark-gray'>Total Price: </span>
                              <span>{formatCurrency(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0))}</span>
                        </div>
                  </div>
                  <div className='flex justify-end '>
                        <button type='button' onClick={() => clearCart()} className='underline underline-offset-4'>Clear Cart</button>
                  </div>
            </div>
      )
}
