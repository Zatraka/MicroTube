import React from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

// Props um die Sidebar ein und auszufahren.
interface HomeProps {
  sidebar: boolean;
}

const Home: React.FC<HomeProps> = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "": "large-Container"}`}>
      <Feed/>
      </div>
    </>
  );
};

export default Home;
