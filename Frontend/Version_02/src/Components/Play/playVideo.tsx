//import React from 'react'
import './playVideo.css'

import video01 from '../../assets/Videos/test_01.mp4' 



const playVideo = () => {
  return (
    <div className='play-video'>
        <video src={video01} controls autoPlay muted></video>
        <h3 className='VideoTitel'> Videotitel</h3>
        <div className="play-video-info">
            <p></p>
        </div>
    </div>
  )
}

export default playVideo