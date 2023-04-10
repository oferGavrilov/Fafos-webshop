import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

function AboveHeader() {
      return (
            <div className='bg-black flex text-white content-center justify-center text-xs p-2'>
                  
                  <Link className='pr-1 underline' href="/products">לכל המוצרים </Link>
                  <p>✦ משלוח חינם בהזמנה מעל 650₪</p>
            </div>
      )
}

export default AboveHeader