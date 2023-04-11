import Hero from '@/components/Hero'
import HomeVideo from '@/components/HomeVideo'
import HotCategories from '@/components/HotCategories'
import ImgCarousel from '@/components/ImgCarousel'
import Teaser from '@/components/Teaser'
import Link from 'next/link'
import React from 'react'

function Home() {
      return (
            <div className='scroll-smooth'>
                  <Hero />
                  <Teaser />
                  <ImgCarousel />
                  <HotCategories />
                  <HomeVideo />
            </div>
      )
}

export default Home