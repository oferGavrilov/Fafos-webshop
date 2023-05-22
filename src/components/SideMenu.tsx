import React from "react"
import { useRouter } from "next/router"
import { Box, Drawer, Typography } from "@mui/material"
import { BsInstagram } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import CloseIcon from '@mui/icons-material/Close'
import { productService } from '../services/product.service'

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
      function onNavigate (path: string) {
            router.push(path)
            setIsOpen(false)
      }

      if (type === 'main') {
            return (
                  <>
                        <li className='menu-list mt-14' onClick={() => onNavigate('/login')}>Login</li>
                        <li className='menu-list' onClick={() => onNavigate('/cart')}>Cart</li>
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
                  </>
            )
      }
      const collections = productService.getCollections().map(item => item.category)
      const { category } = useRouter().query
      const navigate = (cat: string) => {
            router.push(`/products/${cat}`)
            setIsOpen(false)
      }

      return (
            <ul className="mt-14">
                  {collections.map(collection => (
                        <li onClick={() => navigate(collection)} key={collection} className={`${category === collection && 'bg-blue-50 border-y-2 border-blue-300'} menu-list`}>{collection}</li>
                  ))}
            </ul>
      )
}
