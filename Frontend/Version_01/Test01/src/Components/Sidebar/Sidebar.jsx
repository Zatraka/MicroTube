import home from '../../assets/Icons/home.png'

function Sidebar(){

    return(
        <div className="Sidebar">
            <div className="sortcut-links"> {/**/}
                <div className="side-link">
                    <img src={home} alt =" "/><p>Startseite</p>
                </div>
                <div className="side-link">
                    <img src={home} alt =" "/><p>Abos</p>
                </div>
                <div className="side-link">
                <img src={home} alt =" "/><p>Mein Youtube</p>
                </div>
                <div className="side-link">
                    <img src={home} alt =" "/><p>Verlauf</p>
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