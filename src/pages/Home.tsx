import Hero from '../components/Hero'
import HomeVideo from '../components/HomeVideo'
import HotCategories from '../components/HotCategories'
import ImgCarousel from '../components/ImgCarousel'
import Teaser from '../components/Teaser'
import React from 'react'

function Home() {
      return (
            <div className='scroll-smooth '>
                  <Hero />
                  <div className='md:mx-10 lg:mx-28 xl:mx-32'>
                        <Teaser />
                        <ImgCarousel />
                        <HotCategories />
                  </div>
                  <HomeVideo />
            </div>
      )
}

export default Home