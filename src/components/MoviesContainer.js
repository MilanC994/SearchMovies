import React, { useEffect } from "react";
import Slot from "./Slot";
import { useSelector } from "react-redux";
import { fetchData, setTab } from "../redux/actions";
import useContentContainer from "./hooks/useContentContainer"

function MoviesContainer(props){
  const tab = 'movies'
  const url = useSelector((state) => state.navbarReducer.url)
  useContentContainer(fetchData,url,setTab,tab) 
  // useEffect(()=>{
  //   const fetch = async () => {
  //     await dispatch(fetchData(url))
  //   };
 
  //   fetch();
  // },[url])
  const movies = useSelector((state) => state.dataReducer.data)
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

export default MoviesContainer
