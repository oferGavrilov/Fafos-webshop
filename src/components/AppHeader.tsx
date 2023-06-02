/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { IoBagOutline } from 'react-icons/io5'
import { AiOutlineUser, AiOutlineSearch, AiOutlineGlobal } from 'react-icons/ai'
import { Badge, IconButton, Tooltip } from "@mui/material"

import MenuIcon from '@mui/icons-material/Menu'
import { useShoppingCart } from '@context/ShoppingCart'
import { useAuth } from '@context/AuthContext'
import SideMenu from './SideMenu'
import products from '../constants/products.json'

interface Props {
  page: string
}

function AppHeader ({ page }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { cartItems } = useShoppingCart()
  const { currentUser } = useAuth()

  // Search
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isSearchOpen) inputRef.current?.focus()
  }, [isSearchOpen])

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(e.target.value.toLowerCase()))
    console.log(filteredProducts)
  }
  // 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 33) setIsScrolled(true)
      else setIsScrolled(false)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <>
      <header className={`fixed w-[100%] z-10 transition duration-500  ${isScrolled ? 'scrolled' : 'text-white'}`}>
        <nav className={`flex h-[70px] items-center px-4 justify-between ${page !== '/home' ? 'text-[#212529]' : ''}`}>
          <div className='gap-5 items-center hidden lg:flex'>
            <Link className='header-icon ' href="/login" aria-label='Login and sign up page or user page'>
              <Tooltip title={currentUser ? 'User' : 'Login'} placement='bottom' arrow>
                <IconButton aria-label='login'>
                  {currentUser ? <img className='w-8 h-8 rounded-full' src={currentUser?.photoURL || 'imgs/etc/default-user.png'} alt="user" /> : <AiOutlineUser />}
                </IconButton>
              </Tooltip>
            </Link>
            <Link className='header-icon' href="/cart" aria-label='Move to cart page'>
              <Tooltip title='Cart' placement='bottom' arrow>
                <IconButton aria-label='cart'>
                  <Badge badgeContent={cartItems?.length} color="warning"><IoBagOutline /></Badge>
                </IconButton>
              </Tooltip>
            </Link>
            {page === '/products' &&
              <div className='flex' >
                <Tooltip title='Search' placement='bottom' arrow>
                  <IconButton aria-label='search' onClick={() => setIsSearchOpen(!isSearchOpen)}>
                    <AiOutlineSearch />
                  </IconButton>
                </Tooltip>
                <input type="text" placeholder='Search Products Here' ref={inputRef} list='products' autoComplete='off'
                  className={`${isSearchOpen ? 'w-[250px] px-4' : 'w-0 px-0'} transition-all duration-300 focus-visible:bg-secondary`}
                  onChange={handleChange} />
                <datalist id='products' className='w-full !bg-secondary' >
                  {products.map(product => <option className='w-full bg-secondary' key={product.id} value={product.title} />)}
                </datalist>
              </div>}
            <Tooltip title='Translate' placement='bottom' arrow>
              <IconButton aria-label='translate'><AiOutlineGlobal /></IconButton>
            </Tooltip>
          </div>
          <Link href="/" className='flex gap-4 items-center'>
            <span className='text-2xl md:text-3xl lg:text-4xl font-mono uppercase tracking-wider drop-shadow-xl'>Fafos</span>
          </Link>
          <IconButton className='text-inherit lg:!hidden' edge='start' size='large' aria-label='menu' onClick={() => setIsOpen(true)}>
            <Badge badgeContent={cartItems?.length} color="warning"><MenuIcon /></Badge>
          </IconButton>
        </nav>
      </header >
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} menuType='main' />
    </>
  )
}

export default AppHeader
