import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded'
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded'
import { productService } from '@services/product.service'
import { useShoppingCart } from '../context/ShoppingCart'
import formatCurrency from '../services/formatCurrency'

function Cart () {
  const { cartItems, removeItem, decreaseItemQuantity, increaseItemQuantity } = useShoppingCart()
  return (
    <>
      {cartItems.length > 0 && <Link href="/" className='flow-btn !text-base md:text-2xl slide-bottom before:bg-green-400 !border-2 rounded-md !border-green-400 hover:text-white '>
        <span>Apply Purchase</span>
      </Link>}
      <section className='pt-10 pb-20'>
        <h2 className='text-center py-6 text-3xl main-text'>My Shopping Cart</h2>
        {!cartItems.length ? (
          <div className='flex flex-col items-center justify-center h-[68vh]'>
            <h2 className='text-2xl md:text-4xl main-text'>Cart Is Empty</h2>
            <Image src="/imgs/etc/empty-cart.gif" priority height="300" width="180" alt="" />
            <Link href="/collections">
              <button type='button' className='flow-btn'>Explore Products</button>
            </Link>
          </div>
        ) :
          <section className='flex flex-col md:mx-8 lg:max-w-7xl lg:mx-auto'>
            <ul className='flex flex-col gap-y-2 text-sm md:main-text'>
              {cartItems.map((item) => (
                <li key={item.id} className='flex md:mx-12 border-b-2 p-2 shadow-lg shadow-gray-200'>
                  <div className='flex w-full'>
                    <img src={`/${item.imgUrl[0]}`} className='object-cover  w-1/2 max-w-[250px] lg:max-w-[410px]' alt="product" />
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
                        <div className='flex flex-col  md:flex-row md:gap-6 md:items-center'>
                          <span className='text-gray-400'>Quantity: </span>
                          <div className='flex gap-x-5 pt-4 md:pt-0'>
                            <button type='button' onClick={() => decreaseItemQuantity(item.id)} ><RemoveCircleOutlineRoundedIcon className='!text-3xl cursor-pointer text-blue-500' /></button>
                            <span >{item.quantity}</span>
                            <button type='button' className=" text-blue-500 disabled:cursor-not-allowed disabled:text-gray-400" onClick={() => increaseItemQuantity(item)} disabled={productService.getAmountFromStock(item.id, item.itemId, item.size) <= item.quantity}><ControlPointRoundedIcon className='!text-3xl' /></button>
                          </div>
                        </div>
                        <p>
                          <span className='text-gray-400'>Total: </span>
                          <span>{formatCurrency(item.price * item.quantity)}</span>
                        </p>
                      </div>
                      <button type='button' className='absolute main-text text-base right-0 underline underline-offset-4' onClick={() => removeItem(item.id)}>Remove</button>
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
