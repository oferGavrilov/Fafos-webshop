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
        <div className='relative py-4'>
          <h2 className='page-header !text-2xl md:!text-3xl text-center tracking-wider'>My Shopping Cart</h2>
        </div>
        {!cartItems.length ? (
          <div className='flex flex-col items-center justify-center h-[68vh]'>
            <h2 className='text-2xl md:text-4xl main-text'>Cart Is Empty</h2>
            <Image src="/imgs/etc/empty-cart.gif" loading='eager' priority height="300" width="180" alt="" />
            <Link href="/collections" aria-label='Move to collection page'>
              <button title='Explore Products' aria-label='Explore Products' type='button' className='flow-btn border-2 font-bold border-gray-300 px-16 before:bg-gray-300 hover:text-white'>Explore Products</button>
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
