
//import React from 'react'
import './Sidebar.css'
import home from '../../assets/Icons/home.png'
import aboList from '../../assets/Icons/folders.png'
import myYoutube from '../../assets/Icons/user-gear.png'
import history from '../../assets/Icons/time-past.png'
import profile_Icon from '../../assets/Icons/OneUser.png'


const Sidebar = () => {
    return(
        <div className="Sidebar">
            <div className="shortcut-links">
                <div className="side-link">
                    <img src={home} alt ="shortcut-icon 1"/><p>Startseite</p>
                </div>
                <div className="side-link">
                    <img src={aboList} alt ="shortcut-icon 2"/><p>Abos</p>
                </div>
                <div className="side-link">
                <img src={myYoutube} alt ="shortcut-icon 3"/><p>Mein Youtube</p>
                </div>
                <div className="side-link">
                    <img src={history} alt ="shortcut-icon 4"/><p>Verlauf</p>
                </div>
                <div className="side-link">
                    <img src={home} alt ="shortcut-icon 5"/><p>Home</p>
                </div>
                <div className="side-link">
                <img src={home} alt ="shortcut-icon 6"/><p>Home</p>
                </div>
                <hr />
            </div>

            <div className='subscribedList'>
                <h3> Subscribed</h3>
                <div className="side-link">
                    <img src={profile_Icon} alt="" /> <p>Acountname</p>
                </div>
                <div className="side-link">
                    <img src={profile_Icon} alt="" /> <p>Acountname</p>
                </div>
                <div className="side-link">
                    <img src={profile_Icon} alt="" /> <p>Acountname</p>
                </div>
                <div className="side-link">
                    <img src={profile_Icon} alt="" /> <p>Acountname</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;