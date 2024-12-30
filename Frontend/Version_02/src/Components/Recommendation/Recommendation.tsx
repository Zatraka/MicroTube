import React from 'react'
import './Recommendation.css'

//thumbnails
import thumbnail01 from '../../assets/Images/stockmarket.jpg'
import thumbnail02 from '../../assets/Images/sad_dog_face.jpg'
import thumbnail03 from '../../assets/Images/lake_trees.jpg'
import thumbnail04 from '../../assets/Images/ape_family.jpg'
import thumbnail05 from '../../assets/Images/race_car.jpg'


const Recommendation = () => {
  return (
    <div className='recommendation'>
        <div className="side-video-list">
            <img src={thumbnail01} alt="" />
            <div className="vid-info">
                <h4>Videotitel</h4>
                <p>Kanalname</p>
                <p>100k Total-Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail02} alt="" />
            <div className="vid-info">
                <h4>Videotitel</h4>
                <p>Kanalname</p>
                <p>100k Total-Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail03} alt="" />
            <div className="vid-info">
                <h4>Videotitel</h4>
                <p>Kanalname</p>
                <p>100k Total-Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail04} alt="" />
            <div className="vid-info">
                <h4>Videotitel</h4>
                <p>Kanalname</p>
                <p>100k Total-Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail05} alt="" />
            <div className="vid-info">
                <h4>Videotitel</h4>
                <p>Kanalname</p>
                <p>100k Total-Views</p>
            </div>
        </div>
    </div>
  )
}

export default Recommendation