import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero () {
      return (
            <section className='relative shadow-lg'>
                  <Image className='object-cover w-full max-h-screen'
                        width={0}
                        height={0}
                        sizes="100%"
                        src="/imgs/home/desktop-hero.jpg"
                        alt="hero" />
                  <div className='absolute w-full flex flex-col items-center bottom-[25%] font-fuzzy'>
                        <span className='uppercase text-white text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-marker drop-shadow-2xl'>Summer {new Date().getFullYear()}</span>
                        <Link href="/collections" aria-label='Move to collections page'
                              className='hero-btn' >Take me there
                        </Link>
                  </div>
            </section>
      )
}

export default Hero