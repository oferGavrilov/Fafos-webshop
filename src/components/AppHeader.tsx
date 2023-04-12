import Link from 'next/link'
import React from 'react'
import { useState } from "react"

import { IoBagOutline } from 'react-icons/io5'
import { AiOutlineUser, AiOutlineSearch, AiOutlineGlobal } from 'react-icons/ai'
import { IconButton } from "@mui/material"

import MenuIcon from '@mui/icons-material/Menu'
import SideMenu from './SideMenu'

interface Props {
  isScrolled: boolean,
  page: string
}

function AppHeader({ isScrolled , page}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  console.log(page)
  return (
    <>
      <header className={`fixed w-[100%] z-10 transition duration-500  ${isScrolled ? 'scrolled' : 'text-white'}`}>
        <nav className={`flex h-[70px] items-center px-4 justify-between ${page !== 'Home' ? 'text-black' : ''}`}>
          <div className='flex gap-5 items-center'>
            <Link className='header-icon hidden lg:block' href="/login"><AiOutlineUser /></Link>
            <Link className='header-icon' href="/cart"><IoBagOutline /></Link>
            <Link className='header-icon' href="/search"><AiOutlineSearch /></Link>
            <span className='header-icon cursor-pointer'><AiOutlineGlobal /></span>
            <span className='header-icon hidden lg:block cursor-pointer font-thin uppercase tracking-wider'>Gift card</span>
          </div>
          <Link href="/" className='flex gap-4 items-center'>
            <span className='text-3xl font-mono uppercase tracking-wider'>Fafos</span>
            <IconButton className='text-white lg:hidden' edge='start' size='large' aria-label='logo' onClick={() => setIsOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Link>
        </nav>
      </header>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default AppHeader