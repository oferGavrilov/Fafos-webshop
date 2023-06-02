/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-boolean-value */
import React, { Suspense } from 'react'

function HomeVideo () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='py-10'>
        <video src="../../video/home-video.mp4" className='w-full' autoPlay={true} muted={true} playsInline={true} loop={true}/>
      </div>
    </Suspense>
  )
}

export default HomeVideo
