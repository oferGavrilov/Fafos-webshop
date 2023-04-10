import Link from 'next/link'
import React from 'react'

function Hero() {
      return (
            <section className='relative'>
                  <img className='object-cover w-[100%]' src="desktop-hero.jpg" alt="" />
                  <div className=' absolute w-[100%] flex flex-col items-center bottom-[70px] font-fuzzy'>
                        <span className='uppercase text-white text-4xl md:text-5xl lg:text-7xl'>Summer 2023</span>
                        <Link href="/products"
                              className='hero-btn'>Take me there
                        </Link>
                  </div>
            </section>
      )
}

export default Hero