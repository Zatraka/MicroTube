import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
//import { Home_Link } from "./Pages/Home"
//import home from './Pages/Home/Home'
  

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>

      {/* <Route path="/" element={home} /> */}
      <Route path="/video/:categoryId:"/>

      </Routes>
      {/* <Link></Link> // Home-Page*/} 
      {/* <Link></Link> // Login-Page*/} 
      {/* <Link></Link> // Kanalvorlage-Page*/} 
      {/* <Link></Link> // Video-Page*/} 
    </div>
  )
}

export default App
