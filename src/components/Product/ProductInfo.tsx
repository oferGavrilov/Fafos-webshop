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
                  <article className={`drawer ${drawer.description ? 'h-36 opacity-100' : 'drawer-close'}`}>
                        <p className=''>Girls, watch out! This is the AMBER one-piece, it has halter neck straps which can be tied in the front making it perfect for your tanning needs. The underwire cups are supportive and flattering, the one piece has a subtle but sexy ruching design.</p>
                  </article>

                  <div className='flex justify-between py-4 cursor-pointer' onClick={handleDrawer}>
                        <RemoveIcon />
                        <span className='uppercase tracking-widest text-gray-500'>Details</span>
                  </div>
                  <article className={`  drawer ${drawer.details ? 'drawer-open' : 'drawer-close'}`}>
                        <p className=''>78% Recyceld PL 22% elastane</p>
                  </article>

                  <div className='flex justify-between py-4 cursor-pointer' onClick={handleDrawer}>
                        <RemoveIcon />
                        <span className='uppercase tracking-widest text-gray-500'>Model size fit</span>
                  </div>
                  <article className={`  drawer ${drawer.model ? 'drawer-open' : 'drawer-close'}`}>
                        <p className=''>Model is wearing size: XS</p>
                  </article>

                  <div className='flex justify-between py-4 cursor-pointer' onClick={handleDrawer} >
                        <RemoveIcon />
                        <span className='uppercase tracking-widest text-gray-500'>Shipping & returns</span>
                  </div>
                  <article className={`  drawer ${drawer.shipping ? 'h-20' : 'drawer-close'}`}>
                        <p className=''>Delivery up to 5 business days
                              Exchange/return will be made up to 14 days from the moment of receiving the product.</p>
                  </article>

            </section>
      )
}
