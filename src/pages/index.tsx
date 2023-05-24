import React from 'react'
import Hero from '../components/Hero'
import HomeVideo from '../components/HomeVideo'
import HotCategories from '../components/HotCategories'
import ImgCarousel from '../components/ImgCarousel'
import Teaser from '../components/Teaser'

function Home() {
      return (
            <div className='scroll-smooth '>
                  <Hero />
                  <div className='mx-0 max-w-[1400px] md:mx-auto'>
                        <Teaser />
                        <ImgCarousel />
                        <HotCategories />
                  </div>
                  <HomeVideo />
            </div>
      )
}

export default Home
