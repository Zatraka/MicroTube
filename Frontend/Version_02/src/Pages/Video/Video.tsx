import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/Play/playVideo'
import Recommendation from '../../Components/Recommendation/recommendation'

const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo/>
      <Recommendation/>
    </div>
  )
}

export default Video