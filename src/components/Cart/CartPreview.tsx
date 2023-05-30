import React from 'react'
import Link from 'next/link'
import { useShoppingCart } from '@context/ShoppingCart'
import { Cart } from '@models/products.model'
import formatCurrency from 'src/helpers/formatCurrency'
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded'
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded'
import { productService } from '@services/product.service'

interface Props {
      item: Cart
}

export default function CartPreview ({item}:Props) {

      const { increaseItemQuantity, decreaseItemQuantity , removeItem } = useShoppingCart()
     
      return (
            <li key={item.id + item.size + item.color} className='flex md:mx-12 border-b-2 p-2 shadow-lg shadow-gray-200'>
                  <div className='flex w-full '>
                        <img src={`/${item.imgUrl[0]}`} className='object-cover  w-1/2 max-w-[250px] lg:max-w-[410px]' alt="product" />
                        <div className='relative ml-5 mt-6 gap-y-4 md:gap-y-8 text-xl flex flex-col flex-grow '>
                              <span className='text-sm md:text-2xl'>{item.title}</span>
                              <span><span className='text-dark-gray'>Size: </span>{item.size.toUpperCase()}</span>
                              <p className='whitespace-nowrap'>
                                    <span className='text-dark-gray'>Color: </span>
                                    <span style={{ textShadow: `-2px 2px 5px ${item?.bulletColor}` }}>{item.color.toUpperCase()}</span>
                              </p>
                              <div className='flex flex-col gap-y-4 md:gap-y-8 pb-8 lg:pb-0 '>
                                    <p>
                                          <span className='text-dark-gray'>Price: </span>
                                          <span>{formatCurrency(item.price)}</span>
                                    </p>
                                    <div className='flex flex-col  md:flex-row md:gap-6 md:items-center '>
                                          <span className='text-dark-gray'>Quantity: </span>
                                          <div className='flex gap-x-5 pt-4 md:pt-0'>
                                                <button title='Decrease item quantity' aria-label='Decrease item quantity' type='button' onClick={() => decreaseItemQuantity(item.id, item.size, item.color)} ><RemoveCircleOutlineRoundedIcon className='!text-3xl cursor-pointer text-blue' /></button>
                                                <span >{item.quantity}</span>
                                                <button title='Add more from this product' aria-label='Add more from this product' type='button' className=" text-blue disabled:cursor-not-allowed disabled:text-gray-400" onClick={() => increaseItemQuantity(item)} disabled={productService.getAmountFromStock(item.id, item.itemId, item.size) <= item.quantity}><ControlPointRoundedIcon className='!text-3xl' /></button>
                                          </div>
                                    </div>
                                    <p>
                                          <span className='text-dark-gray'>Total: </span>
                                          <span>{formatCurrency(item.price * item.quantity)}</span>
                                    </p>
                                    <Link href={`/product/${item.id}?item=${item.itemId}`} className='absolute bottom-0 right-0 main-text text-base md:text-xl underline underline-offset-4'>Preview Product</Link>
                              </div>
                              <button title='Remove Product' aria-label='Remove Product' type='button' className='absolute main-text text-base right-0 underline underline-offset-4' onClick={() => removeItem(item.id, item.size, item.color)}>Remove</button>
                        </div>
                  </div>
            </li>
      )
}
