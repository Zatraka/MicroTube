//import React from 'react'
//import Navbar from './Components/Navbar/Navbar'
//import Sidebar from './Components/Sidebar/Sidebar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import home from './Pages/Home/Home'
import Video from './Pages/Video/Video'  

const App = () => {
  return (
    <div>
      {/* <Navbar></Navbar>  */}
      {/* <Sidebar></Sidebar> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={home} />
          <Route path="/video/:categoryId:videoId" element = {<Video/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
