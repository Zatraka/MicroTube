//import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'

//Pages
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'  
  

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
     
      <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/video/:categoryId:videoId" element = {<Video/>}/>

      </Routes>
      {/* <Link></Link> // Home-Page*/} 
      {/* <Link></Link> // Login-Page*/} 
      {/* <Link></Link> // Kanalvorlage-Page*/} 
      {/* <Link></Link> // Video-Page*/} 
    </div>
  )
}

export default App
