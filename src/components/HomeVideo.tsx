import React from 'react'
// import ReactPlayer from 'react-player'
import { Suspense } from 'react'
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

function HomeVideo() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='py-10'>
        <ReactPlayer url={'../../video/home-video.mp4'}
          width="100%"
          height="100%"
          playing
          loop={true}
          muted={true}
        />
      </div>
    </Suspense>
  )
}

export default HomeVideo