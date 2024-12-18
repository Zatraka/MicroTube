
//import React from 'react'
import home from '../../assets/Icons/home.png'
import aboList from '../../assets/Icons/folders.png'
import myYoutube from '../../assets/Icons/user-gear.png'
import history from '../../assets/Icons/time-past.png'



const Sidebar = () => {
    return(
        <div className="Sidebar">
            <div className="sortcut-links"> {/**/}
                <div className="side-link">
                    <img src={home} alt ="icon 1"/><p>Startseite</p>
                </div>
                <div className="side-link">
                    <img src={aboList} alt =" "/><p>Abos</p>
                </div>
                <div className="side-link">
                <img src={myYoutube} alt =" "/><p>Mein Youtube</p>
                </div>
                <div className="side-link">
                    <img src={history} alt =" "/><p>Verlauf</p>
                </div>
                <div className="side-link">
                    <img src={home} alt =" "/><p>Home</p>
                </div>
                <div className="side-link">
                <img src={home} alt =" "/><p>Home</p>
                </div>

            </div>
        </div>
    );
}

export default Sidebar;