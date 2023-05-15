import { useShoppingCart } from '@context/ShoppingCart'
import { formatCurrency } from '@services/formatCurrency'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CheckoutModal from 'src/components/CheckoutModal'

function Cart() {
  const { cartItems, removeItem, decreaseItemQuantity, increaseItemQuantity } = useShoppingCart()
  return (
    <>
      <CheckoutModal />
      <section className='pt-20'>
        {!cartItems.length ? (
          <div className='flex flex-col items-center justify-center h-[68vh]'>
            <h2 className='text-2xl md:text-4xl main-text'>Cart Is Empty</h2>
            <Image src="/imgs/etc/empty-cart.gif" priority={true} height="300" width="320" alt="" />
            <Link href="/collections">
              <button className='flow-btn'>Explore Products</button>
            </Link>
          </div>
        ) :
          <section className='flex flex-col md:mx-8 lg:max-w-7xl lg:mx-auto'>
            <ul className='flex flex-col gap-y-2 text-sm md:main-text'>
              {cartItems.map((item) => (
                <li key={item.id} className='flex md:mx-12 border-b-2 border-gray-300 p-2'>
                  <div className='flex w-full'>
                    <img src={'/' + item.imgUrl[0]} className='object-cover  w-1/2 max-w-[250px] lg:max-w-[410px]' alt="product-image" />
                    <div className='relative ml-5 mt-6 gap-y-4 md:gap-y-8 text-xl flex flex-col flex-grow '>
                      <span className='text-sm md:text-2xl'>{item.title}</span>
                      <span><span className='text-gray-400'>Size: </span>{item.size.toUpperCase()}</span>
                      <p className='whitespace-nowrap'>
                        <span className='text-gray-400'>Color: </span>
                        <span style={{ textShadow: `-2px 2px 5px ${item?.bulletColor}` }}>{item.color.toUpperCase()}</span>
                      </p>
                      <div className='flex flex-col gap-y-4 md:gap-y-8 '>
                        <p>
                          <span className='text-gray-400'>Price: </span>
                          <span>{formatCurrency(item.price)}</span>
                        </p>
                        <p>
                          <span className='text-gray-400'>Quantity: </span>
                          <span>{item.quantity}</span>
                        </p>
                        <p>
                          <span className='text-gray-400'>Total: </span>
                          <span>{formatCurrency(item.price * item.quantity)}</span>
                        </p>
                      </div>
                      <button className='absolute main-text text-base right-0 underline underline-offset-4' onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
                </li>
              ))}
          </ul>
          </section>
        }
    </section >
    </>
  )
}

export default Cart
