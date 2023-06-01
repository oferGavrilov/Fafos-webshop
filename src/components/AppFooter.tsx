import React from 'react'
import { SiTiktok } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/router'

function AppFooter () {
  const hidden = useRouter().pathname === '/login' || useRouter().pathname === '/user'

  return (
    <footer className={`${hidden && 'hidden'} w-full py-10 px-2 md:px-10 flex-col bg-[#e9ecef] justify-center items-center shadow-inner`}>
      <div className='flex gap-x-16 justify-between w-full'>
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
        <Link href="/" className='text-lg font-fuzzy font-semibold' aria-label='Back to home page'>FAFOS</Link>
      </div>
      <div className='flex justify-between pt-8 w-full'>
        <div className='flex gap-4'>
          <SiTiktok className='footer-icon' />
          <FaFacebookF className='footer-icon' />
          <BsInstagram className='footer-icon' />
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <p className='text-gray-500'>© 2023, Bananhot Bikinis IL</p>
          <Link href='/credit' className='font-bold uppercase hover:underline underline-offset-2' aria-label='Move to credit page'>Credit & Developer info</Link>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter