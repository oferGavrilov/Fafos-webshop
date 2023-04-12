import { Box, Drawer, Typography } from "@mui/material"
import { BsInstagram } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"
import CloseIcon from '@mui/icons-material/Close'

interface Props {
      isOpen: boolean
      setIsOpen: Function
}

function SideMenu({ isOpen, setIsOpen }: Props) {

      return (
            <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
                  <Box width='270px' textAlign='right' role='presentation'>
                        <Typography variant="h6" component='div' className="relative">
                              <CloseIcon className='absolute left-2 top-3 text-3xl cursor-pointer' onClick={() => setIsOpen(false)} />
                              <ul className='flex flex-col'>
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
                              </ul>
                        </Typography>
                  </Box>
            </Drawer>
      )
}

export default SideMenu