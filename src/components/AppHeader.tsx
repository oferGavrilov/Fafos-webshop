import Link from 'next/link'
import { useEffect } from 'react'
import { useState } from "react"

import { IoBagOutline } from 'react-icons/io5'
import { AiOutlineUser, AiOutlineSearch, AiOutlineGlobal } from 'react-icons/ai'
import { Badge, IconButton } from "@mui/material"

import MenuIcon from '@mui/icons-material/Menu'
import SideMenu from './SideMenu'
import { useShoppingCart } from '@context/ShoppingCart'

interface Props {
  page: string
}

function AppHeader({ page }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const {cartItems} = useShoppingCart()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 33) setIsScrolled(true)
      else setIsScrolled(false)
    }
    addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed w-[100%] z-10 transition duration-500  ${isScrolled ? 'scrolled' : 'text-white'}`}>
        <nav className={`flex h-[70px] items-center px-4 justify-between ${page !== 'Home' ? 'text-[#212529]' : ''}`}>
          <div className='flex gap-5 items-center'>
            <Link className='header-icon hidden lg:block' href="/login">
              <IconButton>
                <AiOutlineUser />
              </IconButton>
            </Link>
            <Link className='header-icon' href="/cart">
              <IconButton>
                <Badge badgeContent={cartItems.length} color="warning">
                  <IoBagOutline />
                </Badge>
              </IconButton>
            </Link>
            <Link className='header-icon' href="/yes">
              <IconButton>
                <AiOutlineSearch />
              </IconButton>
            </Link>
            <IconButton>
              <AiOutlineGlobal />
            </IconButton>
            <IconButton>
              <span className='header-icon hidden lg:block cursor-pointer font-thin uppercase tracking-wider'>Gift card</span>
            </IconButton>
          </div>
          <Link href="/" className='flex gap-4 items-center'>
            <span className='text-3xl font-mono uppercase tracking-wider'>Fafos</span>
          </Link>
          <IconButton className='text-inherit lg:hidden' edge='start' size='large' aria-label='logo' onClick={() => setIsOpen(true)}>
            <MenuIcon />
          </IconButton>
        </nav>
      </header >
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} menuType='main' />
    </>
  )
}

export default AppHeader