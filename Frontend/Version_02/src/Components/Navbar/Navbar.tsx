import React from 'react'
import './Navbar.css'
import menu_Icon from '../../assets/Icons/home.png'
import logo_Icon from '../../assets/Icons/logo.png'

const Navbar = () => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className = 'menu-Icon' src={menu_Icon} alt="" />
            <img className = 'Logo' src={logo_Icon} alt="" />
        </div>

        <div className='nav-middle flex-div'>
            <input className='nav-Search' type = 'search' placeholder='Search'/>
            <img className=''/>
        </div>

    </nav>
  )
}

export default Navbar