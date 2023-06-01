import React from 'react'
import Hero from '../components/Home/Hero'
import HomeVideo from '../components/Home/HomeVideo'
import HotCategories from '../components/Home/HotCategories'
import ImgCarousel from '../components/Home/ImgCarousel'
import Teaser from '../components/Home/Teaser'

function Home() {
      return (
            <div className='scroll-smooth fade '>
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
