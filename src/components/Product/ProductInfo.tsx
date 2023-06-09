/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Product } from '@models/products.model'
import React, { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove'

export default function ProductInfo ({ product }: { product: Product }) {
      const [drawer, setDrawerIsOpen] = useState({description:false, details:false, model:false, shipping:false})

      function handleDrawer (e: React.MouseEvent<HTMLDivElement>) {
            const drawer = e.currentTarget.innerText.split(' ')[0].toLowerCase()
            setDrawerIsOpen(prevState => ({...prevState, [drawer]: !prevState[drawer]}))
      }
      return (
            <section className='mt-16 [&>div:not(:first-child)]:border-t-2'>
                  <div className='flex justify-between py-4 cursor-pointer' onClick={handleDrawer}>
                        <RemoveIcon />
                        <span className='uppercase tracking-widest text-gray-500'>Description</span>
                  </div>
                  <article className={`drawer ${drawer.description ? 'h-52 md:h-36 opacity-100' : 'drawer-close'}`}>
                        <p className=''>{product.description}</p>
                  </article>

                  <div className='flex justify-between py-4 cursor-pointer' onClick={handleDrawer}>
                        <RemoveIcon />
                        <span className='uppercase tracking-widest text-gray-500'>Details</span>
                  </div>
                  <article className={`  drawer ${drawer.details ? 'drawer-open' : 'drawer-close'}`}>
                        <p className=''>{product.details}</p>
                  </article>

                  <div className='flex justify-between py-4 cursor-pointer' onClick={handleDrawer}>
                        <RemoveIcon />
                        <span className='uppercase tracking-widest text-gray-500'>Model size fit</span>
                  </div>
                  <article className={`  drawer ${drawer.model ? 'drawer-open' : 'drawer-close'}`}>
                        <p className=''>{product.model}</p>
                  </article>

                  <div className='flex justify-between py-4 cursor-pointer' onClick={handleDrawer} >
                        <RemoveIcon />
                        <span className='uppercase tracking-widest text-gray-500'>Shipping & returns</span>
                  </div>
                  <article className={`  drawer ${drawer.shipping ? 'h-32 md:h-20' : 'drawer-close'}`}>
                        <p className=''>Delivery up to 5 business days
                              Exchange/return will be made up to 14 days from the moment of receiving the product.</p>
                  </article>
            </section>
      )
}
