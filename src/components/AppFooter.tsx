import React from 'react'

import { SiTiktok } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import Link from 'next/link'

function AppFooter() {
  return (
    <footer className='w-[100%] py-10 px-2 md:px-10  bg-[#e9ecef] justify-center items-center shadow-inner'>
      <div className='flex gap-x-16 justify-between'>
        <ul>
          <li className='footer-links'>משלוחים</li>
          <li className='footer-links'>תקנון</li>
          <li className='footer-links'>מדיניות ופרטיות</li>
          <li className='footer-links'>נגישות</li>
        </ul>
        <ul>
          <li className='footer-links'>שאלות ותשובות</li>
          <li className='footer-links'>צרו קשר</li>
          <li className='footer-links'>תנאי שימוש</li>
          <li className='footer-links'>החזרות</li>
        </ul>
        <Link href="/" className='text-lg font-fuzzy font-semibold'>FAFOS</Link>
      </div>
      <div className='flex justify-between pt-8'>
        <div className='flex gap-4'>
          <SiTiktok className='footer-icon' />
          <FaFacebookF className='footer-icon' />
          <BsInstagram className='footer-icon' />
        </div>
        <p className='text-gray-500'>Copyright © 2023, Ofer Gavriel</p>
      </div>
    </footer>
  )
}

export default AppFooter