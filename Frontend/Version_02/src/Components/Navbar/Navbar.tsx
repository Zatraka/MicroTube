import React from 'react'
import './Navbar.css'
import menu_Icon from '../../assets/Icons/menu-burger_h.png'
import logo_Icon from '../../assets/Icons/logo.png'
import Bockmark_Icon from '../../assets/Icons/bookmark.png'
import Bell_Icon from '../../assets/Icons/bell.png'
import Profile_Icon from '../../assets/Icons/OneUser.png'

//import Searchbar from './Components/Searchbar/Searchbar.tsx'


const Navbar = () => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className = 'menu-Icon' src={menu_Icon} alt="leftside_Menu" />
            <img className = 'Logo' src={logo_Icon} alt="" />
        </div>

        
        <div className='nav-right flex-div'>
            <img className='nav-upload' src= {Bockmark_Icon} alt='rightside_Menu'/>    
            <img className='nav-Bell' src= {Bell_Icon} alt=''/>
            <img className='nav-Profile' src= {Profile_Icon} alt=''/>
        </div>

    </nav>
  )
}

export default Navbar