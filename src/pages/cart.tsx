import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import CartList from 'src/components/Cart/CartList'
import CartInfo from 'src/components/Cart/CartInfo'
import { useShoppingCart } from '../context/ShoppingCart'

function Cart () {
  const { cartItems } = useShoppingCart()

  return (
    <>
      {cartItems.length > 0 && <Link href="/" className='flow-btn !text-base md:text-2xl slide-bottom before:bg-green !border-2 rounded-md !border-green hover:text-white '>
        <span>Apply Purchase</span>
      </Link>}
      <section className='pt-10 pb-20'>
        <div className='relative pt-6 pb-8'>
          <h2 className='text-2xl drop-shadow-lg md:text-3xl main-text bg-tertiary w-max mx-auto py-4 px-8 rounded-full'>My Shopping Cart</h2>
        </div>
        {!cartItems.length ? (
          <div className='flex flex-col items-center justify-center h-[68vh]'>
            <h2 className='text-2xl md:text-4xl main-text'>Cart Is Empty</h2>
            <Image src="/imgs/etc/empty-cart.gif" loading='eager' priority height="300" width="180" alt="" />
            <Link href="/collections">
              <button type='button' className='flow-btn'>Explore Products</button>
            </Link>
          </div>
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
