import Hero from '@/components/Hero'
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
            </div>
      )
}

export default Home