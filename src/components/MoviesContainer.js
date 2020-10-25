import React, { useEffect } from "react";
import Slot from "./Slot";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, setTab } from "../redux/actions";
import useContentContainer from "./hooks/useContentContainer"

function MoviesContainer(props){

  const url = useSelector((state) => state.navbarReducer.url)
  useContentContainer(fetchData,url) 
  // useEffect(()=>{
  //   const fetch = async () => {
  //     await dispatch(fetchData(url))
  //   };
 
  //   fetch();
  // },[url])
  const movies = useSelector((state) => state.moviesReducer.movies)
    return (
      <div className="moviesOrTVShowsContainer">
        {movies.map((movie) => (
          <Slot
            key={movie.id}
            typeOfContent="movies"
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            description={movie.overview}
            year={movie.release_date}
          />
        ))}
      </div>
    );
  
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer.movies,
    topMoviesURL: state.moviesReducer.topMoviesURL,
    searchMoviesURL: state.moviesReducer.searchMoviesURL,
    tab: state.navbarReducer.currentTab,
    searchBar: state.navbarReducer.searchBar,
    url: state.navbarReducer.url
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchData(url)),
    setTab: (tab) => dispatch(setTab(tab)),
  };
};

export default MoviesContainer
