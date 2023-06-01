import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EmptyCart (): JSX.Element {
      return (
            <div className='flex flex-col items-center justify-center h-[68vh]'>
                  <h2 className='text-2xl md:text-4xl main-text'>Cart Is Empty</h2>
                  <Image src="/imgs/etc/empty-cart.gif" quality={50} loading='eager' priority height="300" width="180" alt="" />
                  <Link href="/collections" aria-label='Move to collection page'>
                        <button title='Explore Products' aria-label='Explore Products' type='button' className='flow-btn border-2 font-bold border-gray-300 px-16 before:bg-gray-300 hover:text-white'>Explore Products</button>
                  </Link>
            </div>
      )
}
