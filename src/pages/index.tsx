import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import SpinnerLoader from 'src/components/SpinnerLoader'
// import Hero from '../components/Home/Hero'
// import HomeVideo from '../components/Home/HomeVideo'
// import HotCategories from '../components/Home/HotCategories'
// import ImgCarousel from '../components/Home/ImgCarousel'
// import Teaser from '../components/Home/Teaser'

const Hero = dynamic(() => import('../components/Home/Hero'), { ssr: false })
const Teaser = dynamic(() => import('../components/Home/Teaser'), { ssr: false })
const ImgCarousel = dynamic(() => import('../components/Home/ImgCarousel') , { ssr: false })
const HotCategories = dynamic(() => import('../components/Home/HotCategories') , { ssr: false })
const HomeVideo = dynamic(() => import('../components/Home/HomeVideo'), { ssr: false })

function Home () {
      return (
            <Suspense fallback={<div><SpinnerLoader /></div>}>
                  <div className='scroll-smooth fade '>
                        <Hero />
                        <div className='mx-0 max-w-[1400px] md:mx-auto'>
                              <Teaser />
                              <ImgCarousel />
                              <HotCategories />
                        </div>
                        <HomeVideo />
                  </div>
            </Suspense>
      )
}

export default Home
