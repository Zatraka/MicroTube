import React from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

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
