import React from "react";

import { Link } from "react-router-dom";
import { fetchData, setSearchBar, setURL } from "../redux/actions";
import searchLogo from "../imgs/icons8searchbar.png";
import {useSelector} from 'react-redux'
import {useSearch} from './hooks/useSearch'
import useNavbar  from './hooks/useNavbar'

  function Navbar(props) {
    const searchBar = useSelector((state) => state.navbarReducer.searchBar)
    // const url = useSelector((state) => state.navbarReducer.url)
    const tab = useSelector((state) => state.navbarReducer.currentTab) 
    const {onSearchTextChange, showBackBtn} = useSearch(setSearchBar, false)
    useNavbar(setURL,searchBar,tab)
    
    const  tvShowBtnClass =() => {
      return props.tab == "tvShows"
        ? "btn rightBtn activeBtn"
        : "btn rightBtn inactiveBtn";
    }
  
    const moviesBtnClass = ()=> {
      return props.tab == "movies"
        ? "btn leftBtn activeBtn"
        : "btn leftBtn inactiveBtn";
    
  }
      
    return (
      <div className="header">
        <div className="PageSwitch">
          <Link to="/movies">
            <button className={moviesBtnClass()}>Movies</button>
          </Link>
          <Link to="/">
            <button className={tvShowBtnClass()}>TV Shows</button>
            <br />
          </Link>
        </div>
        <div className="searhhBoxDiv">
          <input
            type="text"
            value={searchBar}
            onChange={(e)=>onSearchTextChange(e.target.value)}
            placeholder="Enter Search Term"
          />
          <img src={searchLogo} />
        </div>
      </div>
    );
}



const mapStateToProps = (state) => {
  return {
    topMoviesURL: state.moviesReducer.topMoviesURL,
    topTVShowsURL: state.tvShowsReducer.topTVShowsURL,
    searchMoviesURL: state.moviesReducer.searchMoviesURL,
    searchTVShowsURL: state.tvShowsReducer.searchTVShowsURL,
    searchBar: state.navbarReducer.searchBar,
    tab: state.navbarReducer.currentTab,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchData(url)),
    setSearchBar: (val) => dispatch(setSearchBar(val)),
  };
};

export default Navbar
