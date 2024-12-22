//import React from 'react'
import './Feed.css'

/*
    Nachricht an mich:
        Bilder mit einer unterschiedlichen Auflösung machen mir noch Probleme
        Da die Bilder mit einer höheren Auflösung viel größer auf der Website dargestellt werden.
*/


// thumbnails per JPG und 640x426 Auflösung und es sollen nur 9 Thumbnails existieren.
import thumbnail01 from '../../assets/Images/stockmarket.jpg'
import thumbnail02 from '../../assets/Images/sad_dog_face.jpg'
import thumbnail03 from '../../assets/Images/lake_trees.jpg'
import thumbnail04 from '../../assets/Images/ape_family.jpg'


const Feed = () => {
  return (
    <div className="feed">
        <div className='card'>
            <img src = {thumbnail01} alt="" />
            <h2>Titel</h2>
            <h3>Kanalname</h3>
            <p>Total Views &bull; Uploadtime</p>
        </div>
        <div className='card'>
            <img src = {thumbnail02} alt="" />
            <h2>Titel</h2>
            <h3>Kanalname</h3>
            <p>Total Views &bull; Uploadtime</p>
        </div>
        <div className='card'>
            <img src = {thumbnail03} alt="" />
            <h2>Titel</h2>
            <h3>Kanalname</h3>
            <p>Total Views &bull; Uploadtime</p>
        </div>
        <div className='card'>
            <img src = {thumbnail04} alt="" />
            <h2>Titel</h2>
            <h3>Kanalname</h3>
            <p>Total Views &bull; Uploadtime</p>
        </div>
    </div>
  )
}

export default Feed