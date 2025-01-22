import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';
import LoginPage from './Pages/Login/Login';
import KanalPage from './Pages/Kanal/Kanal';

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Kanal" element={<KanalPage />} />
      </Routes>
    </div>
  );
};

export default App;
