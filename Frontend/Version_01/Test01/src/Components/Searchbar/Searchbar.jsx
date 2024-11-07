

import search_Icon from '../../assets/Icons/search.png'
import './Searchbar_module.css'
// import "../../"

function Searchbar(){

    return(
        <div className='nav-middle flex-div'>
            <div className="search-box flex-div">
            <input className='nav-Search-Input' type = 'search' placeholder='Search'/>
            <img className='nav-Search' src= {search_Icon} alt=''/>
            </div>
        </div>
    );
}

export default Searchbar;