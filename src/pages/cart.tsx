/* eslint-disable no-promise-executor-return */
import React from 'react'
import Link from 'next/link'

import CartList from 'src/components/Cart/CartList'
import CartInfo from 'src/components/Cart/CartInfo'
import EmptyCart from 'src/components/Cart/EmptyCart'
import { useShoppingCart } from '../context/ShoppingCart'

function Cart () {
  const { cartItems } = useShoppingCart()

  return (
    <>
      {cartItems.length > 0 && <Link href="/" className='flow-btn !text-base md:text-2xl slide-bottom before:bg-green !border-2 rounded-md !border-green hover:text-white '>
        <span>Apply Purchase</span>
      </Link>}
      <section className='pt-10 pb-20'>
        <div className='relative py-4'>
          <h2 className='page-header !text-2xl md:!text-3xl text-center tracking-wider'>My Shopping Cart</h2>
        </div>
        {!cartItems.length ? (
          <EmptyCart />
        ) :
          <section className='relative  md:mx-8 lg:max-w-7xl lg:mx-auto'>
            <CartInfo cartItems={cartItems} />
            <CartList cartItems={cartItems} />
          </section>
        }
      </section >
    </>
  )
}

export default Cart
