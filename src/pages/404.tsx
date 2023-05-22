'use client'

import { maxHeaderSize } from 'http'
import Image from 'next/image'
import React, { memo, useEffect } from 'react'

function Custom404({ error, reset }: { error: Error, reset: () => void }) {
      useEffect(() => {
            console.log("404", new Date())
      }, [error])


      return (
            <section className='relative h-screen w-full mt-16 '>
                  <div className='flex flex-col items-center mx-auto gap-y-4 pt-4 w-full absolute z-10'>
                        <h1 className='text-black text-xl'>Something went wrong!</h1>
                        <button type='button' className=' bg-blue-100 hover:bg-blue-300 transition-colors duration-300 py-2 px-4 rounded-xl font-bold text-xl ' onClick={() => reset}>Try Again</button>
                  </div>
                  <Image priority fill  src='/imgs/etc/404.jpg' alt='404-image' />
            </section>
      )
}

export default memo(Custom404)