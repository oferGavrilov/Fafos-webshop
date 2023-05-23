import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { IoBagOutline } from 'react-icons/io5'
import { AiOutlineUser, AiOutlineSearch, AiOutlineGlobal } from 'react-icons/ai'
import { Badge, IconButton } from "@mui/material"

import MenuIcon from '@mui/icons-material/Menu'
import { useShoppingCart } from '@context/ShoppingCart'
import { useAuth } from '@context/AuthContext'
import SideMenu from './SideMenu'

interface Props {
  page: string
}

function AppHeader ({ page }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { cartItems } = useShoppingCart()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 33) setIsScrolled(true)
      else setIsScrolled(false)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { currentUser } = useAuth()
  console.log(currentUser)

  return (
    <>
      <header className={`fixed w-[100%] z-10 transition duration-500  ${isScrolled ? 'scrolled' : 'text-white'}`}>
        <nav className={`flex h-[70px] items-center px-4 justify-between ${page !== 'Home' ? 'text-[#212529]' : ''}`}>
          <div className='gap-5 items-center hidden lg:flex'>
            <Link className='header-icon ' href="/login">
              <IconButton>
                {currentUser ? <img   className='w-8 h-8 rounded-full' src={currentUser?.photoURL || 'imgs/etc/default-user.png'} alt="user"/> :  <AiOutlineUser />}
              </IconButton>
            </Link>
            <Link className='header-icon' href="/cart">
              <IconButton>
                <Badge badgeContent={cartItems?.length} color="warning">
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
          </div>
          <Link href="/" className='flex gap-4 items-center'>
            <span className='text-3xl font-mono uppercase tracking-wider'>Fafos</span>
          </Link>
          <IconButton className='text-inherit  lg:!hidden' edge='start' size='large' aria-label='logo' onClick={() => setIsOpen(true)}>
            <MenuIcon />
          </IconButton>
        </nav>
      </header >
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} menuType='main' />
    </>
  )
}

export default AppHeader
