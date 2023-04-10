import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

function AboveHeader() {
      return (
            <Link className='bg-black flex text-white content-center justify-center text-xs p-2 cursor-pointer hover:text-gray-200' href="/products">
                  <p className='pr-1 underline'> לכל המוצרים </p>
                  <p>✦ ₪משלוח חינם בהזמנה מעל 600</p>
            </Link>
      )
}

export default AboveHeader