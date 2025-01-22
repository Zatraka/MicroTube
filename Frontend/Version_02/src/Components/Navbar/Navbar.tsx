import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

import Searchbar from '../Searchbar/Searchbar.tsx';
import menu_Icon from '../../assets/Icons/menu-burger_h.png';
import logo_Icon from '../../assets/Icons/logo.png';
import Bockmark_Icon from '../../assets/Icons/bookmark.png';
import Bell_Icon from '../../assets/Icons/bell.png';
import Profile_Icon from '../../assets/Icons/OneUser.png';
//import Login_Icon from '../../assets/Icons/UserLogin.png';

interface NavbarProps {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-Icon"
          onClick={() => setSidebar((prev) => !prev)}
          src={menu_Icon}
          alt="leftside_Menu"
        />
        <a href="../../">
          <img className="Logo" src={logo_Icon} alt="" />
        </a>
      </div>

      <Searchbar />

      <div className="nav-right flex-div">
        <Link to = {`Kanal`}>
          <img className="nav-upload" src={Bockmark_Icon} alt="rightside_Menu" />
        </Link>
        <Link to = {`Kanal`}>
          <img className="nav-Bell" src={Bell_Icon} alt="Notfication Image" />
        </Link>
        <a>
          <Link to = {`Login`}>
            <button className="btn-Login">
              {/*<img className="nav-Login_Icon" src={Login_Icon} alt="Anmeldungsbutton"/>*/}Anmelden
            </button>
          </Link>
        </a>
        <a>
          <Link to = {`Kanal`}>
            <img className="nav-Profile" src={Profile_Icon} alt="Profile Bild"/>
          </Link>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
