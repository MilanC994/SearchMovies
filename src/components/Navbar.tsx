import React from "react";
import { Link } from "react-router-dom";
import {useSearch} from './hooks/useSearch'
import useNavbar  from './hooks/useNavbar'

const searchLogo = require('../imgs/icons8searchbar.png')

  function Navbar() {
  
    const {onSearchTextChange, showBackBtn} = useSearch()
    const { searchTerm, tab } = useNavbar()
  
    const  tvShowBtnClass =() => {
      return tab === "tv-shows"
        ? "btn rightBtn activeBtn"
        : "btn rightBtn inactiveBtn";
    }
  
    const moviesBtnClass = ()=> {
      return tab === "movies"
        ? "btn leftBtn activeBtn"
        : "btn leftBtn inactiveBtn";
    
  }
      
    return (
      <div className="header">
        <div className="PageSwitch">
          <Link to="/movies">
            <button className={moviesBtnClass()}>Movies</button>
          </Link>
          <Link to="/tv-shows">
            <button className={tvShowBtnClass()}>TV Shows</button>
            <br />
          </Link>
        </div>
        <div className="searhhBoxDiv">
          <input
            type="text"
            className="navbarSearch"
            value={searchTerm}
            onChange={(e)=>onSearchTextChange(e.target.value)}
            placeholder="Enter Search Term"
          />
          <img src={searchLogo} />
        </div>
      </div>
    );
}

export default Navbar
