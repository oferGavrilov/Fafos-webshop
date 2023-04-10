import Link from 'next/link'
import React from 'react'

import { IoBagOutline } from 'react-icons/io5'
import { AiOutlineUser, AiOutlineSearch, AiOutlineGlobal } from 'react-icons/ai'


function AppHeader() {
  return (
    <header className='fixed w-[100%] z-10 text-white'>
      <nav className='flex h-[70px] items-center px-4 justify-between'>
        <div className='flex gap-5 items-center'>
          <Link className='header-icon' href="/login"><AiOutlineUser /></Link>
          <Link className='header-icon' href="/cart"><IoBagOutline /></Link>
          <Link className='header-icon' href="/search"><AiOutlineSearch /></Link>
          <span className='header-icon cursor-pointer'><AiOutlineGlobal /></span>
          <span className='header-icon cursor-pointer font-thin uppercase tracking-wider'>Gift card</span>
        </div>
        <Link href="/">
          <span className='text-3xl font-mono font-bold uppercase tracking-wider'>Fafos</span>
        </Link>
      </nav>
    </header>
  )
}

export default AppHeader