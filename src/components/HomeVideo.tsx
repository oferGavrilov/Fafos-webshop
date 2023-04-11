import React from 'react'
import ReactPlayer from 'react-player'

function HomeVideo() {
  return (
    <div className='py-10'>
      <ReactPlayer url={'../../video/home-video.mp4'}
      width="100%"
      height="100%"
      playing
      loop={true}
      muted={true}
      />
    </div>
  )
}

export default HomeVideo