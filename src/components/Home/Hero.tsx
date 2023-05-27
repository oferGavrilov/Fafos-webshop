import Link from 'next/link'
import React from 'react'

function Hero() {
      return (
            <section className='relative '>
                  <img className='object-cover w-[100%]' src="imgs/home/desktop-hero.jpg" alt="hero" />
                  <div className=' absolute w-[100%] flex flex-col items-center bottom-[70px] font-fuzzy'>
                        <span className='uppercase text-white text-2xl md:text-5xl lg:text-7xl font-marker drop-shadow-2xl'>Summer {new Date().getFullYear()}</span>
                        <Link href="/collections"
                              className='hero-btn'>Take me there
                        </Link>
                  </div>
            </section>
      )
}

export default Hero