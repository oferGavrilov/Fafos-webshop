import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'

export default function Credit () {
      return (
            <section className='h-screen mt-24'>
                  <div className='text-center'>
                        <h1 className='text-3xl md:text-4xl font-rubik'>Credit Page</h1>
                        <p className='md:text-2xl py-2'>This Application was made for learning purpose only, credit to <a className='text-blue-500 underline underline-offset-4' href="https://bananhotbikinis.co.il/">https://bananhotbikinis.co.il/</a></p>
                        <p className='md:text-2xl py-2'>My name is Ofer Gavriel and i'm the developer of this application, you can catch me in the following links.</p>
                        <div className='flex justify-center py-4 gap-8'>
                              <Link href='https://github.com/oferGavrilov' target='_blank'><SiGithub className='footer-icon text-4xl' /></Link>
                              <Link href='https://www.linkedin.com/in/ofergavriel/' target='_blank'><SiLinkedin className='footer-icon text-4xl' /></Link>
                              <Link href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ofergavri@gmail.com' target='_blank'><SiGmail  className='footer-icon text-4xl' /></Link>
                        </div>
                  </div>
            </section>
      )
}
