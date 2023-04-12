import { Box, Drawer, Typography } from "@mui/material"
import { BsInstagram } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import CloseIcon from '@mui/icons-material/Close'
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import { MdTune } from "react-icons/md"

interface Props {
      isOpen: boolean
      setIsOpen: Function
      menuType: string
}


export default function SideMenu({ isOpen, setIsOpen, menuType }: Props) {

      return (
            <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
                  <Box width='270px' textAlign='right' role='presentation'>
                        <Typography variant="h6" component='div' className="relative">
                              <CloseIcon className='absolute left-2 top-3 !text-3xl cursor-pointer' onClick={() => setIsOpen(false)} />
                              <ul className='flex flex-col main-text'>
                                    {DynamicList(menuType)}
                              </ul>
                        </Typography>
                  </Box>
            </Drawer>
      )
}

function DynamicList(type: string): ReactJSXElement {
      if (type === 'main') {
            return (
                  <>
                        <li className='menu-list mt-14'>כניסה</li>
                        <li className='menu-list'>חדש באתר</li>
                        <li className='menu-list'>בגדי ים</li>
                        <li className='menu-list'>קולקציות</li>
                        <li className='menu-list'>בגדי חוף</li>
                        <li className='menu-list'>אקססוריז</li>
                        <li className='menu-list uppercase'>Gift card</li>
                        <li className='menu-list border-b border-gray-300'>
                              <div className='flex gap-4 justify-end'>
                                    <SiTiktok className='footer-icon' />
                                    <FaFacebookF className='footer-icon' />
                                    <BsInstagram className='footer-icon' />
                              </div>
                        </li>
                  </>
            )
      } else {
            return (
                  <>
                        <li className="p-6 flex items-center justify-end gap-3">
                              <span className="uppercase text-lg tracking-[5px]">Filters</span>
                              <MdTune className='text-xl' />
                        </li>
                        <li className="menu-list uppercase text-base">Category</li>
                        <li className="menu-list uppercase text-base">Collection</li>
                        <li className="menu-list uppercase text-base">Size</li>
                  </>
            )
      }
}
