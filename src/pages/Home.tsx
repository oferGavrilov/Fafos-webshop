import Hero from '@/components/Hero'
import HotCategories from '@/components/HotCategories'
import ImgCarousel from '@/components/ImgCarousel'
import Teaser from '@/components/Teaser'
import Link from 'next/link'
import React from 'react'

function Home() {
      return (
            <div>
                  <Hero />
                  <Teaser />
                  <ImgCarousel />
                  <HotCategories />
            </div>
      )
}

export default Home