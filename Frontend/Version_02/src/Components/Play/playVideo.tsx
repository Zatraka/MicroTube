//import React from 'react'
import './playVideo.css'

import video01 from '../../assets/Videos/test_01.mp4' 
import like from '../../assets/Icons/like_Button.png'
import dislike from '../../assets/Icons/dislike.png'

import emptyProfile from '../../assets/Images/blank_profile_picture.jpg'


const playVideo = () => {
  return (
    <div className='play-video'>
        <video src={video01} controls autoPlay muted></video>
        <h3 className='VideoTitel'> Videotitel</h3>

        <div className="play-video-info">
            <p>12345 Views &bull; vor 2 Tagen </p>
          <div>
              <span><img src={like}     alt=''/> 20 </span>
              <span><img src={dislike}  alt=''/> 12 </span>
              <span><img src={like}     alt=''/> Share </span>
              <span><img src={like}     alt=''/> Save </span>
          </div>
        </div>

        <hr />
        <div className='publisher'>
          <div>
            <img src={emptyProfile} alt="" />
            <p className='channelname'>Channelname</p>
            <span> XX Subscribers</span>
          </div>
          <button className='Subscribe-Button'> Subscribe</button>
        </div>
        <div className="vid-description">
          <p>Beschreibung des Videos</p>  
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed bibendum, arcu in convallis ullamcorper, mauris nunc cursus lectus, 
            et lobortis odio justo a nunc. Donec vel enim vel felis placerat finibus vel et tellus. Sed lobortis,
            dui vel congue tristique, dui velit viverra felis, et convallis nisi velit non turpis.
            Maecenas consectetur diam eu nunc congue, vel consectetur odio ullamcorper</p>
            <hr />
            <h4> XXX Kommentare</h4>
            <div className='comment'>
              <img src={emptyProfile} alt="Kanal Profilebild" />
              <div>
                <h3> Kanalname des Users der den Kommetar geschrieben hat. <span>vor XX Tagen</span></h3>
                <p>Kommentar von Nutzername</p>
              
                <div className="comment-actions">
                <img src={like} alt='' />
                <span>1111</span>
                <img src={dislike} alt='' />
                <span>1111</span>
                </div>  
              </div>
            </div>
            <div className='comment'>
              <img src={emptyProfile} alt="Kanal Profilebild" />
              <div>
                <h3> Kanalname des Users der den Kommetar geschrieben hat. <span>vor XX Tagen</span></h3>
                <p>Kommentar von Nutzername</p>
              
                <div className="comment-actions">
                <img src={like} alt='' />
                <span> 1111 </span>
                <img src={dislike} alt='' />
                <span> 1111 </span>
                </div>  
              </div>
            </div>
        </div>

    </div>
  )
}

export default playVideo