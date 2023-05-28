import React from "react"
import { useRouter } from "next/router"
import { Box, Drawer, Typography } from "@mui/material"
import { BsInstagram } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import CloseIcon from '@mui/icons-material/Close'
import { useShoppingCart } from "@context/ShoppingCart"
import { useAuth } from "@context/AuthContext"
import collectionsData from "../constants/collections.json"

interface Props {
      isOpen: boolean
      setIsOpen: (isOpen: boolean) => void
      menuType: string
}

export default function SideMenu ({ isOpen, setIsOpen, menuType }: Props): JSX.Element {
      return (
            <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
                  <Box width='270px' textAlign='right' role='presentation'>
                        <Typography variant="h6" component='div' className="relative">
                              <CloseIcon className='absolute left-2 top-3 !text-3xl cursor-pointer' onClick={() => setIsOpen(false)} />
                              <h2 className="py-4 text-center shadow-md shadow-gray-300">{menuType === 'main' ? 'Main Menu' : 'Collection'}</h2>
                              <ul className='flex flex-col main-text'>
                                    {DynamicList(menuType, setIsOpen)}
                              </ul>
                        </Typography>
                  </Box>
            </Drawer>
      )
}

function DynamicList (type: string, setIsOpen: (isOpen: boolean) => void): JSX.Element {
      const router = useRouter()
      const { cartItems } = useShoppingCart()
      const {currentUser , signOut} = useAuth()
      function onNavigate (path: string) {
            router.push(path)
            setIsOpen(false)
      }

      if (type === 'main') {
            return (
                  <>
                        {!currentUser ? <li className='menu-list' onClick={() => onNavigate('/login')}>Login</li> : <li className='menu-list' onClick={() => onNavigate('/user')}>Profile</li>}
                        <li className={`menu-list ${cartItems.length && 'text-green'}`} onClick={() => onNavigate('/cart')}>Cart {cartItems.length !== 0 &&<span className="bg-green text-white px-[6px] py-[1px] rounded-full">{cartItems.length}</span>}</li>
                        <li className='menu-list' onClick={() => onNavigate('/products/all-swimwear')}>All Swimwear</li>
                        <li className='menu-list' onClick={() => onNavigate('/collections')}>Collections</li>
                        <li className='menu-list'>Beach Clothes</li>
                        <li className='menu-list'>Accessories</li>
                        <li className='menu-list border-b border-gray-300'>
                              <div className='flex gap-4 justify-end'>
                                    <SiTiktok className='footer-icon' />
                                    <FaFacebookF className='footer-icon' />
                                    <BsInstagram className='footer-icon' />
                              </div>
                        </li>
                        {currentUser && <li className='menu-list border-0 border-b border-gray-300' onClick={() => signOut()}>Logout</li>}
                  </>
            )
      }
      const collections = collectionsData.map(item => item.category)
      const { category } = useRouter().query
      const navigate = (cat: string) => {
            router.push(`/products/?category=${cat}`)
            setIsOpen(false)
      }

      return (
            <ul className="">
                  {collections.map(collection => (
                        <li onClick={() => navigate(collection)} key={collection} className={`${category === collection && 'bg-tertiary border-y-2 border-gray-400'} menu-list`}>{collection.charAt(0).toUpperCase() + collection.slice(1)}</li>
                  ))}
            </ul>
      )
}
