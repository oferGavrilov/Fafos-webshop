import { useRouter } from 'next/router'
import React from 'react'

export default function NoSuchItem () {
      const router = useRouter()

      return (
            <div className='h-screen flex flex-col justify-center text-center gap-4 font-rubik'>
                  <h1 className='text-4xl '>No Such Item</h1>
                  <button className='bg-gray-300 font-bold text-xl w-max mx-auto p-2 rounded-lg' type='button' onClick={() => router.back()}>Go Back</button>
            </div>
      )
}
